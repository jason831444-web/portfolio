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
    githubUrl: "",
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
    githubUrl: "",
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
    githubUrl: "",
    liveUrl: "",
  },
];