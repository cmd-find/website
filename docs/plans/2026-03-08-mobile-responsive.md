# Mobile Responsive Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a mobile media query to `styles.css` that hides the demo video and adjusts layout for small screens.

**Architecture:** Single `@media (max-width: 768px)` block appended to the existing `styles.css`. No HTML or JS changes required.

**Tech Stack:** Plain CSS, no build tools.

---

### Task 1: Add mobile media query to styles.css

**Files:**
- Modify: `styles.css`

**Step 1: Append the media query**

Add to the bottom of `styles.css`:

```css
@media (max-width: 768px) {
    body:not(.prose-page) {
        overflow: auto;
    }

    .card {
        width: 90vw;
        height: auto;
        padding: 32px 28px;
        margin-top: 0;
    }

    .card h1 {
        font-size: 28px;
    }

    .card .subtitle {
        font-size: 20px;
    }

    .demo-video-wrapper {
        display: none;
    }

    .install-link {
        align-self: flex-start;
    }
}
```

**Step 2: Verify visually**

Open `index.html` in a browser. Use DevTools → toggle device toolbar → set to a phone (e.g. iPhone 12, 390px wide).

Expected:
- No video visible
- Card fits screen with comfortable padding
- Title, subtitle, and install link are readable
- Install link sits at bottom-left

Also verify desktop still looks unchanged at full width.

**Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: hide demo video and adapt layout for mobile screens"
```
