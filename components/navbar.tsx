"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#experience", label: "Expériences" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#accueil"
          className="font-heading text-xl font-bold tracking-tight text-foreground"
        >
          {"<MK />"}
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild size="sm" className="hidden gap-2 lg:inline-flex">
          <a href="/Mouhamadou-Kane-CV.pdf" download="Mouhamadou-Kane-CV.pdf">
            <Download size={14} />
            CV
          </a>
        </Button>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in border-b border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button asChild size="sm" className="w-full gap-2">
                <a
                  href="/Mouhamadou-Kane-CV.pdf"
                  download="Mouhamadou-Kane-CV.pdf"
                  onClick={() => setMobileOpen(false)}
                >
                  <Download size={14} />
                  Télécharger CV
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
