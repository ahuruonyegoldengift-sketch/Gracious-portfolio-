# Gracious Eberechukwu — Professional Developer Portfolio MVP

A modern, elegant, and fully responsive personal developer portfolio website for **Gracious Eberechukwu**, Web Developer & Creative Problem Solver.

## 🎨 Brand Color Palette

- **Primary Deep Burgundy:** `#5B0D19` (Brand anchor, dark hero, primary buttons, major headings)
- **Secondary Burgundy:** `#7D1526` (Secondary buttons, card depth, subtle gradients)
- **Muted Red:** `#A63A44` (Active states, secondary highlights)
- **Gold:** `#E2C675` (Icons, thin borders, micro-accents, premium details)
- **Warm Cream:** `#FBF3E2` (Main light backgrounds, body typography in dark mode)

---

## 🚀 Key Features

1. **Pure Standards (No Frameworks/No Tailwind):**
   - Built with semantic **HTML5**, modern **CSS3** (CSS Custom Properties), and clean **Vanilla JavaScript (ES6+)**.
2. **Cohesive Visual Identity:**
   - Designed to complement Gracious's professional photograph with bespoke photo framing, floating code badges, and sophisticated negative space.
3. **Curated Work & Real Projects:**
   - **Obsidian Athletics** — Live Fitness & Gym website (`https://happy-page-builder-762.lovable.app/`)
   - **Stitch Design Project** — Google Stitch UI/UX design prototype (`https://stitch.withgoogle.com/projects/12377891430504498673`)
   - **CLAT Restaurant & Lounge** — Live Restaurant & Lounge site (`https://lucent-sprite-49b9f8.netlify.app`)
   - **Gracious Apex** — Web Development project (`https://gracious-apex.ai.studio`)
   - **Stitch Design Project 2** — Google Stitch UI/UX design project (`https://stitch.withgoogle.com/projects/16420433953498625092`)
   - *Strictly distinguishes live websites from design projects.*
4. **Interactive Filters:**
   - Filter by All, Web Development, UI/UX Design, Web Design, and Design Concepts.
5. **Theme Switcher:**
   - Default **Dark Mode** with full **Light Mode** support, stored in `localStorage`.
6. **Mobile Navigation:**
   - Sticky navbar with blur backdrop filter and responsive hamburger menu.
7. **Accessibility & Ergonomics:**
   - Semantic headings, visible `:focus-visible` outlines, ARIA labels, and `prefers-reduced-motion` compliance.
8. **Editable Configuration:**
   - Clean `developer` configuration object in `js/script.js` for one-stop customization.

---

## 📁 Directory Structure

```
portfolio/
│
├── index.html          # Main HTML5 entry point
├── css/
│   └── style.css       # Pure CSS3 styles & color variables
├── js/
│   └── script.js       # Vanilla JS logic & project data
├── images/
│   ├── profile.jpg     # Gracious Eberechukwu profile photo
│   ├── about.jpg       # About section photo
│   ├── project1.jpg    # Obsidian Athletics preview
│   ├── project2.jpg    # Stitch Design preview
│   ├── project3.jpg    # CLAT Lounge preview
│   ├── project4.jpg    # Gracious Apex preview
│   └── project5.jpg    # Stitch Design 2 preview
├── assets/
│   └── cv.pdf          # Gracious Eberechukwu downloadable CV
└── README.md           # Documentation & instructions
```

---

## 🛠️ How to Run & Customize

1. **Open in Browser / Live Server:**
   - Open `index.html` in any modern web browser, or launch using VS Code Live Server / Vite.
2. **Update Personal Information:**
   - Edit the `developer` object in `js/script.js` to customize bio, contact details, or social links.
3. **Add or Edit Projects:**
   - Update the `projects` array in `js/script.js` with new titles, URLs, tags, or thumbnails.
4. **Connect Contact Form Backend:**
   - The form in `index.html` includes client-side validation. Hook up your favorite form endpoint (Formspree, EmailJS, or custom Node API) in the submit handler in `js/script.js`.

---

© 2026 Gracious Eberechukwu. All rights reserved.
