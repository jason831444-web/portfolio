# Jaeseong Yoon Portfolio

Personal software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

This site showcases selected full-stack software projects with AI/CV/OCR integrations, including facility analytics, job-fit decision support, document processing, and academic planning work.

## Overview

This portfolio is built as a project showcase for software engineering opportunities. The goal is to clearly present practical projects that solve real workflow problems through frontend interfaces, backend APIs, database-backed workflows, tests, and Dockerized local infrastructure.

Current featured projects include:

- Smart Place Analytics — Facility Operations Analytics Platform
- ApplyPilot — Deterministic Job-Fit Decision Support
- DocuParse — AI-Assisted Document Workflow
- SAM Academic Management System — Team Academic Planning Platform

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
- Conditional project image rendering that hides missing image areas cleanly

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
  techStack: ["Next.js", "TypeScript"],
  features: ["Feature 1", "Feature 2"],
  githubUrl: "",
  liveUrl: "",
}
```

Images should be placed under the `public` directory:

```txt
public/
└── images/
```

## Status

This portfolio is maintained as a concise project showcase. Project pages use existing image assets when available and hide media areas when no valid image is configured.

## Deployment

This project is intended to be deployed on Vercel.
