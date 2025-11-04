# Portfolio – Tidiane DIA

Modern, responsive portfolio focused on Data & Decision Support.
Built with plain HTML/CSS/JavaScript, deploy-ready on GitHub Pages.

## Overview
- Sections: Home, About, Contact
- Dedicated page: `projects.html` with two groups (DATA and WEB)
- Per-project details modal (click a card)
- Theme: midnight blue, white, gray – Poppins/Montserrat
- Mobile-first, subtle animations

## Structure
```
portofolio1/
├─ index.html          # Landing page (shows 6 recent projects)
├─ projects.html       # All projects (2 groups: DATA and WEB)
├─ styles.css          # Global styles and modal
├─ script.js           # Config and interactions
├─ images/             # Your images (projects, profile)
└─ README.md / README_EN.md
```

## Quick customization
All content is in `script.js` under `siteConfig`.
- CV: `siteConfig.cvUrl`
- LinkedIn: `siteConfig.linkedinUrl`
- Hero: `siteConfig.hero` (`name`, `role`, `subtext`)
- Projects: `siteConfig.projects` (see schema below)

Project schema:
```js
{
  title: 'Project title',
  title_en: 'Project title (EN, optional)',
  description: 'Short card summary',
  description_en: 'Short summary (EN, optional)',
  details: 'Longer text in modal',
  details_en: 'Modal text (EN, optional)',
  image: 'images/my-image.png',
  link: '# or https://…',
  type: 'DATA' | 'WEB'
}
```

- Home automatically shows the first 6 projects.
- `projects.html` shows up to 6 DATA and 6 WEB projects. You can adjust the `limit` in `renderProjectsByType()`.

## Run locally
Open `index.html` or serve a small local server:
```bash
python -m http.server 8080
# open http://localhost:8080
```

## Deploy – GitHub Pages
1. Create a GitHub repository and push this folder.
2. Settings → Pages → Build and deployment → Source: Deploy from a branch
3. Branch: `main` (or `master`), folder `/ (root)`.
4. Save and open the published URL.

Tip: name the repo `tdia.github.io` for a root URL `https://tdia.github.io/`.

## Notes
- Images should be optimized for the web
- Keep thumbnails around 1200×675 (16:9)
- Update your projects and links regularly

## License
Provided as-is; feel free to adapt for personal use.


