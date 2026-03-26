// Native implementation: only loaded on iOS/Android.
let appleAuth: any = null;

try {
  // @ts-ignore
  appleAuth = require('@invertase/react-native-apple-authentication').default;
} catch {
  // Keep as null if the module isn't available.
}

export { appleAuth };

