# MedPath Guide — Live Website Source

This folder is the **exact corrected source code** behind the live MedPath Guide website:

<https://medpathguide-ujau8sj3.manus.space/>

It includes the original country pathways, specialty explorer and detail pages, saved-profile interactions, USA and Germany deep-dive sections, hospital cards, styling, application configuration, and the white-page production fix.

## Run locally

Install Node.js 20 or newer, then run:

```bash
pnpm install
pnpm run dev
```

For a production build, run:

```bash
pnpm run build
```

## Source map

| Area | Location |
|---|---|
| Application entry point | `client/src/main.tsx` |
| Routes and page shell | `client/src/App.tsx`, `client/src/components/SiteLayout.tsx` |
| Country details and data | `client/src/pages/CountryDetail.tsx`, `client/src/data/countries.json` |
| Specialty details and data | `client/src/pages/SpecialtyDetail.tsx`, `client/src/data/specialties.json` |
| USA and Germany deep dives | `client/src/components/UsaPathway.tsx`, `client/src/components/GermanyPathway.tsx` |
| Global visual styling | `client/src/index.css` |
| Profile and saved-item state | `client/src/contexts/AppContext.tsx` |

## Media and deployment note

The app source uses permanent `/manus-storage/...` paths supplied by the Manus project storage proxy. The matching original visual files and GIFs are included in `media-source/` as a backup. For a non-Manus deployment, upload those assets to your own storage or place them in the host's public asset directory, then update the corresponding paths in the source files.

Do not commit `node_modules`, `dist`, `.env` files, API keys, passwords, or private deployment metadata.
