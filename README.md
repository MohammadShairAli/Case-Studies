# Case Study Portfolio

A responsive React case-study portfolio for presenting AI automation projects in a polished, data-driven format. The app is built with Vite, React, Tailwind CSS, and React Router. Each case study is powered by structured JavaScript data, so new projects can be added without rebuilding the page layout.

## Overview

This project showcases three AI-focused case studies:

- Bol.com Automation Pipeline
- Healthcare Appointment Voice Agent
- Restaurant Order Taking Voice Agent

Each project includes a complete case-study page with:

- Dynamic project routing
- Fixed navigation with active section highlighting
- Hero section with project stats
- Executive overview
- Performance benchmark cards
- Interactive SVG benchmark charts with hover tooltips
- Implementation phases
- Technology stack grid
- Optional ROI summary section
- Mobile-first responsive layouts

The goal of the project is to make technical AI work easy to understand for clients, recruiters, stakeholders, or anyone reviewing the implementation approach and business impact.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Component-based user interface |
| Vite 5 | Development server and production bundler |
| Tailwind CSS 3 | Responsive utility-first styling |
| React Router 6 | Client-side routing for project pages |
| SVG | Interactive benchmark charts |
| Simple Icons CDN | Technology stack icons |

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

Recommended:

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The local development server runs at:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The production build is generated in:

