import { Na as require_jsx_runtime } from "./shared-home-LYGTeQ_-.js";
import { l as useMatches, u as Outlet } from "./vendor-router-Dkq0bDk0.js";
import { t as LazyCustomerLayout } from "./chunk-HAH22L6T-nishQuT9.js";
import "./router-BghoZtJp.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/account.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function AccountLayoutComponent() {
	const page = useMatches().reduceRight((found, m) => found ?? (m.loaderData?.page ? m.loaderData.page : null), null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyCustomerLayout, {
		page,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
export { AccountLayoutComponent as component };
