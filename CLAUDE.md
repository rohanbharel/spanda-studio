# CLAUDE.md — Project Brief
## SPANDA. & PRAVAH — TheAgency

> This file is the permanent brief for all Claude Code sessions on this project.
> Read this completely before writing a single line of code.
> Every decision must be consistent with what is documented here.

---

## PROJECT DOCUMENTS — REFERENCE FILES

SPANDA-STORY.md        — locked Our Story copy
PRAVAH-STORY.md        — locked PRAVAH story copy
EXTRACTION-FRAMEWORK.md — full framework, 12 layers, question bank
SPANDA-DECISIONS.md    — all locked decisions, master log

---

## WHO WE ARE

**SPANDA.** — Brand Strategy & Identity Consultancy
**PRAVAH** — AI-Powered Brand Activation Agency
**Holding company** — Pending numerology confirmation via Brahma Jyoti. Candidates: BINDU, ALEPH, CERNO, PRIMA, LOCUS.

The founding conviction: Brands are not built. They are extracted from the founder's deepest convictions. Our work is not creation. It is extraction.

**Positioning in the AI era:**
"When AI can generate any brand story in seconds, the only brand that matters is the one that's real."
"AI makes it. SPANDA makes it yours."

---

## CURRENT BUILD STATE — AS OF APRIL 28, 2026

### Build 1 — spanda.studio — LIVE
All pages live and confirmed functional. Deployed on Vercel. Auto-deploys on push to main.

### Build 2 — Brand OS Engine
Build after first client. Portal: hosted, queryable, Ask Your Brand via Claude API.
Technology: Next.js + Claude API (claude-sonnet-4-5) + Supabase

### Build 3 — pravah.agency — LIVE
Separate Vercel project. Full brand build after first client.

---

## PAGES — LIVE STATE

```
spanda.studio/              — Live. Confirmed.
spanda.studio/about         — Live. Confirmed.
spanda.studio/framework     — Live. Diagram live. Phase cards removed. One clean flow.
spanda.studio/audit         — Live. Form working. Resend connected. Emails received.
spanda.studio/score         — Live. Clarity only selectable. New fields added.
spanda.studio/pravah-story  — Live. Indexed.
spanda.studio/start         — Redirects to homepage.
pravah.agency               — Live. Separate Vercel project.
pravah.agency/pravah        — Live. Five USPs. Mailto linked.
/engine                     — Brand OS Engine (to build after first client)
```

---

## DESIGN SYSTEM — NON-NEGOTIABLE

### Colours
```
Ink:              #1C1814
Parchment:        #F5F0E8
Saffron:          #C97820   /* ONE use per design section, never more */
Deep Navy:        #0A2540   /* PRAVAH exclusive — never on SPANDA */
Stone:            #8C8277
Stone-accessible: #6B6259   /* text 13px and below — WCAG compliant */
Dust:             #D8D1C4
Linen:            #EDE8DF
```

Never use: pure black #000000, pure white #FFFFFF, any blue on SPANDA, gradients, multiple Saffron elements.

### Typography
```
Syne ExtraBold  — SPANDA. wordmark only.
Syne SemiBold   — PRAVAH wordmark only.
Caveat          — Headlines, pull quotes, conviction statements.
                  SENTENCE CASE ONLY. NEVER ALL CAPS. Hardcoded rule.
Epilogue        — All body copy, UI labels, navigation, captions.
Fraunces        — Philosophical long-form sections only.
```

Fonts are self-hosted. Do NOT import from Google Fonts CDN.
Font files: /public/fonts/
Preload: caveat-latin.woff2 + epilogue-latin.woff2
font-display: swap on Caveat and Epilogue.
Client names in reports — Epilogue bold. Never Caveat. Hardcoded rule.

### Logo and Asset Files — /public/logos/
```
spanda-light.png         — Ink colour → Parchment/light backgrounds
spanda-dark.png          — white → Ink/dark backgrounds
pravah-light.png         — Navy colour → Parchment/light backgrounds
pravah-dark.png          — white → Ink/dark backgrounds
Spanda Favicon ink.png   — active favicon, both sites
Spanda Favicon parch.png — reserved
OG Spanda.png            — 1200×630px (do not change dimensions)
OG Pravah.png            — 1200×630px (do not change dimensions)
```

Logo rules: Never resize below 56px. No effects, shadows, outlines. Never change Saffron period.
Navbar + Footer (Ink bg) → dark versions. Page body (Parchment) → light versions.

