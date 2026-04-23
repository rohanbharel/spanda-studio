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

We are building two companies simultaneously. They share a design system and a philosophical origin but have distinct identities, personalities, and websites.

**The founding conviction:**
Brands are not built. They are extracted from the founder's deepest convictions. Our work is not creation. It is extraction.

---

## CURRENT BUILD STATE — AS OF APRIL 21, 2026

### Build 1 — spanda.studio — LIVE
All pages live and confirmed functional. Deployed on Vercel. Auto-deploys on push to main.

### Build 2 — Brand OS Engine
Build before first client so demo is live. First client activates it live.
Technology: Next.js + Claude API (claude-sonnet-4-5) + Supabase

### Build 3 — pravah.agency — LIVE
Separate Vercel project. Canonical set to https://pravah.agency. Full brand build after first client.

---

## PAGES — LIVE STATE

```
spanda.studio/              — Live. Confirmed.
spanda.studio/about         — Live. Confirmed.
spanda.studio/framework     — Live. Confirmed.
spanda.studio/audit         — Live. Form working. Emails received.
spanda.studio/score         — Live. Form working. Emails received.
spanda.studio/pravah-story  — Live. Indexed in Search Console.
spanda.studio/start         — Redirects to homepage.
pravah.agency               — Live. Separate Vercel project.
pravah.agency/pravah        — Live. Five USPs. Mailto linked.
```

### Pages Still to Build
```
/engine    — Brand OS Engine (Build 2, protected route)
```

---

## DESIGN SYSTEM — NON-NEGOTIABLE

### Colours
```
Ink:              #1C1814   /* primary — all text, dark backgrounds */
Parchment:        #F5F0E8   /* primary — all light backgrounds */
Saffron:          #C97820   /* accent — ONE use per design section, never more */
Deep Navy:        #0A2540   /* PRAVAH exclusive — never use on SPANDA */
Stone:            #8C8277   /* secondary text, captions */
Stone-accessible: #6B6259   /* text 13px and below on Parchment/Linen — WCAG compliant */
Dust:             #D8D1C4   /* rules, dividers */
Linen:            #EDE8DF   /* card and section backgrounds */
```

**Never use:** pure black #000000, pure white #FFFFFF, any blue on SPANDA, gradients, multiple Saffron elements on one screen.

### Typography
```
Syne ExtraBold  — SPANDA. wordmark only. Never headlines or body.
Syne SemiBold   — PRAVAH wordmark only. Never headlines or body.
Caveat          — All handwritten headlines, pull quotes, conviction statements.
Epilogue        — All body copy, UI labels, navigation, captions.
Fraunces        — Philosophical long-form sections only.
```

**Fonts are self-hosted. Do NOT import from Google Fonts CDN.**
Font files live at /public/fonts/
Preload declarations exist in layout.tsx for caveat-latin.woff2 and epilogue-latin.woff2.
font-display: swap is applied to Caveat and Epilogue.

**Font variables in globals.css:**
```css
--font-syne: 'Syne', sans-serif;
--font-caveat: 'Caveat', cursive;
--font-epilogue: 'Epilogue', sans-serif;
--font-fraunces: 'Fraunces', serif;
```

### Typography rules
- Syne only for wordmarks — set in React/SVG components, not CSS text
- Caveat for hero headlines, pull quotes, manifesto lines, section openers
- Epilogue for everything operational: nav, body, CTAs, labels, data
- Fraunces for philosophy/about sections only
- Headlines carry weight. Body is light (300) or regular (400). Bold only for emphasis.

### Logo and Asset Files — all in /public/logos/
```
spanda-light.png         — SPANDA. wordmark, Ink colour → use on Parchment/light backgrounds
spanda-dark.png          — SPANDA. wordmark, white → use on Ink/dark backgrounds
pravah-light.png         — PRAVAH wordmark, Navy colour → use on Parchment/light backgrounds
pravah-dark.png          — PRAVAH wordmark, white → use on Ink/dark backgrounds
Spanda Favicon ink.png   — Saffron Bindu on Ink bg, 16×16px — active favicon for both sites
Spanda Favicon parch.png — Saffron Bindu on Parchment bg — reserved
OG Spanda.png            — 1200×630px OG image, 2x for retina
OG Pravah.png            — 1200×630px OG image, 2x for retina
```

