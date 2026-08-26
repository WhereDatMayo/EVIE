# UX portfolio skeleton

Low-fidelity wireframe site you can fill in. No build step, no frameworks.

Gray boxes with an X are image placeholders. Copy marked `[like this]` or “EDIT” in HTML comments is meant to be replaced.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home: name, role, 3 work cards |
| `about.html` | Bio, experience outline, methods, contact |
| `work/project-one.html` | Full case study (problem → research → insights → design → outcome) |
| `work/project-two.html` | Second full case study |
| `work/project-three.html` | Shorter sprint / side-project template |
| `css/styles.css` | Wireframe styles. Change `:root` tokens to restyle later |
| `js/main.js` | Mobile menu + footer year |

## Preview

```bash
cd portfolio
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## How to edit

1. **Name and links** — search for `Your Name`, `you@example.com`, and the LinkedIn URL.
2. **Home cards** — titles and one-liners in `index.html`. Keep them scannable.
3. **Case studies** — write over the prompt text. Leave a section out if it does not apply; do not fake research.
4. **Images** — put files in `portfolio/images/` then replace a placeholder:

```html
<div class="box box--hero box--photo">
  <img src="images/project-one-cover.jpg" alt="Describe the image">
</div>
```

`box--photo` turns off the wireframe X.

5. **Add a fourth project** — duplicate `work/project-one.html`, then copy a card block on `index.html`.
6. **Visual polish later** — start with `:root` in `css/styles.css` (`--ink`, `--paper`, `--line`).

The skeleton is supposed to look unfinished. Fill the stories first, then style.
