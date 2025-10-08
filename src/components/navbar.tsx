"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { roboto } from "@/lib/fonts";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/gallery", label: "Gallery" },
  { href: "/jokes", label: "Jokes" },
];

export const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav
        className={`mx-auto max-w-5xl flex items-center justify-between px-4 h-14 ${roboto.className}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-semibold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          NextTutorial
        </Link>

        <ul className="hidden md:flex gap-1">
          {NAV_LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition
                    ${
                      active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    }`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-foreground/80 hover:text-foreground hover:bg-muted transition"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          className="md:hidden border-t border-border bg-background/95 backdrop-blur"
          role="dialog"
          aria-modal="false"
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block w-full px-3 py-2 rounded-md text-sm font-medium transition
                      ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted"
                      }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};