```text
dist/
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   ├── _redirects
│   └── images/
│       ├── image*.png
│       ├── p2/
│       └── p3/
│
├── src/
│   ├── components/
│   │   ├── BenchmarkChart.jsx
│   │   ├── Executive.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Performance.jsx
│   │   ├── Phases.jsx
│   │   ├── ROI.jsx
│   │   └── TechStack.jsx
│   │
│   ├── data/
│   │   ├── project1.js
│   │   ├── project2.js
│   │   ├── project3.js
│   │   └── projects.js
│   │
│   ├── hooks/
│   │   └── useReveal.js
│   │
│   ├── pages/
│   │   └── CaseStudy.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Key Files Explained

### `src/data/projects.js`

This file registers all available case studies and assigns each one a URL slug.

Example:

```js
const projects = [
  { slug: 'bol-automation', data: project1 },
  { slug: 'voice-agent-healthcare', data: project2 },
  { slug: 'voice-agent-restaurant', data: project3 },
]
```

React Router uses this registry to generate the project routes automatically.

### `src/data/project1.js`, `project2.js`, `project3.js`

These files contain the content for each case study. The layout is not hardcoded per project. Instead, each project provides structured data for:

- Metadata
- Hero content
- Performance benchmarks
- Executive overview
- Implementation phases
- Tech stack
- Optional ROI data

### `src/pages/CaseStudy.jsx`

This is the main page template. It receives one project object and renders every section using reusable components.

It also updates:

- Browser tab title
- Favicon
- Scroll reveal animations when switching projects

### `src/components/Navbar.jsx`

The navbar is dynamic. It displays the common navigation links for every project:

- Overview
- Benchmarks
- Process
- Tech Stack

If a project includes an ROI section, the navbar automatically adds:

- ROI Summary

For example, Project 3 has ROI data, so the ROI navigation link appears only there.

### `src/components/Performance.jsx`

This section renders:

- Before/after metric cards
- An interactive benchmark chart if chart data exists
- A fallback image if no chart data exists

### `src/components/BenchmarkChart.jsx`

This component replaces static graph images with a real interactive SVG chart.

Features:

- Red manual phase line
- Blue AI agent phase line
- Filled performance areas
- Percentage y-axis
- Dynamic x-axis labels
- Hover/focus tooltips on each point
- Annotation boxes
- Fully responsive scaling on smaller screens

Chart points are controlled from each project data file.

Example:

```js
chart: {
  labels: ['Availability', 'Order Speed', 'Accuracy'],
  series: {
    manual: [
      { label: 'Availability', name: 'Manual phase', value: 27 },
      { label: 'Order Speed', name: 'Manual phase', value: 20 },
      { label: 'Accuracy', name: 'Manual phase', value: 55 },
    ],
    ai: [
      { label: 'Availability', name: 'AI agent phase', value: 99 },
      { label: 'Order Speed', name: 'AI agent phase', value: 95 },
      { label: 'Accuracy', name: 'AI agent phase', value: 97 },
    ],
  },
}
```

The `value` field controls where the point appears on the chart as a percentage.

### `src/components/ROI.jsx`

This section renders only when the current project has a `roi` object.

If no ROI data exists, the section is skipped completely.

### `src/hooks/useReveal.js`

This hook powers the scroll-triggered reveal animations across sections.

## Data Model

Each project follows this general structure:

```js
const project = {
  meta: {},
  hero: {},
  performance: {},
  executive: {},
  phases: [],
  techStack: {},
  roi: {}, // optional
}
```

### Metadata

```js
meta: {
  title: 'Restaurant Voice Agent',
  subtitle: 'Case Study - AI-Powered Restaurant Order Taking',
  browserTabTitle: 'Case Study | Restaurant Order Taking Voice Agent',
  favicon: '/images/p3/image1.png',
}
```

### Hero

```js
hero: {
  badge: 'Case Study',
  heading: 'Restaurant Order Taking Voice Agent',
  subheading: 'AI-Powered Order Processing 24/7',
  description: 'Short project summary...',
  bannerImage: '/images/p3/image1.png',
  stats: [
    { value: '<1s', label: 'AI Response Time' },
    { value: '97%', label: 'Order Accuracy' },
  ],
}
```

### Performance

```js
performance: {
  sectionLabel: 'Performance Benchmarks',
  heading: 'Manual vs AI Agent',
  description: 'Benchmark summary...',
  chartImage: '/images/p3/image7.png',
  chartAlt: 'Performance benchmark chart',
  chart: {},
  metrics: [
    { before: '4-6 min', after: '~45 sec', label: 'Order Time' },
  ],
}
```

The `chartImage` field is kept as a fallback. The app uses the interactive chart when `chart` data is available.

### Phases

```js
phases: [
  {
    number: '01',
    label: 'Phase 1',
    title: 'Customer Interaction & Voice Capture',
    description: 'What happens in this phase...',
    image: '/images/p3/image8.png',
    imageAlt: 'Phase diagram',
    bullets: [
      { bold: 'Voice Call:', text: 'Customer speaks to the AI agent.' },
    ],
  },
]
```

### Tech Stack

```js
techStack: {
  sectionLabel: 'Technology',
  heading: 'Tech Stack',
  items: [
    { name: 'Google Gemini', category: 'AI / LLM Core', icon: 'googlegemini' },
  ],
}
```

The `icon` value is passed to the Simple Icons CDN.

### ROI

```js
roi: {
  sectionLabel: 'Return on Investment',
  heading: 'ROI Summary',
  quote: 'Business impact summary...',
  drivers: [
    {
      driver: 'Labor Cost Reduction',
      impact: '~$1,200-$3,500/month',
      notes: 'Replaces 1-2 order-taking roles per location',
    },
  ],
}
```

This section is optional.

## Adding a New Project

### 1. Create a new data file

Copy an existing project file:

```text
src/data/project3.js
```

Create:

```text
src/data/project4.js
```

Update the content, images, metrics, phases, tech stack, and optional ROI data.

### 2. Register the project

Open:

```text
src/data/projects.js
```

Import the new project:

```js
import project4 from './project4'
```

Add it to the project registry:

```js
const projects = [
  { slug: 'bol-automation', data: project1 },
  { slug: 'voice-agent-healthcare', data: project2 },
  { slug: 'voice-agent-restaurant', data: project3 },
  { slug: 'your-new-project-slug', data: project4 },
]
```

The page will be available at:

```text
/project/your-new-project-slug
```

### 3. Add images

Place images in:

```text
public/images/
```

Recommended pattern:

```text
public/images/p4/image1.png
public/images/p4/image2.png
public/images/p4/image3.png
```

Reference them in data files like this:

```js
image: '/images/p4/image1.png'
```

## Routing

Routes are generated from the project registry.

| Route | Description |
| --- | --- |
| `/` | Redirects to the first registered project |
| `/project/bol-automation` | Project 1 |
| `/project/voice-agent-healthcare` | Project 2 |
| `/project/voice-agent-restaurant` | Project 3 |

Unknown routes display a simple 404 page.

## Responsive Design

The site is designed to work across:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors

Responsive improvements include:

- Mobile-friendly navbar with hamburger menu
- Scalable benchmark charts
- Stacked ROI rows on mobile
- Reduced mobile spacing
- Flexible metric cards
- Overflow protection for narrow screens

## Deployment

This is a static Vite project and can be deployed to any static hosting platform.

Recommended platforms:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Vercel

The project includes:

```text
vercel.json
```

This file rewrites all routes to `index.html`, which is required for React Router direct links.

Vercel settings:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

### Netlify

The project includes:

```text
public/_redirects
```

This file supports client-side routing after deployment.

Netlify settings:

```text
Build Command: npm run build
Publish Directory: dist
```

## GitHub Push Checklist

Push these files and folders:

```text
src/
public/
index.html
package.json
package-lock.json
postcss.config.js
tailwind.config.js
vite.config.js
vercel.json
.gitignore
README.md
```

Do not push:

```text
node_modules/
dist/
```

These are ignored by `.gitignore`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

## Current Projects

### Project 1: Bol.com Automation Pipeline

An AI-powered e-commerce automation pipeline that moves product processing from manual data entry to high-throughput automated listing generation.

Highlights:

- Product data extraction
- Trademark and duplicate filtering
- AI content rewriting
- Media transformation
- Semantic category mapping
- EAN and marketplace API integration

### Project 2: Healthcare Appointment Voice Agent

An AI-powered scheduling assistant for healthcare clinics, supporting patient appointment booking, rescheduling, cancellation, and inquiries.

Highlights:

- Voice and WhatsApp interaction
- Intent classification
- Appointment slot matching
- Calendar synchronization
- Multi-channel confirmation
- Dashboard analytics

### Project 3: Restaurant Order Taking Voice Agent

An AI-powered restaurant order-taking system that handles customer orders through voice or WhatsApp without human staff involvement at the order-taking stage.

Highlights:

- Voice and WhatsApp ordering
- Menu validation
- Kitchen notification
- Order confirmation
- Revenue and analytics tracking
- ROI summary

## Notes

- Static graph images are still available as fallback assets.
- Interactive charts are controlled by data in each project file.
- ROI navigation appears only for projects that include ROI data.
- The app is frontend-only and does not require a backend server.
