# Variabile pe Railway (backend)

Backend-ul (Hono + tRPC) rulează pe Railway. Iată cum verifici și ce variabile trebuie setate.

---

## Cum verifici variabilele pe Railway

### Din browser (Railway Dashboard)
1. Mergi pe **[railway.app](https://railway.app)** și intră în cont.
2. Deschide **proiectul** în care e deployat MEDVBA (backend).
3. Click pe **serviciul** (service) care rulează backend-ul.
4. Tab **Variables** (sau **Settings** → **Variables**).
5. Acolo vezi toate variabilele setate; poți edita sau adăuga.

### Din terminal (Railway CLI)
```bash
# Instalare CLI (dacă nu e instalat)
npm install -g @railway/cli

# Login
railway login

# Legare proiect (din root-ul repo-ului)
railway link

# Listare variabile (numele variabilelor, nu valorile sensibile)
railway variables
```

---

## Ce variabile trebuie să fie setate

| Variabilă | Obligatoriu | Descriere |
|-----------|-------------|-----------|
| **PORT** | Setat de Railway | Railway îl setează automat la deploy. Nu e nevoie să îl pui tu. |
| **SUPABASE_URL** | Da | URL proiect Supabase: `https://xxxxx.supabase.co` |
| **SUPABASE_SERVICE_ROLE_KEY** | Da | Cheia **service_role** (secret) din Supabase → Settings → API. **Nu** folosi anon/publishable aici. |
| **CORS_ALLOWED_ORIGINS** | Opțional | Origini extra permise (separate prin virgulă), ex: `https://medvba.app,https://expo.dev` |

**Exemplu în Railway Dashboard (Variables):**
- `SUPABASE_URL` = `https://utbcxdtcznitejbhhquh.supabase.co`
- `SUPABASE_SERVICE_ROLE_KEY` = cheia **service_role** din Supabase (Settings → API)
- `CORS_ALLOWED_ORIGINS` = dacă app-ul sau un domeniu web trebuie să apeleze API-ul, ex: `https://tudomeniu.com`

---

## Verificare rapidă

- În **Railway Dashboard** → serviciul tău → **Variables**: trebuie să vezi cel puțin **SUPABASE_URL** și **SUPABASE_SERVICE_ROLE_KEY**.
- Dacă lipsește una, backend-ul poate da eroare la ștergere cont sau la alte operații care folosesc Supabase admin.

**Notă:** Pe Railway pui **SUPABASE_SERVICE_ROLE_KEY** (cheie secretă, doar pe server). În app (Expo) și EAS folosești **EXPO_PUBLIC_SUPABASE_ANON_KEY** (publishable), nu service_role.
