# TeddyPups live-vs-local comparison report

**Reference site:** https://puppy.instabizweb.com/  
**Local site:** `http://127.0.0.1:5173/`  
**Comparison date:** 23 November 2026  
**Scope:** visual structure, content presence, routes, interactions, responsive/navigation behavior and build health.

> This report only documents differences and the exact path to parity. The website content, source components and assets were not changed during this comparison.

## Executive summary

The local clone is already a strong functional/content match. The homepage and major routes are present, the same 15 available puppies are listed, the primary copy and image references are mostly aligned, and the production build succeeds.

It is **not yet pixel-identical**. Remaining work is mainly UI parity: live-site header/navigation states, responsive behavior, exact spacing/typography, illustration/artwork details, some footer/social/WhatsApp values, and validation of every profile/gallery interaction at desktop and mobile widths.

## Evidence collected

- Live homepage and `/puppies` were inspected through the browser DOM/accessibility tree.
- Local homepage and `/puppies` were inspected at the local dev server.
- Local production build was run with `npm run build`.
- Live homepage exposes the six hero puppies, 15 available puppy cards, journey/trust sections, family-photo gallery, FAQ preview, CTA and footer.
- Local homepage exposes the same main content groups and the same six hero puppies/15 puppy cards.

## Current parity matrix

| Area | Live reference | Local observation | Status | Priority |
|---|---|---|---|---|
| Page title/brand | TeddyPups U.A.E. title and brand | Same title/brand | Matched | — |
| Hero | Same headline, copy, two CTAs and six hero profiles | Same structure, copy and profiles | Very close | P2 |
| Hero decorative layer | Hand-drawn background/artwork and original positioning | Recreated artwork/positioning | Approximate | P2 |
| Header desktop | Logo, six navigation links and WhatsApp action | Local homepage snapshot shows logo + Menu; live desktop WhatsApp/nav placement needs matching | Gap | P1 |
| Header mobile | Menu plus WhatsApp action and opened drawer | Menu exists; WhatsApp placement/behavior differs by state | Gap | P1 |
| Announcement/accessibility layer | Live has announcement/skip-accessibility layer | Local layer is not proven pixel-equivalent | Gap | P2 |
| Meet the pups | 15 cards, availability/video labels and “Meet them all” | Same 15 cards and labels | Matched structurally | — |
| Two ways to meet | Dubai showroom and Korea→Dubai import cards | Same cards/copy and links | Very close | P2 |
| Puppy journey | Three numbered steps, WhatsApp-style conversation and breed links | Same copy/steps/conversation and links | Very close | P2 |
| Trust section | Four trust points and original artwork | Four trust points; artwork recreated | Content matched | P2 |
| Happy families home | Testimonial, six visible cards and 64-photo destination gallery | Testimonial, eight visible cards and gallery data | Content/layout differs | P1 |
| FAQ preview | Three open FAQ answers and decorative artwork | Three FAQ answers and accordion controls | Functionally close | P2 |
| Final CTA | WhatsApp/contact CTAs and Max image | Same CTA/image structure | Very close | P2 |
| Footer | Explore links, contacts, social links and artwork | Present; exact social URLs/artwork need verification | Gap | P1 |
| `/puppies` filters | Everywhere/Imported/Korean Teacup, five breeds, Boys/Girls | 15 listings and filters present; exact grouping/states need matching | Gap | P1 |
| `/puppies` gone-home preview | Five gone-home cards with profile links | Five preview cards present | Matched structurally | — |
| Puppy profiles | Facts, galleries, numbered sections, enquiry, prev/next | Profile system exists; all live galleries/states need click-through QA | Needs QA | P1 |
| Other routes | Gone-home, families, how-it-works, FAQ, contact and 404 | Routes exist according to local implementation/report | Needs QA | P1 |
| Build health | N/A | `npm run build` passes; dependency warnings only | Pass with warnings | P2 |
| Browser console | No reference console data captured | React warning: invalid DOM property `fetchpriority`; should be `fetchPriority` | Defect | P1 |

## Exact gaps to close for “same as live”

### 1. Header and responsive states

Match the live header in these states:

1. Desktop: logo, Home/Puppies/Happy families/How it works/FAQ/Contact links, active underline and WhatsApp action in the same order and spacing.
2. Mobile: logo, Menu button, WhatsApp action and opened drawer with the same animation, overlay, close control and focus behavior.
3. Route state: active navigation item must stay correct on every main route.
4. Accessibility: skip link, landmarks, keyboard focus order and visible focus styles must remain equivalent.

### 2. Exact visual system

For true pixel parity, compare at the same viewport widths and tune:

- font files, weights, letter spacing and line heights;
- content width and section padding;
- card aspect ratios, image crops and border radii;
- paper texture, doodles, sparkles, paw marks and self-portrait artwork;
- button height, icon size, hover/pressed states and active filters;
- footer artwork and mobile stacking.

The recreated SVG artwork and guessed handwriting font are approximations; they cannot be called exact without the original CSS/font/art assets.

### 3. Data and contact values

The live DOM contains mixed/placeholder-looking values: visible text says `+971 50 000 0000`, while some WhatsApp links use `919898124987`; message text varies between “Insta Biz Web” and “TeddyPups”. Local links also use a TeddyPups message in some places and `info@instabizweb.com` in the footer.

