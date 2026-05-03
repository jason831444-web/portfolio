import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Jaeseong Yoon",
    };
  }

  return {
    title: `${project.title} | Jaeseong Yoon`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm font-semibold text-zinc-500 transition hover:text-zinc-950"
      >
        ← Back to Projects
      </Link>

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            {project.subtitle}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            {project.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                View GitHub
              </Link>
            )}

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
              >
                Live Demo
              </Link>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm">
          <div className="relative aspect-video">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-100">
                <span className="text-sm font-medium text-zinc-400">
                  Image coming soon
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Problem</h2>
          <p className="mt-4 leading-7 text-zinc-600">{project.problem}</p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Solution</h2>
          <p className="mt-4 leading-7 text-zinc-600">{project.solution}</p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">My Role</h2>
          <p className="mt-4 leading-7 text-zinc-600">{project.role}</p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Impact</h2>
          <p className="mt-4 leading-7 text-zinc-600">{project.impact}</p>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            System Design
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">
            Architecture
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-zinc-950">Frontend</h3>
            <p className="mt-2 leading-7 text-zinc-600">
              {project.architecture.frontend}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-950">Backend</h3>
            <p className="mt-2 leading-7 text-zinc-600">
              {project.architecture.backend}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-950">Database</h3>
            <p className="mt-2 leading-7 text-zinc-600">
              {project.architecture.database}
            </p>
          </div>

          {project.architecture.aiOrCv && (
            <div>
              <h3 className="font-semibold text-zinc-950">
                AI / Computer Vision
              </h3>
              <p className="mt-2 leading-7 text-zinc-600">
                {project.architecture.aiOrCv}
              </p>
            </div>
          )}

          {project.architecture.deployment && (
            <div className="md:col-span-2">
              <h3 className="font-semibold text-zinc-950">Deployment</h3>
              <p className="mt-2 leading-7 text-zinc-600">
                {project.architecture.deployment}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Key Features</h2>

          <ul className="mt-5 space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-zinc-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Tech Stack</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {project.video && (
        <section className="mt-16">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-zinc-950">Demo Video</h2>
            <p className="mt-2 text-zinc-600">
              A walkthrough video will be added here once the project demo is
              recorded.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
            <div className="flex aspect-video items-center justify-center text-sm font-medium text-zinc-500">
              Demo Video Placeholder
            </div>
          </div>
        </section>
      )}
    </div>
  );
}