# Personal Academic Website (Minimal Light Theme)

This is a lightweight academic website for Myron Sukhanov. It uses plain HTML, CSS, and a tiny bit of JS. The design is minimal, clean, and mobile-friendly.

## Structure

- `index.html` — About/landing page
- `projects.html` — Research & Projects
- `education.html` — Education & Achievements
- `publications.html` — Publications & writing
- `cv.html` — CV viewer (expects a PDF at `assets/cv/cv.pdf`)
- `contact.html` — Contact & links
- `assets/css/styles.css` — Global styles
- `assets/js/main.js` — Small UX: mobile nav, active link, year
- `assets/favicon.svg` — Favicon
- `assets/cv/` — Place your CV file here as `cv.pdf`

## Local preview

Open `index.html` in a browser, or serve the folder with a simple HTTP server.

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Deploy on GitHub Pages

Option A — User/Org site (recommended for personal site):
1. Create a repo named `<username>.github.io` on GitHub.
2. Push this folder's contents to the repo root.
3. Pages will serve from `https://<username>.github.io/` automatically.

Option B — Project site:
1. Push to any repo.
2. In Settings → Pages: set Source to `main` branch, root folder.
3. Your site will be at `https://<username>.github.io/<repo>/`.

## Customize

- Replace placeholder headshot URL in `index.html` with your real photo.
- Add your actual email, LinkedIn, and GitHub links in `index.html` and `contact.html`.
- Add your CV PDF as `assets/cv/cv.pdf` (name exactly `cv.pdf`).
- Edit the copy across pages to match your latest status.

## Notes

- Keep content accurate and concise; avoid confidential material.
- The theme is intentionally minimalistic and light (no dark/"hacker" styling).

