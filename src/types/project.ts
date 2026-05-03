export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  video?: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
};