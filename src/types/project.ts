export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image?: string;
  video?: string;
  categories: string[];
  techStack: string[];
  features: string[];
  problem: string;
  solution: string;
  role: string;
  impact: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    aiOrCv?: string;
    deployment?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
};