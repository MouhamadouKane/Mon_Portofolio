import { Building2, Mail } from "lucide-react";

const references = [
  {
    company: "Keolis Lille Métropole",
    network: "Réseau Ilévia",
    contacts: [
      { name: "Nicolas CHAUSSON", email: "nicolas.chausson@ilevia.keolis.com" },
      { name: "Maud MICHEL", email: "maud.michel@ilevia.keolis.com" },
    ],
  },
  {
    company: "SNCF Voyageurs",
    network: null,
    contacts: [{ name: "Jordan LISS", email: "jordan.liss@sncf.fr" }],
  },
];

export function References() {
  return (
    <section
      id="referents"
      aria-labelledby="referents-title"
      className="px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl border-b border-border pb-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Références
          </p>
          <h2
            id="referents-title"
            className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Référents professionnels
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
            Les contacts à solliciter pour en savoir plus sur mes expériences chez Keolis et à la SNCF.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {references.map((reference) => (
            <article
              key={reference.company}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start gap-3 border-b border-border pb-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    Référent{reference.contacts.length > 1 ? "s" : ""} {reference.company}
                  </h3>
                  {reference.network && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {reference.network}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mt-5 flex flex-col gap-4">
                {reference.contacts.map((contact) => (
                  <li key={contact.email} className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-foreground">
                      {contact.name}
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex w-fit max-w-full items-center gap-2 break-all text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Mail size={15} aria-hidden="true" />
                      <span>{contact.email}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
