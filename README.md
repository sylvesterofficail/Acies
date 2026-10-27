# Acies Africa Technologies website

Five-page site (Home, About, Services, Team, Contact) built with Next.js, Tailwind CSS and Framer Motion. Light and dark mode, fully responsive, exported as static files for GitHub Pages.

## Editing content

Almost everything lives in **`src/lib/site.ts`**:

- **Team** — the `team` list. Copy a block to add someone. For a photo, put the image in `src/assets/team/`, import it at the top of the file, and set `photo:`. Without a photo, the card shows the Acies diamond with the person's initials.
- **Wider team count** — `supportingStaff` (shown as "+10" on Home and Team).
- **Services, industries, FAQs, process steps** — their own lists in the same file.
- **Phone, email, address, CAC number** — the `contact` object.
- **Partners** — the `partners` object.

Pages are in `src/app/<page>/page.tsx`. Colours and fonts are design tokens in `src/app/globals.css` and `tailwind.config.ts`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Publishing

Every push to `main` builds and publishes the site through GitHub Actions (`.github/workflows/deploy.yml`).
One-time setup: in the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

Unused photos waiting to be assigned are in `src/assets/team/unassigned-*.jpeg`. Original logo files are in `brand-source/`.
