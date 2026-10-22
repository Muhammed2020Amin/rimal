import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react, Si as getAuthToken, ba as RouteId, ci as unauthorized, da as getTwilightContext, ii as orUnauthorized, ri as orThrow, sn as buildHreflangAlternates } from "./shared-home-LYGTeQ_-.js";
import { t as order } from "./chunk-LG5355UU-DV61daeZ.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-N6EWTAE4.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
async function ordersLoader(ctx, extend) {
	if (!getAuthToken()) throw unauthorized();
	const query = ctx.query;
	const isPending = query?.status === "pending";
	const response = await orUnauthorized(order.list({
		status: query?.status,
		...ctx.with_items ? { with_items: ctx.with_items } : {}
	}));
	const i18n = getTwilightContext().i18n;
	const pageData = {
		page: {
			title: isPending ? i18n.t("common.titles.pending_orders") : i18n.t("common.titles.orders"),
			slug: RouteId.CUSTOMER_ORDERS_INDEX
		},
		orders: response.data,
		cursor: response.cursor,
		query
	};
	if (extend) {
		const extra = await extend(pageData, { params: {} });
		return {
			...pageData,
			...extra
		};
	}
	return pageData;
}
async function orderSingleLoader({ params }) {
	if (!getAuthToken()) throw unauthorized();
	const [data, componentsOrder] = await Promise.all([order.findOrThrow(params.id), orThrow(orUnauthorized(order.findForComponents(params.id)))]);
	const i18n = getTwilightContext().i18n;
	return {
		page: {
			slug: RouteId.CUSTOMER_ORDERS_SINGLE,
			id: String(params.id),
			title: i18n.t("pages.orders.order_details").replace(":id", String(data.order.reference_id ?? params.id))
		},
		order: data.order,
		componentsOrder
	};
}
var LazyOrdersPage = (0, import_react.lazy)(() => import("./OrdersPage-FPUE5T6O-CIZpd7R7.js").then((m) => ({ default: m.OrdersPage })));
var LazyOrderSinglePage = (0, import_react.lazy)(() => import("./OrderSinglePage-IIC6JKFX-CVFXzhmv.js").then((m) => ({ default: m.OrderSinglePage })));
async function ordersLoaderWithExtend(ctx, extend) {
	const query = ctx.search;
	return ordersLoader({
		query,
		with_items: ctx.with_items
	}, extend);
}
function ordersHead(ctx, data) {
	const isPending = data.query?.status === "pending";
	return {
		title: ctx.i18n.t(isPending ? "common.titles.pending_orders" : "common.titles.orders"),
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	};
}
async function orderSingleLoaderWithExtend(ctx, extend) {
	const data = await orderSingleLoader({ params: ctx.params });
	if (extend) {
		const extra = await extend(data, ctx);
		return {
			...data,
			...extra
		};
	}
	return data;
}
function orderSingleHead(ctx, data) {
	return {
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	};
}
var Orders = {
	id: RouteId.CUSTOMER_ORDERS_INDEX,
	loader: ordersLoaderWithExtend,
	head: ordersHead,
	Component: LazyOrdersPage
};
var OrderSingle = {
	id: RouteId.CUSTOMER_ORDERS_SINGLE,
	loader: orderSingleLoaderWithExtend,
	head: orderSingleHead,
	Component: LazyOrderSinglePage
};
export { Orders as n, OrderSingle as t };
