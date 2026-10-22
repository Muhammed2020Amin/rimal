import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react, Yn as withDeferredHydration, cr as L } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-login-modal.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaLoginModalElement_runtime = class extends (typeof HTMLElement !== "undefined" ? HTMLElement : class {}) {
	get api() {
		return true;
	}
	get headers() {
		return true;
	}
	get inline() {
		return true;
	}
	get isEmailAllowed() {
		return true;
	}
	get isEmailRequired() {
		return true;
	}
	get isMobileAllowed() {
		return true;
	}
	get open() {
		return true;
	}
	get storeId() {
		return true;
	}
	get supportWebAuth() {
		return true;
	}
	get withoutReload() {
		return true;
	}
};
var defineSallaLoginModal_runtime = () => {};
var SallaLoginModalCore = /*@__PURE__*/ L({
	tagName: "salla-login-modal",
	elementClass: SallaLoginModalElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaLoginModal_runtime
});
SallaLoginModalCore.displayName = "SallaLoginModalCore";
var SallaLoginModal = withDeferredHydration(SallaLoginModalCore, "SallaLoginModal");
export { SallaLoginModal };
