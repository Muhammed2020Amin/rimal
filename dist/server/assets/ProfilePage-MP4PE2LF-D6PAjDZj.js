import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Na as require_jsx_runtime, Pa as require_react, Yn as withDeferredHydration, Yt as useUser, cr as L, qn as HookSlot } from "./shared-home-LYGTeQ_-.js";
import { t as SallaUserSettings } from "./salla-user-settings-COkaH5uf.js";
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-user-profile.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SallaUserProfileElement_runtime = class extends (typeof HTMLElement !== "undefined" ? HTMLElement : class {}) {
	get minAge() {
		return true;
	}
	get withCustomFields() {
		return true;
	}
};
var defineSallaUserProfile_runtime = () => {};
var SallaUserProfileCore = /*@__PURE__*/ L({
	tagName: "salla-user-profile",
	elementClass: SallaUserProfileElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaUserProfile_runtime
});
SallaUserProfileCore.displayName = "SallaUserProfileCore";
var SallaUserProfile = withDeferredHydration(SallaUserProfileCore, "SallaUserProfile");
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-verify.js
var SallaVerifyElement_runtime = class extends (typeof HTMLElement !== "undefined" ? HTMLElement : class {}) {
	get autoReload() {
		return true;
	}
	get display() {
		return true;
	}
	get getCode() {
		return true;
	}
	get open() {
		return true;
	}
	get supportWebAuth() {
		return true;
	}
	get type() {
		return true;
	}
};
var defineSallaVerify_runtime = () => {};
var SallaVerifyCore = /*@__PURE__*/ L({
	tagName: "salla-verify",
	elementClass: SallaVerifyElement_runtime,
	react: import_react.default,
	events: { onVerified: "verified" },
	defineCustomElement: defineSallaVerify_runtime
});
SallaVerifyCore.displayName = "SallaVerifyCore";
var SallaVerify = withDeferredHydration(SallaVerifyCore, "SallaVerify");
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/ProfilePage-MP4PE2LF.js
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage(_props) {
	const { data: user } = useUser();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:profile.start" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:profile.form.start" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaUserProfile, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:profile.form.end" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaVerify, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaUserSettings, {
			...user?.preferences?.notifications_enabled ? { isNotifiable: true } : {},
			className: "mt-10 block"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:profile.end" })
	] });
}
export { ProfilePage };
