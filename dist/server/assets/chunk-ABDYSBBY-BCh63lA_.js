import { _i as api, da as getTwilightContext, pr as queryOptions } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-ABDYSBBY.js
var menu = {
	header: async () => {
		const { locale } = getTwilightContext();
		const { data } = await api.get(`menus/header?lang=${locale}`).json();
		return data || [];
	},
	footer: async () => {
		const { locale } = getTwilightContext();
		const { data } = await api.get(`menus/footer?lang=${locale}`).json();
		return data || [];
	},
	queries: { header: () => queryOptions({
		queryKey: [
			"menus",
			"header",
			getTwilightContext().locale
		],
		queryFn: () => menu.header(),
		staleTime: 3e5
	}) }
};
export { menu as t };
