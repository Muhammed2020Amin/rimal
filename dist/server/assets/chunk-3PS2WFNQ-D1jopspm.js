import { _i as api, pr as queryOptions, ri as orThrow } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-3PS2WFNQ.js
var brand = {
	list: async (page) => {
		const { data, cursor } = await api.get(page ? `brands?page=${page}` : "brands").json();
		return {
			items: data ?? [],
			next: cursor?.next ?? null
		};
	},
	find: async (id) => {
		const { data } = await api.get(`brands/${id}`).json();
		return data;
	},
	findOrThrow: (id) => orThrow(brand.find(id)),
	queries: {
		list: (page) => queryOptions({
			queryKey: [
				"brands",
				"list",
				page ?? 1
			],
			queryFn: () => brand.list(page)
		}),
		detail: (id) => queryOptions({
			queryKey: [
				"brands",
				"detail",
				id
			],
			queryFn: () => brand.find(id)
		})
	}
};
export { brand as t };
