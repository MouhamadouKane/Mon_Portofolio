"use client";

import Link from "next/link";
import { ArrowLeft, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const POWER_BI_EMBED_URL = "https://app.powerbi.com/reportEmbed?reportId=51301f0e-06cc-498d-8088-db0742bef1b7&groupId=68175708-eb06-4d5e-8ae8-baff5902eda6&pageName=2d997b5e613689870e6e&autoAuth=true&ctid=common";

export function PowerBIDashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Retour au portfolio
          </Link>

          <h1 className="font-heading text-lg font-bold tracking-tight text-foreground">
            Dashboard Power BI
          </h1>

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

      {/* Power BI Dashboard - Full Screen */}
      <main className="flex-1">
        <iframe
          title="Dashboard Power BI - Mouhamadou Kane"
          src={POWER_BI_EMBED_URL}
          className="h-full w-full"
          style={{ minHeight: "calc(100vh - 57px)" }}
          frameBorder="0"
          allowFullScreen
        />
      </main>
    </div>
  );
}
