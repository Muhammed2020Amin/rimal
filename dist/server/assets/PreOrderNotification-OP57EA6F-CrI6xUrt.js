import { Na as require_jsx_runtime, dr as useTranslation } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/PreOrderNotification-OP57EA6F.js
var import_jsx_runtime = require_jsx_runtime();
function PreOrderNotification() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("salla-alert", {
		className: "mb-5",
		message: t("pages.cart.pre_order_shipping", "Your order will be shipped when the pre-order product becomes available in the store."),
		variant: "info"
	});
}
export { PreOrderNotification };
