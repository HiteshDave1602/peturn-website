import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendInquiry } from "@/lib/email";
import { contact } from "@/data/site-content";

export async function POST(request: Request) {
  try {
    const json: unknown = await request.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) return NextResponse.json({ success: false, message: "Please correct the highlighted fields.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    await sendInquiry(parsed.data);
    return NextResponse.json({ success: true, message: "Thank you. Your consultation request has been sent successfully." });
  } catch (error) {
    const configurationError = error instanceof Error && error.message === "EMAIL_NOT_CONFIGURED";
    return NextResponse.json({
      success: false,
      message: configurationError ? `Email delivery is not configured. Please email ${contact.email} directly.` : `We could not send your request. Please email ${contact.email} or contact us by phone or WhatsApp.`
    }, { status: configurationError ? 503 : 500 });
  }
}
