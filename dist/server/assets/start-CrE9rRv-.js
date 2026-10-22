import { t as createMiddleware } from "./createMiddleware-B7QQ-i63.js";
import { i as twilightMiddleware, r as earlyHintsMiddleware } from "./tanstack-DVYZAdnQ.js";
// node_modules/.pnpm/@tanstack+start-client-core@1.170.35/node_modules/@tanstack/start-client-core/dist/esm/createStart.js
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart = (getOptions) => {
	return {
		getOptions: async () => {
			const options = await getOptions();
			if (options.serializationAdapters) {
				const deduped = /* @__PURE__ */ new Set();
				dedupeSerializationAdapters(deduped, options.serializationAdapters);
				options.serializationAdapters = Array.from(deduped);
			}
			return options;
		},
		createMiddleware
	};
};
// app/start.ts
var startInstance = createStart(() => {
	return { requestMiddleware: [twilightMiddleware(), earlyHintsMiddleware()] };
});
export { startInstance };
