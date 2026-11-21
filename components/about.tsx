"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  GraduationCap,
  Target,
  User,
  BrainCircuit,
  MessageSquare,
  ShieldCheck,
  Lightbulb,
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
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isInView;
}

const softSkills = [
  { icon: BrainCircuit, label: "Esprit d’analyse" },
  { icon: MessageSquare, label: "Pédagogie & transmission" },
  { icon: ShieldCheck, label: "Leadership & encadrement" },
  { icon: Lightbulb, label: "Adaptabilité" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  const cards = [
    {
      icon: User,
      title: "Mon approche",
      description:
        "Je transforme des données complexes en indicateurs pertinents, tableaux de bord Power BI et modèles prédictifs pour faciliter les décisions.",
    },
    {
      icon: GraduationCap,
      title: "Parcours",
      description:
        "Data Analyst et Data Scientist formé à Lille, avec des expériences chez Keolis / Ilévia et SNCF Voyageurs dans le transport de voyageurs.",
    },
    {
      icon: Target,
      title: "Transmission",
      description:
        "J’accompagne les équipes dans l’adoption des outils data, j’ai contribué à leur formation chez Keolis et encadré une seconde alternante chez SNCF Voyageurs.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="apropos"
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl border-b border-border pb-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            À propos
          </p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Du besoin métier à la décision.
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
            Après plus de trois ans en alternance chez Keolis Lille Métropole et SNCF Voyageurs, je relie la technique (ETL, Python, machine learning) aux enjeux métier (KPI, besoins des équipes terrain) et à la prise de décision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${i * 0.15}s` : "0s",
                opacity: isInView ? undefined : 0,
              }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <card.icon size={24} />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-card-foreground">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div
          className={`mt-12 rounded-xl border border-border bg-card p-8 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{
            animationDelay: isInView ? "0.5s" : "0s",
            opacity: isInView ? undefined : 0,
          }}
        >
          <h3 className="mb-6 text-center font-heading text-lg font-semibold text-card-foreground">
            Qualités humaines
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {softSkills.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <skill.icon size={20} />
                </div>
                <span className="text-center text-sm font-medium text-card-foreground">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
