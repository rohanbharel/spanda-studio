# CLAUDE.md — Project Brief
## SPANDA. & PRAVAH — TheAgency

> This file is the permanent brief for all Claude Code and design sessions on this project.
> Read this completely before writing a single line of code or touching any design file.
> Every decision must be consistent with what is documented here.
> Last updated: May 5, 2026

---

## PROJECT DOCUMENTS — REFERENCE FILES

```
SPANDA-STORY.md          — locked Our Story copy
PRAVAH-STORY.md          — locked PRAVAH story copy
EXTRACTION-FRAMEWORK.md  — full framework, 12 layers, question bank
SPANDA-DECISIONS.md      — historical decision log (April 28 and before)
Spanda OS.md             — Brand OS full copy, 10-part document, locked
```

> NOTE: From May 2026 onwards, Notion is the live operational log.
> SPANDA-DECISIONS.md is the archived historical record.
> CLAUDE.md is the technical source of truth for all build sessions.

---

## WHO WE ARE

**SPANDA.** — Brand Strategy & Identity Consultancy
**PRAVAH** — AI-Powered Brand Activation Agency
**Holding company** — Pending numerology confirmation via Brahma Jyoti.
Candidates: BINDU, ALEPH, CERNO, PRIMA, LOCUS.

The founding conviction: Brands are not built. They are extracted.

**Positioning in the AI era:**
"When AI can generate any brand story in seconds, the only brand that matters is the one that's real."
"AI makes it. SPANDA makes it yours."

**Ron's three reasons SPANDA exists:**
1. Most brands — even large ones — lack true identity. They sell products not convictions.
   Customers feel deeply about them but nobody handhold and keeps their nature true.
2. AI has democratised design and made everything identical. Nothing fresh, organic,
   or real to any specific brand in the sameness of generated output.
3. The rigorous process that fixes this is locked behind agencies that charge crores.
   Wolff Olins for the few. Nothing meticulous for small and mid brands. SPANDA closes that gap.

---

## CURRENT BUILD STATE — AS OF MAY 5, 2026

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
spanda.studio/about         — Live. Our Story implemented.
spanda.studio/framework     — Live. Phase cards removed. One clean flow.
spanda.studio/audit         — Live. Form working. Resend connected. 7 days timeline.
spanda.studio/score         — Live. Clarity only selectable. Modal CTA on other dimensions.
spanda.studio/pravah-story  — Live. Indexed. Rhythm fixed.
spanda.studio/start         — Redirects to homepage.
pravah.agency               — Live. Separate Vercel project.
pravah.agency/pravah        — Live. Five USPs. Mailto linked.
/engine                     — Brand OS Engine (build after first client)
```

**Website scroll structure — 7 moments:**
```
Moment 1 — Hero (Ink): "Your brand is already there." CTA: Begin the Brand Audit →
Moment 2 — Problem (Parchment): "Most branding is expensive decoration."
Moment 3 — Framework (Parchment): The Extraction Framework™. Three phases. Nine tools.
Moment 4 — Proof (Ink): 12-Dimension Brand Strength Scorecard.
Moment 5 — Entry Points (Parchment): Audit ₹35,000 + Score free + Extraction cards.
Moment 6 — Statement (Ink): "When AI can generate any brand story in seconds,
           the only brand that matters is the one that's real." Caveat. No CTA.
Moment 7 — Philosophy (Ink): "It has not been expressed yet." No CTA. Just conviction.
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

Never use: pure black #000000, pure white #FFFFFF, any blue on SPANDA, gradients,
multiple Saffron elements per section.

### Typography
```
Syne ExtraBold  — SPANDA. wordmark only. In PNG files only. Never as live text.
Syne SemiBold   — PRAVAH wordmark only. In PNG files only. Never as live text.
Caveat Regular  — Headlines, pull quotes, conviction statements.
                  SENTENCE CASE ONLY. NEVER ALL CAPS.
                  ALWAYS REGULAR WEIGHT. NEVER BOLD. Hardcoded May 1, 2026.
Epilogue        — All body copy, UI labels, navigation, captions, forms.
Fraunces        — Philosophical long-form sections only.
```

Fonts are self-hosted on spanda.studio. Do NOT import from Google Fonts CDN.
Font files: /public/fonts/
Preload: caveat-latin.woff2 + epilogue-latin.woff2
font-display: swap on Caveat and Epilogue.
Client names in reports — Epilogue Bold. Never Caveat. Hardcoded rule.

