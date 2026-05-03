import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Featured Work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950">
              Selected Projects
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}