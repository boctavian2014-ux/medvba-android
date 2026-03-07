# Mesajul Google Play despre API-uri depreciate (Android 15)

## Ce anunță Google

Google afișează un avertisment de tipul:

- *"One or more of the APIs you use or parameters that you set for edge-to-edge and window display have been deprecated in Android 15."*
- API-uri menționate: `Window.getStatusBarColor`, `setStatusBarColor`, `getNavigationBarColor`, `setNavigationBarColor`, `LAYOUT_IN_DISPLAY_CUTOUT_MODE_*`.
- Locații: `StatusBarModule`, `WindowUtilKt`, `ScreenWindowTraits`, `ExpoCropImageUtils`, `EdgeToEdgeUtils`, etc.

## De ce apare

Aceste apeluri **nu sunt în codul tău**, ci în **dependențe**:

- **React Native** – `StatusBarModule`, `WindowUtilKt`
- **react-native-screens** – `ScreenWindowTraits`
- **Material / BottomSheet** – `EdgeToEdgeUtils`, `SheetDialog`
- **Expo** – e.g. `ExpoCropImageUtils`

Pe Android 15 (API 35) aceste API-uri sunt depreciate; migrarea la noile API-uri (WindowInsets etc.) se face treptat în fiecare bibliotecă.

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
   - Poți răspunde la Google (dacă există câmp de notă) cu ceva de genul: *"Deprecated API usage is in third-party code (React Native, react-native-screens, Expo). We have edge-to-edge enabled and will update when the stack migrates."*

2. **Pe termen lung**
   - Actualizări periodice la **Expo** și **react-native-screens**; noile versiuni vor migra treptat de la API-urile depreciate.
   - După ce dependențele nu mai folosesc aceste API-uri, avertismentul din Play Console va dispărea.

## Rezumat

- Avertismentul vine din **biblioteci**, nu din codul aplicației.
- Proiectul are deja **edge-to-edge** activat și **lint** configurat pentru a nu bloca build-ul.
- Aplicația **poate fi publicată**; migrarea completă va veni odată cu actualizările de ecosistem (Expo / React Native / react-native-screens).