**Logo rules:**
- Never resize below 2cm / 56px width
- Never add effects, shadows, or outlines
- Never change the Saffron period colour
- Navbar (Ink bg) and Footer (Ink bg) → use dark versions
- Page body on Parchment → use light versions

---

## SPANDA. WEBSITE — SCROLL STRUCTURE

### Domain Architecture
```
spanda.studio              — primary, all content, all SEO
spanda.ink                 — visiting card redirect → spanda.studio/start
spanda.agency              — silent redirect, never displayed
spanda.consulting          — silent redirect, never displayed
spanda.works               — silent redirect, never displayed
pravah.agency              — PRAVAH primary, separate Vercel project
```

### The 6 Scroll Moments (in order)
Every scroll moment has a specific emotional job. Do not deviate.

**Moment 1 — STOP (Hero)**
Headline in Caveat: *"Your brand is already there."*
Sub in Epilogue Light: *"Most agencies build one for you. We extract the one you already have."*
CTA: *"Begin the Brand Audit →"* (links to /audit)
Background: Ink (#1C1814)
No images. Type carries the page.

**Moment 2 — FEEL SEEN (Problem)**
Headline in Caveat: *"Most branding is expensive decoration."*
Body in Epilogue: The convention the industry follows. The problem we're disrupting.
Background: Parchment
Tone: Direct. No softening. Say the uncomfortable truth first.

**Moment 3 — UNDERSTAND (The Framework)**
Headline in Epilogue SemiBold: *"The Extraction Framework™"*
Subheadline: *"Three phases. Nine proprietary tools. Every output passes The Only You Test."*
Show: 3 phases (Excavate / Distil / Express), 12 layers, 9 tools
The Only You Test bar at the bottom in Saffron
Background: Parchment

**Moment 4 — BELIEVE (Proof)**
12-Dimension Brand Strength Scorecard
Show what each dimension means. Show what improvement looks like.
Background: Ink
Tone: Evidence-based. Data-forward.
Do NOT use unverified statistics. Current approved line:
*"Most brands discover their biggest gap isn't where they expected it."*

**Moment 5 — ACT (Where to Begin)**
Background: Parchment
Label: "WHERE TO BEGIN" — Epilogue SemiBold 11px Stone uppercase
Headline in Caveat 52px: *"Most founders start with the Audit."*
Sub in Epilogue Light 18px Stone: Diagnosis before commitment.

PRIMARY CARD — Ink background:
- Title in Caveat 36px Parchment: "Brand Strength Audit"
- Price/time: "₹35,000 · 48 hours · Debrief included"
- Four bullet points: Complete Brand Strength Score (12 dimensions), biggest gap identified, clear brief for The Extraction, delivered in 48 hours with debrief
- CTA button: Saffron bg, Ink text: "Begin the Audit →" → /audit
- Below button: "No commitment to The Extraction required."

TWO SECONDARY CARDS — Linen background, side by side desktop, stacked mobile:
Left: "Not ready to commit?" → Score one dimension free → /score
Right: "The Extraction" → Complete framework, full day, Brand OS delivered → Investment discussed after Audit → /audit

Closing italic line: *"Start with the Audit. ₹35,000. 48 hours. You'll know exactly what The Extraction will fix."*

**Moment 6 — CONNECT (The Philosophy)**
The Spanda concept — for the intellectually curious
Manifesto excerpt in Caveat
Background: Ink
No CTA. Just conviction.
Key line: *"It has not been expressed yet."* — not "built yet"

### Navigation
Logo left. Three links right: Our Story / Framework / Start
No hamburger on desktop. Clean single line.
Mobile: Logo + single CTA button.
Background: Ink. Links in Epilogue Light Stone.

### Footer
Two-column logo lockup: SPANDA. at 256px width, PRAVAH at 189px width.
Vertical divider between logos. Cross-brand relationship implied, not explained.

SPANDA column hierarchy:
Logo → "Brand Strategy & Identity" (13px Stone) → spanda.studio (13px Stone) → Delhi, India. (12px Stone)

Copyright line centred below both columns. Stone on Ink.
Footer is compact and tight — not a design feature, a quiet close.
Reduced padding: 20% less top, bottom, and between logo columns and copyright.

---

## PRICING — LOCKED. DO NOT DEVIATE.

```
Brand Dimension Report    — Free. One dimension. AI-assisted. Next business day.
Brand Strength Audit      — ₹35,000. 48 hours. 12-dimension scored report. Debrief meeting.
The Extraction Standard   — ₹8,00,000. Client location. Single full day. Delhi-NCR.
The Extraction Full       — ₹15,00,000 + venue/F&B at actuals. SPANDA-organised offsite.
The Extraction Intl.      — ₹25,00,000 + all travel at actuals. Inbound only. Not listed publicly.
```

**Extraction pricing never shown on website.** Site says: "Investment discussed after Audit."
Audit debrief = pitch meeting for The Extraction. Non-negotiable inclusion.

---

## TERMINOLOGY — LOCKED

```
The Extraction Framework™  — the proprietary methodology. Always with ™.
The Extraction             — client-facing name for the full engagement. Not "Sprint."
Brand OS                   — brand operating system. The deliverable.
Brand Strength Audit       — the entry-point diagnostic. ₹35,000.
The Only You Test          — the continuous filter. Applied throughout Distil phase.
Capsules                   — four client data objects: Brief, Voice, Feedback, Notes.
90-Day Signal Map          — post-delivery activation tool.
Brand Compass              — one-page daily reference extracted from Brand OS.
POSM                       — point of sale materials. Used in PRAVAH context.
```

**Footer trademark line — add across all pages:**
*"The Extraction Framework™ is a proprietary methodology of SPANDA."*

---

## BRAND OS ENGINE — ARCHITECTURE (Build 2)

### Purpose
Load each client's Brand OS as Claude's system prompt.
Accept campaign briefs.
Generate brand-consistent output.
Route to Human Brand Manager for authentication before delivery.

### Tech stack
```
Frontend:  Next.js App Router (/app/engine route, protected)
Database:  Supabase — one Brand OS document per client
AI:        Claude API — model: claude-sonnet-4-5
Auth:      Supabase Auth — brand manager login only
Hosting:   Vercel
```

### The Brand OS data structure (per client)
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
  "only_you_statement": "string"
}
```

### The generation flow
1. Brand manager selects client
2. Brand OS loaded as system prompt
3. Campaign brief entered (objective, format, channel, tone notes)
4. Claude generates output within brand parameters
5. Brand manager reviews — approve or request revision
6. Approved output delivered to client

### Claude API call structure
```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'claude-sonnet-4-5',
    max_tokens: 2000,
    system: buildBrandOSPrompt(brandOS),
    messages: [{ role: 'user', content: campaignBrief }]
  })
});
```

---

## CODING STANDARDS

### Stack
```
Framework:    Next.js 14+ (App Router)
Styling:      Tailwind CSS
Language:     TypeScript
Deployment:   Vercel (auto-deploy on push to main)
Database:     Supabase (when needed)
Repo:         github.com/rohanbharel/spanda-studio
```

### Git workflow
```
cd /Users/rohanbharel/ClaudeProjects/TheAgency
git add .
git commit -m "description of change"
git push origin main
```
Vercel auto-deploys on every push to main. No manual deploy needed.
Never paste PAT in chat. Remote URL is pre-configured.

### Component principles
- Every component receives explicit props — no hardcoded content
- Colours via Tailwind config only — never hardcoded hex in JSX
- Fonts via CSS variables — never inline font-family
- All images in /public/ — never external URLs for brand assets
- Mobile-first. Every layout works at 375px before 1440px.
- No component longer than 150 lines — split if larger
- metadata export must be in server components only — never in client components

### Tailwind config — brand colours and fonts
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        ink:       '#1C1814',
        parchment: '#F5F0E8',
        saffron:   '#C97820',
        navy:      '#0A2540',
        stone:     '#8C8277',
        dust:      '#D8D1C4',
        linen:     '#EDE8DF',
      },
      fontFamily: {
        syne:     ['Syne', 'sans-serif'],
        caveat:   ['Caveat', 'cursive'],
        epilogue: ['Epilogue', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
}
```

