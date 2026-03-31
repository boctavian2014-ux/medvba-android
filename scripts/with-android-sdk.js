/**
 * Pornește o comandă cu ANDROID_SDK_ROOT / ANDROID_HOME și PATH pentru emulator/platform-tools.
 *
 * Usage:
 *   node scripts/with-android-sdk.js
 *     → npx detox test --configuration android.emu.debug
 *   node scripts/with-android-sdk.js npx detox test -c android.att.debug
 */
const { spawnSync } = require('child_process');
const path = require('path');
const { resolveAndroidSdk, applyAndroidSdkToProcess } = require('./android-sdk-helpers');

const sdk = resolveAndroidSdk();
if (!sdk) {
  console.error(
    [
      'Nu s-a găsit Android SDK.',
      '  $env:ANDROID_HOME = "$env:LOCALAPPDATA\\Android\\Sdk"',
      '  $env:ANDROID_SDK_ROOT = $env:ANDROID_HOME',
      '',
      'Listează AVD-uri: npm run e2e:list-avds',
    ].join('\n')
  );
  process.exit(1);
}

const pathBits = applyAndroidSdkToProcess(sdk);
console.info('[e2e] Android SDK:', sdk);
if (pathBits.length) {
  console.info('[e2e] Prepended to PATH:', pathBits.join(', '));
}

const defaultArgs = ['npx', 'detox', 'test', '--configuration', 'android.emu.debug'];
const cmdArgs = process.argv.slice(2).length ? process.argv.slice(2) : defaultArgs;
const isWin = process.platform === 'win32';

const result = spawnSync(cmdArgs[0], cmdArgs.slice(1), {
  stdio: 'inherit',
  env: process.env,
  shell: isWin,
  cwd: path.join(__dirname, '..'),
});

process.exit(result.status === null ? 1 : result.status);
