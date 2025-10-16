"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { roboto } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, LogOut, Settings, UserRound } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/gallery", label: "Gallery" },
  { href: "/jokes", label: "Jokes" },
];

type NavBarProps = {
  user?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null;
  } | null;
};

export const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between px-4 h-14 ${roboto.className}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-semibold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
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
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 rounded-full px-2 pr-3 hover:bg-muted"
                >
                  <Avatar className="h-8 w-8 ">
                    <AvatarImage
                      src={user.image ?? undefined}
                      alt={user.name}
                    />
                    <AvatarFallback className="bg-muted  text-foreground">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{user.name}</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">{user.name}</span>
                  <span className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex items-center gap-2 text-destructive focus:text-destructive"
                  onClick={async function signOut() {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          router.push("/login");
                        },
                      },
                    });
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" aria-label="Sign in">
              <Button size="sm" className="rounded-full px-4 shadow-sm">
                Sign in
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-foreground/80 hover:text-foreground hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Toggle menu"
          // aria-expanded={open}
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
            {user && (
              <li className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted/80">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user.image ?? undefined} alt={user.name} />
                  <AvatarFallback>
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
              </li>
            )}
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
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              {user ? (
                <div className="flex flex-col gap-1">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full justify-start gap-2"
                    onClick={async function signOut(e) {
                      e.preventDefault();
                      await authClient.signOut({
                        fetchOptions: {
                          onSuccess: () => {
                            router.push("/login");
                          },
                        },
                      });
                    }}
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </Button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button className="w-full rounded-full shadow-sm">
                    Sign in
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
