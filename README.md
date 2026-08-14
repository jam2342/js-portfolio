# Personal site — Jamal Mammadzada

Static site built with Astro. No analytics, no trackers, no cookies, no backend.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built site
```

Node 22.12 or newer.

## Where the content lives

Almost everything you'd want to change is in `src/data/`, not in the pages.

| File | What it holds |
|---|---|
| `src/data/site.ts` | Name, contact details, nav, résumé paths, meta description |
| `src/data/projects.ts` | Every project card and case-study header |
| `src/data/experience.ts` | Roles, competitions, skill groups |
| `src/data/model.ts` | Detector evaluation numbers used on the FRCMOB page |

Adding a project means appending one object to `projects` in
`src/data/projects.ts`. The homepage, the work index, and the filter chips all
derive from that array. Set `featured: false` to keep something off the
homepage, and add `href` only once a case-study page exists.

## Pages

```
/                    home
/work/               project index with filtering
/work/frcmob/        case study — scouting and match analysis
/work/hardening/     case study — Windows hardening framework
/work/eaglets/       case study — robot kits and camps
/work/cryptography/  case study — course and capstone
/work/frc5417/       case study — fabrication, pit crew, FRCMOB deployment
/work/notetaker/     case study — consent-first meeting capture
/research/           extended essay and physics investigation
/experience/         roles, education, competitions, skills
/about/
/contact/
```

## Interactive figures

These are custom components, not libraries. Each one computes what it draws.

- `FieldTracker.astro` — camera-space to field-space transform, with detection
  boxes, track IDs, and an accumulating dwell heat map
- `QuadraticVariation.astro` — refines a seeded Brownian path and shows
  Σ(ΔW)² converging to the elapsed time
- `SdeSim.astro` — Euler–Maruyama sample paths for the four models in the
  extended essay
- `ModelMetrics.astro` — detector evaluation, validation split vs held-out event
- `Pipeline.astro` — click-through stage diagrams
- `CtfBreakdown.astro` — picoCTF category breakdown
- `Math.astro` — equation typesetting; ships no JS math library

All of them respect `prefers-reduced-motion` and pause when off screen.

## Résumé

`public/Jamal_Mammadzada_Resume.pdf` and `.docx`. Both are linked from the site.
If you edit the .docx, regenerate the PDF and check it still fits one page:

```bash
soffice --headless --convert-to pdf public/Jamal_Mammadzada_Resume.docx \
  --outdir public/
```

Keep the résumé and `src/data/` in agreement. They currently match.

## Things to keep true

- **Private repositories stay unlinked.** The hardening framework, cryptography
  capstone, Eaglets site, and Notetaker remain private. FRCMOB is public under
  AGPL-3.0, but model weights, training data, recordings, database contents,
  credentials, and private assessment material stay unpublished.
- **Photographs from camps exclude students unless a release is verified.** The
  Eaglets evidence currently uses hardware-only photographs or crops that do
  not show student faces.
- **The extended essay is not published** while it's awaiting submission.
- Claims on this site were checked against the actual repositories, training
  artifacts, and documents. Don't loosen them without the same evidence.

## Theme

Light by default, following the system preference, with an explicit toggle in
the header. Colours are tokens on `:root` in `src/styles/global.css`; the dark
palette only redefines those tokens.
