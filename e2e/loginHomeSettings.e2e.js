/**
 * Detox E2E: login (optional) → tab Profile → Settings → back.
 *
 * Setup:
 * 1. npx expo prebuild --platform android
 * 2. Start emulator OR connect device (adb devices)
 * 3. Optional: set DETOX_AVD_NAME if auto-detect fails (emulator -list-avds)
 * 4. If the app opens on login: set DETOX_TEST_EMAIL and DETOX_TEST_PASSWORD
 *    (real Supabase test user; onboarding should already be done, or you stay on login after signup flow manually once).
 * 5. SDK: with-android-sdk setează ANDROID_* și PATH. Liste AVD: npm run e2e:list-avds
 *    DETOX_AVD_NAME trebuie să fie EXACT un nume din listă (nu textul din tutorial „ExactNameFromListAvds”).
 *    Fără AVD: telefon USB + „adb devices”, apoi npm run e2e:test:android:device
 * 6. Terminal A: npx expo start  (Metro 8081)
 * 7. Terminal B: npm run e2e:android (sau build + test separat)
 */

const DEFAULT_HOME_LABEL = 'Home';

describe('Login → Home → Settings → back', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('completes navigation flow', async () => {
    let onLogin = false;
    try {
      await waitFor(element(by.id('loginEmail')))
        .toBeVisible()
        .withTimeout(8000);
      onLogin = true;
    } catch {
      onLogin = false;
    }

    if (onLogin) {
      const email = process.env.DETOX_TEST_EMAIL;
      const password = process.env.DETOX_TEST_PASSWORD;
      if (!email || !password) {
        throw new Error(
          'Login screen visible: set DETOX_TEST_EMAIL and DETOX_TEST_PASSWORD for this test.'
        );
      }
      await element(by.id('loginEmail')).replaceText(email);
      await element(by.id('loginPassword')).replaceText(password);
      await element(by.id('loginSubmit')).tap();
    }

    await waitFor(element(by.label(DEFAULT_HOME_LABEL)))
      .toBeVisible()
      .withTimeout(120000);

    await element(by.label('Profile')).atIndex(0).tap();

    await waitFor(element(by.id('profileOpenSettings')))
      .toBeVisible()
      .withTimeout(15000);
    await element(by.id('profileOpenSettings')).tap();

    await waitFor(element(by.id('settingsScreen')))
      .toBeVisible()
      .withTimeout(15000);

    await element(by.id('settingsBack')).tap();

    await waitFor(element(by.id('profileOpenSettings')))
      .toBeVisible()
      .withTimeout(15000);
  });
});
