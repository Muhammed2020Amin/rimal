import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Na as require_jsx_runtime, Pa as require_react, cr as L } from "./shared-home-LYGTeQ_-.js";
import { t as LazyCustomerLayout } from "./chunk-HAH22L6T-nishQuT9.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-loyalty-points-history.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaLoyaltyPointsHistoryElement_runtime = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var defineSallaLoyaltyPointsHistory_runtime = () => {};
var SallaLoyaltyPointsHistory = /*@__PURE__*/ L({
	tagName: "salla-loyalty-points-history",
	elementClass: SallaLoyaltyPointsHistoryElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaLoyaltyPointsHistory_runtime
});
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/LoyaltyPointsPage-UZT7LR5E.js
var import_jsx_runtime = require_jsx_runtime();
function LoyaltyPointsPage({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyCustomerLayout, {
		page,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaLoyaltyPointsHistory, {})
	});
}
export { LoyaltyPointsPage };
