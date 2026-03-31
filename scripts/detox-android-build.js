/**
 * Cross-platform Gradle invocation for Detox (assembleDebug + androidTest).
 * Requires: `npx expo prebuild --platform android` (android/ folder present).
 */
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '..');
const androidDir = path.join(root, 'android');
if (!fs.existsSync(androidDir)) {
  console.error(
    'Missing android/. Run: npx expo prebuild --platform android\n' +
      'Then: npm run e2e:build:android'
  );
  process.exit(1);
}

const isWin = process.platform === 'win32';
const gradleWrapper = path.join(androidDir, isWin ? 'gradlew.bat' : 'gradlew');
if (!fs.existsSync(gradleWrapper)) {
  console.error('Gradle wrapper not found:', gradleWrapper);
  process.exit(1);
}

const args = ['assembleDebug', 'assembleAndroidTest', '-DtestBuildType=debug'];
const result = spawnSync(isWin ? 'gradlew.bat' : './gradlew', args, {
  cwd: androidDir,
  stdio: 'inherit',
  shell: isWin,
});

process.exit(result.status ?? 1);
