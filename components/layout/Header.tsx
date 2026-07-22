import Link from "next/link";
import { primaryNav } from "@/content/nav";
import { firm } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="font-serif text-base tracking-tight text-ink sm:text-xl"
        >
          {firm.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:gap-x-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
