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
  { icon: BrainCircuit, label: "Esprit d'analyse" },
  { icon: MessageSquare, label: "Collaboration" },
  { icon: ShieldCheck, label: "Rigueur" },
  { icon: Lightbulb, label: "Orientation résultats" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  const cards = [
    {
      icon: User,
      title: "Qui suis-je",
      description:
        "Professionnel rigoureux et orienté résultats, spécialisé dans l'analyse des données et l'aide à la prise de décision. Doté d'une excellente aptitude à collaborer avec les équipes multidisciplinaires, je m'engage à fournir des analyses précises et pertinentes.",
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description:
        "Master Data Analyst (Junia XP, Lille, 2024-2026). Master Méthodes Quantitatives et Modélisation pour l'Entreprise (Université de Lille, 2022-2024). Master & Licence Statistique et Informatique Décisionnelle (Université de Bambey, Sénégal, 2019-2022).",
    },
    {
      icon: Target,
      title: "Objectifs",
      description:
        "Recherche d'un CDD ou CDI à partir d'octobre 2025 pour mettre à profit mes compétences en data analyse, reporting et business intelligence au service d'une entreprise ambitieuse et innovante.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="apropos"
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            À propos
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Découvrez mon parcours"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
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
            Soft Skills
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
