import { _i as api, pr as queryOptions, ri as orThrow } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-YC4CEVQO.js
var blog = {
	get: async (signal) => {
		const options = {};
		if (signal) options.signal = signal;
		const response = await api.get("blog", options).json();
		return {
			categories: response.data.categories ?? [],
			slides: response.data.slides ?? [],
			articles: response.data.articles ?? [],
			popular: response.data.popular ?? []
		};
	},
	articles: {
		list: async (params) => {
			const { category, author, tag, page, cursor, signal } = params ?? {};
			const searchParams = new URLSearchParams();
			if (page !== void 0) searchParams.set("page", String(page));
			if (cursor) searchParams.set("cursor", cursor);
			if (category) searchParams.set("category", category);
			if (author) searchParams.set("author", author);
			if (tag) searchParams.set("tag", tag);
			const options = {};
			if (signal) options.signal = signal;
			const response = await api.get(`blog/articles?${searchParams.toString()}`, options).json();
			return {
				data: response.data ?? [],
				categories: response.categories ?? void 0,
				category: response.category,
				author: response.author,
				tag: response.tag,
				cursor: response.cursor
			};
		},
		find: async (id, signal) => {
			const options = {};
			if (signal) options.signal = signal;
			const response = await api.get(`blog/articles/${id}`, options).json();
			if (!response.data) throw new Error(`Article ${id} not found`);
			return response.data;
		},
		findOrThrow: (id, signal) => orThrow(blog.articles.find(id, signal))
	},
	queries: {
		overview: () => queryOptions({
			queryKey: ["blog", "overview"],
			queryFn: ({ signal }) => blog.get(signal)
		}),
		articles: (params) => queryOptions({
			queryKey: [
				"blog",
				"articles",
				params
			],
			queryFn: ({ signal }) => blog.articles.list({
				...params,
				signal
			})
		}),
		article: (id) => queryOptions({
			queryKey: [
				"blog",
				"article",
				id
			],
			queryFn: ({ signal }) => blog.articles.find(id, signal)
		})
	}
};
export { blog as t };
