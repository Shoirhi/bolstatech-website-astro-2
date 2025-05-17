import { glob, file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
    schema: z.object({
        isDraft: z.boolean().default(false).optional(),
        title: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        description: z.string(),
        category: reference("blogCategories").optional(),
        author: reference("authors"),
    }),
});

const blogCategories = defineCollection({
    loader: file("src/data/blogCategories.json"),
    schema: z.object({
        id: z.string(),
        isDraft: z.boolean().default(false).optional(),
        name: z.string(),
    })
});

const authors = defineCollection({
    loader: file("src/data/authors.json"),
    schema: z.object({
        id: z.string(),
        isDraft: z.boolean().default(false).optional(),
        name: z.string(),
        email: z.string().email().optional(),
        x: z.string().url().optional(),
    })
});

export const collections = { blog, blogCategories, authors, };