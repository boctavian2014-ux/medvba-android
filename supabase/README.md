# MEDVBA - Configurare Supabase

Acest folder conține fișierele necesare pentru configurarea bazei de date Supabase.

## Structura fișierelor

```
supabase/
├── schema.sql          # Schema tabelelor + capitole
├── questions-data.sql  # Toate cele 2000 de întrebări (generat automat)
└── README.md          # Acest fișier
```

## Pași de configurare

### 1. Creează proiectul Supabase

1. Mergi la [supabase.com](https://supabase.com)
2. Creează un proiect nou
3. Notează **URL-ul** și **anon key** din Settings > API

### 2. Configurează variabilele de mediu

Creează un fișier `.env` în root-ul proiectului:

```env
EXPO_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIs... # Pentru migrare
```

### 3. Creează schema bazei de date

1. Deschide **Supabase Dashboard** > **SQL Editor**
2. Creează o nouă interogare
3. Copiază conținutul din `schema.sql`
4. Rulează interogarea

Aceasta va crea:
- Tabela `chapters` (20 capitole)
- Tabela `questions` (pentru 2000 întrebări)
- Tabela `user_progress` (progres utilizator)
- Tabela `quiz_sessions` (sesiuni quiz)
- Indecși pentru performanță
- Politici RLS (Row Level Security)
- View-uri pentru statistici

### 4. Inserează întrebările

#### Opțiunea A: Script automat (recomandat)

```bash
# Din root-ul proiectului
bun run scripts/migrate-questions-to-supabase.ts

# Sau cu npx
npx ts-node scripts/migrate-questions-to-supabase.ts

# Pentru a șterge și reinsera toate întrebările
bun run scripts/migrate-questions-to-supabase.ts --clear
```

#### Opțiunea B: SQL direct

1. Generează fișierul SQL:
```bash
bun run scripts/generate-questions-sql.ts
```

2. Deschide **Supabase Dashboard** > **SQL Editor**
3. Copiază conținutul din `questions-data.sql`
4. Rulează interogarea

⚠️ **Notă**: Fișierul SQL este foarte mare (~2000 INSERT-uri). Poate dura câteva minute.

## Tabele

### `chapters`
| Coloană | Tip | Descriere |
|---------|-----|-----------|
| id | TEXT | ID unic (ex: 'cardiovascular') |
| name | TEXT | Nume în română |
| name_en | TEXT | Nume în engleză |
| module_id | TEXT | ID modul (ex: 'med-admission') |
| order_index | INTEGER | Ordinea afișării |

### `questions`
| Coloană | Tip | Descriere |
|---------|-----|-----------|
| id | TEXT | ID unic întrebare |
| category | TEXT | Categoria (ex: 'med-admission-barrons') |
| difficulty | TEXT | 'easy' / 'medium' / 'hard' |
| question | TEXT | Întrebarea în engleză |
| question_ro | TEXT | Întrebarea în română |
| options | JSONB | Array opțiuni EN |
| options_ro | JSONB | Array opțiuni RO |
| correct_answer | INTEGER | Index răspuns corect (0-4) |
| explanation | TEXT | Explicație EN |
| explanation_ro | TEXT | Explicație RO |
| chapter_id | TEXT | FK la chapters.id |
| set_number | INTEGER | Numărul setului (1-10) |

### `user_progress`
| Coloană | Tip | Descriere |
|---------|-----|-----------|
| user_id | UUID | FK la auth.users |
| question_id | TEXT | FK la questions.id |
| answered_correctly | BOOLEAN | Răspuns corect? |
| time_spent_seconds | INTEGER | Timp petrecut |

### `quiz_sessions`
| Coloană | Tip | Descriere |
|---------|-----|-----------|
| user_id | UUID | FK la auth.users |
| chapter_id | TEXT | Capitol selectat |
| total_questions | INTEGER | Total întrebări |
| correct_answers | INTEGER | Răspunsuri corecte |
| completed | BOOLEAN | Sesiune completă? |

## Verificare

După import, verifică datele:

```sql
-- Număr total întrebări
SELECT COUNT(*) FROM questions;
-- Ar trebui să afișeze: 2000

-- Întrebări per capitol
SELECT chapter_id, COUNT(*) as count
FROM questions
GROUP BY chapter_id
ORDER BY chapter_id;
-- Ar trebui 100 per capitol

-- Întrebări per dificultate
SELECT difficulty, COUNT(*) as count
FROM questions
GROUP BY difficulty;
```

## Troubleshooting

### Eroare: "relation does not exist"
Asigură-te că ai rulat `schema.sql` mai întâi.

### Eroare: "permission denied"
Verifică că folosești Service Role Key (nu anon key) pentru scriptul de migrare.

### Întrebări duplicate
Scriptul folosește `ON CONFLICT ... DO UPDATE`, deci poți rula de mai multe ori în siguranță.

### Performanță lentă
Fișierul SQL folosește `BEGIN...COMMIT` pentru a grupa toate INSERT-urile într-o singură tranzacție.
