import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Na as require_jsx_runtime, Pa as require_react, Yn as withDeferredHydration, cr as L } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-reviews.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaReviewsElement_runtime = class extends (typeof HTMLElement !== "undefined" ? HTMLElement : class {}) {
	get displayAllLink() {
		return true;
	}
	get hideCustomerInfo() {
		return true;
	}
	get limit() {
		return true;
	}
	get top_rating() {
		return true;
	}
	get random() {
		return true;
	}
	get latest() {
		return true;
	}
	get sort() {
		return true;
	}
	get source() {
		return true;
	}
	get sourceValue() {
		return true;
	}
	get all() {
		return true;
	}
	get store() {
		return true;
	}
	get products() {
		return true;
	}
	get type() {
		return true;
	}
};
var defineSallaReviews_runtime = () => {};
var SallaReviewsCore = /*@__PURE__*/ L({
	tagName: "salla-reviews",
	elementClass: SallaReviewsElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaReviews_runtime
});
SallaReviewsCore.displayName = "SallaReviewsCore";
var SallaReviews = withDeferredHydration(SallaReviewsCore, "SallaReviews");
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/Testimonials-MZCVP66E.js
var import_jsx_runtime = require_jsx_runtime();
var Testimonials = (0, import_react.memo)(function Testimonials2({ data }) {
	const limit = data.limit !== void 0 ? parseInt(String(data.limit), 10) : 10;
	const type = data.type || "store";
	const sort = data.sort || "latest";
	const hideCustomerInfo = data.hide_customer_info ?? false;
	const displayAllUrl = data.display_all_url;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaReviews, {
		limit,
		sort,
		type,
		...displayAllUrl ? { displayAllLink: true } : {},
		...hideCustomerInfo ? { hideCustomerInfo: true } : {}
	}) });
});
export { Testimonials };
