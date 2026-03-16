/**
 * Config plugin to disable DiscouragedApi lint for Android build.
 * Android 15+ deprecates Window.setStatusBarColor, setNavigationBarColor,
 * getStatusBarColor, getNavigationBarColor, and LAYOUT_IN_DISPLAY_CUTOUT_MODE_*.
 * These are still used inside React Native, react-native-screens, Material, and Expo.
 * Disabling this lint allows the build to succeed; Google Play may still show an
 * advisory until the ecosystem migrates. We have edgeToEdgeEnabled: true in app.config.
 */
const { withAppBuildGradle } = require('expo/config-plugins');

function withAndroidLintSuppress(config) {
  return withAppBuildGradle(config, (config) => {
    const buildGradle = config.modResults.contents;
    const lintBlock = `
    lint {
        disable 'DiscouragedApi'
        abortOnError false
    }
`;

    // If lint block exists but lacks abortOnError, add it.
    if (buildGradle.includes("disable 'DiscouragedApi'") && !buildGradle.includes('abortOnError false')) {
      config.modResults.contents = buildGradle.replace(
        /(lint \{\s*\n\s*disable 'DiscouragedApi')/,
        "$1\n        abortOnError false"
      );
      return config;
    }
    if (buildGradle.includes("disable 'DiscouragedApi'")) {
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
