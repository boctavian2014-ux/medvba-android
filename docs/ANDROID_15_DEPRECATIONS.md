# Android 15 deprecation warnings (Play Console)

Google Play may show warnings about deprecated APIs used for **status bar**, **navigation bar**, and **edge-to-edge** display on Android 15. These come from dependencies, not from app code:

- React Native: `StatusBarModule`, `WindowUtilKt`
- react-native-screens: `ScreenWindowTraits`
- Expo (e.g. image picker): `ExpoCropImageUtils`
- Material components and AndroidX

**Action:** This is a known issue; fixes depend on upstream (Expo SDK, React Native, react-native-screens). Keep Expo and dependencies updated; the warning should clear once those libraries migrate to the new WindowInsets/edge-to-edge APIs.

No project-level code change is required unless a dependency documents a specific opt-in or config.
