/**
 * Afișează numele exacte ale AVD-urilor pentru Detox (DETOX_AVD_NAME).
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { resolveAndroidSdk, applyAndroidSdkToProcess } = require('./android-sdk-helpers');

function printSdkHelp() {
  console.error(
    [
      'SDK negăsit. Setează:',
      '  $env:ANDROID_HOME = "$env:LOCALAPPDATA\\Android\\Sdk"',
      '  $env:ANDROID_SDK_ROOT = $env:ANDROID_HOME',
    ].join('\n')
  );
}

const sdk = resolveAndroidSdk();
if (!sdk) {
  printSdkHelp();
  process.exit(1);
}
applyAndroidSdkToProcess(sdk);
console.info('[e2e] Android SDK:', sdk);

const win = path.join(sdk, 'emulator', 'emulator.exe');
const nix = path.join(sdk, 'emulator', 'emulator');
const emu = fs.existsSync(win) ? win : nix;
if (!fs.existsSync(emu)) {
  console.error(
    'Pachetul «Android Emulator» lipsește din SDK.\n' +
      'Android Studio → Settings → Android SDK → SDK Tools → bifă «Android Emulator» → Apply.'
  );
  process.exit(1);
}

let out = '';
try {
  out = execFileSync(emu, ['-list-avds'], { encoding: 'utf8' }).trim();
} catch (e) {
  console.error('Eroare la -list-avds:', e.message);
  process.exit(1);
}

console.log('\n=== AVD-uri (copiază EXACT un nume pe linie) ===\n');
if (!out) {
  console.log('(niciun AVD — creează unul: Android Studio → Device Manager → Create device)\n');
} else {
  console.log(out + '\n');
}

console.log('PowerShell exemplu:');
console.log('  $env:DETOX_AVD_NAME = "Pixel_9"   # înlocuiește cu un nume de mai sus');
console.log('  npm run e2e:test:android\n');
console.log('Fără emulator: telefon USB + depanare, apoi: npm run e2e:test:android:device\n');
