import { z } from "zod";

const seoSchema = z
  .object({
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    image: z.string().min(1).optional(),
    noIndex: z.boolean().optional(),
  })
  .optional();

export const articleFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().min(1),
  publishedAt: z
    .string()
    .min(1)
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "publishedAt must be a valid date string",
    }),
  excerpt: z.string().min(1),
  coverImage: z.string().min(1).optional(),
  seo: seoSchema,
  draft: z.boolean().default(false),
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;

export type Article = ArticleFrontmatter & {
  body: string;
  filePath: string;
};
