import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "smart-place-analytics",
    title: "Smart Place Analytics",
    subtitle: "Facility Operations Analytics Platform",
    description:
      "Full-stack facility analytics platform for occupancy, telemetry-style data, dashboards, congestion alerts, recommendations, and operator decision workflows.",
    longDescription:
      "Smart Place Analytics is a portfolio MVP for facility operations workflows. It combines a Next.js dashboard, FastAPI backend, PostgreSQL persistence, telemetry-style sensor data, operational alerts, recommendations, decision audits, and a configurable mock/YOLO detector layer.",
    image: "/images/smart-seat/thumbnail.png",
    categories: ["Full-Stack", "Operations Analytics", "Computer Vision"],
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "MQTT",
      "Mosquitto",
      "Recharts",
      "YOLO/Ultralytics",
    ],
    features: [
      "Facility dashboards for occupancy history, telemetry, alerts, recommendations, and operator decisions",
      "FastAPI services and PostgreSQL models for facilities, uploads, occupancy logs, sensor logs, rollups, alerts, job runs, and decision audits",
      "Browser-frame and upload-based monitoring workflows with mock/YOLO detector backends",
      "Synthetic sensor streams, background operation jobs, and optional MQTT ingestion through Mosquitto",
      "Backend tests for congestion logic, live analysis, MQTT parsing, CV evaluation, recommendations, and decision audits",
    ],
    problem:
      "Shared spaces and facilities generate operational signals from occupancy, telemetry, alerts, and operator decisions, but those signals are often disconnected from the dashboards and workflows people use to act on them.",
    solution:
      "The project brings occupancy estimates, telemetry-style data, alerts, recommendations, and decision history into one full-stack dashboard backed by FastAPI, PostgreSQL, and Dockerized local infrastructure.",
    role:
      "I built the full-stack system architecture, including the Next.js dashboard, FastAPI APIs, PostgreSQL models and migrations, detector abstraction, MQTT demo path, background jobs, and backend regression tests.",
    impact:
      "This project demonstrates practical full-stack engineering around operational analytics, telemetry ingestion, dashboard design, database-backed workflows, and honest CV evaluation boundaries.",
    architecture: {
      frontend:
        "Next.js and TypeScript frontend for facility dashboards, upload analysis, live monitoring, admin workflows, Recharts visualizations, recommendations, and decision history.",
      backend:
        "FastAPI backend with services for facility data, uploads, live frame analysis, telemetry ingestion, alerts, rollups, recommendations, decision audits, and background operations jobs.",
      database:
        "PostgreSQL database managed with SQLAlchemy and Alembic for facilities, uploads, analyses, occupancy logs, sensor logs, rollups, alerts, job runs, users, and decision audits.",
      aiOrCv:
        "Configurable detector layer with deterministic mock mode for tests and optional YOLO/Ultralytics person detection for local experimentation.",
      deployment:
        "Docker Compose local stack with PostgreSQL, FastAPI, Next.js, optional sensor simulator, optional operations jobs, and optional Mosquitto MQTT profile.",
    },
    githubUrl: "https://github.com/jason831444-web/smart-place-analytics",
    liveUrl: "",
  },
  {
    slug: "applypilot",
    title: "ApplyPilot",
    subtitle: "Deterministic Job-Fit Decision Support",
    description:
      "Full-stack job-fit analysis and application tracker with authenticated profiles, deterministic scoring, saved analyses, and explainable recommendations.",
    longDescription:
      "ApplyPilot helps new-grad candidates evaluate job postings against a structured profile. It uses deterministic parsing and scoring rather than a black-box model, then stores recommendations, missing skills, work-authorization risk, evidence, and application status in a PostgreSQL-backed workflow.",
    image: "/images/applypilot/thumbnail.png",
    categories: ["Full-Stack", "Decision Support", "Job Search"],
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "JWT Auth",
      "pytest",
    ],
    features: [
      "Authenticated profiles, saved job analyses, application tracking, and dashboard analytics",
      "Deterministic Python engine for skill extraction, seniority signals, work-authorization risk, confidence warnings, and evidence snippets",
      "Profile-change reanalysis workflow to keep saved recommendations and dashboard data consistent",
      "FastAPI service/repository layers with SQLAlchemy models, Alembic migrations, and user-scoped queries",
      "Regression tests for parser edge cases, ownership boundaries, protected workflows, and persisted analysis behavior",
    ],
    problem:
      "New-grad candidates often save many job postings without a consistent way to evaluate fit, identify risk signals, track application state, or understand which skills are missing.",
    solution:
      "ApplyPilot turns messy job descriptions and candidate profile data into structured scores, evidence-backed recommendations, missing-skill feedback, resume-tailoring suggestions, and application tracking workflows.",
    role:
      "I implemented the full-stack platform, including the Next.js UI, FastAPI backend, SQLAlchemy models, deterministic analysis provider, JWT authentication, CSV export, and PostgreSQL-backed tests.",
    impact:
      "This project shows backend-heavy full-stack work with explainable decision logic, durable analysis persistence, authentication, testing, and practical user workflows.",
    architecture: {
      frontend:
        "Next.js frontend for profile management, resume import, job analysis, applications, dashboard analytics, recommendations, and resume-tailoring views.",
      backend:
        "FastAPI backend organized into route, service, repository, schema, model, auth, and deterministic analysis layers.",
      database:
        "PostgreSQL database managed with SQLAlchemy and Alembic for users, profiles, jobs, applications, and stored job analyses.",
      aiOrCv:
        "Rule-based analysis layer that extracts job signals and produces explainable recommendations without relying on an LLM for core scoring.",
      deployment:
        "Docker Compose local stack with deployed frontend/backend links documented in the project README.",
    },
    githubUrl: "https://github.com/jason831444-web/ApplyPilot",
    liveUrl: "https://apply-pilot-tau.vercel.app/dashboard",
  },
  {
    slug: "first-paycheck",
    title: "FirstPaycheck",
    subtitle: "First-Job Financial Planning Simulator",
    description:
      "Full-stack financial planning simulator for new grads and OPT/F-1 workers comparing take-home pay, rent affordability, city tradeoffs, saved budget plans, and practical first-job costs.",
    longDescription:
      "FirstPaycheck helps new grads and OPT/F-1 workers pressure-test a first U.S. job budget before committing to a lease, commute, or offer. It combines a Next.js simulator UI, FastAPI calculation APIs, PostgreSQL-backed saved plans, tax/city data files, Excel/CSV exports, what-if analysis, advisor insights, and practical planning tools.",
    categories: ["Full-Stack", "Financial Planning", "Decision Support"],
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Recharts",
      "ExcelJS",
      "pytest",
    ],
    features: [
      "Salary, tax, FICA exemption, 401k, health insurance, rent, and expense simulation for first-job budgeting",
      "All-state tax estimate engine using JSON tax data for no-income-tax, flat-tax, progressive-tax, and effective-rate estimate states",
      "City and location comparison workflows with rent, transportation cost, affordability score, savings rate, and tax assumption notes",
      "Saved budget plans backed by PostgreSQL with restore, duplicate, delete, and full simulator-state preservation",
      "Excel/CSV exports, what-if analysis, advisor insight cards, apartment affordability checks, and practical planning tools",
    ],
    problem:
      "New grads and OPT/F-1 workers often compare jobs, rent, cities, transportation, taxes, and move-in costs with rough guesses even though those choices determine whether a first paycheck is actually livable.",
    solution:
      "FirstPaycheck centralizes salary, tax, expense, city, rent, and planning assumptions into one full-stack simulator with explainable estimates, saved scenarios, exports, and practical decision-support tools.",
    role:
      "I built the full-stack application, including the Next.js simulator and planning tools, FastAPI calculation endpoints, SQLAlchemy models, Alembic migrations, PostgreSQL saved-plan workflow, export utilities, Docker setup, and pytest tests.",
    impact:
      "This project demonstrates product-minded full-stack engineering around real user decisions, data-driven calculations, dashboard-style visualization, persistence, exports, testing, and clear financial-disclaimer boundaries.",
    architecture: {
      frontend:
        "Next.js and TypeScript frontend for the simulator, modular budget sections, result dashboards, city comparisons, saved plans, affordability checks, export flows, and planning tools.",
      backend:
        "FastAPI backend with routes for simulation, city presets, location comparison, what-if scenarios, advisor insights, saved scenarios, and health checks.",
      database:
        "PostgreSQL database managed with SQLAlchemy and Alembic for saved budget scenarios and simulator-state restoration.",
      deployment:
        "Docker Compose local stack with separate frontend, backend, and PostgreSQL services; backend tests use pytest and representative tax/calculation/API cases.",
    },
    githubUrl: "https://github.com/jason831444-web/first-paycheck",
    liveUrl: "",
  },
  {
    slug: "docuparse",
    title: "DocuParse",
    subtitle: "AI-Assisted Document Workflow",
    description:
      "Document processing workspace that turns PDFs, images, spreadsheets, Office files, and text into searchable, reviewable records with OCR and deterministic parsing.",
    longDescription:
      "DocuParse is a local-first document workflow workspace. It validates uploads, extracts text from PDFs/images/Office files/spreadsheets/text, applies deterministic parsing and category interpretation, stores reviewable records in PostgreSQL, and can optionally use local GGUF inference through llama.cpp.",
    image: "/images/docuparse/thumbnail.png",
    categories: ["Full-Stack", "OCR", "Document Processing"],
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "Tesseract OCR",
      "PyMuPDF",
      "llama.cpp/GGUF",
    ],
    features: [
      "Multi-format upload handling for PDFs, images, Office files, spreadsheets, structured text, and markup files",
      "Upload validation, OCR/text extraction, file-type routing, deterministic parsing, and category interpretation",
      "Reviewable extraction outputs with editable fields, category folders, search/filtering, notifications, and bulk actions",
      "CSV and per-document JSON export workflows",
      "Focused backend tests for upload safety and category normalization behavior",
    ],
    problem:
      "Personal and small-team document collections often mix PDFs, images, spreadsheets, receipts, notes, and Office files, making useful details hard to search, categorize, review, or export.",
    solution:
      "DocuParse converts heterogeneous files into searchable records with OCR/text extraction, deterministic parsing, category interpretation, quality checks, and review-focused UI flows.",
    role:
      "I built the full-stack ingestion and review workflow, including FastAPI document APIs, extraction services, PostgreSQL persistence, category/search behavior, export paths, and the Next.js review interface.",
    impact:
      "This project demonstrates practical AI/OCR integration as a software workflow: outputs are visible, editable, searchable, and reviewable rather than treated as perfect automation.",
    architecture: {
      frontend:
        "Next.js frontend for upload, dashboard, document library, category folders, document detail editing, review queues, notifications, and bulk actions.",
      backend:
        "FastAPI backend for upload validation, storage safety, file ingestion, OCR/text extraction, parsing, category interpretation, quality evaluation, CRUD, reprocessing, and export APIs.",
      database:
        "PostgreSQL database managed with SQLAlchemy and Alembic for document metadata, extracted content, categories, processing state, review state, and workflow fields.",
      aiOrCv:
        "Tesseract/PyMuPDF/Office extraction pipeline with deterministic parsing and optional local llama.cpp/GGUF interpretation for reviewable document understanding.",
      deployment:
        "Docker Compose local stack with PostgreSQL, FastAPI, Next.js, and optional mounted local model directory.",
    },
    githubUrl: "https://github.com/jason831444-web/docuparse",
    liveUrl: "",
  },
  {
    slug: "vision-snn-research",
    title: "CNN, ViT, and SNN Image Classification Research",
    subtitle: "Computer Vision and Neuromorphic Learning Research",
    description:
      "Research-focused image-classification work comparing CNN/ResNet-style, Vision Transformer, and Spiking Neural Network concepts with a NumPy-based SNN simulator.",
    longDescription:
      "This research-focused project summarizes my computer vision and neuromorphic learning work. It compares deep learning architecture ideas for image classification, including CNN/ResNet-style models, Vision Transformer concepts, and Spiking Neural Network research. As part of my BCL Lab internship, I built and tested a 3-layer SNN simulator in NumPy and reviewed Spikeformer-style spiking transformer research.",
    categories: ["Research", "Computer Vision", "Neuromorphic Learning"],
    techStack: [
      "Python",
      "NumPy",
      "PyTorch",
      "CNNs",
      "Vision Transformers",
      "Spiking Neural Networks",
    ],
    features: [
      "Compared CNN/ResNet-style, Vision Transformer, and SNN architecture concepts for image-classification research",
      "Built and tested a 3-layer Spiking Neural Network simulator using NumPy",
      "Reviewed neuromorphic deep learning literature, including Spikeformer-style spiking transformer architectures",
      "Explored power-consumption analysis support for lightweight deep learning model simulation",
    ],
    problem:
      "CNNs, Vision Transformers, and Spiking Neural Networks make different tradeoffs for image classification, but those tradeoffs are easier to understand through focused experiments and simulator work than through papers alone.",
    solution:
      "The project frames model comparison and SNN simulation as research work: implement a small NumPy-based SNN simulator, review related transformer-based spiking architectures, and evaluate architecture tradeoffs without claiming production deployment.",
    role:
      "I built and tested the 3-layer SNN simulator, extended simulator functionality for power-consumption analysis support, and reviewed neuromorphic learning papers during my BCL Lab research internship.",
    impact:
      "This project adds research context to my full-stack portfolio and shows AI/ML foundations in computer vision, neural architecture tradeoffs, and neuromorphic learning.",
    architecture: {
      frontend:
        "No web frontend; this was research and simulation work rather than a product UI.",
      backend:
        "Python/NumPy research scripts and simulator logic for image-classification experiments and SNN behavior.",
      database:
        "No production database; experiment outputs and notes were used for research analysis.",
      aiOrCv:
        "CNN/ResNet-style, Vision Transformer, and Spiking Neural Network concepts for image-classification research.",
      deployment:
        "Local research workflow; this was not a deployed production product.",
    },
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "sam-system",
    title: "SAM Academic Management System",
    subtitle: "Team Academic Planning Platform",
    description:
      "Academic planning and student administration system built with Spring Boot, React/Vite, JPA/MySQL, Google OAuth, and role-based workflows.",
    longDescription:
      "SAM is a team-built academic management platform for course exploration, degree planning, registration workflows, role-based dashboards, and student administration. The project uses a Spring Boot backend, React/Vite frontend, JPA/MySQL persistence, Google OAuth, and automated test tooling.",
    categories: ["Full-Stack", "Team Project", "Academic Planning"],
    techStack: [
      "Spring Boot",
      "Java",
      "React",
      "TypeScript",
      "Vite",
      "JPA",
      "MySQL",
      "Google OAuth",
      "JUnit",
      "Playwright",
    ],
    features: [
      "Role-based academic workflows for students, instructors, advisors, and registrars",
      "Course registration, schedule planning, degree requirements, and override workflows",
      "Spring Boot controllers, services, repositories, and JPA entities",
      "React/Vite frontend pages for academic planning and administration workflows",
      "Testing setup with JUnit, frontend tests, and Playwright API tests",
    ],
    problem:
      "Academic planning tools can make it difficult for students and staff to connect course selection, registration rules, degree requirements, schedules, and role-specific workflows.",
    solution:
      "SAM organizes academic administration into a full-stack application with role-based interfaces, backend APIs, persistence models, planning logic, and testing support.",
    role:
      "I contributed to the team full-stack development workflow across academic planning features, backend-supported course selection logic, and shared GitHub-based collaboration.",
    impact:
      "This project adds Java/Spring and team software engineering evidence while staying secondary to my main full-stack Python/TypeScript portfolio projects.",
    architecture: {
      frontend:
        "React/Vite frontend for dashboards, course registration, course search, degree audit, planner, profile, roster, and administration pages.",
      backend:
        "Spring Boot backend with controllers, services, repositories, security configuration, OAuth flow, PDF/YAML parsing, planning, and registration logic.",
      database:
        "JPA/MySQL persistence model for users, courses, classes, degree requirements, registrations, waivers, holds, schedules, and planning records.",
      deployment:
        "Team project with Maven, frontend test tooling, Playwright API tests, and GitHub-hosted source.",
    },
    githubUrl: "https://github.com/SihoonSung/SBU_25F_CSE416",
    liveUrl: "",
  },
];
