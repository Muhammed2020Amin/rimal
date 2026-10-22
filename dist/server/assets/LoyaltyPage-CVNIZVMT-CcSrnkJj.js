import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Na as require_jsx_runtime, Pa as require_react, Yn as withDeferredHydration, cr as L, gn as LazyBreadcrumb, qn as HookSlot } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-loyalty-program.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaLoyaltyProgramElement_runtime = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var defineSallaLoyaltyProgram_runtime = () => {};
var SallaLoyaltyProgramCore = /*@__PURE__*/ L({
	tagName: "salla-loyalty-program",
	elementClass: SallaLoyaltyProgramElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaLoyaltyProgram_runtime
});
SallaLoyaltyProgramCore.displayName = "SallaLoyaltyProgramCore";
var SallaLoyaltyProgram = withDeferredHydration(SallaLoyaltyProgramCore, "SallaLoyaltyProgram");
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/LoyaltyPage-CVNIZVMT.js
var import_jsx_runtime = require_jsx_runtime();
function LoyaltyPage({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "loyalty:start" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyBreadcrumb, { page }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaLoyaltyProgram, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "loyalty:end" })
	] });
}
export { LoyaltyPage };
