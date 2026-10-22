import { Na as require_jsx_runtime, dr as useTranslation, fn as Link } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/Copyright-EJW3DGP7.js
var import_jsx_runtime = require_jsx_runtime();
function Copyright({ storeName = "" }) {
	const { t } = useTranslation();
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		t("blocks.footer.copyright", "Copyright"),
		" | ",
		year,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "hover:text-primary",
			children: storeName
		}),
		" "
	] });
}
export { Copyright };
