import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react, Si as getAuthToken, _i as api, ba as RouteId, ci as unauthorized, da as getTwilightContext, ii as orUnauthorized, pr as queryOptions, sn as buildHreflangAlternates } from "./shared-home-LYGTeQ_-.js";
import { t as wallet } from "./chunk-PO6PTKMN-CIZm0y5E.js";
import "./chunk-LG5355UU-DV61daeZ.js";
import "./chunk-N6EWTAE4-BdstmZpX.js";
import { t as wishlist } from "./chunk-4IBG3GR6-Yi0fzP9S.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-UQ7NS6BZ.js
var notification = {
	list: async () => {
		const response = await api.get("notifications").json();
		return {
			data: response.data ?? [],
			cursor: response.cursor
		};
	},
	markAsRead: async (id) => {
		await api.put(`notifications/${id}/read`).json();
	},
	markAllAsRead: async () => {
		await api.put("notifications/read-all").json();
	},
	queries: { list: () => queryOptions({
		queryKey: ["notifications", "list"],
		queryFn: () => notification.list()
	}) }
};
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/routes/account.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
async function profileLoader(_ctx) {
	if (!getAuthToken()) throw unauthorized();
	const { i18n } = getTwilightContext();
	return { page: {
		title: i18n.t("common.titles.profile") || "Profile",
		slug: RouteId.CUSTOMER_PROFILE
	} };
}
var LazyProfilePage = (0, import_react.lazy)(() => import("./ProfilePage-MP4PE2LF-D6PAjDZj.js").then((m) => ({ default: m.ProfilePage })));
var Profile = {
	id: RouteId.CUSTOMER_PROFILE,
	loader: async (_ctx, extend) => {
		const data = await profileLoader({ locale: _ctx.locale ?? "ar" });
		if (extend) {
			const extra = await extend(data, { params: {} });
			return {
				...data,
				...extra
			};
		}
		return data;
	},
	head: (ctx, data) => ({
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	}),
	Component: LazyProfilePage
};
async function wishlistLoader(ctx) {
	if (!getAuthToken()) throw unauthorized();
	const pageNum = Number(ctx.search?.page) || 1;
	const data = await orUnauthorized(wishlist.list({ page: pageNum }));
	return {
		page: {
			title: getTwilightContext().i18n.t("common.titles.wishlist") || "Wishlist",
			slug: RouteId.CUSTOMER_WISHLIST
		},
		query: { page: pageNum },
		products: data.items,
		pagination: { next: data.next }
	};
}
var LazyWishlistPage = (0, import_react.lazy)(() => import("./WishlistPage-3OFBHANB-DDS9ec1l.js").then((m) => ({ default: m.WishlistPage })));
var Wishlist = {
	id: RouteId.CUSTOMER_WISHLIST,
	loader: async (ctx, extend) => {
		const data = await wishlistLoader(ctx);
		if (extend) {
			const extra = await extend(data, { params: {} });
			return {
				...data,
				...extra
			};
		}
		return data;
	},
	head: (ctx, data) => ({
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	}),
	Component: LazyWishlistPage
};
async function walletLoader(ctx) {
	if (!getAuthToken()) throw unauthorized();
	const pageNum = Number(ctx.search?.page) || 1;
	const data = await orUnauthorized(wallet.list({ page: pageNum }));
	return {
		page: {
			title: getTwilightContext().i18n.t("common.titles.wallet") || "Wallet",
			slug: RouteId.CUSTOMER_WALLET
		},
		query: { page: pageNum },
		transactions: data.items,
		balance: data.balance,
		pagination: { next: data.next }
	};
}
var LazyWalletPage = (0, import_react.lazy)(() => import("./WalletPage-BDMVFQ4G-OHfGG1am.js").then((m) => ({ default: m.WalletPage })));
var Wallet = {
	id: RouteId.CUSTOMER_WALLET,
	loader: async (ctx, extend) => {
		const data = await walletLoader(ctx);
		if (extend) {
			const extra = await extend(data, { params: {} });
			return {
				...data,
				...extra
			};
		}
		return data;
	},
	head: (ctx, data) => ({
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	}),
	Component: LazyWalletPage
};
async function notificationsLoader(_ctx) {
	if (!getAuthToken()) throw unauthorized();
	const i18n = getTwilightContext().i18n;
	const response = await orUnauthorized(notification.list());
	return {
		page: {
			title: i18n.t("common.titles.notifications") || "Notifications",
			slug: RouteId.CUSTOMER_NOTIFICATIONS
		},
		notifications: response.data
	};
}
var LazyNotificationsPage = (0, import_react.lazy)(() => import("./NotificationsPage-J2YNZPAN-Cc1voB6z.js").then((m) => ({ default: m.NotificationsPage })));
var Notifications = {
	id: RouteId.CUSTOMER_NOTIFICATIONS,
	loader: async (_ctx, extend) => {
		const data = await notificationsLoader({ locale: _ctx.locale ?? "ar" });
		if (extend) {
			const extra = await extend(data, { params: {} });
			return {
				...data,
				...extra
			};
		}
		return data;
	},
	head: (ctx, data) => ({
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	}),
	Component: LazyNotificationsPage
};
async function settingsLoader(_ctx) {
	if (!getAuthToken()) throw unauthorized();
	const { i18n } = getTwilightContext();
	return { page: {
		title: i18n.t("common.titles.settings") || "Settings",
		slug: "customer-settings"
	} };
}
var LazySettingsPage = (0, import_react.lazy)(() => import("./SettingsPage-A2AI5CWI-DVBn96PC.js").then((m) => ({ default: m.SettingsPage })));
var Settings = {
	id: RouteId.CUSTOMER_SETTINGS,
	loader: async (_ctx, extend) => {
		const data = await settingsLoader({ locale: _ctx.locale ?? "ar" });
		if (extend) {
			const extra = await extend(data, { params: {} });
			return {
				...data,
				...extra
			};
		}
		return data;
	},
	head: (ctx, data) => ({
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	}),
	Component: LazySettingsPage
};
export { Wishlist as a, Wallet as i, Profile as n, Settings as r, Notifications as t };
