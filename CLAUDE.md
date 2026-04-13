# CLAUDE.md — Project Brief
## SPANDA. & PRAVAH — TheAgency

> This file is the permanent brief for all Claude Code sessions on this project.
> Read this completely before writing a single line of code.
> Every decision must be consistent with what is documented here.

---

## WHO WE ARE

**SPANDA.** — Brand Strategy & Identity Consultancy
**PRAVAH** — AI-Powered Brand Activation Agency
**Holding company** — BINDU / [pending numerology confirmation]

We are building two companies simultaneously. They share a design system and a philosophical origin but have distinct identities, personalities, and websites.

**The founding conviction:**
Brands are not built. They are extracted from the founder's deepest convictions. Our work is not creation. It is extraction.

---

## WHAT WE ARE BUILDING — IN THIS PROJECT

### Build 1 — spanda.studio (website)
The primary marketing and conversion website for SPANDA.
Technology: **Next.js + Tailwind CSS + Vercel deployment**

### Build 2 — Brand OS Engine (future)
The AI-powered campaign engine that loads each client's Brand OS as a system prompt and generates brand-consistent campaigns for PRAVAH to authenticate.
Technology: **Next.js + Claude API + Supabase**

### Build 3 — pravah.agency (website — after Build 1 is live)
Technology: Same stack as spanda.studio

---

## DESIGN SYSTEM — NON-NEGOTIABLE

### Colours
```
Ink:       #1C1814   /* primary — all text, backgrounds (dark) */
Parchment: #F5F0E8   /* primary — all backgrounds (light) */
Saffron:   #C97820   /* accent — ONE use per design, never more */
Deep Navy: #0A2540   /* PRAVAH exclusive — never use on SPANDA */
Stone:     #8C8277   /* secondary text, captions */
Stone-accessible: #6B6259   /* text 13px and below on Parchment/Linen — WCAG contrast compliant */
Dust:      #D8D1C4   /* rules, dividers */
Linen:     #EDE8DF   /* card/section backgrounds */
```

**Never use:** pure black #000000, pure white #FFFFFF, any blue on SPANDA, gradients, multiple accents on one screen.

### Typography
```
Syne ExtraBold    — SPANDA. wordmark only. Never headlines or body.
Syne SemiBold     — PRAVAH wordmark only. Never headlines or body.
Caveat            — All handwritten headlines, pull quotes, conviction statements (Google Font)
Epilogue          — All body copy, UI labels, navigation, captions (Google Font)
Fraunces          — Philosophical long-form sections only (Google Font)
```

**Import in CSS:**
```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Epilogue:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,400&family=Syne:wght@600;800&display=swap');
```

**Font variables:**
```css
--font-syne: 'Syne', sans-serif;
--font-caveat: 'Caveat', cursive;
--font-epilogue: 'Epilogue', sans-serif;
--font-fraunces: 'Fraunces', serif;
```

### Typography rules
- Syne only for wordmarks (set in React/SVG components, not CSS text)
- Caveat for hero headlines, pull quotes, manifesto lines, section openers
- Epilogue for everything operational: nav, body, CTAs, labels, data
- Fraunces for the philosophy/about sections only
- Headlines carry weight. Body is light (300) or regular (400). Bold only for emphasis.

### Logo files (in /public/logos/)
```
spanda-light.png   — SPANDA. wordmark for light/parchment backgrounds
spanda-dark.png    — SPANDA. wordmark for dark/ink backgrounds
pravah-light.png   — PRAVAH wordmark for light/parchment backgrounds
pravah-dark.png    — PRAVAH wordmark for dark/ink backgrounds
```
**Never resize logos below 2cm / 56px width.**
**Never add effects, shadows, or outlines to logos.**
**Never change the Saffron period colour.**

---

## SPANDA. WEBSITE — STRUCTURE

### Domain
Primary: **spanda.studio**
Card redirect: spanda.ink → spanda.studio/start

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
Show: 3 phases (Excavate / Distill / Express), 9 layers, 9 tools
The Only You Test bar at the bottom in Saffron
Background: Parchment

**Moment 4 — BELIEVE (Proof)**
Brand Strength Scorecard — the before/after mechanism
12 dimensions. 0–100 score. Show what improvement looks like.
Background: Ink
Tone: Evidence-based. Data-forward.

**Moment 5 — ACT (Entry points)**
Two offers:
1. Brand Strength Audit — ₹25,000 — 48 hours — clear deliverable
2. The Full Sprint — ₹1.5L–₹5L — 14+ days — complete Brand OS
Closing line: *"Start with the Audit. ₹25,000. 48 hours. You'll know exactly what the Sprint will fix."*
Background: Parchment / Saffron CTA block

