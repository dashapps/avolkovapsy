# DESIGN_SYSTEM.md
## Project
Project name:
`Avolkovapsy`
Figma file:
`https://www.figma.com/design/9k7n6dfnG7TpbR1dqKgJtL/Avolkovaps`
Figma file key:
`9k7n6dfnG7TpbR1dqKgJtL`
Main design node:
`62:836`
## Canonical viewports
Desktop:
`1280px`
Tablet:
`800px`
Mobile:
`390px`
## Tech target
This project is implemented in:
- Astro
- TypeScript
- CSS
- Cloudinary assets
Do not paste React code directly from Figma output.
Do not install Tailwind unless explicitly requested.
## Design modes
Each section must be classified as:
- `layout`
- `poster`
Poster sections are layered visual compositions and may require absolute positioning.
Do not convert poster sections into generic flex/grid layouts.
## Global colors
```css
:root {
  --bg1: #dbd9d2;
  --primary: #fab842;
  --just-dark: #5c5958;
  --dark-baige: #a69684;
  --cardtxtbg: rgba(255, 245, 233, 0.8);
  --panel-top: rgba(255, 245, 233, 0.3);
  --panel-bottom: rgba(224, 218, 197, 0.6);
  --shadow-title: 12px 24px 2px rgba(176, 156, 134, 0.4);
  --radius-panel: 24px;
  --radius-button: 24px;
}
```

## Typography

Main font:

Onest

Weights:

* 400 Regular
* 600 SemiBold
* 900 Black

CSS variable:

```css
:root {
  --font-main: "Onest", sans-serif;
}
```

Do not substitute font weights.

Do not replace translucent/outlined display text with normal solid text.

## Assets

Cloudinary is the source of truth for images.

Expected Cloudinary folders:

Avolkovapsy/Desktop/
Avolkovapsy/Tablet/
Avolkovapsy/Mobile/
Avolkovapsy/SEO/
Avolkovapsy/Icons/

Rules:

* Use real Cloudinary assets.
* Do not use CSS placeholders.
* Do not create fake silhouettes.
* Do not recreate illustrations in CSS.
* Do not use temporary Figma MCP asset URLs in production.
* If a Cloudinary asset is missing, stop and ask.

## Asset config

All Cloudinary URLs should be stored in:

src/data/assets.ts

Do not scatter raw Cloudinary URLs across components.

## Responsive workflow

Implementation order:

1. Desktop
2. Tablet
3. Mobile

Use the actual Figma frame for each viewport.

Do not infer mobile from desktop if mobile Figma exists.

## Acceptance criteria

A section is complete only if:

* desktop matches Figma
* tablet matches Figma
* mobile matches Figma
* images load from Cloudinary
* no CSS fake images remain
* no placeholders remain
* npm run build passes
