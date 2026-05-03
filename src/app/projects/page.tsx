import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Jaeseong Yoon",
  description:
    "Selected software engineering projects by Jaeseong Yoon, including full-stack, AI, OCR, and computer vision systems.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Projects
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
          Selected work built around real problems.
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600">
          A collection of full-stack, AI-assisted, OCR, and computer vision
          projects focused on practical workflows, clean interfaces, and
          production-minded system design.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}