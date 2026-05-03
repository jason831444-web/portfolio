import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Software Engineer Portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 md:text-6xl">
          Building practical full-stack systems with AI, computer vision, and
          clean product design.
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          I am Jaeseong Yoon, a Computer Science student at Stony Brook
          University. I build production-minded web applications, AI-powered
          tools, and computer vision systems with a focus on real user problems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}