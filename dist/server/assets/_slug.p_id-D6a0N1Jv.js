import { Na as require_jsx_runtime, t as ProductPage } from "./shared-home-LYGTeQ_-.js";
import { y as Route } from "./router-BghoZtJp.js";
// app/routes/$slug.p$id.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function ProductComponent() {
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPage, { ...data }, data.product.id);
}
export { ProductComponent as component };
