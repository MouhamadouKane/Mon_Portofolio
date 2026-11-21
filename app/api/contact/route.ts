import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

// Le client Resend est créé à la demande (dans POST) et non au chargement du module :
// sinon `next build` échoue quand RESEND_API_KEY n'est pas définie (ex. déploiements Preview).
const contactMessageSchema = z
  .object({
    name: z.string().trim().min(1).max(120),
    email: z.string().trim().email().max(254),
    subject: z.string().trim().min(1).max(200),
    message: z.string().trim().min(1).max(5000),
  })
  .strict();

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character] ?? character);
}

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const parsed = contactMessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return NextResponse.json({ success: false }, { status: 503 });
  }
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["kanemouha20@gmail.com"],
      replyTo: email,
      subject: `Message portfolio : ${subject.replace(/[\r\n]+/g, " ")}`,
      html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("[contact] Email delivery failed");
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    console.error("[contact] Request processing failed");
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
