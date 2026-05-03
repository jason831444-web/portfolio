import Image from "next/image";
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
      <div className="relative aspect-video bg-zinc-100">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-100 px-6 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Project Preview
              </p>
              <p className="mt-2 text-lg font-bold text-zinc-700">
                {project.title}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {project.categories.slice(0, 3).map((category) => (
              <span
                key={category}
                className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-medium text-white"
              >
                {category}
              </span>
            ))}
          </div>

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