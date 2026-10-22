import { Na as require_jsx_runtime } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/CurrencySymbol-TARAYUOT.js
var import_jsx_runtime = require_jsx_runtime();
function CurrencySymbol({ currency }) {
	if (currency === "SAR") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
		className: "sicon-sar",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currency });
}
export { CurrencySymbol };
