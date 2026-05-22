import type { Project } from "@/types/project";

const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

export function hasProjectImage(project: Project): project is Project & {
  image: string;
} {
  if (!project.image) {
    return false;
  }

  const image = project.image.trim().toLowerCase();
  return (
    image.startsWith("/") &&
    imageExtensions.some((extension) => image.endsWith(extension))
  );
}
