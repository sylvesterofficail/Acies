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

GitHub Pages currently serves the built files committed at the root of `main`
(`index.html`, `about/`, `services/`, `team/`, `contact/`, `_next/`, `404.html`).
After changing anything in `src/`, rebuild and commit them:

```bash
npm run publish:pages   # builds for /Acies and copies the result to the repo root
git add -A && git commit -m "Update site" && git push
```

Automatic publishing is also set up in `.github/workflows/deploy.yml`. It needs GitHub Actions
to be available on the account; then set **Settings → Pages → Source** to **GitHub Actions**
and the manual step above is no longer needed.

Unused photos waiting to be assigned are in `src/assets/team/unassigned-*.jpeg`. Original logo files are in `brand-source/`.
