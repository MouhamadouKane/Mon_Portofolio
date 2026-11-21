import { CalendarDays, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Data Engineer · Titre RNCP niveau 7 (Bac+5)",
    school: "Junia XP · Lille",
    period: "2024 – 2026",
    details:
      "Formation en alternance en data engineering, machine learning, cloud (GCP, AWS), Spark, Airflow, Docker et CI/CD.",
  },
  {
    degree: "Master MIASHS · Parcours MQME (Bac+5)",
    school: "Université de Lille",
    period: "2022 – 2024",
    details:
      "Méthodes Quantitatives et Modélisation de l’Entreprise · statistiques, économétrie, SAS, Oracle et R.",
  },
  {
    degree: "Licence et Master · Statistique et Informatique Décisionnelle",
    school: "Université Alioune Diop de Bambey · Sénégal",
    period: "2019 – 2022",
    details: "Formation en statistique et informatique décisionnelle.",
  },
];

export function Education() {
  return (
    <section id="formation" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl border-b border-border pb-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Formation
          </p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Un socle data, du quantitatif au cloud.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.degree}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap aria-hidden="true" size={21} />
              </div>
              <h3 className="font-heading text-lg font-semibold leading-snug text-card-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {item.school}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-primary">
                <CalendarDays aria-hidden="true" size={14} />
                {item.period}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
