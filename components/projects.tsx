"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { BarChart3, Users, TrendingUp, PieChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isInView;
}

const projects = [
  {
    icon: BarChart3,
    title: "Application Power BI - Suivi de la Fraude",
    problem:
      "Les equipes de Keolis Lille Metropole avaient besoin d'un outil centralise pour suivre efficacement la fraude et adapter leurs actions sur le terrain.",
    tags: ["Power BI", "DAX", "Business Object", "Excel"],
    highlights: [
      "Application Power BI deployee",
      "Suivi personnalise par equipe",
      "Donnees Ilevia integrees",
    ],
  },
  {
    icon: Users,
    title: "Application Power BI - Decisions Strategiques SNCF",
    problem:
      "La SNCF Voyageurs avait besoin d'un outil BI permettant aux equipes de prendre des decisions strategiques basees sur des donnees fiables et actualisees.",
    tags: ["Power BI", "Opale", "Excel", "DAX"],
    highlights: [
      "Aide a la decision strategique",
      "Reporting automatise",
      "Dashboards interactifs",
    ],
  },
  {
    icon: TrendingUp,
    title: "Analyse des Donnees de Fraude - MEL",
    problem:
      "Traiter et analyser les donnees de fraude pour la Metropole Europeenne de Lille afin de mieux comprendre les tendances et optimiser les controles.",
    tags: ["Excel", "VBA", "Power BI", "ARCGIS"],
    highlights: [
      "Automatisation Excel avec VBA",
      "Analyse geospatiale ARCGIS",
      "Reporting pour la MEL",
    ],
  },
  {
    icon: PieChart,
    title: "Reporting Multi-Outils Ilevia",
    problem:
      "Consolider les donnees provenant de sources multiples pour produire un reporting complet et fiable sur les operations du reseau Ilevia.",
    tags: ["Power BI", "Business Object", "Excel", "ARCGIS"],
    highlights: [
      "Sources de donnees consolidees",
      "Rapports multi-dimensionnels",
      "Visualisations cartographiques",
    ],
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Projets
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Mes realisations"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${i * 0.12}s` : "0s",
                opacity: isInView ? undefined : 0,
              }}
            >
              {/* Header with icon */}
              <div className="flex items-start gap-4 border-b border-border p-6 pb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <project.icon size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 pt-4">
                <div className="mb-3">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Contexte
                  </p>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div className="mt-auto space-y-1.5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Resultats cles
                  </p>
                  {project.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
