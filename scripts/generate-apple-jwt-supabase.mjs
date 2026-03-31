#!/usr/bin/env node
/**
 * Generează JWT-ul (client secret) pentru Apple Sign In, folosit în Supabase:
 *   Dashboard → Authentication → Providers → Apple → Secret key
 *
 * Cerințe Apple Developer:
 *   1. App ID (ex. com.firma.medvba) cu capability „Sign In with Apple”
 *   2. Services ID MEDVBA iOS: com.devaieood.medvba.auth — în JWT, claim-ul `sub` = acest ID.
 *      Bundle app: com.devaieood.medvba (Xcode). În Supabase → Apple → Client IDs: ambele, virgulă.
 *   3. Key: Certificates, Identifiers & Profiles → Keys → „+” → Sign In with Apple →
 *      descarci AuthKey_XXXXXX.p8 o singură dată, notezi Key ID.
 *   4. Team ID: Membership sau pagina contului developer.
 *
 * Services ID → Configure → asociază App ID-ul principal; pentru web adaugi domeniile
 * și Return URLs (ex. https://<project-ref>.supabase.co/auth/v1/callback).
 *
 * Utilizare (PowerShell):
 *   $env:APPLE_TEAM_ID="AB12CD34EF"
 *   $env:APPLE_KEY_ID="XXXXXXXXXX"
 *   $env:APPLE_SERVICES_ID="com.devaieood.medvba.auth"
 *   PowerShell: pentru spații în cale, folosește ghilimele sau slash-uri:
 *   $env:APPLE_PRIVATE_KEY_PATH="C:/Users/you/Desktop/medvba stuff/AuthKey_XXX.p8"
 *   npm run apple:jwt-supabase
 *
 * Bash:
 *   APPLE_TEAM_ID=... APPLE_KEY_ID=... APPLE_SERVICES_ID=... APPLE_PRIVATE_KEY_PATH=./AuthKey.p8 node scripts/generate-apple-jwt-supabase.mjs
 *
 * Ieșire: un singur rând JWT — îl copiezi în Supabase (Secret key). Regenerează înainte
 * de expirare (max. ~6 luni per Apple); acest script folosește ~150 zile.
 */

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve, normalize, isAbsolute } from 'path';
import * as jose from 'jose';

const __dirname = dirname(fileURLToPath(import.meta.url));

function requireEnv(name) {
  const v = process.env[name]?.trim();
  if (!v) {
    console.error(`Lipsește variabila de mediu: ${name}`);
    process.exit(1);
  }
  return v;
}

/** Evită C:\\C:\\Users\\... pe Windows: cale absolută fără cwd; corectează dublarea accidentală C:\\. */
function resolvePrivateKeyPath(raw) {
  let p = raw.trim().replace(/^["']|["']$/g, '');
  p = normalize(p);
  // ex. lipire greșită: C:\ + C:\Users\...
  p = p.replace(/^([A-Za-z]:\\)\1+/i, '$1');
  if (isAbsolute(p)) return p;
  return resolve(process.cwd(), p);
}

const teamId = requireEnv('APPLE_TEAM_ID');
const keyId = requireEnv('APPLE_KEY_ID');
const servicesId = requireEnv('APPLE_SERVICES_ID');
const keyPath = resolvePrivateKeyPath(requireEnv('APPLE_PRIVATE_KEY_PATH'));

if (!existsSync(keyPath)) {
  console.error(`Fișier inexistent: ${keyPath}`);
  process.exit(1);
}

const privateKeyPem = readFileSync(keyPath, 'utf8');
const alg = 'ES256';

const privateKey = await jose.importPKCS8(privateKeyPem, alg);

/** Apple cere max ~6 luni; folosim 150 zile ca marjă. */
const jwt = await new jose.SignJWT({})
  .setProtectedHeader({ alg, kid: keyId, typ: 'JWT' })
  .setIssuer(teamId)
  .setAudience('https://appleid.apple.com')
  .setSubject(servicesId)
  .setIssuedAt()
  .setExpirationTime('150d')
  .sign(privateKey);

console.log('\n--- Copiază tot rândul de mai jos în Supabase → Apple → Secret key ---\n');
console.log(jwt);
console.log('\n--- În același ecran, la „Client IDs”, include bundle ID iOS + Services ID dacă folosești ambele. ---\n');
