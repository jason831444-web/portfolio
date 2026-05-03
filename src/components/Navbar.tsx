import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-950">
          Jaeseong Yoon
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/projects" className="hover:text-zinc-950">
            Projects
          </Link>
          <Link href="/about" className="hover:text-zinc-950">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-950">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}