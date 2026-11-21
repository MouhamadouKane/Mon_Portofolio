"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  Database,
  BarChart3,
  Briefcase,
  Wrench,
  Languages,
  BrainCircuit,
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
    icon: BarChart3,
    title: "Data & BI",
    skills: ["Power BI & DAX", "Power Query", "Tableau", "Looker", "Business Objects", "ArcGIS"],
  },
  {
    icon: Database,
    title: "Langages & analyse",
    skills: ["Python · Pandas", "Scikit-Learn", "XGBoost", "SQL", "Oracle", "Excel & VBA", "R", "SAS"],
  },
  {
    icon: Wrench,
    title: "Data Engineering",
    skills: ["ETL / ELT", "Talend", "Data Warehouse", "Databricks", "Spark", "Airflow", "GCP", "BigQuery", "AWS"],
  },
  {
    icon: Briefcase,
    title: "MLOps & outils",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "MLflow"],
  },
  {
    icon: BrainCircuit,
    title: "Atouts professionnels",
    skills: ["Leadership & encadrement", "Pédagogie & transmission", "Esprit d’analyse", "Adaptabilité"],
  },
  {
    icon: Languages,
    title: "Langues",
    skills: ["Français · courant", "Anglais · intermédiaire", "Wolof · langue maternelle"],
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
        <div className="mb-12 max-w-2xl border-b border-border pb-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Compétences
          </p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Les bons outils pour chaque question.
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
            Analyse, visualisation et compréhension métier : un socle adapté aux besoins du projet.
          </p>
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
