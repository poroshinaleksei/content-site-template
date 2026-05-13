import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export type ContactFormResult = {
  ok: boolean;
  message: string;
};

export type ContactFormAdapter = {
  submit: (submission: ContactSubmission) => Promise<ContactFormResult>;
};

export const disabledContactFormAdapter = {
  async submit() {
    return {
      ok: false,
      message: "Contact form delivery is not configured.",
    };
  },
} satisfies ContactFormAdapter;
