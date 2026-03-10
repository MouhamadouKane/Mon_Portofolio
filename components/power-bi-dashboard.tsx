"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Configuration - URL Power BI
const POWER_BI_EMBED_URL = "https://app.powerbi.com/reportEmbed?reportId=51301f0e-06cc-498d-8088-db0742bef1b7&groupId=68175708-eb06-4d5e-8ae8-baff5902eda6&pageName=2d997b5e613689870e6e&autoAuth=true&ctid=common";

export function PowerBIDashboard() {
  const hasEmbedUrl = POWER_BI_EMBED_URL.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Retour au portfolio
          </Link>

          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight text-foreground"
          >
            {"<MK />"}
          </Link>

          <Button asChild variant="outline" size="sm" className="gap-2">
            <a
              href="https://www.linkedin.com/in/mouhamadou-kane"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Title Section */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <BarChart3 size={16} className="text-primary" />
              Tableau de bord interactif
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Dashboard Power BI
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Explorez mes analyses de données et visualisations interactives
              créées avec Power BI. Ce tableau de bord présente mes compétences
              en Business Intelligence et en analyse de données.
            </p>
          </div>

          {/* Dashboard Container */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            {hasEmbedUrl ? (
              /* Power BI Embed */
              <div className="aspect-video w-full">
                <iframe
                  title="Dashboard Power BI - Mouhamadou Kane"
                  src={POWER_BI_EMBED_URL}
                  className="h-full w-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              /* Placeholder */
              <div className="flex aspect-video flex-col items-center justify-center bg-muted/30 p-8 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                  <BarChart3 size={40} className="text-primary" />
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  Dashboard Power BI
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
                  Le tableau de bord Power BI sera bientôt disponible ici.
                  Revenez prochainement pour découvrir mes analyses interactives.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Button asChild variant="default" className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/mouhamadou-kane"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} />
                      Voir mon profil LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/#projets">
                      <ExternalLink size={16} />
                      Voir mes projets
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Info Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BarChart3 size={20} />
              </div>
              <h3 className="font-heading font-semibold text-card-foreground">
                Visualisations interactives
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Des graphiques dynamiques permettant une exploration approfondie
                des données.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h2v10H7V7zm4 4h2v6h-2v-6zm4-2h2v8h-2V9z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-card-foreground">
                Indicateurs clés (KPIs)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Des métriques essentielles pour suivre la performance et prendre
                des décisions éclairées.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:col-span-2 lg:col-span-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4v4z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-card-foreground">
                Analyse approfondie
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Des insights détaillés basés sur les données pour supporter la
                prise de décision.
              </p>
            </div>
          </div>

          {/* LinkedIn CTA */}
          <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              Connectons-nous sur LinkedIn
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Suivez mon profil LinkedIn pour découvrir mes derniers projets
              Data Analytics et rester informé de mes publications.
            </p>
            <Button asChild size="lg" className="mt-6 gap-2">
              <a
                href="https://www.linkedin.com/in/mouhamadou-kane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                Voir mon profil LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>Mouhamadou Kane - Data Analyst & Business Analyst</p>
        </div>
      </footer>
    </div>
  );
}