**Moment 6 — CONNECT (The Philosophy)**
The Spanda concept — for the intellectually curious
Manifesto excerpt in Caveat
Background: Ink
No CTA. Just conviction.

### Navigation
Minimal. Logo left. Three links right: Work / Framework / Start
No hamburger on desktop. Clean single line.
Mobile: Logo + single CTA button.

### Footer
SPANDA. wordmark. spanda.studio. spanda.ink.
Copyright line. Confidential note.
Stone colour on Ink background.
Footer hierarchy (SPANDA column): Logo → Brand Strategy & Identity (13px Stone) → spanda.studio (13px Stone) → Delhi, India. (12px Stone, mt-1).

---

## BRAND OS ENGINE — ARCHITECTURE (Build 2)

### Purpose
Load each client's Brand OS as Claude's system prompt.
Accept campaign briefs.
Generate brand-consistent output.
Route to Human Brand Manager for authentication before delivery.

### Tech stack
```
Frontend:  Next.js (same repo, /app/engine route)
Database:  Supabase (Brand OS documents per client)
AI:        Claude API — model: claude-sonnet-4-5
Auth:      Supabase Auth (brand manager login only)
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
    system: buildBrandOSPrompt(brandOS), // Brand OS as system prompt
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
Deployment:   Vercel
Database:     Supabase (when needed)
```

### Component principles
- Every component receives explicit props — no hardcoded content
- Colours via Tailwind config only — never hardcoded hex in JSX
- Fonts via CSS variables — never inline font-family
- All images in /public/ — never external URLs for brand assets
- Mobile-first. Every layout works at 375px before 1440px.
- No component longer than 150 lines — split if larger

### Tailwind config — extend with brand colours
```javascript
// tailwind.config.js
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

### File structure
```
/app
  /page.tsx           — spanda.studio homepage
  /audit/page.tsx     — Brand Audit landing
  /start/page.tsx     — First encounter (spanda.ink redirect target)
  /framework/page.tsx — The Extraction Framework detail
  /engine             — Brand OS Engine (Build 2, protected route)
/components
  /ui                 — Reusable primitives (Button, Card, etc.)
  /sections           — Homepage scroll sections
  /logos              — Logo components with variant props
/public
  /logos              — All logo PNG files
/lib
  /brandOS.ts         — Brand OS types and helpers
  /claude.ts          — Claude API wrapper
  /supabase.ts        — Database client
```

### What Claude Code should NEVER do
- Never use generic grey/blue/green colour values
- Never use Arial, Helvetica, or system fonts
- Never add drop shadows or gradients to logos
- Never add more than one Saffron element per screen section
- Never use stock photography or placeholder images with faces
- Never write inline styles — always Tailwind classes
- Never deploy without mobile testing
- Never use lorem ipsum — use real SPANDA copy from this file

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

### What SPANDA always says
- Direct. Precise. The first word matters.
- Brand truth before brand trend
- Extraction, not construction
- Conviction before comfort

---

## CONTACT & CONTEXT

**Project folder:** /Users/rohanbharel/ClaudeProjects/TheAgency
**Primary domain:** spanda.studio
**Redirect domain:** spanda.ink
**PRAVAH domain:** pravah.agency
**Owner:** Ron

---

## SESSION PROTOCOL

At the start of every Claude Code session:
1. Read this file completely
2. Check what exists in /app and /components before building new
3. Ask if scope is unclear — never assume
4. Build mobile-first, always
5. Show output in browser before declaring done

When in doubt: refer to the brand philosophy.
The extraction principle applies to code too — use only what earns its place.
Nothing decorative. Nothing arbitrary. Everything justified.

## PRICING — LOCKED DECISIONS

Brand Strength Audit: ₹35,000 flat. 48 hours. Includes debrief meeting.
Sprint Standard: ₹8,00,000. Client location. Single day.
Sprint Full: ₹15,00,000 + venue/F&B at actuals. SPANDA-organized offsite.
Sprint pricing not shown publicly. Website says "Investment discussed after Audit."

## DOMAIN ARCHITECTURE — LOCKED

spanda.studio — primary, all content, all SEO
spanda.ink — visiting card redirect only, routes to spanda.studio/start
spanda.agency / spanda.consulting / spanda.works — silent redirects, never displayed
pravah.agency — PRAVAH primary
Contact: hello@spanda.studio

## PAGES TO BUILD NEXT

/audit — Brand Strength Audit intake form + payment
/start — First encounter page (spanda.ink redirect destination)
/framework — Extraction Framework detail page

---

*Last updated: April 2026*
*This file is the source of truth for all development decisions on this project.*
