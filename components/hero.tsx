"use client";

import Image from "next/image";
import { ArrowDownRight, Download, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.09),transparent_58%)]"
      />

      <div className="mx-auto grid min-h-[calc(88svh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/40 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Disponible immédiatement · CDI, CDD ou intérim
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Data Analyst · Data Scientist · Expert Power BI
          </p>
          <h1 className="font-heading text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
            Mouhamadou
            <span className="mt-1 block text-primary">Kane.</span>
          </h1>

          <p className="mt-7 max-w-xl font-heading text-xl font-medium leading-snug text-foreground sm:text-2xl">
            Des données claires pour des décisions qui comptent.
          </p>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            3 ans d’expérience data dans le transport (SNCF Voyageurs, Keolis / Ilévia). Je transforme des données complexes en tableaux de bord Power BI et en modèles prédictifs utiles à la prise de décision.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="gap-2 rounded-full px-6">
              <a href="#projets">
                Voir mes projets
                <ArrowDownRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-6">
              <a href="#contact">Me contacter</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-6">
              <a href="https://github.com/MouhamadouKane" target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <a
              href="/Mouhamadou-Kane-CV.pdf"
              download="Mouhamadou-Kane-CV.pdf"
              className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Download aria-hidden="true" size={16} />
              Télécharger mon CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" size={16} className="text-primary" />
            Villeneuve-d&apos;Ascq · Lille, France
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mr-4">
          <div aria-hidden="true" className="absolute -right-4 -top-4 size-24 border-r border-t border-primary/40 sm:-right-6 sm:-top-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-muted shadow-[0_24px_80px_-36px_hsl(var(--foreground)/0.42)]">
            <Image
              src="/profile.jpg"
              alt="Mouhamadou Kane, Data Analyst et Data Scientist"
              fill
              className="object-cover object-[center_24%]"
              priority
              sizes="(max-width: 1024px) 85vw, 38vw"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm font-medium text-white/75">Analyse · Reporting · Décision</p>
              <p className="mt-1 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                La donnée, côté métier.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-left-8 sm:px-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Expertise</p>
            <p className="mt-1 text-sm font-semibold text-foreground">Power BI · SQL · Python</p>
          </div>
        </div>
      </div>
    </section>
  );
}
