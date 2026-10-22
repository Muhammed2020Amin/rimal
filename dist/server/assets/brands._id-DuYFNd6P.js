import { Na as require_jsx_runtime } from "./shared-home-LYGTeQ_-.js";
import { t as ProductListing } from "./product-listing-CDxbZQq9.js";
import { d as Route } from "./router-BghoZtJp.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/brands.$id.tsx?tsr-split=component
/**
* ProductListing route configuration.
* Loads page data via loader and renders the ProductListing component.
*/
var import_jsx_runtime = require_jsx_runtime();
/**
* ProductListing page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
function ProductListingComponent() {
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductListing.Component, { ...data });
}
export { ProductListingComponent as component };
