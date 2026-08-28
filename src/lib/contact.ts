import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(254, "Email is too long."),
  subject: z.string().trim().min(3, "Please add a subject.").max(120, "Subject is too long."),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(4000, "Message is too long."),
  website: z.string().max(0, "Unable to process this request.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const initialContactValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function sanitiseContactValues(values: ContactFormValues): ContactFormValues {
  const clean = (value: string, multiline = false) =>
    value
      .replace(/<[^>]*>/g, "")
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
      .replace(multiline ? /[^\S\r\n]+/g : /\s+/g, " ")
      .trim();

  return {
    name: clean(values.name),
    email: clean(values.email).toLowerCase(),
    subject: clean(values.subject),
    message: clean(values.message, true),
    website: clean(values.website ?? ""),
  };
}
