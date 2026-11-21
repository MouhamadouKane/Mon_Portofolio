"use client";

import React, { useRef, useEffect, useState } from "react";
import { Mail, Linkedin, MapPin, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/* -------------------- Hook animation -------------------- */
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

/* -------------------- Contact infos -------------------- */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kanemouha20@gmail.com",
    href: "mailto:kanemouha20@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mouhamadou-kane",
    href: "https://www.linkedin.com/in/mouhamadou-kane/",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Villeneuve-d’Ascq · Lille, France",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/MouhamadouKane",
    href: "https://github.com/MouhamadouKane",
  },
];

/* -------------------- Component -------------------- */
export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  /* -------------------- Submit handler -------------------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  /* -------------------- Render -------------------- */
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-muted/40 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl border-b border-border pb-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Parlons de vos enjeux data.
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
            Disponible immédiatement pour un CDI, un CDD ou une mission en intérim. Parlons de vos enjeux data.
          </p>
        </div>

        {/* Content */}
        <div
          className={`grid gap-12 lg:grid-cols-5 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          {/* Contact infos */}
          <div className="space-y-6 lg:col-span-2">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("https://") ? "_blank" : undefined}
                      rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-foreground hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="subject">Sujet</Label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Objet de votre message"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 rounded-full sm:w-auto"
              disabled={loading}
            >
              <Send aria-hidden="true" data-icon="inline-start" />
              {loading ? "Envoi en cours…" : "Envoyer le message"}
            </Button>
            {status && (
              <p
                role={status === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`text-sm font-medium ${
                  status === "success" ? "text-primary" : "text-destructive"
                }`}
              >
                {status === "success"
                  ? "Merci, votre message a bien été envoyé."
                  : "Le message n’a pas pu être envoyé. Réessayez ou contactez-moi directement par e-mail."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
