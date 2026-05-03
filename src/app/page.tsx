import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const focusAreas = [
  {
    title: "Full-Stack Systems",
    description:
      "I build complete web applications with modern frontend interfaces, backend APIs, database-backed workflows, and deployment-ready architecture.",
  },
  {
    title: "AI-Assisted Tools",
    description:
      "I design tools that use AI to turn unstructured inputs such as job postings, documents, and receipts into structured, useful information.",
  },
  {
    title: "Computer Vision & OCR",
    description:
      "I work on image-based systems for occupancy analysis, document understanding, OCR pipelines, and practical automation workflows.",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            What I Build
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950">
            Practical systems with clear user value.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-zinc-950">
                {area.title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

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