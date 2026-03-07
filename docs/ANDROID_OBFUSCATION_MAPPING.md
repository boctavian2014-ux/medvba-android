# Android: ofuscare R8/ProGuard și mapping.txt

## Ce e configurat

- **Ofuscare:** în `android/gradle.properties` este setat `android.enableMinifyInReleaseBuilds=true`, deci pentru **release** R8 (minify + ofuscare) este activ.
- **mapping.txt:** la fiecare build release, R8 generează automat fișierul de mapping.

## Unde se generează mapping.txt

- **Build local:**  
  `android/app/build/outputs/mapping/release/mapping.txt`

- **EAS Build:** fișierul este generat pe server în același path. Pentru a-l descărca ca artifact, poți adăuga în `eas.json` la profilul de build:

```json
"build": {
  "production": {
    "channel": "production",
    "android": {
      "buildType": "app-bundle",
      "buildArtifactPaths": ["android/app/build/outputs/mapping/release/mapping.txt"]
    }
  }
}
```

### Unde găsești mapping.txt după build (Expo)

**Ce spune documentația Expo:** când `buildArtifactPaths` este setat, EAS încarcă artifactele într-un bucket S3 privat. **Documentația nu spune** unde sau cum apar aceste artifacte în interfața paginii de detaliu a build-ului (dacă există un link separat sau doar arhiva principală).

**Opțiuni practice:**

1. **URL din terminal după build**  
   Când build-ul se termină, EAS CLI poate afișa un URL de tip:
   ```text
   https://expo.dev/artifacts/eas/[build-id].tar.gz
   ```
   Descarcă acest `.tar.gz`, deschide-l local și caută în interior **mapping.txt** (ex. în `android/app/build/outputs/mapping/release/mapping.txt`). Fișierele din `buildArtifactPaths` sunt incluse în această arhivă.

2. **Pagină build pe expo.dev**  
   **expo.dev** → **Projects** → **medvba** → **Builds** → click pe build-ul Android. Pe pagină poate exista un singur link de download (arhiva care conține și AAB, și fișierele din `buildArtifactPaths`). Descarcă acel link, dezarhivează și caută **mapping.txt** în interior.

3. **EAS CLI (build id)**  
   Dacă ai **build ID**-ul (ex. din listă sau din URL):
   ```bash
   eas build:view [BUILD_ID]
   ```
   Verifică dacă în output apare vreun URL de artifact; unele versiuni îl pot afișa acolo.

4. **Build nou**  
   mapping.txt există doar la build-uri făcute **după** ce ai adăugat `buildArtifactPaths` în eas.json. La build-uri mai vechi nu este disponibil.

**Dacă tot nu găsești și vrei să îi scrii suportului Expo**, poți folosi ceva de genul:

> I use `buildArtifactPaths: ["android/app/build/outputs/mapping/release/mapping.txt"]` in eas.json. The docs say these artifacts are uploaded to a private S3 bucket, but they don’t say where they appear in the EAS build detail page UI. Where can I download the buildArtifactPaths artifacts (e.g. mapping.txt) for a completed Android build—inside the main build artifact .tar.gz, or as a separate download on the build page?

### Cum încarci mapping.txt în Google Play Console

1. După **EAS Build** → [expo.dev](https://expo.dev) → **Projects** → **medvba** → **Builds** → click pe build-ul Android (production).
2. La **Artifacts** (sau **Build artifacts**) descarcă **mapping.txt** (dacă build-ul a rulat cu succes, R8 l-a generat și EAS l-a salvat).
3. În **Google Play Console** → aplicația ta → **Release** → **Production** (sau track-ul unde ai încărcat AAB-ul).
4. La release-ul respectiv (ex. Release 19) → **App bundle explorer** sau **Release details** → caută **Deobfuscation file** / **Upload deobfuscation file** / **Native debug symbols** (denumirea poate varia).
5. Încarcă fișierul **mapping.txt** descărcat de pe EAS. Play Console îl asociază cu AAB-ul acelui release; crash-urile și ANR-urile vor fi raportate deobfuscate.

Îl poți folosi și pentru **Sentry:** upload la Release → Deobfuscation / Android mapping.

## ProGuard rules

Regulile specifice proiectului sunt în `android/app/proguard-rules.pro`. Dacă la release apar crash-uri sau erori legate de clase tăiate/redenumite, adaugă acolo reguli `-keep` pentru clasele respective.
