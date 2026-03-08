# Mobile-Responsive Design

**Date:** 2026-03-08
**Branch:** feat/mobile-app

## Goal

Make the site mobile-friendly. The demo video should remain visible on desktop but be hidden on mobile.

## Approach

Pure CSS media query — add a `@media (max-width: 768px)` block to `styles.css`. No HTML or JS changes.

## Changes

**`styles.css` — new mobile media query block:**

- `.demo-video-wrapper` → `display: none`
- `.card` → `width: 90vw`, `height: auto`, padding `32px 28px`, `margin-top: 0`
- `.card h1` → `font-size: 28px`
- `.card .subtitle` → `font-size: 20px`
- `.install-link` → `align-self: flex-start`
