# Mobile Description Text Design

**Date:** 2026-03-08

## Goal

Show 2-3 sentences of description text on mobile in place of the demo video.

## Approach

- Add `<p class="mobile-description">` in `index.html` between the subtitle and install link
- Hide it by default in base CSS (`display: none`)
- Show it in the existing `@media (max-width: 768px)` block (`display: block`)

## Copy

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

## Files

- Modify: `index.html` — add `<p class="mobile-description">` inside `.card`
- Modify: `styles.css` — add base hide rule + mobile show rule
