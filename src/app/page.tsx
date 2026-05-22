import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const focusAreas = [
  {
    title: "Full-Stack Systems",
    description:
      "I build web applications with modern frontend interfaces, backend APIs, database-backed workflows, testing, and Dockerized local infrastructure.",
  },
  {
    title: "Operational Workflows",
    description:
      "I work on dashboards and decision-support flows for telemetry-style data, job-fit analysis, document review, and other practical user workflows.",
  },
  {
    title: "AI / CV / OCR Integrations",
    description:
      "I integrate OCR, optional local LLM inference, and mock/YOLO computer-vision paths into software products without overstating automation.",
  },
];

export default function Home() {
  const featuredProjects = projects;

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
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Featured Work
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950">
            Selected Projects
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
            A concise set of practical full-stack systems covering facility
            analytics, job-fit decision support, document/OCR workflows, and
            team-built academic planning software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
