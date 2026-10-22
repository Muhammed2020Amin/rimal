import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-AQANJRBD.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function SiftSnippet({ beaconKey, customerId }) {
	(0, import_react.useEffect)(() => {
		if (!beaconKey) return;
		const sessionId = window.salla?.analytics?._anonymousId || "";
		window._sift = window._sift ?? [];
		const _sift = window._sift;
		_sift.push(["_setAccount", beaconKey]);
		_sift.push(["_setUserId", customerId || ""]);
		_sift.push(["_setSessionId", sessionId]);
		_sift.push(["_trackPageview"]);
		const script = document.createElement("script");
		script.src = "https://cdn.sift.com/s.js";
		script.async = true;
		document.body.appendChild(script);
		return () => {
			script.remove();
			window._sift = void 0;
		};
	}, [beaconKey, customerId]);
	return null;
}
export { SiftSnippet };
