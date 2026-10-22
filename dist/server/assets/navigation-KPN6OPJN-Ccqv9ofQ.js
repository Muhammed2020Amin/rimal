import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Na as require_jsx_runtime, Pa as require_react, Yr as NavigationProvider, ei as defaultNavigate, pn as LinkProvider } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-HTGBIA7K.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var NextJsLinkAdapter = (0, import_react.forwardRef)(({ to, href, children, className, style, title, target, rel, onClick, preload: _, replace, "aria-label": ariaLabel, ...rest }, ref) => {
	const destination = to ?? href ?? "/";
	const handleClick = (e) => {
		if (replace && typeof window !== "undefined") {
			e.preventDefault();
			window.history.replaceState(null, "", destination);
			window.dispatchEvent(new PopStateEvent("popstate"));
		}
		onClick?.(e);
	};
	return (0, import_react.createElement)("a", {
		ref,
		href: destination,
		className,
		style,
		title,
		target,
		rel,
		onClick: handleClick,
		"aria-label": ariaLabel,
		...rest,
		children
	});
});
NextJsLinkAdapter.displayName = "NextJsLinkAdapter";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/navigation-KPN6OPJN.js
var import_jsx_runtime = require_jsx_runtime();
function NavigationSetup({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationProvider, {
		navigate: defaultNavigate,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkProvider, {
			adapter: NextJsLinkAdapter,
			children
		})
	});
}
export { NavigationSetup };
