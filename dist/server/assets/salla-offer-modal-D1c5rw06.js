import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react, Yn as withDeferredHydration, cr as L } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-offer-modal.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaOfferModalElement_runtime = class extends (typeof HTMLElement !== "undefined" ? HTMLElement : class {}) {
	get open() {
		return true;
	}
	get showOffer() {
		return true;
	}
};
var defineSallaOfferModal_runtime = () => {};
var SallaOfferModalCore = /*@__PURE__*/ L({
	tagName: "salla-offer-modal",
	elementClass: SallaOfferModalElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaOfferModal_runtime
});
SallaOfferModalCore.displayName = "SallaOfferModalCore";
var SallaOfferModal = withDeferredHydration(SallaOfferModalCore, "SallaOfferModal");
export { SallaOfferModal };
