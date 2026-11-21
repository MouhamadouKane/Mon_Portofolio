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
    title: "Suivi de la fraude · Ilévia",
    problem:
      "Conception d’un outil Power BI centralisé pour aider les équipes de Keolis Lille Métropole à suivre la fraude et adapter leurs actions sur le terrain.",
    tags: ["Power BI", "DAX", "Business Object", "Excel"],
    highlights: [
      "Application Power BI déployée",
      "Suivi personnalisé par équipe",
      "Données Ilévia intégrées",
    ],
  },
  {
    icon: Users,
    title: "Pilotage décisionnel · SNCF Voyageurs",
    problem:
      "Un outil de Business Intelligence conçu pour donner aux équipes des données fiables et actualisées pour leurs décisions stratégiques.",
    tags: ["Power BI", "Opale", "Excel", "DAX"],
    highlights: [
      "Aide à la décision stratégique",
      "Reporting automatisé",
      "Dashboards interactifs",
    ],
  },
  {
    icon: TrendingUp,
    title: "Analyse de la fraude · MEL",
    problem:
      "Analyse des données de fraude pour la Métropole Européenne de Lille afin de mieux comprendre les tendances et d’éclairer les actions de contrôle.",
    tags: ["Excel", "VBA", "Power BI", "ARCGIS"],
    highlights: [
      "Automatisation Excel avec VBA",
      "Analyse géospatiale ARCGIS",
      "Reporting pour la MEL",
    ],
  },
  {
    icon: PieChart,
    title: "Reporting opérationnel · Ilévia",
    problem:
      "Consolidation de données issues de plusieurs sources pour produire un reporting fiable sur les opérations du réseau Ilévia.",
    tags: ["Power BI", "Business Object", "Excel", "ARCGIS"],
    highlights: [
      "Sources de données consolidées",
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
        <div className="mb-12 flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Projets sélectionnés
            </p>
            <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              De l’analyse à l’aide à la décision.
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-7 text-muted-foreground">
            Quelques exemples de projets data et BI menés dans les secteurs du transport et de la santé.
          </p>
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
                    Contributions
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
