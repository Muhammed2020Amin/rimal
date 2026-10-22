import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react, Yn as withDeferredHydration, cr as L } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-scopes.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaScopesElement_runtime = class extends (typeof HTMLElement !== "undefined" ? HTMLElement : class {}) {
	get close() {
		return true;
	}
	get handleSubmit() {
		return true;
	}
	get open() {
		return true;
	}
	get searchDisplayLimit() {
		return true;
	}
	get selection() {
		return true;
	}
};
var defineSallaScopes_runtime = () => {};
var SallaScopesCore = /*@__PURE__*/ L({
	tagName: "salla-scopes",
	elementClass: SallaScopesElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaScopes_runtime
});
SallaScopesCore.displayName = "SallaScopesCore";
var SallaScopes = withDeferredHydration(SallaScopesCore, "SallaScopes");
export { SallaScopes };
