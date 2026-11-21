"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { Award, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

type CertificateLink = { label: string; url: string };
type Certification = {
  title: string;
  provider?: string;
  year?: string;
  category: string;
  certificateUrl?: string;
  certificateLinks?: CertificateLink[];
};

const certifications: Certification[] = [
  {
    title: "Power BI Expert",
    provider: "SNCF / ORSYS",
    year: "2026",
    category: "Visualisation de données",
    certificateUrl: "/certificates/certificat-power-bi-expert.pdf",
  },
  {
    title: "Power BI Avancé",
    provider: "SNCF / ORSYS",
    year: "2025",
    category: "Visualisation de données",
    certificateUrl: "/certificates/certificat-power-bi-avance.pdf",
  },
  {
    title: "Machine Learning avec Python",
    provider: "Udemy",
    category: "Machine Learning",
  },
  {
    title: "Intelligence artificielle",
    category: "Intelligence artificielle",
  },
  {
    title: "Transition écologique & RSE",
    provider: "SNCF",
    year: "2026",
    category: "RSE",
    certificateUrl: "/certificates/certificat-rse.pdf",
  },
  {
    title: "Conformité & cybersécurité",
    provider: "SNCF",
    year: "2025",
    category: "Sécurité",
    certificateLinks: [
      { label: "RGPD", url: "/certificates/certificat-rgpd.pdf" },
      { label: "Phishing", url: "/certificates/certificat-phishing.pdf" },
      { label: "10 réflexes", url: "/certificates/certificat-10-reflexes.pdf" },
    ],
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    url: string;
  } | null>(null);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl border-b border-border pb-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Certifications
          </p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Une expertise qui continue d’évoluer.
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
            Power BI, protection des données et cybersécurité : les compétences renforcées par mes certifications.
          </p>
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
                {cert.provider && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.provider}
                  </p>
                )}
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {cert.category}
                  </Badge>
                  {cert.year && (
                    <span className="text-xs text-muted-foreground">
                      {cert.year}
                    </span>
                  )}
                </div>
                {cert.certificateUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 h-8 w-full gap-2 text-xs"
                    onClick={() =>
                      setSelectedCertificate({
                        title: cert.title,
                        url: cert.certificateUrl!,
                      })
                    }
                    aria-label={`Voir le certificat ${cert.title}`}
                  >
                    <Eye size={14} />
                    Voir le certificat
                  </Button>
                )}
                {cert.certificateLinks && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.certificateLinks.map((link) => (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs"
                        onClick={() =>
                          setSelectedCertificate({
                            title: `${cert.title} · ${link.label}`,
                            url: link.url,
                          })
                        }
                        aria-label={`Voir le certificat ${link.label}`}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour visualiser le certificat */}
      <Dialog
        open={!!selectedCertificate}
        onOpenChange={(open) => !open && setSelectedCertificate(null)}
      >
        <DialogContent className="max-h-[90vh] max-w-4xl p-0">
          <DialogHeader className="border-b px-6 py-4">
            <DialogTitle className="text-lg font-semibold">
              {selectedCertificate?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative h-[70vh] w-full">
            {selectedCertificate && (
              <iframe
                src={selectedCertificate.url}
                className="h-full w-full"
                title={`Certificat ${selectedCertificate.title}`}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
