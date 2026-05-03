import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "applypilot",
    title: "ApplyPilot",
    subtitle: "AI Job Search Operating System",
    description:
      "A full-stack AI-powered job search platform that analyzes job postings, scores resume fit, and tracks applications.",
    longDescription:
      "ApplyPilot helps job seekers manage applications more strategically by combining job tracking, resume-job matching, AI-assisted analysis, and application workflow management in one system.",
    image: "/images/applypilot/thumbnail.png",
    video: "/videos/applypilot-demo.mp4",
    techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "AI"],
    features: [
      "Job posting analysis",
      "Resume-job fit scoring",
      "Application tracking dashboard",
      "AI-assisted recommendations",
    ],
    problem:
      "Job seekers often manage applications across scattered spreadsheets, job boards, notes, and resumes, making it difficult to track progress and understand which roles are the best fit.",
    solution:
      "ApplyPilot centralizes job tracking and adds AI-assisted analysis to help users evaluate job postings, compare resume fit, and manage the application workflow more strategically.",
    role:
      "I designed and implemented the full-stack application structure, including the Next.js frontend, backend API flow, database-backed job tracking, and AI-assisted analysis features.",
    impact:
      "This project demonstrates my ability to build an end-to-end product that combines user workflow design, full-stack engineering, and AI-assisted decision support.",
    githubUrl: "https://github.com/jason831444-web/ApplyPilot",
    liveUrl: "",
  },
  {
    slug: "docuparse",
    title: "DocuParse",
    subtitle: "AI Document and Receipt Parser",
    description:
      "An OCR-based document organizer that extracts structured information from receipts, PDFs, and uploaded documents.",
    longDescription:
      "DocuParse processes uploaded documents through OCR and AI-assisted parsing to classify documents, extract key fields, summarize content, and organize files for search and export.",
    image: "/images/docuparse/thumbnail.png",
    video: "/videos/docuparse-demo.mp4",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "OCR", "Docker"],
    features: [
      "Receipt and document upload",
      "OCR text extraction",
      "AI-assisted field parsing",
      "Search, filtering, and export",
    ],
    problem:
      "Receipts, PDFs, and documents often contain useful information, but the data is difficult to search, summarize, or export when it remains trapped in unstructured files.",
    solution:
      "DocuParse uses OCR and AI-assisted parsing to extract structured fields, classify documents, summarize content, and organize uploaded files for search and export.",
    role:
      "I built the full-stack document processing workflow, including upload handling, OCR integration, backend parsing logic, database storage, and the frontend document management interface.",
    impact:
      "This project shows my ability to design practical AI-assisted systems that turn messy real-world inputs into structured and usable information.",
    githubUrl: "https://github.com/jason831444-web/DocuParse",
    liveUrl: "",
  },
  {
    slug: "smart-seat",
    title: "Smart Seat",
    subtitle: "Facility Congestion Analysis System",
    description:
      "A computer vision system that analyzes facility images to estimate occupancy, available seats, and congestion levels.",
    longDescription:
      "Smart Seat uses image-based occupancy analysis to help users understand real-time facility congestion and view historical usage trends through an admin dashboard.",
    image: "/images/smart-seat/thumbnail.png",
    video: "/videos/smart-seat-demo.mp4",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "YOLO", "Docker"],
    features: [
      "Image upload and occupancy analysis",
      "Seat availability estimation",
      "Congestion level classification",
      "Historical analytics dashboard",
    ],
    problem:
      "Students and facility users often do not know how crowded a study space or facility is until they physically arrive, which can waste time and reduce space utilization.",
    solution:
      "Smart Seat analyzes facility images to estimate occupancy, available seats, and congestion levels, then presents current and historical usage data through a dashboard.",
    role:
      "I implemented the full-stack system architecture, including the FastAPI backend, PostgreSQL data model, Next.js dashboard, image upload flow, and computer vision analysis pipeline.",
    impact:
      "This project demonstrates my ability to combine computer vision, backend services, data persistence, and user-facing analytics into one practical system.",
    githubUrl: "https://github.com/jason831444-web/smart-place-analytics",
    liveUrl: "",
  },
];