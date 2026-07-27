import { Resend } from "resend";
import type { ContactInput } from "./validation";
import { contact } from "@/data/site-content";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char] ?? char);

export async function sendInquiry(data: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || contact.email;
  if (!apiKey || !from) throw new Error("EMAIL_NOT_CONFIGURED");
  const resend = new Resend(apiKey);
  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, typeof value === "string" ? escapeHtml(value) : value])) as Record<string, string | boolean>;
  const submitted = new Intl.DateTimeFormat("en-IN", { dateStyle: "full", timeStyle: "long", timeZone: "Asia/Kolkata" }).format(new Date());
  const result = await resend.emails.send({
    from, to, replyTo: data.email,
    subject: `New Peturn Website Inquiry — ${data.fullName} — ${data.company}`,
    html: `<h1>New consultation inquiry</h1><p><strong>Submitted:</strong> ${submitted}</p><table>${[
      ["Full name", safe.fullName], ["Email", safe.email], ["Phone / WhatsApp", safe.phone],
      ["Company", safe.company], ["Country", safe.country], ["Industry", safe.industry],
      ["Service", safe.service], ["Preferred contact", safe.preferredContact], ["Source", safe.source],
      ["Message", safe.message]
    ].map(([label, value]) => `<tr><th align="left">${label}</th><td>${value}</td></tr>`).join("")}</table>`
  });
  if (result.error) throw new Error(result.error.message);
  await resend.emails.send({
    from, to: data.email,
    subject: "We Received Your Peturn Consultation Request",
    html: `<h1>Thank you, ${safe.fullName}</h1><p>We received your request for <strong>${safe.service}</strong>. The Peturn team will contact you using your preferred method.</p><p>India: ${contact.indiaPhone}<br>United States: ${contact.usPhone}<br>Email: ${contact.email}</p>`
  }).catch(() => undefined);
}
