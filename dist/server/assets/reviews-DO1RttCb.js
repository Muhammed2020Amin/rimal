import { Na as require_jsx_runtime } from "./shared-home-LYGTeQ_-.js";
import { t as Reviews } from "./testimonials-5LgtmYnH.js";
import { w as Route } from "./router-BghoZtJp.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/reviews.tsx?tsr-split=component
/**
* Reviews route configuration.
* Loads page data via loader and renders the Reviews component.
*/
var import_jsx_runtime = require_jsx_runtime();
/**
* Reviews page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
function ReviewsComponent() {
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews.Component, { ...data });
}
export { ReviewsComponent as component };
