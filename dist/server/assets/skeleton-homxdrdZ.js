import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Na as require_jsx_runtime, Pa as require_react, Zt as useDevHomeBlocks, ar as Pulse, ba as RouteId, cn as storePageUrl, da as getTwilightContext, it as ReorderProducts, qn as HookSlot, sn as buildHreflangAlternates, tt as HomeComponentRenderer, vt as home } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-NEPBUZ5S.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
async function homeLoader(ctx) {
	const { queryClient } = getTwilightContext();
	const components = await queryClient.ensureQueryData(home.queries.components());
	return {
		locale: ctx?.locale || "ar",
		components: components.map((comp) => ({
			...comp,
			path: comp.path?.replace("home.", "") || comp.path
		})),
		page: { slug: RouteId.INDEX }
	};
}
var HomeSkeleton = (0, import_react.memo)(function HomeSkeleton2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "s-block container skeleton-block-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-64 sm:h-80 rounded-md" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "s-block container skeleton-block-products",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-10 w-48 mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
				children: [
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-56" }, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "s-block container skeleton-block-products",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-10 w-48 mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
				children: [
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-56" }, i))
			})]
		})
	] });
});
var HomePage = (0, import_react.memo)(function HomePage2({ components = [] }) {
	const renderedComponents = useDevHomeBlocks(components);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "home:start" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "home:content" }),
		renderedComponents.map((data, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeComponentRenderer, {
			data,
			index
		}, data.__dev_id ?? index)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "home:end" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReorderProducts, {})
	] });
});
function loader(_ctx) {
	return homeLoader({ locale: _ctx?.locale });
}
function head(ctx) {
	const store = ctx.settings?.store;
	if (!store) return {};
	const title = store.meta?.title ?? store.name;
	const description = store.meta?.description ?? store.description;
	const keywords = store.meta?.keywords;
	const url = storePageUrl(ctx.settings, ctx.location.pathname) ?? store.url;
	return {
		title,
		description,
		keywords,
		canonical: url,
		openGraph: {
			type: "website",
			title,
			description,
			images: store.logo,
			url
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: store.logo
		},
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	};
}
var Home = {
	id: RouteId.INDEX,
	loader,
	head,
	Component: HomePage
};
export { HomeSkeleton as n, Home as t };
