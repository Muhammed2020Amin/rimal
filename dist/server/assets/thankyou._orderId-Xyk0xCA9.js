import { Na as require_jsx_runtime } from "./shared-home-LYGTeQ_-.js";
import { c as Route, l as ThankYou } from "./router-BghoZtJp.js";
// app/routes/thankyou.$orderId.tsx?tsr-split=component
/**
* ThankYou route configuration.
* Loads page data via loader and renders the ThankYou component.
*/
var import_jsx_runtime = require_jsx_runtime();
/**
* ThankYou page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
function ThankYouComponent() {
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThankYou.Component, { ...data });
}
export { ThankYouComponent as component };
