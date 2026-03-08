# Mobile Description Text Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Show 2-3 sentences of lorem ipsum description text on mobile screens in place of the demo video.

**Architecture:** Add a `<p class="mobile-description">` element to `index.html` inside `.card`, between the subtitle and install link. Hide it by default in `styles.css` and reveal it inside the existing `@media (max-width: 768px)` block.

**Tech Stack:** Plain HTML + CSS, no build tools.

---

### Task 1: Add description paragraph to HTML and CSS

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

**Step 1: Add the paragraph to `index.html`**

Inside `.card`, between the `<div class="demo-video-wrapper">` block and the `<a id="install-link">` element, insert:

```html
<p class="mobile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
```

The `.card` body should look like:

```html
<div class="card">
    <h1>cmd-find</h1>
    <p class="subtitle">semantic search on any webpage</p>
    <div class="demo-video-wrapper">
        <video src="demo.mov" autoplay loop muted playsinline></video>
    </div>

    <p class="mobile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

    <a id="install-link" class="install-link" href="#" target="_blank" rel="noopener">
        install <span class="arrow">→</span>
    </a>
</div>
```

**Step 2: Hide by default in `styles.css`**

Add this rule to the base styles (after the `.card p ~ p` rule, around line 160):

```css
.mobile-description {
    display: none;
}
```

**Step 3: Show on mobile in `styles.css`**

Inside the existing `@media (max-width: 768px)` block, add:

```css
.mobile-description {
    display: block;
    margin-bottom: 24px;
}
```

**Step 4: Verify visually**

Open `index.html` in a browser.

- **Desktop (full width):** Paragraph is hidden, video is visible. No layout change.
- **Mobile (DevTools → device toolbar → iPhone 12, 390px):** Paragraph is visible with lorem ipsum text, video is hidden, install link flows below the paragraph.

**Step 5: Commit**

```bash
git add index.html styles.css
git commit -m "feat: show description text on mobile in place of demo video"
```
