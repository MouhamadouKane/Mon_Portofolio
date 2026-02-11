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
    role: "Business Analyst (Alternance)",
    company: "SNCF Voyageurs",
    location: "France",
    period: "2024 - 2026",
    type: "Alternance",
    missions: [
      "Reporting avec les outils : Power BI, Opale, Excel",
      "Mise en place d'une application Power BI pour aider les équipes à prendre des décisions stratégiques",
      "Participation aux projets data scientist",
    ],
    tools: ["Power BI", "Opale", "Excel"],
  },
  {
    role: "Chargé des données et d'analyse (Alternance)",
    company: "Keolis Lille Métropole",
    location: "Lille",
    period: "2023 - 2024",
    type: "Alternance",
    missions: [
      "Reporting avec les outils : Power BI, Business Object, Excel et ARCGIS",
      "Mise en place d'une application Power BI pour le suivi de la fraude",
      "Participation au projet data scientist",
    ],
    tools: ["Power BI", "Business Object", "Excel", "ARCGIS"],
  },
  {
    role: "Chargé des données et d'analyse (Stage)",
    company: "Keolis Lille Métropole",
    location: "Lille",
    period: "2022 - 2023",
    type: "Stage",
    missions: [
      "Traitement et analyse des données de la fraude pour la MEL",
      "Automatisation des outils Excel avec VBA",
      "Reporting sur les données Ilévia avec Power BI, Business Object, Excel et ARCGIS",
    ],
    tools: ["Power BI", "Business Object", "Excel", "VBA", "ARCGIS"],
  },
  
  {
    role: "Chargé de d'analyse et de reporting (Stage)",
    company: "Institut Pasteur",
    location: "Dakar",
    period: "2022 - 2022",
    type: "Stage",
    missions: [
      "Traitement et analyse des données Malaria de la région de Kédougou",
      "Reporting et mise en place des tableau de bord inter actif",
    ],
    tools: ["Tableau Desktop", "Excel", "VBA", "ARCGIS"],
  },
];

const engagements = [
  {
    role: "Adjoint au président de la commission Pôle Data",
    org: "AESN (Association des Étudiants Sénégalais du Nord)",
    period: "2024 - 2025",
  },
  {
    role: "Président de la commission pédagogique",
    org: "AESN (Association des Étudiants Sénégalais du Nord)",
    period: "2023 - 2024",
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
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Parcours
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Expériences professionnelles"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
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
                <div className="absolute left-4 top-6 hidden h-5 w-5 items-center justify-center rounded-full border-4 border-background bg-primary md:flex">
                  <span className="sr-only">Experience marker</span>
                </div>

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
