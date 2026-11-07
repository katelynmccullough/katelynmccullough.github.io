# ♡ Katelyn | Personal Links

A custom-built, responsive link-in-bio website that connects my
technical projects, professional profiles, and Katelyn Codes platform.

**[View Live Website](https://katelynmccullough.github.io/)**

---

## Overview

This project is a lightweight personal landing page built with
HTML, CSS, and vanilla JavaScript.

The goal was to create a customizable alternative to traditional
link-in-bio platforms while practicing frontend architecture,
responsive design, accessibility, and maintainable code.

The interface uses a minimal visual system with cream backgrounds,
cherry-red accents, soft pink interaction states, and custom typography.

## Features

- Responsive layout for mobile and desktop
- Data-driven link rendering from a JavaScript configuration
- URL validation for external destinations
- DOM-based element creation without HTML string injection
- Semantic HTML and accessible navigation
- Keyboard-visible focus indicators
- Reduced-motion accessibility support
- Automatically updated copyright year
- Static deployment through GitHub Pages

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and accessibility |
| CSS3 | Layout, responsive styling, and interactions |
| JavaScript | Dynamic link configuration and rendering |
| GitHub Pages | Static website hosting |
| Git | Source control |

No frontend framework or runtime dependencies are required.

## Architecture

```text
katelynmccullough.github.io/
├── index.html       # Semantic markup and document metadata
├── styles.css       # Design tokens and responsive components
├── script.js        # Link data, validation, and DOM rendering
├── IMG_8152.JPG     # Profile image
└── README.md        # Project documentation
```

### Design Decisions

**Separation of concerns**

HTML provides the document structure, CSS controls presentation,
and JavaScript manages dynamic link content.

**Configuration-driven content**

Links are defined in a single array, making it easier to maintain
the website without repeatedly modifying HTML.

**Native browser APIs**

The project uses standard browser functionality without introducing
a framework or dependency management overhead.

**Accessibility**

Semantic navigation, descriptive link labels, visible keyboard
focus, and reduced-motion support improve usability.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/katelynmccullough/katelynmccullough.github.io.git
cd katelynmccullough.github.io
```

Start a local server:

```bash
python3 -m http.server 8000
```

Open:

http://localhost:8000

No package installation or build step is necessary.

## Updating Links

Edit the `links` array in `script.js`:

```javascript
{
  label: "my new project",
  icon: "♡",
  url: "https://example.com",
}
```

The website automatically generates the link when the page loads.

## External Links

- [Katelyn Codes](https://katelynmccullough.github.io/katelyncodes/)
- [GitHub](https://github.com/katelynmccullough)
- [LinkedIn](https://www.linkedin.com/in/katelynmccullough09)
- [TikTok](https://www.tiktok.com/@katelyncodes)

## Future Improvements

- Add automated accessibility and link validation
- Run Lighthouse performance audits
- Add automated browser regression tests
- Improve image optimization and loading performance

## Author

**Katelyn McCullough**

Data Science Student | Florida Polytechnic University

© 2026 Katelyn McCullough
