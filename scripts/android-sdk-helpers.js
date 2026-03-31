/**
 * Rezolvă Android SDK și actualizează process.env (ANDROID_*, PATH) pentru adb/emulator.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

const PROJECT_ROOT = path.join(__dirname, '..');

function sdkFromLocalProperties() {
  const p = path.join(PROJECT_ROOT, 'android', 'local.properties');
  if (!fs.existsSync(p)) return null;
  const text = fs.readFileSync(p, 'utf8');
  const m = text.match(/^\s*sdk\.dir\s*=\s*(.+)\s*$/m);
  if (!m) return null;
  let dir = m[1].trim();
  if ((dir.startsWith('"') && dir.endsWith('"')) || (dir.startsWith("'") && dir.endsWith("'"))) {
    dir = dir.slice(1, -1);
  }
  dir = dir.replace(/\\/g, path.sep);
  return fs.existsSync(dir) ? dir : null;
}

function resolveAndroidSdk() {
  const candidates = [
    process.env.ANDROID_SDK_ROOT,
    process.env.ANDROID_HOME,
    sdkFromLocalProperties(),
    path.join(process.env.LOCALAPPDATA || '', 'Android', 'Sdk'),
    path.join(os.homedir(), 'Library', 'Android', 'sdk'),
  ].filter(Boolean);

  function hasAdb(root) {
    if (!root) return false;
    const win = path.join(root, 'platform-tools', 'adb.exe');
    const nix = path.join(root, 'platform-tools', 'adb');
    return fs.existsSync(win) || fs.existsSync(nix);
  }

  for (const c of candidates) {
    if (hasAdb(c)) return c;
  }
  for (const c of candidates) {
    if (c && fs.existsSync(c)) return c;
  }
  return null;
}

/**
 * @param {string} sdk
 * @returns {string[]} path segments prepended
 */
function applyAndroidSdkToProcess(sdk) {
  process.env.ANDROID_SDK_ROOT = sdk;
  process.env.ANDROID_HOME = sdk;

  const emulatorDir = path.join(sdk, 'emulator');
  const platformTools = path.join(sdk, 'platform-tools');
  const pathBits = [emulatorDir, platformTools].filter((dir) => fs.existsSync(dir));
  if (pathBits.length) {
    process.env.PATH = pathBits.join(path.delimiter) + path.delimiter + (process.env.PATH || '');
  }
  return pathBits;
}

module.exports = { resolveAndroidSdk, applyAndroidSdkToProcess, PROJECT_ROOT };
