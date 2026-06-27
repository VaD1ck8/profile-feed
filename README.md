# Profile Feed

A responsive profile page with a filterable post feed, built as a test assignment.

## Features

- **Grid / List view toggle** — persisted in `localStorage`, resets to grid on mobile (< 1200 px)
- **Date range filter** — MUI date pickers; filters posts by creation date
- **Pagination** — "Load more" button that reveals 8 posts at a time
- **Empty state** — shown when the active filter returns no results
- **Responsive layout** — fluid grid adapts to viewport width

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI |
| Vite 5 | Build / dev server |
| MUI v6 + Emotion | UI components & theming |
| MUI X Date Pickers | Date range inputs |
| date-fns | Date formatting & comparison |
| vite-plugin-svgr | SVG files as React components |

## Project Structure

```
src/
├── data/           # Static posts dataset
├── features/
│   ├── feed/       # PostCard, PostGrid, EmptyState, LoadMore
│   ├── filter/     # DateRangeFilter, DateField
│   ├── profile/    # Profile header
│   └── view/       # ViewToggle (grid / rows)
├── hooks/          # useFeed — single source of state
├── lib/            # date helpers, filterByDate
├── shared/icons/   # SVG icons as React components
├── styles/         # CSS custom properties, layout, components
└── theme/          # MUI theme overrides
```

## Getting Started

```bash
cd profile-feed
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
