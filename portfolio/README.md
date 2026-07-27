# Portfolio Framework

A minimal, static portfolio website scaffold. No build step required.

## Structure

```
portfolio/
├── index.html      # Page structure and placeholder content
├── css/
│   └── styles.css  # Layout, theme, and responsive styles
├── js/
│   └── main.js     # Mobile nav toggle and footer year
└── README.md
```

## Sections

- **Hero** — Name, tagline, and call-to-action buttons
- **About** — Short bio
- **Skills** — Grid of skill tags
- **Projects** — Card grid with demo and source links
- **Contact** — Email and social links

## Getting Started

Open `index.html` in a browser, or serve locally:

```bash
cd portfolio
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Customize

1. Replace placeholder text in `index.html` (name, bio, projects, links).
2. Adjust colors and spacing in `css/styles.css` via the `:root` variables.
3. Add project images by setting `background-image` on `.project-card__image` or swapping in `<img>` tags.