### HARDCODED RULES — READ BEFORE ANY DESIGN WORK

```
LOGO RULE (hardcoded May 1, 2026):
Never render SPANDA or PRAVAH wordmark as Syne text in any deliverable.
The Syne period is a square geometric dot. The Bindu is round.
Always use the PNG logo files. No exceptions. Ever.

CAVEAT RULE (hardcoded May 1, 2026):
Always Caveat Regular. Never Caveat Bold.
Bold loses the handwritten conviction quality entirely.

SAFFRON RULE:
One element per design section. Never more.
Never as background. Never as fill. Never twice.

CAVEAT CASE RULE:
Always sentence case. Never all caps. A conviction shouted becomes a slogan.
```

### Logo and Asset Files — /public/logos/ (website) and Figma (design)
```
spanda-light.png         — Ink wordmark → Parchment/light backgrounds
spanda-dark.png          — white wordmark → Ink/dark backgrounds
pravah-light.png         — Navy wordmark → Parchment/light backgrounds
pravah-dark.png          — white wordmark → Ink/dark backgrounds
Spanda Favicon ink.png   — active favicon, both sites
Spanda Favicon parch.png — reserved
OG Spanda.png            — 1200×630px (do not change dimensions)
OG Pravah.png            — 1200×630px (do not change dimensions)
```

Logo rules: Never resize below 56px. No effects, shadows, outlines.
Never change Saffron period. Named by background, not by logo colour.
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

Do not use: spanda.foundation (UN NGO conflict) · spanda.institute (yoga school, occupied 2009)

---

## PRICING — LOCKED. DO NOT DEVIATE.

```
Brand Dimension Report    — Free. One dimension (Clarity only). AI-assisted.
Brand Strength Audit      — ₹35,000. 7 days. 12-dimension report. Debrief included.
The Extraction Standard   — ₹8,00,000. Client location. Single full day. Delhi-NCR.
The Extraction Full       — ₹15,00,000 + venue/F&B at actuals. SPANDA-organised offsite.
The Extraction Intl.      — ₹25,00,000 + all travel at actuals. Inbound only. Not listed.
Brand OS Portal           — ₹15,000/month. Unlimited queries. Quarterly update.
PRAVAH Retainer           — ₹1,50,000/month. 10 briefs. 3 concepts each. 48hr delivery.
```

Extraction pricing never shown on website. Site says: "Investment discussed after Audit."

Not yet locked (needs reconciliation):
- THE RESONANCE — ₹2,50,000
- THE CURRENT — ₹2,50,000–₹4,00,000/month

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
The Resonance              — discovery meeting / entry product (not yet locked)
```

Footer trademark line on all pages:
"The Extraction Framework™ is a proprietary methodology of SPANDA."

---

## CLIENT EXPERIENCE ARCHITECTURE — THE ONION

Seven layers. Each better than the last. Never front-loaded. Locked May 1, 2026.

```
Layer 1 — The Card
No contact info front. Conviction statement back. QR only.
First intrigue. Nothing explained. They go find it.

Layer 2 — The Website
spanda.ink → spanda.studio. Story unfolds. Monday morning scene.
They recognise themselves. They score their brand.

Layer 3 — The Score Report
First personalised moment. SPANDA has looked at their brand.
Named what they felt but couldn't say. Signal state arrives.
Anxiety arrives here.

Layer 4 — The Email / Form
They reached out. Intention declared.

Layer 5 — The First Meeting
Ron in the room. Two halves:
Fixed: Ron's story, why SPANDA exists, AI sameness problem (5-6 slides)
Variable: Their specific audit findings from the score report.
Total: 1 hour + 15 min discussion. Projected / online.

Layer 6 — The Audit Delivery
Proof of methodology. 12 dimensions. Before/after. Brand OS debrief.

