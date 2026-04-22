# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for **Springbok Media**, a niche digital marketing agency specializing in private club engagement (golf clubs, country clubs, sports clubs in Ontario). The site is a greenfield build — no framework or build system has been scaffolded yet.

- **Primary goal:** Lead generation. Every page should funnel toward the "Book a Discovery Call" CTA.
- **Target audience:** Decision-makers at private clubs (GMs, Presidents, Marketing/Comms Directors) who value tradition, professionalism, and discretion.
- **Domain:** springbokmedia.com (GoDaddy)

## Planned Tech Stack

The intended approach is a React app (Create React App or Vite). When scaffolding, prefer **Vite + React** for faster dev server. No framework or package.json exists yet — set these up before adding features.

Once scaffolded, expected commands:
- `npm run dev` — start dev server (Vite)
- `npm run build` — production build
- `npm run preview` — preview production build

## Site Architecture

Six pages: **Home, Services, About Us, Case Studies, Other Industries We Work With, Contact.**

Every page includes a persistent nav and footer. The primary CTA ("Book a Discovery Call") routes to a **Calendly embed**.

Contact form fields: Name, Business Name, Role/Title, Email, Phone (optional), Message/Needs.

## Brand & Design

**Colors (five-color palette):** Warm Camel/Tan, Deep Charcoal/Off-Black, Crisp White, Forest Green, Periwinkle/Soft Blue.

**Typography:**
- Body: Futura
- Headings: Redondo Ave (or creative equivalent with designer discretion)
- Logo wordmark uses a casual script/cursive font

**Logo assets** are in `/media/`:
- `full-logo.png` — full springbok illustration with script text
- `head-logo.svg` / `head-logo.png` — logomark only (use SVG where possible)
- `colors.png` — brand color palette reference

**Aesthetic direction:** Warm, confident, modern, grounded. Avoid generic full-service agency layouts and flashy tech-startup aesthetics. Animations should be subtle — clean hover states and scroll fade-ins only, no heavy motion.

**Copywriting:** Use Lorem Ipsum or AI placeholder copy until final copy is provided.
