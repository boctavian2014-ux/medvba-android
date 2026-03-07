# Mesajul Google Play despre API-uri depreciate (Android 15)

## Ce anunță Google

Google afișează un avertisment de tipul:

- *"One or more of the APIs you use or parameters that you set for edge-to-edge and window display have been deprecated in Android 15."*
- API-uri menționate: `Window.getStatusBarColor`, `setStatusBarColor`, `getNavigationBarColor`, `setNavigationBarColor`, `LAYOUT_IN_DISPLAY_CUTOUT_MODE_*`.
- Locații: `StatusBarModule`, `WindowUtilKt`, `ScreenWindowTraits`, `ExpoCropImageUtils`, `EdgeToEdgeUtils`, etc.

## De ce apare

Aceste apeluri **nu sunt în codul tău**, ci în **dependențe**:

- **React Native** – `StatusBarModule`, `WindowUtilKt`
- **react-native-screens** – `ScreenWindowTraits` (poate fi redus instalând `react-native-edge-to-edge`, vezi mai jos)
- **Material / BottomSheet** – `EdgeToEdgeUtils`, `SheetDialog`
- **Expo** – e.g. `ExpoCropImageUtils`
- **AndroidX** – `EdgeToEdgeApi28`

Pe Android 15 (API 35) aceste API-uri sunt depreciate; migrarea la noile API-uri (WindowInsets etc.) se face treptat în fiecare bibliotecă.

## Ce poți instala pentru a reduce avertismentele

1. **`react-native-edge-to-edge`** (recomandat)  
   Pachetul este deja în `package.json`. Rulează `bun install` sau `npm install`.  
   - **react-native-screens** (4.16+) detectează dacă acest pachet este instalat și **nu mai folosește** `setStatusBarColor` / `setNavigationBarColor` pe ecrane, ceea ce elimină o parte din avertismente (ScreenWindowTraits).  
   - **Nu** adăuga plugin-ul în `app.config.ts` – Expo 54 folosește deja `edgeToEdgeEnabled` din Gradle; pachetul este doar pentru ca react-native-screens să recunoască edge-to-edge și să ocolească API-urile depreciate.

2. **Restul avertismentelor** (React Native core, Material, Expo image picker, AndroidX) **nu se pot elimina** prin instalare de pachete – codul este în bibliotecile respective. Dispăr definitiv doar când Expo / React Native / Material vor migra la noile API-uri (de obicei la upgrade-uri majore de SDK).

## Ce este deja configurat în proiect

1. **Edge-to-edge activat**  
   În `app.config.ts`: `android.edgeToEdgeEnabled: true` și `androidNavigationBar.enforceContrast: true`. Aplicația este configurată pentru edge-to-edge.

2. **Lint**  
   Plugin-ul `plugins/withAndroidLintSuppress.js` adaugă în `android/app/build.gradle`:
   - `lint { disable 'DiscouragedApi' }` – pentru a nu eșua build-ul din cauza acestor utilizări depreciate.
   - `abortOnError false` – ca eventualele alte avertismente de lint să nu oprească build-ul.

3. **Build**  
   Cu aceste setări, build-ul Android (inclusiv pentru release) trebuie să meargă normal.

## Poți publica aplicația?

Da. Mesajul este în general **informativ/advisory**. Aplicația poate fi publicată; nu este o respingere, ci un avertisment că unele dependențe folosesc încă API-uri depreciate.

## Ce poți face

1. **Acum**
   - Păstrezi configurația actuală (edge-to-edge + lint suppress).
   - Ai instalat **react-native-edge-to-edge** ca dependență (fără plugin în app.config) ca **react-native-screens** să nu mai apeleze API-urile depreciate pentru status/navigation bar pe ecrane. După `bun install` / `npm install`, fă un **build nou** (EAS sau `npx expo prebuild` + build local) ca modificările native să intre în aplicație.
   - Poți răspunde la Google (dacă există câmp de notă) cu ceva de genul: *"Deprecated API usage is in third-party code (React Native, react-native-screens, Expo). We have edge-to-edge enabled and react-native-edge-to-edge for screens; we will update when the rest of the stack migrates."*

2. **Pe termen lung**
   - Actualizări periodice la **Expo** și **react-native-screens**; noile versiuni vor migra treptat de la API-urile depreciate.
   - După ce dependențele nu mai folosesc aceste API-uri, avertismentul din Play Console va dispărea.

## Rezumat

- Avertismentul vine din **biblioteci**, nu din codul aplicației.
- Proiectul are deja **edge-to-edge** activat și **lint** configurat pentru a nu bloca build-ul.
- Aplicația **poate fi publicată**; migrarea completă va veni odată cu actualizările de ecosistem (Expo / React Native / react-native-screens).
