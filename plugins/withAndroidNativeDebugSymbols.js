/**
 * Emit native debug symbols for release (NDK) so Play Console can symbolicate
 * native crashes. Produces native-debug-symbols.zip alongside the AAB.
 * @see https://developer.android.com/build/include-native-symbols
 */
const { withAppBuildGradle } = require('expo/config-plugins');

function withAndroidNativeDebugSymbols(config) {
  return withAppBuildGradle(config, (cfg) => {
    let contents = cfg.modResults.contents;
    if (contents.includes('debugSymbolLevel')) {
      return cfg;
    }

    const needle = /(\n        versionName "[^"]+"\n)(\n        buildConfigField)/;
    if (!needle.test(contents)) {
      return cfg;
    }

    cfg.modResults.contents = contents.replace(
      needle,
      `$1\n        ndk {\n            debugSymbolLevel 'SYMBOL_TABLE'\n        }$2`
    );
    return cfg;
  });
}

module.exports = withAndroidNativeDebugSymbols;
