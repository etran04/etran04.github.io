# Eric Tran — Portfolio

Personal portfolio site built with Next.js, TypeScript, and Tailwind CSS. Deployed to [etran04.github.io](https://etran04.github.io).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npx serve out
```

## Deploy

Push to `main` on the `etran04.github.io` GitHub repo. GitHub Actions builds a static export and publishes to GitHub Pages.

**First-time setup:**

1. Create repo `etran04.github.io` on GitHub
2. Push this code to `main`
3. In repo Settings → Pages → Source, select **GitHub Actions**

## Project structure

- `data/resume.ts` — all site content (update here when resume changes)
- `components/sections/` — page sections
- `public/resume.pdf` — downloadable resume
