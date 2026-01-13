# Supabase Setup Guide

Aplicația a fost refactorizată să folosească **100% Supabase**, eliminând complet backend-ul local Hono/tRPC.

## 1. Configurare Tabele Supabase

### Tabela `study_rooms`

```sql
CREATE TABLE study_rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  host_id TEXT NOT NULL,
  host_name TEXT NOT NULL,
  host_avatar TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  max_participants INTEGER DEFAULT 20,
  participants INTEGER DEFAULT 0,
  is_live BOOLEAN DEFAULT false,
  zoom_meeting_id TEXT,
  join_url TEXT,
  start_url TEXT,
  zoom_status TEXT DEFAULT 'IDLE' CHECK (zoom_status IN ('IDLE', 'LIVE', 'ENDED')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE study_rooms ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read
CREATE POLICY "Anyone can read study rooms" ON study_rooms
  FOR SELECT USING (true);

-- Policy: Authenticated users can insert
CREATE POLICY "Authenticated users can insert study rooms" ON study_rooms
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy: Host can update their own room
CREATE POLICY "Host can update their room" ON study_rooms
  FOR UPDATE USING (host_id = auth.uid()::text);
```

### Tabela `study_sessions`

```sql
CREATE TABLE study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES study_rooms(id),
  room_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_for TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER NOT NULL,
  host_id TEXT NOT NULL,
  host_name TEXT NOT NULL,
  host_avatar TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  status TEXT DEFAULT 'SCHEDULED' CHECK (status IN ('SCHEDULED', 'LIVE', 'ENDED')),
  zoom_meeting_id TEXT,
  join_url TEXT,
  start_url TEXT,
  attendees TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read
CREATE POLICY "Anyone can read study sessions" ON study_sessions
  FOR SELECT USING (true);

-- Policy: Authenticated users can insert
CREATE POLICY "Authenticated users can insert study sessions" ON study_sessions
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy: Host can update their own session
CREATE POLICY "Host can update their session" ON study_sessions
  FOR UPDATE USING (host_id = auth.uid()::text);
```

## 2. Configurare Supabase Edge Functions

### Instalare Supabase CLI

```bash
npm install -g supabase
```

### Login

```bash
supabase login
```

### Link Project

```bash
supabase link --project-ref YOUR_PROJECT_REF
```

### Deploy Edge Functions

```bash
# Deploy zoom-create-meeting function
supabase functions deploy zoom-create-meeting

# Deploy zoom-end-meeting function
supabase functions deploy zoom-end-meeting
```

### Setare Secrets pentru Zoom

```bash
supabase secrets set ZOOM_ACCOUNT_ID=9pgw_CJmQUa1itbHRaH37g
supabase secrets set ZOOM_CLIENT_ID=X5F8cmXVSMWqKoWGz49sew
supabase secrets set ZOOM_CLIENT_SECRET=gRD3EnX5W6ZmpXNMIRG3V4ohELRtN6FC
```

## 3. Verificare Conexiune

După ce ai configurat tabelele și Edge Functions, aplicația va funcționa direct cu Supabase:

- **Study Rooms**: Se creează/citesc direct din tabelul `study_rooms`
- **Sessions**: Se creează/citesc direct din tabelul `study_sessions`
- **Zoom Integration**: Apeluri securizate prin Edge Functions

## 4. Testare

1. Deschide aplicația pe telefon
2. Accesează tab-ul "Social"
3. Creează un Study Room
4. Pornește Zoom (apelează Edge Function)
5. Verifică că meeting-ul Zoom este creat corect

## Note Importante

- Edge Functions ruleaza pe serverele Supabase (Deno runtime)
- Secrets (Zoom credentials) sunt securizate pe server
- Nu mai este nevoie de backend local
- Aplicația funcționează 100% cu Supabase
