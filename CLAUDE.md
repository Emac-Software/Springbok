# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for **Springbok Media**, a niche digital marketing agency specializing in private club engagement (golf clubs, country clubs, sports clubs in Ontario). The site is a greenfield build — no framework or build system has been scaffolded yet.

- **Primary goal:** Lead generation. Every page should funnel toward the "Book a Discovery Call" CTA.
- **Target audience:** Decision-makers at private clubs (GMs, Presidents, Marketing/Comms Directors) who value tradition, professionalism, and discretion.
- **Domain:** springbokmedia.com (GoDaddy)

## Tech Stack

**Vite + React**, with Tailwind CSS and React Router. Path alias `@/` maps to `src/`.

- `npm run dev` — start dev server

## Site Architecture

Six pages: **Home, Services, About, Case Studies, Industries, Contact.**

Every page includes a persistent nav and footer. The primary CTA ("Book a Discovery Call") routes to a **Calendly embed**.

Contact form fields: Name, Business Name, Role/Title, Email, Phone (optional), Message/Needs.

## Brand & Design

**Colors** — defined as CSS variables in `src/index.css` `:root` and mapped to Tailwind utilities in `tailwind.config.js`:

| Variable | Tailwind | Hex | Use |
|---|---|---|---|
| `--color-white` | `white` | `#ffffff` | Page/section default background |
| `--color-charcoal` | `charcoal` | `#1c1c1a` | Default text color |
| `--color-cream` | `cream` | `#f5f4ef` | Warm neutral, cards, accents |
| `--color-camel` | `camel` | `#daaf6a` | Primary accent, CTAs, highlights |
| `--color-forest` | `forest` | `#3a5c40` | Secondary accent, buttons |
| `--color-offwhite` | `offwhite` | `#faf9f6` | Subtle section backgrounds |
| `--color-periwinkle` | `periwinkle` | `#7b8fbe` | Tertiary accent |
| `--color-textmuted` | `textmuted` | `#6b6760` | Body copy, secondary text |

**Typography** — defaults set in `src/index.css` `@layer base`, mapped in `tailwind.config.js`:

| Element | Font | Tailwind utility |
|---|---|---|
| `h1`–`h4` | Cormorant Garamond | `font-serif` |
| `p`, `html` | Jost | `font-sans` |
| Logo / display | Redondo (regular) | `font-redondo` |
| Display bold | Redondo Bold | `font-redondo-bold` |

**Coding conventions — Tailwind vs. `style={}`:**

Use Tailwind classes for **all static styling**. Only use `style={}` when the value is genuinely dynamic (computed at runtime) or cannot be expressed in Tailwind.

| Situation | Use |
|---|---|
| Static color, size, spacing, shadow, border | Tailwind class |
| Value from JS state or computed at runtime | `style={}` |
| `color-mix()` expressions | `style={}` |
| Multi-stop custom gradients | `style={}` |
| Non-standard CSS properties (`scrollbarWidth`, `WebkitOverflowScrolling`, `scrollSnapType`) | `style={}` |
| Direct DOM manipulation (e.g. `onError` hide) | `element.style.X` |

When a `style={}` block mixes dynamic and static properties, extract the static ones to `className` and keep only the dynamic ones in `style={}`.

**Coding conventions — colors and typography:**
- **Do not add `text-charcoal` to `h1`–`h4` or `p` elements** — they inherit it from the body default.
- **Do not add `font-serif` to `h1`–`h4`** — they inherit it from the base layer.
- **Do not add `font-sans` to `p` elements** — they inherit it from the base layer.
- Only add explicit font/color classes when intentionally overriding the default (e.g. `text-white` on dark backgrounds, `font-redondo` for display headlines, `text-camel` for accent text).
- Weight modifiers (`font-light`, `font-medium`, `font-semibold`) are always explicit — add them as needed.
- Section backgrounds (`bg-white`, `bg-offwhite`, `bg-forest`, etc.) are always explicit since they vary per section.

**Logo assets** are in `/public/logo/`:
- `head-logo.svg` — logomark only (prefer SVG)

**Aesthetic direction:** Warm, confident, modern, grounded. Avoid generic full-service agency layouts and flashy tech-startup aesthetics. Animations should be subtle — clean hover states and scroll fade-ins only, no heavy motion.

**DO NOT TEST**