Choose one canonical WhatsApp number, message, email, social URLs and address, then use them consistently across every route. This is a business decision, not a visual assumption.

### 4. Gallery/profile verification

Open every live/local profile and verify:

- cover image and all gallery images;
- breed, sex, age, origin and availability labels;
- video poster/play state;
- enquiry fields and prefilled message without accidental submission;
- previous/next navigation;
- gone-home badge/profile behavior;
- lightbox open/close, Escape key and mobile overflow/swipe behavior.

The existing implementation notes that five profile galleries are real and other profiles may fall back to a cover photo. That is a known data limitation.

## Recommended implementation order

1. Rename `fetchpriority` to `fetchPriority` wherever used.
2. Lock canonical contact/social configuration and remove placeholder/mixed values.
3. Reconcile header desktop/mobile states and WhatsApp placement.
4. Match `/puppies` filter groups, pressed states, count text and gone-home preview.
5. Run route-by-route profile/gallery/lightbox QA at desktop and mobile widths.
6. Tune fonts, spacing, artwork, image crop and footer details.
7. Run build plus a smoke test of every internal link, query filter and hash anchor.

## Acceptance checklist

- [ ] Homepage header matches live at desktop width.
- [ ] Homepage header/drawer matches live at mobile width.
- [ ] WhatsApp number/message is canonical and consistent everywhere.
- [ ] Hero contains the same six profiles, order and links.
- [ ] Homepage contains the same 15 available puppy cards and labels.
- [ ] `/puppies` filters match labels, grouping, query behavior and pressed states.
- [ ] Every puppy profile has verified facts, gallery, enquiry and navigation behavior.
- [ ] Gone-home, families, how-it-works, FAQ and contact routes pass smoke test.
- [ ] Family gallery and lightbox behave correctly.
- [ ] 404 route behaves correctly.
- [ ] No React console warnings/errors remain.
- [ ] `npm run build` passes without project-authored warnings.
- [ ] Visual comparison is repeated at agreed desktop and mobile viewport sizes.

## Verification result

`npm run build` **passes**. The only observed project-facing browser issue is the React warning for invalid DOM property `fetchpriority`; correct it before calling the clone production-ready. No website source/content change was made for this report.

## Bottom line

The clone is functionally close and has most of the live site’s information architecture. To make it “exact same”, the next work is a controlled visual/interaction parity pass—not a wholesale rebuild. Highest-impact items are header responsive states, canonical contact values, filter behavior, profile/gallery QA and exact visual tokens/artwork.

## Phase 1 update — header parity

Phase 1 was completed without replacing components, removing routes or changing unrelated sections.

### Implemented

- Fixed the header to the live 76px desktop / 64px mobile structure.
- Matched the live transparent header, 56px desktop gutters, mobile 16px gutters and logo sizing.
- Added active navigation paw indicator and matched desktop navigation spacing/typography.
- Matched the WhatsApp header pill size, green color and dark offset shadow; removed the extra header arrow so its measured width matches the reference.
- Matched the mobile Menu pill, icon sizing and placement.
- Reworked the mobile menu into an accessible modal-style drawer with the live honey background and dimmed overlay.
- Added `role="dialog"`, `aria-modal`, `aria-controls`, Escape-to-close, focus return, Tab focus wrapping and body scroll locking.
- Preserved all existing navigation destinations and route behavior.

### Verification

- Desktop viewport inspected at 1440px against the live site.
- Mobile viewport inspected at 390px against the live site.
- Mobile menu open state, close state, Escape key, focus return and drawer navigation were tested.
- `/puppies` navigation changed the route and active navigation state correctly.
- `npm run build` passes.

### Remaining header differences

- The live logo uses the original hosted image/font rendering; local text is visually scaled to match but can vary slightly if the hosted font load differs.
- The live site’s exact header hover animation timing and original paw artwork are approximated with the existing local SVG system.
- The live mobile drawer has additional original decorative canvas/artwork; the local drawer uses the existing project decoration layer.
- The existing `fetchpriority` React warning remains outside the header parity scope and should be corrected before final production QA.

## Phase 2 update — footer parity

The shared footer has been updated so the same footer renders on every route through `Layout`.

### Implemented

- Replaced the local three-column footer layout with a responsive 12-column desktop layout matching the live alignment.
- Matched the live dark brown background, honey wave treatment, stars and moon decoration.
- Added a lightweight local basket-and-puppy illustration in the same footer position; no unrelated section was changed.
- Matched the live “Home, at last.” intro block, Explore links, contact block and bottom copyright row.
- Changed social links from icon-only circles to the live text pill buttons: Instagram, TikTok and Facebook.
- Added mobile stacking and bottom spacing so the footer remains clear of the fixed mobile action bar.
- Preserved all existing footer routes and external contact links.

### Verification

- Compared live and local `/contact` footers at desktop width.
- Compared live and local footer structure at 390px mobile width.
- Confirmed footer is shared by the global `Layout`, therefore applies to home and all existing routes.
- `npm run build` passes.
- Problems check reports no errors in the edited JSX/CSS files.

### Remaining footer differences

- The live basket puppy is a detailed animated inline illustration; the local version is a static CSS recreation using the project palette.
- Exact live star positions/animation and footer wave curvature are approximated with CSS.
- The live site uses its original hosted font rendering; minor text-width differences may remain depending on font loading.
