import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Na as require_jsx_runtime, Pa as require_react, Yn as withDeferredHydration, cr as L, dr as useTranslation, qn as HookSlot } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-orders.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaOrdersElement_runtime = class extends (typeof HTMLElement !== "undefined" ? HTMLElement : class {}) {
	get loadMoreText() {
		return true;
	}
	get params() {
		return true;
	}
};
var defineSallaOrders_runtime = () => {};
var SallaOrdersCore = /*@__PURE__*/ L({
	tagName: "salla-orders",
	elementClass: SallaOrdersElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaOrders_runtime
});
SallaOrdersCore.displayName = "SallaOrdersCore";
var SallaOrders = withDeferredHydration(SallaOrdersCore, "SallaOrders");
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/OrdersPage-FPUE5T6O.js
var import_jsx_runtime = require_jsx_runtime();
function OrdersPage({ orders, query }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:orders.index.items.start" }),
		orders.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaOrders, {
			"data-testid": "store-orders-list",
			params: query?.status ? { status: query.status } : void 0
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-testid": "store-orders-empty",
			className: "no-content-placeholder",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "sicon-packed-box icon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("pages.orders.non_orders") })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:orders.index.items.end" })
	] });
}
export { OrdersPage };
