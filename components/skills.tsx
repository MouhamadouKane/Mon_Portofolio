"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  Database,
  BarChart3,
  Briefcase,
  Wrench,
  Languages,
} from "lucide-react";

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
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isInView;
}

const skillCategories = [
  {
    icon: Database,
    title: "Data Analysis",
    skills: ["Python", "R", "SAS", "SQL", "Excel & VBA", "Power Query"],
  },
  {
    icon: BarChart3,
    title: "Data Visualization & BI",
    skills: ["Power BI & DAX", "Business Object", "ARCGIS", "Reporting"],
  },
  

  {
    icon: Wrench,
    title: "Cloud & Infrastructure",
    skills: ["Azure / AWS / GCP ", "Databricks", "Déploiement BI"],
  },
  {
    icon: Briefcase,
    title: "Business Analysis",
    skills: ["KPI & Reporting", "Modélisation", "Collecte de données", "Conception BDD", "Aide à la décision"],
  },
  {
    icon: Wrench,
    title: "Outils & Technologies",
    skills: ["Machine Learning", "Intelligence Artificielle", "Spark", "Opale"],
  },
  {
    icon: Languages,
    title: "Langues",
    skills: ["Francais", "Anglais", "Wolof"],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="competences"
      className="relative bg-muted/40 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Compétences
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Mon stack technique"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              } ${i === skillCategories.length - 1 && skillCategories.length % 3 === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              style={{
                animationDelay: isInView ? `${i * 0.1}s` : "0s",
                opacity: isInView ? undefined : 0,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon size={20} />
                </div>
                <h3 className="font-heading text-base font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