---

## DOMAIN ARCHITECTURE
```
spanda.studio      — primary, all content, all SEO
spanda.ink         — visiting card redirect → spanda.studio/start
spanda.agency      — silent redirect, never displayed
spanda.consulting  — silent redirect, never displayed
spanda.works       — silent redirect, never displayed
pravah.agency      — PRAVAH primary, separate Vercel project
```

---

## PRICING — LOCKED. DO NOT DEVIATE.

```
Brand Dimension Report    — Free. One dimension. AI-assisted. Next business day.
Brand Strength Audit      — ₹35,000. 7 days. 12-dimension report. Debrief included.
The Extraction Standard   — ₹8,00,000. Client location. Single full day. Delhi-NCR.
The Extraction Full       — ₹15,00,000 + venue/F&B at actuals. SPANDA-organised offsite.
The Extraction Intl.      — ₹25,00,000 + all travel at actuals. Inbound only. Not listed.
Brand OS Portal           — ₹15,000/month. Unlimited queries. Quarterly update.
PRAVAH Retainer           — ₹1,50,000/month. 10 briefs. 3 concepts each. 48hr delivery.
```

Extraction pricing never shown on website. Site says: "Investment discussed after Audit."

---

## TERMINOLOGY — LOCKED

```
The Extraction Framework™  — always with ™
The Extraction             — client-facing name. Not "Sprint."
Brand OS                   — the deliverable
Brand Strength Audit       — entry-point diagnostic. ₹35,000.
The Only You Test          — continuous filter throughout Distil
Capsules                   — Brief, Voice, Feedback, Notes
90-Day Signal Map          — post-delivery activation tool
Brand Compass              — one-page daily reference
Brand Signal Strength      — CLEAR / CLOUDED / STATIC / SILENT
POSM                       — point of sale materials (PRAVAH context)
```

Footer trademark line on all pages:
"The Extraction Framework™ is a proprietary methodology of SPANDA."

---

## SCROLL STRUCTURE — spanda.studio

```
Moment 1 — Hero (Ink)
"Your brand is already there."
CTA: Begin the Brand Audit →

Moment 2 — Problem (Parchment)
"Most branding is expensive decoration."

Moment 3 — Framework (Parchment)
The Extraction Framework™
Three phases. Nine proprietary tools.
Every output passes The Only You Test.

Moment 4 — Proof (Ink)
12-Dimension Brand Strength Scorecard
"Most brands discover their biggest gap 
isn't where they expected it."

Moment 5 — Entry Points (Parchment)
Brand Strength Audit ₹35,000 primary card
Score free + The Extraction secondary cards

Moment 6 — THE STATEMENT (Ink) ← NEW Friday
"When AI can generate any brand story 
in seconds, the only brand that matters 
is the one that's real."
Caveat. Full width. No CTA.
Last thing before they leave.

Moment 7 — Philosophy (Ink)
"It has not been expressed yet."
No CTA. Just conviction.
```

---

## BRAND OS ENGINE — ARCHITECTURE (Build 2)

### Tech stack
```
Frontend:  Next.js App Router (/app/engine — protected route)
Database:  Supabase — one Brand OS per client
AI:        Claude API — model: claude-sonnet-4-5
Auth:      Supabase Auth — brand manager only
Hosting:   Vercel
```

### Client Project Structure (Claude Projects)
```
One Claude Project per client:
— BRIEF.md      — what they do, competitors, claimed differentiator
— VOICE.md      — verbatim session language, words chosen and eliminated
— BRAND-OS.md   — the complete deliverable
— FEEDBACK.md   — client responses, revision notes
— NOTES.md      — moderator observations, session signals
```

### Brand OS JSON schema
```json
{
  "client_id": "uuid",
  "brand_name": "string",
  "soul": {
    "purpose": "string",
    "mission": "string",
    "vision": "string",
    "values": ["string"],
    "personality": ["string"],
    "voice_principles": ["string"]
  },
  "visual": {
    "primary_colours": [],
    "typography": {},
    "logo_rules": "string"
  },
  "voice": {
    "tone": "string",
    "examples_do": ["string"],
    "examples_dont": ["string"]
  },
  "positioning": "string",
  "taglines": {},
  "only_you_statement": "string",
  "consumer_truth": "string",
  "convergence_point": "string"
}
```

### Generation flow
1. Brand manager selects client
2. Brand OS loaded as system prompt
3. Campaign brief entered
4. Claude generates output
5. Brand manager reviews and approves
6. Approved output delivered to client

