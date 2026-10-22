import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-4ENPEHYZ.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function gtmScript(gtmId) {
	return `
window.dataLayer = window.dataLayer || [];
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');

window.dataLayer = new Proxy(window.dataLayer, {
  set(target, property, value) {
    target[property] = value;
    if (typeof value === 'object') {
      ['form_data', 'data', 'gateway', 'config', 'request', 'headers']
        .forEach(function(key) { value && value.hasOwnProperty(key) && delete value[key]; });
    }
    return true;
  }
});
`.trim();
}
var INTERACTION_EVENTS = [
	"pointerdown",
	"keydown",
	"touchstart",
	"scroll",
	"wheel"
];
var GTM_LOAD_DELAY_MS = 4e3;
function GoogleTagBody({ gtmIds }) {
	const gtmId = gtmIds?.[0];
	(0, import_react.useEffect)(() => {
		if (!gtmId) return;
		const id = gtmId;
		let timer;
		const stopWaiting = () => {
			window.clearTimeout(timer);
			window.removeEventListener("load", onLoad);
			INTERACTION_EVENTS.forEach((type) => window.removeEventListener(type, inject));
		};
		function inject() {
			stopWaiting();
			if (document.getElementById("gtm-script")) return;
			const script = document.createElement("script");
			script.id = "gtm-script";
			script.textContent = gtmScript(id);
			document.head.appendChild(script);
		}
		function onLoad() {
			timer = window.setTimeout(inject, GTM_LOAD_DELAY_MS);
		}
		INTERACTION_EVENTS.forEach((type) => window.addEventListener(type, inject, {
			once: true,
			passive: true
		}));
		if (document.readyState === "complete") onLoad();
		else window.addEventListener("load", onLoad, { once: true });
		return () => {
			stopWaiting();
			document.getElementById("gtm-script")?.remove();
		};
	}, [gtmId]);
	return null;
}
export { GoogleTagBody };
