import { _i as api } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-PO6PTKMN.js
var wallet = { list: async (params = {}) => {
	const { page = 1, perPage = 10, signal } = params;
	const searchParams = new URLSearchParams();
	searchParams.set("page", String(page));
	searchParams.set("per_page", String(perPage));
	const options = {};
	if (signal) options.signal = signal;
	const response = await api.get(`balance/wallet?${searchParams.toString()}`, options).json();
	const transactions = response.data.transactions;
	return {
		items: transactions.data ?? [],
		next: transactions.next_page_url,
		balance: response.data.balance
	};
} };
export { wallet as t };
