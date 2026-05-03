import Link from "next/link";

export const metadata = {
  title: "Contact | Jaeseong Yoon",
  description:
    "Contact Jaeseong Yoon for software engineering opportunities and project discussions.",
};

const contacts = [
  {
    label: "Email",
    value: "jason831444@gmail.com",
    href: "mailto:jason831444@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jaeseong-yoon-1822553a9",
    href: "https://www.linkedin.com/in/jaeseong-yoon-1822553a9/",
  },
  {
    label: "GitHub",
    value: "github.com/jason831444-web",
    href: "https://github.com/jason831444-web",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
          Let&apos;s connect.
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          I am currently looking for software engineering opportunities where I
          can contribute to full-stack products, AI-assisted systems, and
          practical engineering tools.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {contacts.map((contact) => (
          <Link
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={
              contact.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {contact.label}
            </p>

            <p className="mt-3 break-words text-lg font-semibold text-zinc-950">
              {contact.value}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}