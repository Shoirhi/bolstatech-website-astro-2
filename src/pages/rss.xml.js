import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";
import rss from "@astrojs/rss";
import { getEntry, getEntries, getCollection } from "astro:content";

export async function GET(context) {
	const posts = (
        await getCollection("blog", ({ data }) => {
            return data.isDraft !== true;
        })
    ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: await Promise.all(posts.map(async (post) => ({
			title: post.data.title,
			link: `/${post.id}`,
			pubDate: post.data.pubDate,
			description: post.data.description,
			content: post.body,
			categories: post.data.categories && (await getEntries(post.data.categories)).map((category) => (category.data.name)),
			author: post.data.author && (await getEntry(post.data.author)).data.name,
		}))),
	});
}