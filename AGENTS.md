# Project Instructions for Codex Agents

## Tech Stack

* Astro (latest stable)
* Tailwind CSS
* Component-based architecture
* SEO-first structure
* Geo-friendly SEO architecture
* Static generation where possible
* Fast Core Web Vitals priority
* Mobile-first implementation

## General Rules

* Figma is source of truth.
* Do not redesign.
* Preserve visual storytelling and emotional illustrations.
* Keep all major illustrations visible on mobile.
* Adapt layout, not content.
* Reusable components only. No duplicated markup.
* Use semantic HTML.
* Accessibility friendly (aria labels, keyboard navigation).
* Lighthouse target: 90+ mobile.

## Architecture

/components
  Hero
  ProblemSection
  ExplanationSection
  FormatsSection
  ScheduleSection
  GallerySection
  AboutSection
  FAQSection
  FinalCTASection
  Footer
/layouts
/pages
/data

## SEO

* Fully editable metadata.
* OpenGraph support.
* Twitter cards.
* Structured data (Person + LocalBusiness/ProfessionalService).
* FAQ schema generated automatically from FAQ component.
* Breadcrumb schema ready.
* Canonical URLs.

## GEO / AI Search Optimization

Site should be optimized not only for Google SEO but also for AI search systems:

* Clear semantic headings.
* FAQ structured for AI retrieval.
* Explicit service descriptions.
* Explicit audience descriptions.
* Explicit outcomes.
* Clean content hierarchy.
* Schema markup.
* Human-readable URLs.
* No hidden content.

## CMS

Use Google Sheets as lightweight CMS.

Data source:

Upcoming Group
Upcoming Event
Individual Consultation

Editable by client without code changes.

Required fields:

title
date
time
location
format
duration
price
description
button_text
button_url
active

## CTA Logic

Primary CTA:

“Записаться”

Global variable:

PRIMARY_CONTACT_LINK

Configured once.

Used everywhere:

* Hero
* Schedule
* Final CTA
* Mobile menu

Secondary CTA:

“Посмотреть расписание”

Scrolls to ScheduleSection.

## Schedule Section

Three cards:

Ближайшая группа

Fields:

* дата
* время
* формат
* место
* стоимость

Button:

Записаться

Ближайший ивент

Fields:

* дата
* место
* стоимость
* краткое описание

Button:

Подробнее

Индивидуальная работа

Always visible.

Fields:

* формат
* стоимость
* согласование даты и времени индивидуально

Button:

Записаться

If event or group inactive:

Hide card automatically.

## Gallery

Horizontal swipe gallery.

Requirements:

* Mobile first
* Partial next card visible
* Touch swipe
* Desktop arrows
* 12+ photos supported
* Lazy loading

## FAQ

Accordion component.

Requirements:

* Multiple items
* Smooth open/close animation
* FAQ schema generation
* Reusable component

## Visual System

Typography:

Honest

Language:

Russian

Colors are already defined in Figma variables.

Use only colors from design system.

No additional palette.

## Animations

Subtle only.

Allowed:

* fade
* reveal
* parallax accents
* hover microinteractions

Avoid:

* large motion
* heavy GSAP effects
* distracting transitions

Site should feel:

warm
alive
human
premium
not corporate

## Footer

Social icons:

* Telegram
* Instagram
* VK

Placeholders for now.

Credit:

Made with BotBando

Link:

https://botbando.vercel.app

## Important

If text already exists in Figma layouts:

Treat it as final content.
Do not rewrite.
Do not shorten.
Do not generate replacements.
