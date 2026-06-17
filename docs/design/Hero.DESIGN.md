Да, даю тебе готовый Hero.DESIGN.md. Кладёшь в GitHub сюда:

docs/design/Hero.DESIGN.md

И потом Кодексу пишешь: “Read this file before touching Hero”. Чтобы он перестал лепить CSS-человечков из палок и грусти.

# Hero.DESIGN.md
## Component
Component name:
`Hero`
Target file:
`src/components/Hero.astro`
Design source:
Figma file:
`Avolkovaps`
Figma file key:
`9k7n6dfnG7TpbR1dqKgJtL`
Main design node:
`62:836`
Viewport frames:
- Desktop page frame: `62:837`
- Desktop hero frame: `62:838`
- Tablet page frame: `62:1174`
- Tablet hero frame: `62:1175`
- Mobile page frame: `62:1512`
- Mobile hero frame: `62:1513`
## Implementation mode
`poster`
This Hero is a poster composition, not a normal content layout.
Do not rebuild it as a generic flex/grid section.
Use absolute positioning where required.
Preserve:
- layer order
- image placement
- text overlay placement
- translucent panels
- shadows
- text stroke / shadow effect
- button position
- background image composition
## Critical rule
The current CSS-placeholder reconstruction is invalid.
Do not use:
- CSS silhouettes
- fake people shapes
- fake tables
- fake battery icons
- generated CSS illustrations
- placeholder gradients instead of images
Use real visual assets from Cloudinary only.
If Cloudinary URLs are missing, stop and ask for them.
## Cloudinary asset policy
Cloudinary is the source of truth for images.
Expected folders:
```text
Avolkovapsy/Desktop/
Avolkovapsy/Tablet/
Avolkovapsy/Mobile/

Hero requires real exported images from Figma.

Required image assets:

export const assets = {
  hero: {
    desktop: {
      leftImage: "CLOUDINARY_URL_FOR_DESKTOP_LEFT_IMAGE",
      rightImage: "CLOUDINARY_URL_FOR_DESKTOP_RIGHT_IMAGE"
    },
    tablet: {
      leftImage: "CLOUDINARY_URL_FOR_TABLET_LEFT_IMAGE",
      rightImage: "CLOUDINARY_URL_FOR_TABLET_RIGHT_IMAGE"
    },
    mobile: {
      leftImage: "CLOUDINARY_URL_FOR_MOBILE_LEFT_IMAGE",
      rightImage: "CLOUDINARY_URL_FOR_MOBILE_RIGHT_IMAGE"
    }
  }
} as const;

Do not use temporary Figma MCP asset URLs in production code. They expire.

Do not commit binary hero images to GitHub unless explicitly requested.

Desktop frame

Frame:

62:838

Size:

width: 1280px
height: 757px

Hero root:

position: relative;
width: 1280px;
height: 757px;
overflow: hidden;
background: var(--bg1);

Desktop layer structure

Back to front:

1. Background image layer

Node:

62:839

Position:

position: absolute;
left: 0;
top: 0;
width: 1280px;
height: 757px;
display: flex;
align-items: center;
justify-content: space-between;
background: var(--bg1);

Contains two image containers.

2. Left image container

Node:

62:840

Figma name:

Rectangle 3

Position:

width: 660px;
height: 736px;
x: 0;
y: 10.5px;

Image placement inside container:

position: absolute;
width: 92.48%;
height: 101.5%;
left: -5.55%;
top: -0.79%;
object-fit: cover;

Use Cloudinary image, not CSS.

3. Right image container

Node:

62:841

Figma name:

Rectangle 2

Position:

width: 528px;
height: 710px;
x: 752px;
y: 23.5px;

Image placement inside container:

position: absolute;
width: 107.04%;
height: 109.25%;
left: -1.44%;
top: -4.57%;
object-fit: cover;

Use Cloudinary image, not CSS.

4. Top translucent text panel

Node:

62:842

Figma name:

Rectangle 23

Position:

position: absolute;
left: 340px;
top: 0;
width: 604px;
height: 281px;

Style:

background: rgba(255, 245, 233, 0.3);
border-left: 1px solid var(--dark-baige);
border-right: 1px solid var(--dark-baige);
border-bottom: 1px solid var(--dark-baige);
border-radius: 0 0 24px 24px;

5. Bottom translucent button panel

Node:

62:843

Figma name:

Rectangle 23

Position:

position: absolute;
left: 324px;
top: 437.766px;
width: 633px;
height: 225.155px;

Style:

background: rgba(224, 218, 197, 0.6);
border: 1px solid var(--dark-baige);
border-radius: 24px;

6. Main title group

Node:

62:844

Position:

position: absolute;
left: 234px;
top: 334.174px;
width: 811px;
height: 319.234px;
display: flex;
flex-direction: column;
align-items: center;
gap: 26px;

7. Title text group

Node:

62:845

Position:

width: 811px;
height: 182px;

Title line:

Node:

62:846

Text:

ПЕРЕЗАГРУЗКА

Style:

font-family: "Onest", sans-serif;
font-weight: 900;
font-size: 100px;
line-height: 130%;
text-transform: uppercase;
color: rgba(255, 245, 233, 0.8);
text-align: right;
text-shadow: 12px 24px 2px rgba(176, 156, 134, 0.4);

Important:

Do not replace this with normal white text.

The shadow/translucent look is part of the design.

Subtitle:

Node:

62:847

Text:

без паузы от жизни

Style:

font-family: "Onest", sans-serif;
font-weight: 400;
font-size: 40px;
line-height: 130%;
color: var(--just-dark);
text-align: center;

8. CTA buttons group

Node:

62:848

Position:

width: 637px;
height: 94px;
display: flex;
gap: 24px;
align-items: flex-start;
justify-content: center;

Button 1:

Node:

62:849

Text:

Индивидуально

Style:

width: 306.5px;
height: 78px;
padding: 18px 24px;
border-radius: 24px;
background: var(--primary);
display: flex;
align-items: center;
justify-content: center;

Text style:

font-family: "Onest", sans-serif;
font-weight: 600;
font-size: 32px;
line-height: 130%;
color: var(--just-dark);
white-space: nowrap;

Button 2:

Node:

62:850

Text:

В группе

Style:

width: 306.5px;
height: 78px;
padding: 18px 24px;
border-radius: 24px;
background: var(--just-dark);
display: flex;
align-items: center;
justify-content: center;

Text style:

font-family: "Onest", sans-serif;
font-weight: 600;
font-size: 32px;
line-height: 130%;
color: var(--primary);
white-space: nowrap;

9. Top description group

Node:

62:852

Position:

position: absolute;
left: 407px;
top: 54.052px;
width: 467px;
height: 157.503px;
display: flex;
flex-direction: column;
gap: 28px;

Text block 1:

Node:

62:853

Text:

Для тех, кто живёт
в напряжении, высокой ответственности
и постоянном потоке задач

Text block 2:

Node:

62:854

Text:

и чувствует, что обычный отдых больше
не восстанавливает.

Style for both:

font-family: "Onest", sans-serif;
font-weight: 400;
font-size: 21px;
line-height: 130%;
color: var(--just-dark);

Tablet frame

Frame:

62:1175

Size:

width: 800px
height: 670px

Important tablet nodes:

left image: 62:1176
right image: 62:1177
top panel: 62:1178
title text 1: 62:1188
title text 2: 62:1189
top text 1: 62:1179
top text 2: 62:1180
bottom panel: 62:1181
buttons group: 62:1182
button 1: 62:1183
button 2: 62:1185

Tablet must not be auto-guessed from desktop.

Use the Figma tablet frame as source.

Mobile frame

Frame:

62:1513

Size:

width: 390px
height: 690px

Important mobile nodes:

left image: 62:1514
right image: 62:1515
top panel: 62:1516
top text 1: 62:1519
top text 2: 62:1520
title text 1: 62:1518
title text 2: 62:1517
bottom panel: 62:1521
buttons group: 62:1522
button 1: 62:1523
button 2: 62:1525

Mobile must follow the Figma mobile composition.

Do not stack content using generic mobile layout unless it matches Figma.

Design tokens

Use these CSS tokens.

Create or update:

src/styles/tokens.css

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

Typography:

:root {
  --font-main: "Onest", sans-serif;
}

Required font:

Onest

Weights used:

400 Regular
600 SemiBold
900 Black

Do not substitute font weights.

If Onest is not loaded, load it properly through the existing project font strategy.

Astro implementation rules

Target:

src/components/Hero.astro

The component must be Astro-compatible.

Do not paste React code directly.

Do not use JSX-only component syntax.

Do not install Tailwind just because Figma generated Tailwind-like code.

Use project conventions.

Use semantic Astro markup plus CSS.

Allowed:

* absolute positioning
* CSS variables
* <picture> if using responsive Cloudinary images
* data attributes for node IDs

Forbidden:

* React component syntax
* CSS-only fake people
* CSS-only fake battery
* CSS-only fake table
* placeholder image blocks
* hardcoded temporary Figma MCP image URLs

Required structure

Recommended structure:

---
import { assets } from "../data/assets";
---
<section class="hero" data-node-id="62:838">
  <div class="hero__visual-layer">
    <div class="hero__image hero__image--left">
      <img src={assets.hero.desktop.leftImage} alt="" loading="eager" />
    </div>
    <div class="hero__image hero__image--right">
      <img src={assets.hero.desktop.rightImage} alt="" loading="eager" />
    </div>
  </div>
  <div class="hero__panel hero__panel--top"></div>
  <div class="hero__panel hero__panel--bottom"></div>
  <div class="hero__intro">
    <p>Для тех, кто живёт<br />в напряжении, высокой ответственности<br />и постоянном потоке задач</p>
    <p>и чувствует, что обычный отдых больше<br />не восстанавливает.</p>
  </div>
  <div class="hero__headline">
    <h1>ПЕРЕЗАГРУЗКА</h1>
    <p>без паузы от жизни</p>
    <div class="hero__buttons">
      <a href="#individual" class="hero__button hero__button--primary">Индивидуально</a>
      <a href="#group" class="hero__button hero__button--dark">В группе</a>
    </div>
  </div>
</section>

This is a suggested semantic structure.

Exact class names may differ, but the visual result must match Figma.

Acceptance criteria

Implementation is accepted only if:

* desktop Hero matches Figma frame 62:838
* tablet Hero matches Figma frame 62:1175
* mobile Hero matches Figma frame 62:1513
* all images are real Cloudinary assets
* no CSS placeholder figures remain
* no fake illustrations remain
* title has correct translucent/shadow look
* buttons match size, radius, color, and typography
* top text panel and bottom button panel match position and opacity
* npm run build passes

Validation report required

After implementation report:

* files changed
* Cloudinary assets used
* desktop status
* tablet status
* mobile status
* build result
* any missing assets

И короткий промпт для Кодекса после того, как ты это закинешь:
```md
Read:
- docs/design/Hero.DESIGN.md
- docs/ASTRA_BUILD_STANDARD.md
- docs/DESIGN_IMPLEMENTATION_RULES.md
- docs/CLOUDINARY_ASSET_POLICY.md
Task:
Rebuild `src/components/Hero.astro` from `docs/design/Hero.DESIGN.md`.
Current Hero implementation is invalid because it uses CSS placeholder figures instead of real Figma/Cloudinary assets.
Rules:
- Do not redesign.
- Do not approximate.
- Do not use CSS silhouettes.
- Do not use placeholder shapes.
- Use Cloudinary assets only.
- Treat Hero as poster composition.
- Desktop first, then tablet, then mobile.
- If Cloudinary URLs are missing, stop and ask for them.
- Run `npm run build`.
Update the current PR.

Вот. Это уже не “сделай красиво”, а нормальная хирургическая карта. Теперь если он опять нарисует человечка из CSS, его можно будет официально отправить в цифровой угол.
