import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "docuparse",
    title: "DocuParse",
    subtitle: "AI-Powered Document Understanding System",
    description:
      "A full-stack document understanding system for images, PDFs, spreadsheets, and text files with extraction, classification, review, and search workflows.",
    longDescription:
      "DocuParse is a full-stack document understanding platform that processes images, PDFs, spreadsheets, and text files through OCR, heuristic parsing, and local AI inference. It supports document extraction, classification, review workflows, search, category management, and bulk document actions in a Dockerized environment.",
    image: "/images/docuparse/thumbnail.png",
    video: "/videos/docuparse-demo.mp4",
    categories: ["Full-Stack", "OCR", "AI", "Document Processing"],
    techStack: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "OCR",
      "llama.cpp",
      "GGUF",
    ],
    features: [
      "Multi-format document upload and processing",
      "OCR and heuristic parsing pipeline",
      "Local GGUF-based AI inference",
      "Document classification, review, and search workflows",
      "Notifications, category management, and bulk actions",
    ],
    problem:
      "Documents such as receipts, PDFs, spreadsheets, and text files often contain useful information, but that information is difficult to search, classify, review, or export when it remains trapped in unstructured files.",
    solution:
      "DocuParse combines OCR, heuristic parsing, and local GGUF-based AI inference to extract structured fields, classify documents, summarize content, and organize files into searchable and reviewable workflows.",
    role:
      "I engineered the full-stack document understanding workflow, including upload handling, OCR integration, parsing logic, local AI inference routing, database persistence, search/category features, and frontend review workflows.",
    impact:
      "This project demonstrates my ability to build a practical AI-assisted system that handles messy real-world documents, improves extraction reliability, and turns unstructured files into usable product data.",
    architecture: {
      frontend:
        "Next.js frontend for document upload, dashboard views, document detail pages, review workflows, category management, search, filters, notifications, and bulk actions.",
      backend:
        "FastAPI backend that manages file uploads, OCR processing, heuristic parsing, local AI inference routing, document APIs, reprocessing, and workflow actions.",
      database:
        "PostgreSQL database for storing document metadata, extracted fields, summaries, categories, processing status, review state, and search-related information.",
      aiOrCv:
        "OCR and local GGUF-based AI inference pipeline using fallback routing across multiple document formats to improve extraction and classification reliability.",
      deployment:
        "Dockerized full-stack environment with separate frontend, backend, and database services for reproducible local development.",
    },
    githubUrl: "https://github.com/jason831444-web/DocuParse",
    liveUrl: "",
  },
  {
    slug: "smart-seat",
    title: "Smart Seat",
    subtitle: "Facility Congestion Analysis System",
    description:
      "A full-stack facility congestion analysis platform that estimates people count, occupied seats, available seats, and congestion levels from facility images and live frames.",
    longDescription:
      "Smart Seat is a facility congestion analysis system that supports image upload analysis, live frame-based monitoring, historical occupancy tracking, and admin management workflows. It uses computer vision to estimate people count, occupied seats, available seats, and congestion levels, then presents current and historical usage data through dashboards.",
    image: "/images/smart-seat/thumbnail.png",
    video: "/videos/smart-seat-demo.mp4",
    categories: ["Full-Stack", "Computer Vision", "Analytics"],
    techStack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "YOLO",
      "Computer Vision",
    ],
    features: [
      "Image upload and facility congestion analysis",
      "YOLO-based person detection",
      "Occupied seat and available seat estimation",
      "Live frame-based monitoring workflow",
      "Historical occupancy tracking and analytics dashboards",
    ],
    problem:
      "Students and facility users often do not know how crowded a study space or facility is until they physically arrive, which can waste time and reduce facility usage efficiency.",
    solution:
      "Smart Seat analyzes facility images and live frames to estimate people count, occupied seats, available seats, and congestion levels, then displays real-time and historical usage data through a dashboard.",
    role:
      "I built the full-stack system architecture, including the Next.js dashboard, FastAPI backend, PostgreSQL persistence layer, image upload workflow, YOLO-based analysis pipeline, and analytics views.",
    impact:
      "This project demonstrates my ability to combine computer vision, backend services, persistent analytics, and user-facing dashboards into a practical facility monitoring system.",
    architecture: {
      frontend:
        "Next.js dashboard for facility lists, facility detail pages, occupancy history, admin views, live monitoring screens, and analytics charts.",
      backend:
        "FastAPI backend that handles facility data, image uploads, occupancy analysis requests, live frame analysis, and historical analytics APIs.",
      database:
        "PostgreSQL database for storing facilities, image analysis results, occupancy logs, congestion history, peak-hour summaries, and recent activity data.",
      aiOrCv:
        "YOLO-based computer vision pipeline for person detection, occupancy estimation, available seat calculation, and congestion level classification.",
      deployment:
        "Docker-based full-stack setup with backend, frontend, and PostgreSQL services for local development.",
    },
    githubUrl: "https://github.com/jason831444-web/smart-place-analytics",
    liveUrl: "",
  },
  {
    slug: "applypilot",
    title: "ApplyPilot",
    subtitle: "Rule-Based Job-Fit Evaluation Platform",
    description:
      "A full-stack job application platform that evaluates job postings against a candidate profile using structured rules for new-grad fit, skills, location, and work authorization risk.",
    longDescription:
      "ApplyPilot is a rule-based job-fit evaluation platform that helps candidates evaluate saved job postings against a structured profile. It supports job saving, job-detail analysis, profile-based scoring, recommendation labels, missing-skill detection, seniority warnings, sponsorship-risk flags, and application status tracking in a unified dashboard.",
    image: "/images/applypilot/thumbnail.png",
    video: "/videos/applypilot-demo.mp4",
    categories: ["Full-Stack", "Job Search", "Rule-Based Analysis"],
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    features: [
      "Job saving and application status tracking",
      "Profile-based job-fit scoring",
      "Recommendation labels and missing-skill detection",
      "Seniority and work authorization risk flags",
      "Repeatable job-detail analysis workflow",
    ],
    problem:
      "Job seekers often save postings across different platforms without a consistent way to evaluate fit, track application status, or identify risks such as senior-level requirements, weak skill alignment, or unclear sponsorship support.",
    solution:
      "ApplyPilot evaluates job postings against a candidate profile using structured rules for new-grad fit, skills, location, and work authorization risk, then organizes results into a trackable application workflow.",
    role:
      "I implemented the full-stack platform, including the Next.js frontend, FastAPI backend, PostgreSQL data model, job tracking workflow, saved application views, candidate profile logic, and rule-based evaluation system.",
    impact:
      "This project demonstrates my ability to build a practical workflow tool that combines full-stack engineering with structured decision logic for a real job-search use case.",
    architecture: {
      frontend:
        "Next.js frontend for job tracking, saved applications, job detail pages, candidate profile management, recommendation labels, and analysis results.",
      backend:
        "FastAPI backend that handles job records, profile data, scoring workflows, saved applications, repeated analysis requests, and API communication.",
      database:
        "PostgreSQL database for storing job postings, candidate profiles, saved applications, application statuses, scoring results, and analysis metadata.",
      aiOrCv:
        "Rule-based evaluation layer for new-grad fit, skills alignment, location fit, seniority warnings, sponsorship risk, and recommendation labels.",
      deployment:
        "Docker-based local development setup with separate frontend, backend, and database services.",
    },
    githubUrl: "https://github.com/jason831444-web/ApplyPilot",
    liveUrl: "",
  },
  {
    slug: "sam-system",
    title: "Student Academic Management System",
    subtitle: "Academic Planning and Course Management Platform",
    description:
      "A student academic management website designed to improve course exploration, degree requirement planning, and academic scheduling workflows.",
    longDescription:
      "The Student Academic Management System is a full-stack academic planning platform designed to improve and extend key functions of Stony Brook University’s SOLAR platform. It helps students explore course information, understand degree requirements, and plan academic schedules through a more intuitive interface.",
    // image: "/images/sam-system/thumbnail.png",
    categories: ["Full-Stack", "Academic Planning", "Team Project"],
    techStack: ["Spring Boot", "MySQL", "React", "GitHub Actions"],
    features: [
      "Course information exploration",
      "Degree requirement planning support",
      "Academic scheduling assistance",
      "Course selection algorithm",
      "Automated testing workflow with GitHub Actions",
    ],
    problem:
      "University academic planning systems can be difficult to navigate, making it harder for students to understand course options, degree requirements, and scheduling decisions in one place.",
    solution:
      "The SAM system provides a more intuitive academic management interface for course exploration, degree planning, and schedule support, while using backend logic to assist with course selection based on student needs.",
    role:
      "I contributed to the full-stack development workflow, including frontend academic planning features, backend-supported course selection logic, and team collaboration using GitHub Actions.",
    impact:
      "This project demonstrates my ability to work in a team environment, build academic workflow software, and connect frontend usability with backend planning logic.",
    architecture: {
      frontend:
        "React frontend for course exploration, academic planning screens, degree requirement views, and student-facing workflows.",
      backend:
        "Spring Boot backend for academic data APIs, course planning logic, and system workflows.",
      database:
        "MySQL database for storing academic records, course data, requirements, and planning-related information.",
      aiOrCv:
        "Course selection and academic scheduling logic designed to support planning decisions based on degree requirements and student needs.",
      deployment:
        "Team development workflow supported by GitHub Actions for automated testing and shared development practices.",
    },
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "cnn-vs-snn",
    title: "CNN vs. SNN Image Classification Comparison",
    subtitle: "Machine Learning and Neuromorphic Computing Experiment",
    description:
      "An image classification experiment comparing ResNet-152 and a custom 3-layer Spiking Neural Network using Python, NumPy, PyTorch, and Matplotlib.",
    longDescription:
      "This project compares conventional deep learning and spiking neural network approaches for image classification. It evaluates ResNet-152 against a custom 3-layer Spiking Neural Network, analyzing accuracy, loss, computational behavior, and trade-offs between CNN and neuromorphic-style architectures.",
    // image: "/images/cnn-vs-snn/thumbnail.png",
    categories: ["Machine Learning", "Computer Vision", "SNN"],
    techStack: ["Python", "NumPy", "PyTorch", "Matplotlib"],
    features: [
      "ResNet-152 image classification experiment",
      "Custom 3-layer Spiking Neural Network implementation",
      "Accuracy and loss evaluation",
      "Model behavior comparison",
      "Matplotlib result visualization",
    ],
    problem:
      "Conventional CNNs and spiking neural networks have different computational characteristics, but it can be difficult to understand their trade-offs without running controlled image classification experiments.",
    solution:
      "This project compares ResNet-152 with a custom 3-layer SNN, evaluates performance metrics, and visualizes experimental results to understand trade-offs between conventional and spiking neural architectures.",
    role:
      "I conducted the experiments, implemented the SNN comparison workflow, evaluated accuracy and loss, visualized results, and summarized comparative model behavior.",
    impact:
      "This project demonstrates my interest in machine learning, computer vision, and neuromorphic computing, while showing my ability to evaluate model performance experimentally.",
    architecture: {
      frontend:
        "Experiment results were visualized using Matplotlib charts and summary outputs rather than a web frontend.",
      backend:
        "Python-based experimental scripts for training, evaluation, metric tracking, and comparison logic.",
      database:
        "Dataset-driven experiment workflow using image classification data and saved result outputs rather than a production database.",
      aiOrCv:
        "ResNet-152 CNN comparison against a custom 3-layer Spiking Neural Network using PyTorch and NumPy.",
      deployment:
        "Local research and experimentation workflow focused on reproducible model evaluation and visualization.",
    },
    githubUrl: "",
    liveUrl: "",
  },
];