---

## CODING STANDARDS

### Stack
```
Framework:    Next.js 14+ (App Router)
Styling:      Tailwind CSS
Language:     TypeScript
Deployment:   Vercel (auto-deploy on push to main)
Database:     Supabase
Repo:         github.com/rohanbharel/spanda-studio
```

### Git workflow
```
cd /Users/rohanbharel/ClaudeProjects/TheAgency
git add .
git commit -m "description"
git push origin main
```
Two machine rule: push from working machine, pull on other before starting.
Never paste PAT in chat. Remote URL is pre-configured.

### Tailwind config
```javascript
colors: {
  ink: '#1C1814', parchment: '#F5F0E8', saffron: '#C97820',
  navy: '#0A2540', stone: '#8C8277', dust: '#D8D1C4', linen: '#EDE8DF',
}
fontFamily: {
  syne: ['Syne', 'sans-serif'], caveat: ['Caveat', 'cursive'],
  epilogue: ['Epilogue', 'sans-serif'], fraunces: ['Fraunces', 'serif'],
}
```

### File structure
```
/app
  /page.tsx              — homepage (live)
  /about/page.tsx        — Our Story (live)
  /audit/page.tsx        — Brand Audit form (live)
  /framework/page.tsx    — Framework diagram (live)
  /score/page.tsx        — Brand Dimension Score (live, Clarity only)
  /pravah-story/page.tsx — PRAVAH story (live)
  /start/page.tsx        — Redirects to homepage
  /pravah/page.tsx       — PRAVAH page (live)
  /engine                — Brand OS Engine (to build)
  layout.tsx             — Root layout, metadata, OG tags
/components /public/logos /public/fonts /lib
```

### OG and Metadata
```
metadataBase: new URL('https://spanda.studio')
SPANDA OG:  /logos/OG%20Spanda.png — width: 1200, height: 630
PRAVAH OG:  /logos/OG%20Pravah.png — width: 1200, height: 630
Favicon:    /logos/Spanda%20Favicon%20ink.png
```
If layout.tsx uses "use client" — split into layout.tsx (server) + ClientLayout.tsx (client).

### NEVER do
- Hardcode hex values in JSX
- Use Arial, Helvetica, system fonts
- Add drop shadows or gradients to logos
- More than one Saffron element per screen section
- Use stock photography
- Write inline styles
- Deploy without npm run build returning zero errors
- Use lorem ipsum
- Put metadata in client component
- Import fonts from Google Fonts CDN
- Use Caveat in all caps

---

## COPY STANDARDS

### Voice rules
1. Every sentence earns its place
2. Short sentences carry more weight
3. Active voice. Present tense.
4. Say the uncomfortable thing first

### Never say
"Leverage" / "synergy" / "holistic" / "ecosystem" / "passionate" / "tailored solutions"
"It has not been built yet." — use "expressed"

### Words that are ours
extraction, conviction, truth, rigour, found, founder

### Words eliminated
innovative, solutions, holistic, passionate, potential

---

## EMAILS
```
hello@spanda.studio   — live, Resend connected
hello@pravah.agency   — live, mailto linked on /pravah
```

---

## SESSION PROTOCOL

1. Read this file completely
2. Check /app and /components before building new
3. Ask if scope is unclear — never assume
4. Build mobile-first always
5. npm run build — zero errors before done
6. Do not deploy — Ron deploys via git push origin main

---

## OPEN TASKS — APRIL 28, 2026

```
Friday — ONE Claude Code session:
— Add Moment 6: new positioning statement
  Ink bg, Caveat, full width, no CTA
  Between Entry Points and Philosophy
— Dimension selector: non-Clarity shows
  modal with Audit CTA, not just a line
— /audit page: change 48 hours to 7 days
— OG metadata: correct width 1200 height 630

Wednesday:
— Brand Guidelines — 6 sections, Figma Free

Thursday:
— Pre-work document
— Audit report format

This Week:
— Pitch deck (Claude Design → Keynote)
— Brand OS template
— Resonance call structure
— Debrief structure
— Email signature
— Invoice template

Next Month:
— Trademark filing
— Holding company registration
— All outbound reports

After First Client:
— Figma Professional upgrade
— Brand OS Portal build
— PRAVAH full build
```

---

*Last updated: April 28, 2026*
*Source of truth for all development decisions.*
*Read SPANDA-DECISIONS.md for full decision log.*
