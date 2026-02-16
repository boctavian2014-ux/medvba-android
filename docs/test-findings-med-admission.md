# Raport verificare funcționalitate – Medical School Entrance Exam

Verificare făcută din cod și date (login + quiz nu au fost rulate live în emulator). Lista nereguli găsite și remedii aplicate.

---

## 1. NEREGULI REMEDIATE

### 1.1 Traducere RO nefolosită la quiz (CRITIC)

**Problema:** La limba română, întrebările din categoria **med-admission-barrons** rămâneau în engleză.  
`translateQuestion()` din `lib/translateQuestion.ts` folosea doar `questionTranslations[question.id][language]`. Întrebările med-admission nu sunt în acel fișier; au `question_ro`, `options_ro`, `explanation_ro` direct pe obiect.

**Remediere:** În `lib/translateQuestion.ts` s-a adăugat ramura pentru `language === 'ro'`: dacă există `question_ro` și `options_ro` (cu aceeași lungime ca `options`), se folosesc acestea pentru text și răspunsuri; `correctAnswer` rămâne același (ordinea variantelor RO = ordinea EN). După traducere se aplică în continuare `shuffleQuestionOptions`, deci corectitudinea răspunsului este păstrată.

**Fișier:** `lib/translateQuestion.ts`

---

## 2. VERIFICĂRI EFECTUATE (OK)

### 2.1 Unicitate ID-uri

- Toate cele **200** de întrebări din `questions_med_admission.ts` au **ID-uri unice** (cardio1–10, blood1–10, resp1–10, metab1–10, dig1–10, neuro1–10, intro1–10, chem1–10, cell1–10, tiss1–10, integ1–10, skel1–10, musc1–10, sens1–10, endo1–10, lymph1–10, urin1–10, repM1–10, repF1–10, emb1–10).
- **Nicio repetare** de ID între seturi.

### 2.2 Structură date (validare script)

- Fiecare întrebare are:
  - `options.length === 5`
  - `options_ro.length === 5`
  - `correctAnswer` în intervalul **0–4**
  - `question_ro` și `explanation_ro` prezente și nevid.
- Script: `scripts/validate-med-admission-questions.ts` (rulează cu `npx tsx scripts/validate-med-admission-questions.ts`).

### 2.3 Corectitudinea răspunsului în sesiune

- În `quiz-session.tsx`, răspunsul corect se verifică cu `index === currentQuestion.correctAnswer` (după ce întrebările au fost deja traduse și amestecate cu `translateAndShuffleQuestions`).
- Ordinea variantelor este amestecată per întrebare, iar `correctAnswer` este actualizat în `shuffleQuestionOptions` pentru a corespunde noii ordini; logica este corectă pentru EN și RO.

### 2.4 Repetarea întrebărilor

- **În același quiz:** Nu se repetă – se selectează o listă fixă de întrebări, afișate secvențial.
- **Între quiz-uri:** Se folosesc `getSeenQuestionIds` și `markQuestionsAsSeen`. La selectare se preferă întrebări nevăzute; când nu mai sunt suficiente nevăzute, se completează cu întrebări deja văzute. Comportament conform design-ului actual.

---

## 3. CE NU A PUTUT FI TESTAT FĂRĂ APP RUNNING

- **Login real:** Autentificarea (email/parolă, Supabase) nu a fost testată live; doar fluxul din cod a fost verificat.
- **Quiz live:** Afișarea efectivă a întrebărilor, a variantelor și a explicatiilor în app (inclusiv pe dispozitiv/emulator) nu a fost rulată.
- **Limba:** Comportamentul la schimbarea limbii în timpul unei sesiuni nu a fost testat live (în cod, sesiunea folosește limba la încărcare).

---

## 4. RECOMANDĂRI

1. **Test manual:** După build, rulează un quiz **Medical School Entrance Exam** cu limba setată pe **Română** și verifică că întrebările, variantele și explicațiile apar în română și că răspunsul corect este recunoscut corect.
2. **Re-run validare:** După orice modificare în `questions_med_admission.ts`, rulează din nou:
   - `npx tsx scripts/validate-med-admission-questions.ts`
3. **Alte limbi (ex. es, pt):** Dacă se dorește suport pentru spaniolă/portugheză la med-admission, trebuie fie câmpuri `question_es`/`options_es` etc. pe `Question` și ramură în `translateQuestion`, fie intrări în `questionTranslations` pentru fiecare id.

---

## 5. REZUMAT

| Verificare                         | Status |
|------------------------------------|--------|
| Traducere RO la quiz med-admission | Remediat (cod) |
| ID-uri unice, 200 întrebări        | OK |
| 5 variante, correctAnswer 0–4      | OK |
| Corectitudine răspuns după shuffle | OK |
| Nicio repetare în același quiz     | OK |
| Login + quiz live                  | Netestat (necesită rulare app) |
