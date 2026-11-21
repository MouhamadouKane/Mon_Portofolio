"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl"
          : "bg-background/75 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="#accueil" className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary font-heading text-sm font-bold text-primary-foreground transition-transform group-hover:-rotate-3">
            MK
          </span>
          <span className="hidden sm:block">
            <span className="block font-heading text-sm font-semibold leading-tight text-foreground">Mouhamadou Kane</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">Data Analyst · Business Analyst</span>
          </span>
          <span className="sr-only sm:hidden">Mouhamadou Kane, accueil</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="outline" className="gap-2 rounded-full">
            <a href="/Mouhamadou-Kane-CV.pdf" download="Mouhamadou-Kane-CV.pdf">
              <Download aria-hidden="true" />
              Télécharger le CV
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      <div id="mobile-navigation" hidden={!mobileOpen} className="animate-fade-in border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full gap-2 rounded-full">
                <a href="/Mouhamadou-Kane-CV.pdf" download="Mouhamadou-Kane-CV.pdf" onClick={() => setMobileOpen(false)}>
                  <Download aria-hidden="true" />
                  Télécharger mon CV
                </a>
              </Button>
            </li>
          </ul>
      </div>
    </header>
  );
}
