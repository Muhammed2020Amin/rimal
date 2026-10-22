import { Na as require_jsx_runtime, fn as Link } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/NoContent-63TMCPGY.js
var import_jsx_runtime = require_jsx_runtime();
function NoContent({ icon = "sicon-shopping-bag", message, actionLabel, actionUrl = "/" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-content-placeholder",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `${icon} icon` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message }),
			actionLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: actionUrl,
				className: "btn btn--outline-primary btn--rounded-full",
				children: actionLabel
			})
		]
	});
}
export { NoContent };
