import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex aspect-video items-center justify-center bg-zinc-100 text-sm font-medium text-zinc-500">
        Project Image
      </div>

      <div className="space-y-3 p-5">
        <div>
          <p className="text-sm font-medium text-zinc-500">
            {project.subtitle}
          </p>
          <h3 className="mt-1 text-xl font-bold text-zinc-950">
            {project.title}
          </h3>
        </div>

        <p className="text-sm leading-6 text-zinc-600">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}