Layer 7 — The Extraction
Full engagement. Brand extracted. Brand OS delivered.
```

---

## BRAND OS DOCUMENT — LOCKED

**Name:** SPANDA. Brand OS V1 — April 2026
**Structure:** 10 parts, locked copy, rules live inside each section

```
Part 1  — THE SILENCE      (the founding room scene)
Part 2  — THE CONVICTION   (SPANDA philosophy — opens: "SPANDA came out of that silence.")
Part 3  — THE NAME         (Spanda — vibration moment)
Part 4  — THE MARK         (Bindu, colours intro, logo rules)
Part 5  — THE LIGHT        (full colour system + rules)
Part 6  — THE HAND         (typography system + rules)
Part 7  — THE VOICE        (character, words, register)
Part 8  — THE TEST         (The Only You Test + practice)
Part 9  — PRAVAH           (complete but lean — full extraction after first client)
Part 10 — THE SOURCE       (Brand OS philosophy — closes on SPANDA.)
```

**Bridge questions locked:**
```
Part 1 → 2: "What came out?"
Part 2 → 3: "What came out?" (repeat, intentional)
Part 5 → 6: "What carries the conviction when no one is speaking?"
Part 6 → 7: "Conviction committed to permanence needs a voice that matches it."
Part 7 → 8: "True to what standard?"
Part 8 → 9: "The standard produces the work. The work produces the brand."
Part 9 → 10: "The system is complete. Now it belongs to you."
Closing: "The room. Monday morning. The silence before something important.
          Now you know what was missing. SPANDA."
```

**Two versions built:**
```
HTML version  — spanda-brand-os.html (single file, prints to PDF from browser)
Figma version — https://www.figma.com/design/M6TNcYKikvRKXaRr72ETa4/Spanda-Logo
               Page: Brand OS — Guidelines. 11 editable frames.
```

---

## FIGMA — DESIGN SYSTEM

### File
```
Primary file: Spanda-Logo.figma
URL: https://www.figma.com/design/M6TNcYKikvRKXaRr72ETa4/Spanda-Logo
Plan: Professional (one full seat — upgraded April 30, 2026)
Team Library: Published May 1, 2026 — styles and variables available across all files.
```

### Pages
```
Logos & Assets    — cleaned. PNG logos uploaded, Figma components created.
                    Logo Assets frame: four placeholder frames for each PNG.
Brand OS Guidelines — 11 editable frames (rebuilt May 1, 2026)
Stationery        — Letterhead A4 · Invoice A4 · Email Sig Light · Email Sig Dark
Digital Assets    — OG images · Favicons
```

### Colour Styles (10)
```
SPANDA/Ink · SPANDA/Parchment · SPANDA/Saffron
SPANDA/Stone · SPANDA/Stone Accessible · SPANDA/Dust · SPANDA/Linen
PRAVAH/Deep Navy
_NEVER/Pure Black · _NEVER/Pure White
```

### Text Styles (14)
```
SPANDA/Wordmark — Syne ExtraBold (64px)
PRAVAH/Wordmark — Syne SemiBold (56px)
SPANDA/Caveat — Section Title (52px) · Headline (40px) · Pull Quote (32px) · Subhead (24px)
SPANDA/Epilogue — Body · Body Strong · Small · Label · Meta · UI
SPANDA/Fraunces — Philosophy · Pull
```

### Variable Collection — SPANDA Brand Tokens (24 variables)
```
8 colour tokens · 4 spacing · 8 sizing · 4 brand rule strings
```

### Figma Make Invoice (separate file)
```
URL: https://www.figma.com/make/tQB3IbmmVVWdijc8pr1to4/Invoice-template-for-Spanda
React app hosted by Figma. Generates PDF by invoice number. Functional.
Use for first few clients. Move to portal after first client.
1-year subscription active.
```

### Figma workflow
Build all deliverables via Figma MCP + Claude. Publish as Team Library for shared styles.
Available Caveat styles: Bold, Regular. ALWAYS use Regular. Never Bold.
Available Syne styles: ExtraBold, SemiBold, Bold, Medium, Regular.

---

## TOOL STACK — CONNECTED MCPS

```
Figma           — design, brand guidelines, client deliverables, stationery, pitch deck
Notion          — client CRM · Capsule system · outbound tracker · Brand OS interim portal
Gmail           — score report delivery · client follow-ups · auto-reply
Google Drive    — Capsule files · client documents · templates
Google Calendar — Resonance calls · Extraction day · debrief scheduling
PDF Viewer      — read incoming client documents within session
```

### Full workflow enabled
Form → research → generate score report → save to Drive → deliver via Gmail.
Zero app switching. One session. Complete.

### Notion workspace structure
```
SPANDA HQ (root)
├── SPANDA. — Brand & Build (full internal page, all decisions)
├── PRAVAH — Brand & Build (lean, full extraction after first client)
├── CLIENTS database (7 properties, ready for first entry)
├── TASKS database (31 items seeded, all prioritised)
├── OUTBOUND database (5 targets: Airtel, Michelin, Nokia, Maruti, India Tourism)
└── SCORE REPORTS database (ready for first report)
```

### AI stack
```
Claude Pro       — extraction · copy · reports · strategy · Brand OS · all documents
Figma (MCP)      — all design work via Plugin API
Gemini           — research · Google ecosystem · competitor scanning
Grok Pro         — social listening · X/Twitter · cultural monitoring
Claude Design    — layout exploration · presentations · social concepts
Figma Make       — invoice generation (React app, Figma-hosted)
```

### Session update protocol
```
Trigger: Ron says "wrap up"
Action:  I update Notion directly (tasks, decisions, new items)
         I state exactly what to change in CLAUDE.md (1-2 lines)
         Ron pastes the change. Two minutes. Done.
