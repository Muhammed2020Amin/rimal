import { Si as getAuthToken, _i as api, pr as queryOptions, ri as orThrow } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-5K53BZIN.js
var loyalty = {
	get: async () => {
		const { data } = await api.get("loyalty").json();
		return data;
	},
	getOrThrow: () => orThrow(loyalty.get()),
	getPointsBalance: async () => {
		return (await api.get("balance/points").json()).balance;
	},
	queries: {
		detail: () => queryOptions({
			queryKey: ["loyalty"],
			queryFn: () => loyalty.get()
		}),
		points: () => queryOptions({
			queryKey: ["loyalty", "points"],
			queryFn: () => loyalty.getPointsBalance(),
			enabled: !!getAuthToken(),
			staleTime: 3e4
		})
	}
};
export { loyalty as t };
