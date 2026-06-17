# COMPONENT_MAP.md
## Current Astro components
```text
src/components/Header.astro
src/components/Hero.astro
src/components/ProblemSection.astro
src/components/ExplanationSection.astro
src/components/FormatsSection.astro
src/components/ScheduleSection.astro
src/components/GallerySection.astro
src/components/AboutSection.astro
src/components/FAQSection.astro
src/components/FinalCTASection.astro
src/components/Footer.astro
```

## Figma-to-code mapping

### Hero

Figma desktop:

62:838

Figma tablet:

62:1175

Figma mobile:

62:1513

Code:

src/components/Hero.astro

Spec:

docs/design/sections/Hero.DESIGN.md

Mode:

poster

### ProblemSection / Section 1

Figma desktop:

62:855

Figma tablet:

62:1190

Figma mobile:

62:1527

Code:

src/components/ProblemSection.astro

Spec:

docs/design/sections/ProblemSection.DESIGN.md

Mode:

poster

### RestartSection / peregrus

Figma desktop:

62:869

Figma tablet:

62:1204

Figma mobile:

62:1541

Code:

src/components/ExplanationSection.astro

Spec:

docs/design/sections/RestartSection.DESIGN.md

Mode:

poster

### YourProblems

Figma desktop:

62:878

Figma tablet:

62:1213

Figma mobile:

62:1551

Code:

src/components/FormatsSection.astro

Spec:

docs/design/sections/YourProblems.DESIGN.md

Mode:

poster

### Product

Figma desktop:

62:888

Figma tablet:

62:1223

Figma mobile:

62:1561

Code:

src/components/ScheduleSection.astro

Spec:

docs/design/sections/ProductSection.DESIGN.md

Mode:

poster

### Psycho

Figma desktop:

62:893

Figma tablet:

62:1228

Figma mobile:

62:1566

Code:

TODO: confirm target component

Spec:

docs/design/sections/PsychoSection.DESIGN.md

Mode:

poster

## Rule

If code component does not match the Figma section name, do not guess.

Report mismatch and ask which code component should own the section.
