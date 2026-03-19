/**
 * Config plugin to disable DiscouragedApi lint for Android build.
 * Android 15+ deprecates Window.setStatusBarColor, setNavigationBarColor,
 * getStatusBarColor, getNavigationBarColor, and LAYOUT_IN_DISPLAY_CUTOUT_MODE_*.
 * These are still used inside React Native (StatusBarModule), react-native-screens
 * (WindowUtilKt.enableEdgeToEdge), and Expo. We disable the lint and skip
 * release lint (checkReleaseBuilds false) so these do not block or recur in builds.
 * We have edgeToEdgeEnabled: true in app.config; migration is pending in upstream.
 */
const { withAppBuildGradle } = require('expo/config-plugins');

function withAndroidLintSuppress(config) {
  return withAppBuildGradle(config, (config) => {
    const buildGradle = config.modResults.contents;
    const lintBlock = `
    lint {
        disable 'DiscouragedApi'
        abortOnError false
        checkReleaseBuilds false
    }
`;

    // If lint block exists, ensure abortOnError and checkReleaseBuilds are set so deprecated Window API warnings don't block release.
    if (buildGradle.includes("disable 'DiscouragedApi'")) {
      let updated = buildGradle;
      if (!updated.includes('abortOnError false')) {
        updated = updated.replace(
          /(lint \{\s*\n\s*disable 'DiscouragedApi')/,
          "$1\n        abortOnError false"
        );
      }
      if (!updated.includes('checkReleaseBuilds false')) {
        updated = updated.replace(
          /(abortOnError false)/,
          "$1\n        checkReleaseBuilds false"
        );
      }
      config.modResults.contents = updated;
      return config;
    }
    const pattern = /(    \}\n)(\}\n\n)(\/\/ Apply static values)/;
    const replacement = `$1${lintBlock}$2$3`;
    if (pattern.test(buildGradle)) {
      config.modResults.contents = buildGradle.replace(pattern, replacement);
    }
    return config;
  });
}

module.exports = withAndroidLintSuppress;