### File structure — current state
```
/app
  /page.tsx              — spanda.studio homepage (live)
  /about/page.tsx        — Our Story (live)
  /audit/page.tsx        — Brand Audit intake form (live)
  /framework/page.tsx    — The Extraction Framework detail (live)
  /score/page.tsx        — Brand Dimension Score free tool (live)
  /pravah-story/page.tsx — PRAVAH origin story (live)
  /start/page.tsx        — Redirects to homepage
  /pravah/page.tsx       — PRAVAH page on pravah.agency (live)
  /engine                — Brand OS Engine (to build)
  layout.tsx             — Root layout, metadata, favicon, OG tags
/components
  /ui                    — Reusable primitives (Button, Card, etc.)
  /sections              — Homepage scroll sections
  /logos                 — Logo components with variant props
/public
  /logos                 — All logo PNG files, OG images, favicons
  /fonts                 — Self-hosted font files (woff2)
/lib
  /brandOS.ts            — Brand OS types and helpers
  /claude.ts             — Claude API wrapper
  /supabase.ts           — Database client
```

### OG and Metadata
```
metadataBase: new URL('https://spanda.studio')
SPANDA OG image: /logos/OG%20Spanda.png
PRAVAH OG image: /logos/OG%20Pravah.png
Favicon: /logos/Spanda%20Favicon%20ink.png
Both OG images: 1200×630px, 2x resolution
```
metadata export must be in server component. If layout.tsx uses "use client" — split into layout.tsx (server) + ClientLayout.tsx (client).

