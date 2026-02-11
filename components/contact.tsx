"use client";

import React, { useRef, useEffect, useState } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    href: "https://www.linkedin.com/in/mouhamadou-kane-93921218b",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Lille, France",
    href: null,
  },
];

/* -------------------- Component -------------------- */
export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const [loading, setLoading] = useState(false);

  /* -------------------- Submit handler -------------------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.name as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message envoyé avec succès ✅");
        form.reset();
      } else {
        alert("Erreur lors de l'envoi ❌");
      }
    } catch (error) {
      alert("Erreur réseau ❌");
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
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Travaillons ensemble
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-6 max-w-lg text-pretty text-muted-foreground">
            Vous avez un projet data ou une opportunité ? <br />
            N’hésitez pas à me contacter. Je suis disponible pour un poste de
            consultant, en CDD ou en CDI, à partir d’octobre 2026.
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
                      target="_blank"
                      rel="noopener noreferrer"
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
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Sujet
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Objet de votre message"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Message
              </label>
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
              className="w-full gap-2 sm:w-auto"
              disabled={loading}
            >
              <Send size={18} />
              {loading ? "Envoi..." : "Envoyer le message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
