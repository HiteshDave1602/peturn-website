"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "@/lib/validation";

const industries = ["Retail","Manufacturing","FMCG","Packaging","Textile","Cosmetics","Professional Services","Other"] as const;
const serviceOptions = ["Business Intelligence Consulting","Dashboard Development","Sales Analytics","Inventory Analytics","Procurement Analytics","Profitability Analysis","Executive Reporting","Other"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string }>();
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactInput>({ resolver: zodResolver(contactSchema), defaultValues: { consent: false, website: "", source: "Peturn website" } });
  useEffect(() => {
    const selectDashboard = () => setValue("service", "Dashboard Development", { shouldValidate: true });
    window.addEventListener("select-dashboard", selectDashboard);
    return () => window.removeEventListener("select-dashboard", selectDashboard);
  }, [setValue]);
  const submit = async (data: ContactInput) => {
    setStatus(undefined);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = await response.json() as { success: boolean; message: string };
      setStatus({ type: body.success ? "success" : "error", text: body.message });
      if (body.success) reset();
    } catch { setStatus({ type: "error", text: "We could not send your request. Please email dhyanirayka20@gmail.com." }); }
  };
  const field = (name: keyof ContactInput) => errors[name]?.message;
  return <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
    <div className="honeypot" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>
    <div className="form-grid">
      <label>Full Name<input {...register("fullName")} maxLength={80} aria-invalid={!!errors.fullName} aria-describedby="fullName-error" /><span id="fullName-error">{field("fullName")}</span></label>
      <label>Work Email<input type="email" {...register("email")} maxLength={120} aria-invalid={!!errors.email} aria-describedby="email-error" /><span id="email-error">{field("email")}</span></label>
      <label>Phone or WhatsApp Number<input type="tel" {...register("phone")} maxLength={30} aria-invalid={!!errors.phone} /><span>{field("phone")}</span></label>
      <label>Company Name<input {...register("company")} maxLength={100} aria-invalid={!!errors.company} /><span>{field("company")}</span></label>
      <label>Country<input {...register("country")} maxLength={60} aria-invalid={!!errors.country} /><span>{field("country")}</span></label>
      <label>Industry<select defaultValue="" {...register("industry")} aria-invalid={!!errors.industry}><option value="" disabled>Select industry</option>{industries.map(x => <option key={x}>{x}</option>)}</select><span>{field("industry")}</span></label>
      <label>Service Required<select defaultValue="" {...register("service")} aria-invalid={!!errors.service}><option value="" disabled>Select service</option>{serviceOptions.map(x => <option key={x}>{x}</option>)}</select><span>{field("service")}</span></label>
      <fieldset><legend>Preferred Contact Method</legend><div className="radio-row">{["Email","Phone","WhatsApp"].map(x => <label key={x}><input type="radio" value={x} {...register("preferredContact")} />{x}</label>)}</div><span>{field("preferredContact")}</span></fieldset>
    </div>
    <label>Message<textarea rows={5} maxLength={2000} {...register("message")} aria-invalid={!!errors.message} /><span>{field("message")}</span></label>
    <label className="consent"><input type="checkbox" {...register("consent")} /><span>I consent to Peturn using this information to respond to my inquiry.</span></label><span className="field-error">{field("consent")}</span>
    <button className="button submit" disabled={isSubmitting}>{isSubmitting ? "Sending request…" : "Request Free Consultation"}</button>
    {status && <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.text}</p>}
  </form>;
}
