# Shan Li Chin — Portfolio

## Running locally

Use Node.js 24 or newer and npm. Install the locked dependencies and start the
development server:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal (normally `http://localhost:5173`).

## Production preview

Generate the static site and serve it locally:

```sh
npm run build
npm run preview
```

The generated site is written to `build/`. Open the preview URL printed in the terminal.

## Project structure

```text
src/
  routes/                  Pages, layouts, and prerender settings
  lib/
    components/            Reusable Svelte components
    data/portfolio.ts      Profile, projects, education, and experience
  app.css                  Shared styles and responsive layouts
  app.html                 HTML document template
static/                    Public assets copied into the site
.github/workflows/         GitHub Pages build and deployment
vite.config.ts             SvelteKit, static adapter, and deployment base path
tsconfig.json              TypeScript configuration
eslint.config.js           Lint rules
prettier.config.js         Formatting rules
package.json               Dependencies and npm scripts
package-lock.json          Locked dependency versions
```
