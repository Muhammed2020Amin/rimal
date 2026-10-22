import { _i as api, gt as rememberProductPreview, pr as queryOptions, xi as getActiveScope } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-4IBG3GR6.js
var wishlist = {
	list: async (params = {}) => {
		const { page = 1, perPage = 15, filterable, signal } = params;
		const searchParams = new URLSearchParams();
		searchParams.set("source", "wishlist");
		searchParams.set("page", String(page));
		searchParams.set("per_page", String(perPage));
		if (filterable !== void 0) searchParams.set("filterable", filterable ? "1" : "0");
		const options = {};
		if (signal) options.signal = signal;
		const response = await api.get(`products?${searchParams.toString()}`, options).json();
		const items = response.data ?? [];
		for (const item of items) rememberProductPreview(item);
		return {
			items,
			next: response.cursor?.next ?? null
		};
	},
	queries: { list: (params) => queryOptions({
		queryKey: [
			"wishlist",
			"list",
			params,
			{ scope: getActiveScope() }
		],
		queryFn: ({ signal }) => wishlist.list({
			...params,
			signal
		})
	}) }
};
export { wishlist as t };
