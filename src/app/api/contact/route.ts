import { NextResponse } from "next/server";
import { contactSchema, sanitiseContactValues, type ContactFormValues } from "@/lib/contact";
import { contactEmail, getResendClient } from "@/lib/resend";

export const runtime = "nodejs";

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = rateLimitStore.get(identifier);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;
  current.count += 1;
  return false;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function getValidationErrors(issues: { path: PropertyKey[]; message: string }[]) {
  return issues.reduce<Record<string, string>>((errors, issue) => {
    const field = issue.path[0];
    if (typeof field === "string" && !errors[field]) errors[field] = issue.message;
    return errors;
  }, {});
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIdentifier(request))) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit the form again." }, { status: 400 });
  }

  const candidate = payload && typeof payload === "object" ? payload as Partial<ContactFormValues> : {};
  const sanitised = sanitiseContactValues({
    name: typeof candidate.name === "string" ? candidate.name : "",
    email: typeof candidate.email === "string" ? candidate.email : "",
    subject: typeof candidate.subject === "string" ? candidate.subject : "",
    message: typeof candidate.message === "string" ? candidate.message : "",
    website: typeof candidate.website === "string" ? candidate.website : "",
  });
  const parsed = contactSchema.safeParse(sanitised);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your details and try again.", fields: getValidationErrors(parsed.error.issues) }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ error: "Unable to process this request." }, { status: 400 });
  }

  if (!contactEmail || !process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "The contact service is temporarily unavailable." }, { status: 503 });
  }

  try {
    const resend = getResendClient();
    const { name, email, subject, message } = parsed.data;
    const result = await resend.emails.send({
      from: "Portfolio contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio enquiry: ${subject}`,
      html: `<h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\r?\n/g, "<br />")}</p>`,
    });

    if (result.error) throw new Error("Resend rejected the message.");
    return NextResponse.json({ message: "Message sent successfully. I’ll get back to you soon." });
  } catch {
    return NextResponse.json({ error: "We could not send your message right now. Please try again later." }, { status: 502 });
  }
}
