"use client";

import Image from "next/image";
import { ArrowDown, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 py-24 lg:flex-row lg:gap-16 lg:py-0">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div
            className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Poste Recherché : CDD / CDI - Octobre 2026
          </div>

          <h1
            className="animate-fade-in-up font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <span className="text-balance">Mouhamadou Kane</span>
          </h1>

          <p
            className="animate-fade-in-up mt-3 font-heading text-xl font-semibold text-primary sm:text-2xl"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Data Analyst & Business Analyst
          </p>

          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            {"Professionnel rigoureux et orienté résultats, spécialisé dans l'analyse des données et l'aide à la prise de décision. Je m'engage à fournir des analyses précises et pertinentes pour soutenir la croissance et l'innovation au sein des organisations."}
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <Button asChild size="lg" className="gap-2">
              <a href="#projets">
                <ArrowDown size={18} />
                Voir mes projets
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="#contact">
                <Send size={18} />
                Me contacter
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <a href="/Mouhamadou-Kane-CV.pdf" download="Mouhamadou-Kane-CV.pdf">
                <Download size={18} />
                Mon CV
              </a>
            </Button>
          </div>
        </div>

        {/* Profile photo */}
        <div
          className="animate-fade-in shrink-0"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-card shadow-xl sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              <Image
                src="/profile.jpg"
                alt="Photo de profil professionnelle"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
