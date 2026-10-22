import { Na as require_jsx_runtime, dr as useTranslation, qn as HookSlot, yn as LazyNoContent } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/NotificationsPage-J2YNZPAN.js
var import_jsx_runtime = require_jsx_runtime();
function NotificationItem({ notification }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: notification.url,
		className: `s-notifications-item s-notifications-item-shadow${notification.is_read ? " s-notifications-item-read" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "s-notifications-item-icon",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `s-notifications-item-icon sicon-bell-ring${!notification.is_read ? " s-notifications-item-icon-new" : ""}` })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "s-notifications-item-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "s-notifications-item-content-leading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: notification.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: notification.body })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "s-notifications-item-content-trailing",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "sicon-time s-notifications-item-content-trailing-icon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notification.time_ago })]
			})]
		})]
	});
}
function NotificationsPage({ notifications }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:notifications.items.start" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "s-notifications-wrapper",
			children: notifications.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "s-notifications-container space-y-2",
				children: notifications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationItem, { notification: item }, item.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyNoContent, {
				icon: "sicon-bell-ring",
				message: t("blocks.header.no_notifications", "No notifications")
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "customer:notifications.items.end" })
	] });
}
export { NotificationsPage };
