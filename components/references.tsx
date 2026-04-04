"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { UserCheck, Mail, Building2 } from "lucide-react";

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

const references = [
  {
    name: "Jordan Liss",
    role: "Responsable de la performance commerciale",
    company: "SNCF Voyageurs",
    email: "jordan.liss@sncf.fr",
  },
  {
    name: "Nicolas Chausson",
    role: "Responsable Observatoire Sûreté et Lutte contre la Fraude",
    company: "Kéolis Lille Ilévia",
    email: "nicolas.chausson@ilevia.keolis.com",
  },
  {
    name: "Maud Deloy",
    role: "Responsable adjoint de l'observatoire sûreté et lutte contre la fraude",
    company: "Kéolis Lille Ilévia",
    email: "maud.michel@ilevia.keolis.com",
  },
];

export function References() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="references"
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Recommandations
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mes Référents
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-6 max-w-lg text-pretty text-muted-foreground">
            Ces professionnels peuvent attester de mes compétences et de mon
            travail. N&apos;hésitez pas à les contacter pour vérifier mes références.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((ref, i) => (
            <div
              key={ref.email}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${i * 0.1}s` : "0s",
                opacity: isInView ? undefined : 0,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <UserCheck size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {ref.name}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    {ref.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 size={16} className="shrink-0 text-primary" />
                  <span>{ref.company}</span>
                </div>
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail size={16} className="shrink-0 text-primary" />
                  <span className="truncate">{ref.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
