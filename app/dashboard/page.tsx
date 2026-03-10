import { Metadata } from "next";
import { PowerBIDashboard } from "@/components/power-bi-dashboard";

export const metadata: Metadata = {
  title: "Dashboard Power BI | Mouhamadou Kane",
  description:
    "Découvrez mes tableaux de bord Power BI interactifs - Analyses de données et visualisations professionnelles.",
};

export default function DashboardPage() {
  return <PowerBIDashboard />;
}
