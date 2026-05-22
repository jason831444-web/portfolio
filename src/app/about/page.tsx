export const metadata = {
  title: "About | Jaeseong Yoon",
  description:
    "About Jaeseong Yoon, a Computer Science student focused on product-minded full-stack systems with AI, OCR, and computer vision integrations.",
};

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "SQLAlchemy",
  "Docker",
  "MQTT",
  "Recharts",
  "OpenCV",
  "YOLO/Ultralytics",
  "Tesseract OCR",
  "PyMuPDF",
  "pytest",
];

const experiences = [
  {
    title: "Computer Science Student",
    organization: "Stony Brook University",
    period: "August 2020 - May 2026",
    description:
      "Studying computer science with coursework in software engineering, systems, algorithms, computer networks, machine learning, computer vision, and offensive security.",
  },
  {
    title: "Research Intern",
    organization: "SUNY Korea BCL Lab",
    period: "June 2025 - August 2025",
    description:
      "Worked on spiking neural network research, including implementing a 3-layer SNN with NumPy and exploring neuromorphic computing concepts.",
  },
  {
    title: "Military Service",
    organization: "Republic of Korea Marine Corps",
    period: "August 2021 - February 2023",
    description:
      "Completed mandatory military service in a structured, high-accountability environment requiring discipline, teamwork, and operational responsibility.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          About
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
          I build practical software systems that connect product thinking with
          engineering.
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          I am Jaeseong Yoon, a Computer Science student at Stony Brook
          University. My work focuses on full-stack applications, AI-assisted
          document workflows, telemetry-style dashboards, and computer vision
          integrations. I enjoy building projects that solve concrete workflow
          problems and can be explained clearly through working code.
        </p>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Core Skills</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Focus Areas</h2>

          <div className="mt-5 space-y-4 text-zinc-600">
            <p>
              Full-stack product development with modern frontend frameworks,
              typed APIs, backend services, relational databases, and deployment
              workflows.
            </p>

            <p>
              Practical systems that turn messy inputs such as telemetry-style
              signals, job postings, documents, and images into useful
              dashboards, records, and decisions.
            </p>

            <p>
              Portfolio projects grounded in FastAPI, Next.js, PostgreSQL,
              Docker, tests, and honest AI/CV/OCR integration boundaries.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Background
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950">
            Education and Experience
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <div
              key={`${experience.title}-${experience.organization}`}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950">
                    {experience.title}
                  </h3>
                  <p className="text-zinc-600">{experience.organization}</p>
                </div>

                <p className="text-sm font-medium text-zinc-500">
                  {experience.period}
                </p>
              </div>

              <p className="mt-4 leading-7 text-zinc-600">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
