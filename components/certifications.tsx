"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { Award, ExternalLink } from "lucide-react";
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
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isInView;
}

const certifications = [

	{
    title: "Power BI expert",
    provider: "SNCF",
    year: "2026",
    category: "Visualisation",
  },
  {
    title: "Power BI avancé",
    provider: "SNCF",
    year: "2025",
    category: "Visualisation",
  },
  {
    title: "Responsabilité Sociétale des Entreprises (RSE)",
    provider: "SNCF",
    year: "2025",
    category: "Sustainability",
  },
  {
    title: "Intelligence Artificielle",
    provider: "Spark Numeric (Dakar)",
    year: "2021",
    category: "IA",
  },
  {
    title: "Machine Learning avec Python",
    provider: "Udemy",
    year: "2021",
    category: "Data Science",
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Certifications
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Formations & Certifications"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${i * 0.08}s` : "0s",
                opacity: isInView ? undefined : 0,
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Award size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold leading-snug text-card-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.provider}
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {cert.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{cert.year}</span>
                </div>
              </div>
              <a
                href="#"
                className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Voir la certification ${cert.title}`}
              >
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
