import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Jaeseong Yoon",
  description:
    "Selected full-stack software projects by Jaeseong Yoon, including facility analytics, job-fit analysis, financial planning, document/OCR workflows, and academic planning.",
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
          Practical full-stack systems with backend APIs, database-backed
          workflows, dashboards, tests, Docker setup, and carefully scoped
          AI/CV/OCR integrations.
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
