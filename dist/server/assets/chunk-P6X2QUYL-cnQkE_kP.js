import { _i as api, pr as queryOptions, ri as orThrow, xi as getActiveScope } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-P6X2QUYL.js
var category = {
	find: async (id) => {
		const { data } = await api.get(`categories/${id}`).json();
		return data;
	},
	findOrThrow: (id) => orThrow(category.find(id)),
	list: async () => {
		const { data } = await api.get("categories").json();
		return data ?? [];
	},
	queries: {
		detail: (id) => queryOptions({
			queryKey: [
				"categories",
				"detail",
				id
			],
			queryFn: () => category.find(id)
		}),
		list: () => queryOptions({
			queryKey: [
				"categories",
				"list",
				{ scope: getActiveScope() }
			],
			queryFn: () => category.list()
		})
	}
};
export { category as t };
