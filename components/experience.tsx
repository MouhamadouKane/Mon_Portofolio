"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { Briefcase, MapPin, Calendar, Users } from "lucide-react";
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

const experiences = [
  {
    role: "Alternant Business Analyst",
    company: "SNCF Voyageurs · Direction Commerciale",
    location: "Axe TGV Nord",
    period: "Sept. 2024 – Sept. 2026",
    type: "Alternance",
    missions: [
      "Conception et déploiement d’une application Power BI d’aide à la décision commerciale.",
      "Développement d’un modèle prédictif du trafic et des recettes ferroviaires avec Python et Scikit-Learn.",
      "Accompagnement de l’équipe sur Databricks et encadrement de la seconde alternante.",
      "Reporting multi-sources avec Power BI, Opale et Excel / VBA; automatisation des traitements.",
    ],
    tools: ["Power BI", "Python", "Scikit-Learn", "Databricks", "Opale", "Excel / VBA"],
  },
  {
    role: "Alternant Chargé des données et d’analyse",
    company: "Keolis Lille Métropole · Réseau Ilévia",
    location: "Lille",
    period: "Sept. 2023 – Août 2024",
    type: "Alternance",
    missions: [
      "Conception d’une application Power BI de suivi de la fraude, avec pilotage par équipe terrain.",
      "Analyse géospatiale avec ArcGIS et production de reportings avec Power BI, Business Objects et Excel.",
      "Formation des équipes aux outils de reporting et de visualisation de données.",
    ],
    tools: ["Power BI", "Business Objects", "Excel", "ArcGIS"],
  },
  {
    role: "Stagiaire Chargé des données et d’analyse",
    company: "Keolis Lille Métropole · Réseau Ilévia",
    location: "Lille",
    period: "Mai – Août 2023",
    type: "Stage",
    missions: [
      "Analyse des données de fraude pour identifier les tendances et les zones à risque.",
      "Automatisation Excel / VBA et cartographie ArcGIS pour la Métropole Européenne de Lille.",
    ],
    tools: ["Excel", "VBA", "ArcGIS"],
  },
  {
    role: "Stagiaire Chargé d’analyse et de reporting",
    company: "Institut Pasteur de Dakar",
    location: "Dakar",
    period: "2022",
    type: "Stage",
    missions: [
      "Traitement et analyse des données sur le paludisme dans la région de Kédougou.",
      "Reporting et mise en place de tableaux de bord interactifs.",
    ],
    tools: ["Tableau", "Excel"],
  },
];

const engagements = [
  {
    role: "Adjoint au président · Commission Pôle Data",
    org: "AESN · Association des Étudiants Sénégalais du Nord",
    period: "2025 – 2026",
  },
  {
    role: "Président · Commission pédagogique",
    org: "AESN · Association des Étudiants Sénégalais du Nord",
    period: "2023 – 2024",
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-muted/40 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl border-b border-border pb-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Parcours
          </p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Une expérience ancrée dans le concret.
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
            Des équipes opérationnelles aux enjeux de pilotage, avec un fil conducteur : rendre les données actionnables.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative md:pl-16 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${i * 0.15}s` : "0s",
                  opacity: isInView ? undefined : 0,
                }}
              >
                {/* Timeline dot */}
                <div aria-hidden="true" className="absolute left-4 top-6 hidden h-5 w-5 items-center justify-center rounded-full border-4 border-background bg-primary md:flex" />

                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-card-foreground">
                        {exp.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} className="text-primary" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.missions.map((mission) => (
                      <li
                        key={mission}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {mission}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vie associative */}
        <div
          className={`mt-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{
            animationDelay: isInView ? "0.6s" : "0s",
            opacity: isInView ? undefined : 0,
          }}
        >
          <h3 className="mb-6 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
            <Users size={20} className="text-primary" />
            Vie associative
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {engagements.map((eng) => (
              <div
                key={eng.role}
                className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30"
              >
                <h4 className="text-sm font-semibold text-card-foreground">
                  {eng.role}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">{eng.org}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {eng.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
