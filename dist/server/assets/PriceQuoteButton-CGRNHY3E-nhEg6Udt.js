import { Na as require_jsx_runtime, Sn as SallaButton, dr as useTranslation } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/PriceQuoteButton-CGRNHY3E.js
var import_jsx_runtime = require_jsx_runtime();
var handlePriceQuote = async () => {
	await window.salla?.cart.api.priceQuote?.();
};
function PriceQuoteButton() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaButton, {
		id: "request-price-quote-btn",
		className: "btn--oval btn--md",
		fill: "outline",
		onClick: handlePriceQuote,
		children: t("pages.cart.request_price_quote", "Request for Quotation")
	});
}
export { PriceQuoteButton };
