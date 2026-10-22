import { i as __toESM } from "./rolldown-runtime-BtDSRbSq.js";
import { Pa as require_react } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@uidotdev+usehooks@2.4.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@uidotdev/usehooks/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function oldSchoolCopy(text) {
	const tempTextArea = document.createElement("textarea");
	tempTextArea.value = text;
	document.body.appendChild(tempTextArea);
	tempTextArea.select();
	document.execCommand("copy");
	document.body.removeChild(tempTextArea);
}
function useCopyToClipboard() {
	const [state, setState] = import_react.useState(null);
	return [state, import_react.useCallback((value) => {
		const handleCopy = async () => {
			try {
				if (navigator?.clipboard?.writeText) {
					await navigator.clipboard.writeText(value);
					setState(value);
				} else throw new Error("writeText not supported");
			} catch (e) {
				oldSchoolCopy(value);
				setState(value);
			}
		};
		handleCopy();
	}, [])];
}
function useWindowScroll() {
	const [state, setState] = import_react.useState({
		x: null,
		y: null
	});
	const scrollTo = import_react.useCallback((...args) => {
		if (typeof args[0] === "object") window.scrollTo(args[0]);
		else if (typeof args[0] === "number" && typeof args[1] === "number") window.scrollTo(args[0], args[1]);
		else throw new Error(`Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`);
	}, []);
	import_react.useLayoutEffect(() => {
		const handleScroll = () => {
			setState({
				x: window.scrollX,
				y: window.scrollY
			});
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return [state, scrollTo];
}
export { useWindowScroll as n, useCopyToClipboard as t };
