# Jaeseong Yoon Portfolio

Personal software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

This site showcases my selected full-stack, AI-assisted, OCR, and computer vision projects. Each project page is designed to present the project overview, key features, tech stack, screenshots, demo videos, GitHub links, and live demo links.

## Overview

This portfolio is built as a project showcase for software engineering opportunities. The goal is to clearly present practical projects that solve real workflow problems and demonstrate production-minded engineering.

Current featured projects include:

- ApplyPilot — AI Job Search Operating System
- DocuParse — AI Document and Receipt Parser
- Smart Seat — Facility Congestion Analysis System

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Features

- Responsive portfolio homepage
- Project listing page
- Dynamic project detail pages
- About page with background, skills, and experience
- Contact page with email, LinkedIn, and GitHub links
- Data-driven project structure using `src/data/projects.ts`
- Placeholder sections for project images and demo videos

## Project Structure

```txt
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ProjectCard.tsx
├── data/
│   └── projects.ts
└── types/
    └── project.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

## Development Notes

Project information is managed in:

```txt
src/data/projects.ts
```

To add a new project, add a new object to the `projects` array with the following fields:

```ts
{
  slug: "project-slug",
  title: "Project Title",
  subtitle: "Short project category",
  description: "Short card description",
  longDescription: "Detailed project description",
  image: "/images/project/thumbnail.png",
  video: "/videos/project-demo.mp4",
  techStack: ["Next.js", "TypeScript"],
  features: ["Feature 1", "Feature 2"],
  githubUrl: "",
  liveUrl: "",
}
```

Images and demo videos should be placed under the `public` directory:

```txt
public/
├── images/
└── videos/
```

## Status

This portfolio is currently under development. Project screenshots, demo videos, GitHub links, live demo links, and additional project details will be added as the site is completed.

## Deployment

This project is intended to be deployed on Vercel.