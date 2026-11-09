# Ankith's Portfolio

A static React + Vite portfolio website showcasing Ankith's experience, projects, research, and contact information.

## Features

- Portfolio sections for experience, projects, skills, leadership, writing, and contact
- Contact form that opens a prefilled email draft in the visitor's email app
- Research CV and supporting PDFs served from `frontend/public/documents/`

## Public files

- Blog visualizers: `frontend/public/blogs/<topic>/visualizer.html`
- CV and supporting PDFs: `frontend/public/documents/`
- Shared static assets: `frontend/public/assets/`

The portfolio is published at `https://ankithreddys.github.io/portfolio/`. GitHub Actions deploys the frontend from `main`. The old Vercel domain redirects visitors to the corresponding GitHub Pages URL, including previous root-level visualizer and document links.

## Tech Stack

- React
- Vite
- React Router
- GitHub Pages hosting

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`.

## Build

```bash
cd frontend
npm run build
npm run preview
```

The production-ready static site is generated in `frontend/dist`.