### Performance standards
- Fonts self-hosted — no Google Fonts CDN calls
- caveat-latin.woff2 and epilogue-latin.woff2 preloaded in <head>
- font-display: swap on all @font-face declarations
- Middleware matcher narrowed to exclude static assets and images

### What Claude Code should NEVER do
- Never use generic grey/blue/green colour values
- Never use Arial, Helvetica, or system fonts
- Never add drop shadows or gradients to logos
- Never add more than one Saffron element per screen section
- Never use stock photography or placeholder images with faces
- Never write inline styles — always Tailwind classes
- Never deploy without confirming npm run build returns zero errors
- Never use lorem ipsum — use real SPANDA copy from this file
- Never put metadata export inside a client component
- Never import fonts from Google Fonts CDN — fonts are self-hosted

---

## COPY STANDARDS

### Voice rules (apply to all generated copy)
1. Every sentence earns its place — if it doesn't add, challenge, or create feeling, delete it
2. Short sentences carry more weight
3. Active voice. Present tense. Always.
4. Say the uncomfortable thing first

### What SPANDA never says
- "Leverage" / "synergy" / "holistic" / "ecosystem"
- "We are passionate about..." — show it, don't say it
- "Our team of experts..." — irrelevant
- "Tailored solutions" — generic
- Questions in headlines — SPANDA makes statements
- "It has not been built yet." — use "expressed" not "built"

### What SPANDA always says
- Direct. Precise. The first word matters.
- Brand truth before brand trend
- Extraction, not construction
- Conviction before comfort

### Words that are ours
extraction, conviction, truth, rigour, found, founder

### Words eliminated
innovative, solutions, holistic, passionate, potential

---

## EMAILS & CONTACT

```
hello@spanda.studio   — live, forwarding confirmed
hello@pravah.agency   — live, forwarding confirmed, mailto linked on /pravah
```

---

## SESSION PROTOCOL

At the start of every Claude Code session:
1. Read this file completely
2. Check what exists in /app and /components before building new
3. Ask if scope is unclear — never assume
4. Build mobile-first, always
5. Confirm npm run build returns zero errors before declaring done
6. Do not deploy — Ron deploys via git push origin main

When in doubt: refer to the brand philosophy.
The extraction principle applies to code too — use only what earns its place.
Nothing decorative. Nothing arbitrary. Everything justified.

---

## OPEN TASKS — AS OF APRIL 21, 2026

```
This Week:
- OG image rendering — confirm via LinkedIn Post Inspector
- Framework SVG diagram — static, not animated
- Unified offerings page
- Sprint card copy fix — "multi-stakeholder residential" only Tier 3
- Trademark footer line across all pages
- Forms connect to Resend API
- Organisation schema SEO metadata

Next Week:
- Trademark filing — attorney decision
- Brand OS Engine build

Later:
- PRAVAH full visual identity extraction
- Brand Bible Figma rebuild
- Visiting card print production
- PRAVAH Brand Bible
```

---

*Last updated: April 21, 2026*
*This file is the source of truth for all development decisions on this project.*
*Read SPANDA-DECISIONS.md for the full decision log.*
