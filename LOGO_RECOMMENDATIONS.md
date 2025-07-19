# Logo Carousel - Alternative Options

## Current Implementation
✅ **CSS Filter Approach**: Currently using CSS filters to convert white logos to green (#2d5824) on white background.

## Better Long-term Solutions

### Option A: SVG Logos (Recommended)
- **Advantages**: Scalable, can be styled with CSS, smaller file sizes
- **Implementation**: Convert PNG/WebP logos to SVG format
- **CSS Styling**: Use `fill: #2d5824` to color SVG logos green
- **Files to replace**:
  - `aquatech.webp` → `aquatech.svg`
  - `Goodwe-Logo-white.png` → `goodwe-logo.svg`
  - `Sungrow-Logo-white.png` → `sungrow-logo.svg`
  - `Growatt-Logo-white.png` → `growatt-logo.svg`

### Option B: Green PNG Versions
- **Advantages**: Simple replacement, no code changes needed
- **Implementation**: Create green versions of existing logos
- **Color**: Use primary green (#2d5824)
- **Background**: Transparent background

### Option C: CSS Custom Properties for Theming
- **Advantages**: Easy to change colors site-wide
- **Implementation**: Use CSS variables for logo colors
- **Example**: `--logo-color: var(--color-primary)`

## SVG Implementation Example
If you choose SVG logos, the carousel code would become:

```astro
<div class="logo-item">
  <svg class="logo-svg" aria-label="Aquatech">
    <!-- SVG content here -->
  </svg>
</div>
```

```css
.logo-svg {
  fill: var(--color-primary, #2d5824);
  max-height: 60px;
  transition: fill 0.3s ease;
}

.logo-item:hover .logo-svg {
  fill: var(--color-secondary, #7be165);
}
```

## Current Filter Values
The current CSS filters are calibrated for the primary green color:
- Base: `invert(1) sepia(1) saturate(2) hue-rotate(95deg) brightness(0.4) contrast(1.2)`
- Hover: `invert(1) sepia(1) saturate(3) hue-rotate(95deg) brightness(0.5) contrast(1.3)`
