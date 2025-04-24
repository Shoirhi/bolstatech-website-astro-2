import { glob, file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const techBlog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/techBlog" }),
    schema: z.object({
        isDraft: z.boolean().default(false).optional(),
        title: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        description: z.string(),
        categories: z.array(reference("techBlogCategories")).optional(),
        author: reference("authors"),
    }),
});

const techBlogCategories = defineCollection({
    loader: file("src/data/techBlogCategories.json"),
    schema: z.object({
        id: z.string(),
        name: z.string(),
    })
});

const authors = defineCollection({
    loader: file("src/data/authors.json"),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        email: z.string().email().optional(),
        x: z.string().url().optional(),
    })
});

export const collections = { techBlog, techBlogCategories, authors, };