# Old Town Automotive Services — demo site

Mobile-first marketing demo for **Old Town Automotive Services** ("OLDTOWN Automotive"), a locally owned auto repair shop in Old Downtown Carrollton.

- 1005 S Broadway St, Carrollton, TX 75006 · (972) 245-0615
- 4.8★ from 195 Google reviews · Mon–Fri 8 AM–7 PM (call to confirm)

> Independent demo built from publicly available information (Google Maps listing, public reviews). Not affiliated with or endorsed by the business. Photos are from the shop's public Google Maps listing.

## Design

The palette comes from the real shop, as seen in its Google Maps photos:

| Role | Hex | Source |
| --- | --- | --- |
| Brick (main / buttons) | `#A9473A` | Red-brick facade (≈`#C86E5E` on camera), deepened for contrast |
| Teal-green (secondary) | `#1F5F57` / `#2A7A70` | Awning and window-sill trim |
| Cream | `#FFFAF4` | White sign lettering |
| Ink | `#2B2B2F` | The crew's black polos |
| Inspection blue (accent) | `#144FB0` | Texas Official Vehicle Inspection Station sign |

The wordmark recreates the painted wall sign: block-caps **OLDTOWN** (Rubik 800) over a script *Automotive* (Yellowtail).

## Mobile-first checklist

- 17px base text, 48px+ tap targets, single column on phones
- Sticky Call / Directions bar on phones
- `AutoRepair` schema.org JSON-LD (address, geo, hours, rating, services)
- WebP photos at 1000px or smaller, lazy-loaded below the fold. They are stored as base64 in `assets-b64/` and decoded to `public/img/` by `scripts/decode-images.mjs` (runs automatically on `npm run dev` / `npm run build`).
- Verified at 375px: `document.documentElement.scrollWidth === 375`

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # outputs dist/
npm start        # serve dist -s on $PORT (default 3000)
```

Requires Node 22.12+.

## Deploy (Railway)

Railpack/Nixpacks builds with `npm run build` and starts with `npm start`. Lead-demo sizing: 0.25 vCPU / 0.25 GB, serverless sleep on, 1 replica.
