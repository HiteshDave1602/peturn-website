import { z } from "zod";

const clean = (max: number) => z.string().trim().min(1, "This field is required").max(max, `Must be ${max} characters or fewer`);

export const contactSchema = z.object({
  fullName: clean(80),
  email: z.email("Enter a valid work email").max(120),
  phone: clean(30),
  company: clean(100),
  country: clean(60),
  industry: z.enum(["Retail", "Manufacturing", "FMCG", "Packaging", "Textile", "Cosmetics", "Professional Services", "Other"]),
  service: z.enum(["Business Intelligence Consulting", "Dashboard Development", "Sales Analytics", "Inventory Analytics", "Procurement Analytics", "Profitability Analysis", "Executive Reporting", "Other"]),
  preferredContact: z.enum(["Email", "Phone", "WhatsApp"]),
  message: clean(2000),
  consent: z.boolean().refine((val) => val === true, { error: "Please confirm your consent" }),
  website: z.string().max(0, "Spam detected"),
  source: z.string().max(200),
});
export type ContactInput = z.infer<typeof contactSchema>;