Frequency: Every session. No exceptions.
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
  /engine                — Brand OS Engine (build after first client)
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
- Use Caveat Bold anywhere

---

## COPY STANDARDS

### Voice rules
1. Every sentence earns its place or it is cut
2. Short sentences carry more weight than long ones
3. Active voice. Present tense.
4. Say the uncomfortable thing first

### Never say
leverage / synergy / holistic / ecosystem / passionate / tailored solutions / innovative
"built" — use "expressed"
"created" — use "extracted"

### Words that are ours
extraction, conviction, truth, rigour, found, founder

---

## EMAILS
```
hello@spanda.studio   — live, Resend connected
hello@pravah.agency   — live, mailto linked on /pravah
```

---

## SESSION PROTOCOL — FOR CODE SESSIONS

1. Read this file completely before touching anything
2. Check /app and /components before building anything new
3. Ask if scope is unclear — never assume
4. Build mobile-first always
5. npm run build — zero errors before done
6. Do not deploy — Ron deploys via git push origin main

---

## OPEN TASKS — AS OF MAY 5, 2026

### Urgent
```
— Pitch deck — approach in discussion. Needs completely fresh thinking.
  Not a conventional creds deck. Mirror not presentation.
  Fixed half (5-6 slides): Ron story. Variable half: client audit.
  Ron's conviction line for Slide 4 — not yet locked.
— Pricing architecture — reconcile 5 products into one clean architecture
— First outbound contact — one person in network for Resonance conversation
```

### This Week
```
— Pre-work document (client sends before audit)
— Audit report format (12-dimension delivery design)
— Resonance call structure (document the flow)
— Debrief structure (post-audit to Extraction pitch)
— Client agreement template with IP clause
— Delegation trigger — gate to trained CD at 3rd PRAVAH client
```

### Deferred to May
```
— All trademark filings (SPANDA., PRAVAH, The Extraction Framework™)
— Holding company registration (Brahma Jyoti confirmation pending)
— All outbound reports (Airtel · Michelin · Nokia · Maruti · India Tourism)
```

### After First Client
```
— Brand OS Portal build (Layer 2)
— PRAVAH full build (Layer 3)
— Figma components and full library
— PRAVAH visual identity v2 — full extraction session
— Founder page — requires 3 case studies first
— Invoice generation in portal (replaces Figma Make long-term)
```

### Done — May 1, 2026
```
✅ Figma Team Library published
✅ Email signature (Light + Dark versions)
✅ Letterhead A4
✅ Invoice A4 (Figma stationery + Figma Make)
✅ Notion workspace fully set up (HQ, all databases, 31 tasks seeded)
✅ Brand OS Figma — all 11 frames rebuilt
✅ Caveat Bold → Regular fixed (11 instances across all pages)
✅ Logo PNG hardcoded rule documented
✅ CLAUDE.md updated
✅ Website April 29 fixes: 7 days, modal CTA, Moment 6, OG metadata
✅ Brand OS copy locked (10 parts, all bridge questions)
✅ Client experience onion — 7 layers mapped and locked
```

---

*Last updated: May 5, 2026*
*Source of truth for all development and design decisions.*
*Operational log lives in Notion: SPANDA HQ → SPANDA. — Brand & Build*
