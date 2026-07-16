# 0001: Redesign and Consolidation of Themes

We are consolidating the multi-theme architecture into two distinct, high-premium brand options: Option A (Modern Enterprise Cyber, Dark Mode) and Option B (Clean Minimalist Tech, Light Mode). This allows the website to target both developer-focused security audiences and premium business SaaS clients while maintaining extreme visual polish.

## Status
Accepted

## Context
The website's previous "Nordic Surrealist" theme and other multi-theme setups were hardcoded and received negative feedback due to clinical color schemes and forced 4px boxy layouts that stripped out modern CSS details.

## Decision
1. Replace all existing styles in [globals.css](file:///d:/PROJ/maker-ai%20website/maker-ai/app/globals.css) with two polished palettes: Option A (Dark) and Option B (Light).
2. Dynamically modify the theme font system (`--sans-font` and `--serif-font`) to match the visual vibe of each option.
3. Fix [ThemeContext.tsx](file:///d:/PROJ/maker-ai%20website/maker-ai/context/ThemeContext.tsx) to dynamically support switching between "dark" (Option A) and "light" (Option B).
4. Add a custom animated theme toggle in the [Navbar](file:///d:/PROJ/maker-ai%20website/maker-ai/components/Navbar.tsx).
