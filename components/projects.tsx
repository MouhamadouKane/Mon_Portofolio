"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { BarChart3, Users, TrendingUp, PieChart, BrainCircuit, Github } from "lucide-react";
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
    icon: TrendingUp,
    title: "Prédiction du trafic & des recettes TGV Nord",
    organization: "SNCF Voyageurs · 2025–2026",
    context:
      "La direction commerciale de l’Axe TGV Nord avait besoin d’anticiper le trafic voyageurs et les recettes ferroviaires.",
    contribution:
      "Pipeline complet de collecte multi-sources, nettoyage, feature engineering et modélisation avec Python et Scikit-Learn. Validation croisée et ajustements itératifs; les prédictions alimentent les tableaux de bord Power BI du management.",
    outcome:
      "Prédictions intégrées aux tableaux de bord Power BI du management.",
    tags: ["Python", "Scikit-Learn", "Power BI"],
    url: null,
  },
  {
    icon: BrainCircuit,
    title: "Crédit scoring bancaire",
    organization: "Junia XP · 2025–2026",
    context:
      "Prédire le risque de défaut de paiement à partir de données bancaires réelles.",
    contribution:
      "Feature engineering sur 20 variables, puis comparaison de la régression logistique, de Random Forest et de XGBoost selon l’AUC-ROC et le recall. Expériences suivies avec MLflow, déploiement Docker et pipeline CI/CD.",
    outcome:
      "Régression logistique retenue pour son meilleur AUC-ROC parmi les modèles évalués et son interprétabilité en contexte réglementaire.",
    tags: ["Python", "Scikit-Learn", "XGBoost", "MLflow", "Docker", "CI/CD"],
    url: "https://github.com/MouhamadouKane/MLPOS_CreditScoring",
  },
  {
    icon: BarChart3,
    title: "Application Power BI d’aide à la décision",
    organization: "SNCF Voyageurs · 2024–2026",
    context:
      "Les équipes commerciales de l’Axe TGV Nord consolidaient manuellement des données issues de plusieurs sources.",
    contribution:
      "Conception et déploiement d’une application Power BI, automatisation du reporting multi-sources et accompagnement de l’équipe sur Databricks.",
    outcome:
      "Application d’aide à la décision déployée et reporting multi-sources automatisé.",
    tags: ["Power BI", "DAX", "Opale", "Excel / VBA", "Databricks"],
    url: null,
  },
  {
    icon: Users,
    title: "Suivi de la fraude · Ilévia",
    organization: "Keolis Lille Métropole · 2023–2024",
    context:
      "Piloter la lutte contre la fraude par équipe de contrôle terrain sur le réseau Ilévia.",
    contribution:
      "Conception d’une application Power BI de suivi par équipe et formation des équipes aux outils de reporting et de visualisation.",
    outcome:
      "Application Power BI conçue pour le pilotage des équipes terrain.",
    tags: ["Power BI", "Business Objects", "Excel"],
    url: null,
  },
  {
    icon: PieChart,
    title: "Analyse géospatiale de la fraude pour la MEL",
    organization: "Keolis Lille Métropole · 2023",
    context:
      "Identifier les tendances et les zones à risque de fraude sur le réseau.",
    contribution:
      "Analyse des données de fraude, automatisation Excel / VBA et cartographie ArcGIS pour la Métropole Européenne de Lille.",
    outcome:
      "Cartographie ArcGIS produite pour la Métropole Européenne de Lille.",
    tags: ["ArcGIS", "Excel", "VBA"],
    url: null,
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
            Du machine learning à la BI opérationnelle, des projets réalisés dans le transport et la finance.
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
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {project.organization}
                  </p>
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
                <div className="flex flex-1 flex-col gap-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Contexte
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.context}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Réalisation
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.contribution}
                    </p>
                  </div>
                  <div className="mt-auto border-t border-border pt-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Résultat
                    </p>
                    <p className="text-sm leading-relaxed text-card-foreground">
                      {project.outcome}
                    </p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 self-start text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Github aria-hidden="true" size={16} />
                      Voir le dépôt GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
