# Annotations

A personal blog by Shreyas Panhalkar exploring software engineering, history, philosophy, mythology, physics, and more.

## Development

Install dependencies:
```bash
npm install
```

Run local development server:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## Tech Stack

- Built with [Eleventy](https://www.11ty.dev/) v3
- [Flexoki](https://github.com/kepano/flexoki) color scheme by [Steph Ango](https://stephango.com) with custom dark mode
- Markdown with footnote support
- Zero-JavaScript output (static site)
- SVG icons and custom typography

## Project Structure

```
├── content/          # Blog posts and pages
│   ├── blog/        # Blog post markdown files
│   ├── about/       # About page
│   └── index.njk    # Home page
├── _includes/       # Layout templates
│   └── layouts/     # Base, post, and page layouts
├── _data/           # Site metadata and configuration
├── css/             # Stylesheets
│   └── index.css    # Main stylesheet with Flexoki theme
├── public/          # Static assets (copied to _site)
│   └── img/         # Icons and images
└── _site/           # Generated output (git ignored)
```

## Features

- **Dark mode toggle** - Persistent theme switcher with keyboard shortcut (d)
- **Flexoki color scheme** - Warm, readable color palette
- **Custom typography** - Inter/IBM Plex Sans with optimized reading experience
- **Footnotes** - Full markdown footnote support
- **RSS feed** - Atom feed at `/feed/feed.xml`
- **Image optimization** - Automatic AVIF/WebP generation
- **Syntax highlighting** - Code blocks with syntax highlighting

## Writing

Blog posts live in `content/blog/` as markdown files with frontmatter:

```markdown
---
title: Post Title
description: Brief description
date: 2026-01-04
tags:
  - tag1
  - tag2
---

Your content here...
```

Use footnotes with:
```markdown
Text with reference[^1]

[^1]: Footnote content here
```

## License

MIT
