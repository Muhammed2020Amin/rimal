import { Na as require_jsx_runtime } from "./shared-home-LYGTeQ_-.js";
import { t as Notifications } from "./account-mIaxHDea.js";
import { _ as Route } from "./router-BghoZtJp.js";
// app/routes/account.notifications.tsx?tsr-split=component
/**
* Notifications route configuration.
* Loads page data via loader and renders the Notifications component.
*/
var import_jsx_runtime = require_jsx_runtime();
/**
* Notifications page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
function NotificationsComponent() {
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notifications.Component, { ...data });
}
export { NotificationsComponent as component };
