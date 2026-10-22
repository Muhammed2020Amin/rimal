import { Na as require_jsx_runtime, da as getTwilightContext, dr as useTranslation } from "./shared-home-LYGTeQ_-.js";
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-J5DGBS7Q.js
var import_jsx_runtime = require_jsx_runtime();
var THUMB_URL = "https://cdn.assets.salla.network/prod/stores/images/construction-01.png";
var SOCIAL_ICONS = [
	["twitter", "sicon-x"],
	["snapchat", "sicon-snapchat"],
	["youtube", "sicon-youtube"],
	["tiktok", "sicon-tiktok"],
	["facebook", "sicon-facebook"],
	["instagram", "sicon-instagram"]
];
var STYLE = `
.s-maintenance{display:flex;flex-direction:column;align-items:center;width:100%;height:100vh;height:100dvh;overflow-y:auto;color:#a3a3a3;background:#fff;filter:grayscale(100%);box-sizing:border-box}
.s-maintenance *{box-sizing:border-box}
.s-maintenance .mt-container{width:100%;max-width:1200px;margin:auto 0;padding:0 15px}
.s-maintenance .mt-panel{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}
.s-maintenance .mt-message{width:100%;padding-inline-start:80px;animation:revealMtBlock 1.5s forwards}
.s-maintenance .mt-title{display:flex;align-items:center;margin:0 0 20px}
.s-maintenance .mt-logo{display:block;flex-shrink:0;width:80px;height:80px;margin-inline-end:20px;border-radius:50%;overflow:hidden;box-shadow:0 0 5px rgb(0 0 0 / 10%)}
.s-maintenance .mt-logo img{display:block;width:100%;height:100%;object-fit:cover}
.s-maintenance .mt-title h1{font-size:2.25rem;line-height:1;margin:0;color:#666}
.s-maintenance .mt-content p{margin:0;white-space:pre-line}
.s-maintenance .mt-contact-list{display:inline-block;list-style:none;width:100%;max-width:500px;margin:20px 0 0;padding:20px 0 0;border-top:1px solid #eee}
.s-maintenance .mt-contact-list li{display:inline-block;margin-inline-end:10px}
.s-maintenance .mt-contact-list a{display:inline-flex;align-items:center;padding:5px;color:rgb(102 102 102 / 80%);text-decoration:none;font-size:1.25rem}
.s-maintenance .mt-contact-list a:hover{color:#666}
.s-maintenance .mt-contact--btn{padding:3px 20px 5px;border-radius:20px;color:#fff!important;background:rgb(102 102 102 / 80%);font-size:1rem!important}
.s-maintenance .mt-contact--btn:hover{background:#666}
.s-maintenance .mt-contact--btn i{margin-inline-end:10px}
.s-maintenance .thumb{width:100%;animation:revealMtBlock 1.5s .1s forwards;opacity:0}
.s-maintenance .thumb img{display:block;width:100%;max-width:450px;margin:0 auto}
@media (max-width:1024px){
.s-maintenance{padding:40px 0 10px}
.s-maintenance .mt-panel{flex-direction:column}
.s-maintenance .mt-message{order:2;text-align:center;padding:0;margin:50px 0 0}
.s-maintenance .mt-title{flex-direction:column;margin-bottom:30px}
.s-maintenance .mt-logo{margin:0 0 10px}
.s-maintenance .mt-title h1{font-size:1.5rem}
}
@media (max-width:640px){.s-maintenance .thumb img{width:80%}}
@keyframes revealMtBlock{from{opacity:0;transform:translateY(50%)}to{opacity:1;transform:translateY(0)}}
`;
function Contacts({ store, arabic }) {
	const { t } = useTranslation();
	const mobile = store?.contacts?.mobile;
	const socials = SOCIAL_ICONS.flatMap(([key, icon]) => {
		const href = store?.social?.[key];
		return href ? [{
			key,
			icon,
			href
		}] : [];
	});
	if (!mobile && socials.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: "mt-contact-list",
		children: [mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `tel:${mobile}`,
			className: "mt-contact--btn",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "sicon-phone",
				"aria-hidden": "true"
			}), t("common.elements.contact_us", { defaultValue: arabic ? "تواصل معنا" : "Contact us" })]
		}) }), socials.map(({ key, icon, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": key,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: icon,
				"aria-hidden": "true"
			})
		}) }, key))]
	});
}
function MaintenancePage() {
	const { settings, locale } = getTwilightContext();
	const { t } = useTranslation();
	const store = settings.store;
	const details = settings.maintenance_details;
	const arabic = locale.startsWith("ar");
	const title = details?.title || t("pages.maintenance.title", { defaultValue: arabic ? "المتجر قيد الصيانة" : "Store under maintenance" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "s-maintenance",
		"data-testid": "store-maintenance-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-message",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-title",
							children: [store?.logo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-logo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: store.logo,
									alt: store.name || t("common.elements.store_logo", { defaultValue: arabic ? "شعار المتجر" : "Store logo" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-content",
							children: details?.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: details.message }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("pages.maintenance.message", { defaultValue: arabic ? "عذرا عزيزي العميل، المتجر حاليا قيد الصيانة و سنعاود العمل خلال فترة وجيزة" : "Sorry, the store is under maintenance and will be back shortly." }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("pages.maintenance.thanks", { defaultValue: arabic ? "شكرا لتفهمكم" : "Thank you for your understanding." }) })] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacts, {
							store,
							arabic
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "thumb",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: THUMB_URL,
						alt: ""
					})
				})]
			})
		})]
	});
}
export { MaintenancePage };
