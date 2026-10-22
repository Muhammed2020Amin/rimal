import { i as __toESM, n as __exportAll } from "./rolldown-runtime-BtDSRbSq.js";
import { $ as ProductCard, $n as CustomerPageSkeleton, A as CalendarIcon, An as SallaQuickOrder, B as HomeIcon, Bt as useDate, C as useMotionAllowed, Cn as SallaUserMenu, Cr as useIsRestoring, D as useDialogFocus, E as useScrollLock, Ei as getSallaSDK, F as CrownIcon, Fn as SallaOffer, Fr as Subscribable, Ft as useComments, G as Money01Icon, Gn as SallaCartSummary, Gr as shallowEqualObjects, H as Mail01Icon, I as DashboardSquare01Icon, Jr as useQueryClient, K as NoteIcon, L as Delete01Icon, Li as clearAuthTokenCookie, Lt as TwilightProvider, M as CheckCircleIcon, Mt as useProduct, N as ChevronDownIcon, Na as require_jsx_runtime, Nn as SallaProductOptions, O as ArrowLeftIcon, On as SallaSearch, P as CloseIcon, Pa as require_react, Pt as HookName, Qn as CustomerLayoutSkeleton, R as DiscountTagIcon, Rn as SallaMenu, Rt as fastCheckoutScript, S as ScrollCarousel, Sr as useQueryErrorResetBoundary, T as afterNextPaint, U as MapPinIcon, Ur as replaceEqualDeep, V as LanguagesIcon, Vr as noop, Vt as useMoney, W as MinusIcon, Wn as SallaComments, Wt as usePageConfig, X as ShoppingBagIcon, Xn as BlogSkeleton, Y as SearchIcon, Yn as withDeferredHydration, Yt as useUser, Z as UserIcon, Zn as CartSkeleton, _ as Brands$1, _i as api, _r as fetchOptimistic, a as PhotosSlider, ai as redirect, ar as Pulse, at as registerHomeComponentConfig, b as DigitalFilesSettings, ba as RouteId, bi as getActiveCurrency, bn as LazyRenderWhenVisible, br as getHasError, c as FeaturedProducts, cr as L, ct as LazyAddToCartForm, d as featuredProductsConfig, da as getTwilightContext, dr as useTranslation, dt as ProductGallery, er as FiltersSkeleton, et as DefaultHomeComponents, f as EnhancedSlider, fn as Link, g as CustomTestimonials, gn as LazyBreadcrumb, gr as ensureSuspenseTimers, h as parseSlideVideo, hn as Image, ht as product, i as ProductsSlider$1, ir as ProductsListSkeleton, j as Call02Icon, ja as require_react_dom, jr as notifyManager, k as ArrowRightIcon, l as FeaturedProductsSpecialOffer, li as useIsHome, lr as hookRegistry, lt as LazyProductDetails, m as useSlideVideos, mi as isNativeApp, mr as useQuery, n as EnhancedSquareBanners, nt as LazyTestimonials, o as MainLinks, ot as registerHomeComponents, p as SlideVideo, pi as useTwilight, pr as queryOptions, pt as registry, q as PlusIcon, qn as HookSlot, r as SliderProductsWithHeader, ri as orThrow, rr as ProductDetailSkeleton, rt as ProductsSlider, s as FixedProducts, sn as buildHreflangAlternates, sr as SliderSkeleton, u as FeaturedProductsWithSpecialProduct, ur as PageAdvertisements, v as MOBILE_QUERY, vr as shouldSuspend, w as BottomSheet, wn as SallaSocial, wr as QueryObserver, x as useHydrated, xr as useClearResetErrorBoundary, y as useMobileViewport, ya as isLocale, yn as LazyNoContent, yr as ensurePreventErrorBoundaryRetry } from "./shared-home-LYGTeQ_-.js";
import { A as notFound, d as lazyRouteComponent, f as createFileRoute, k as redirect$1, o as useRouterState, r as Scripts, u as Outlet } from "./vendor-router-Dkq0bDk0.js";
import { a as createTwilightRootRoute, c as withHead, i as createRouter, s as store } from "./chunk-XK6TXHVO-BjOcIV2S.js";
import { t as SallaCartItemOffers } from "./salla-cart-item-offers-B2mPcme7.js";
import { n as listingSearch, r as searchListingSearch, t as ProductListing } from "./product-listing-CDxbZQq9.js";
import { t as brand } from "./chunk-3PS2WFNQ-D1jopspm.js";
import { n as ThemeStylesheet, t as ThemeHeadContent } from "./tanstack-DVYZAdnQ.js";
import { n as HomeSkeleton, t as Home } from "./skeleton-homxdrdZ.js";
import { n as LazyFooter } from "./chunk-HAH22L6T-nishQuT9.js";
import { t as menu } from "./chunk-ABDYSBBY-BCh63lA_.js";
import { t as blog } from "./chunk-YC4CEVQO-CGeDtywk.js";
import { a as BlogTagRoute, i as BlogSingle, n as BlogAuthorRoute, r as BlogCategoryRoute, t as Blog$1 } from "./blog-xxz822t9.js";
import { t as loyalty } from "./chunk-5K53BZIN-COVZRG10.js";
import { n as LoyaltyPoints, t as Loyalty } from "./loyalty-BxD9sjgs.js";
import { n as Testimonials, t as Reviews } from "./testimonials-5LgtmYnH.js";
import { t as order } from "./chunk-LG5355UU-DV61daeZ.js";
import { n as Orders, t as OrderSingle } from "./chunk-N6EWTAE4-BdstmZpX.js";
import { a as Wishlist, i as Wallet, n as Profile, r as Settings, t as Notifications } from "./account-mIaxHDea.js";
import "./orders-CCfsex0O.js";
// node_modules/.pnpm/@tanstack+query-core@5.102.8/node_modules/@tanstack/query-core/build/modern/queriesObserver.js
function difference(array1, array2) {
	const excludeSet = new Set(array2);
	return array1.filter((x) => !excludeSet.has(x));
}
var QueriesObserver = class extends Subscribable {
	#client;
	#result;
	#queries;
	#options;
	#observers;
	#combinedResult;
	#lastCombine;
	#lastResult;
	#lastQueryHashes;
	#observerMatches = [];
	constructor(client, queries, options) {
		super();
		this.#client = client;
		this.#options = options;
		this.#queries = [];
		this.#observers = [];
		this.#result = [];
		this.setQueries(queries);
	}
	onSubscribe() {
		if (this.listeners.size === 1) this.#observers.forEach((observer) => {
			observer.subscribe((result) => {
				this.#onUpdate(observer, result);
			});
		});
	}
	onUnsubscribe() {
		if (!this.listeners.size) this.destroy();
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set();
		this.#observers.forEach((observer) => {
			observer.destroy();
		});
	}
	setQueries(queries, options) {
		this.#queries = queries;
		this.#options = options;
		notifyManager.batch(() => {
			const prevObservers = this.#observers;
			const newObserverMatches = this.#findMatchingObservers(this.#queries);
			newObserverMatches.forEach((match) => match.observer.setOptions(match.defaultedQueryOptions));
			const newObservers = newObserverMatches.map((match) => match.observer);
			const newResult = newObservers.map((observer) => observer.getCurrentResult());
			const hasLengthChange = prevObservers.length !== newObservers.length;
			const hasIndexChange = newObservers.some((observer, index) => observer !== prevObservers[index]);
			const hasStructuralChange = hasLengthChange || hasIndexChange;
			const hasResultChange = hasStructuralChange ? true : newResult.some((result, index) => {
				const prev = this.#result[index];
				return !prev || !shallowEqualObjects(result, prev);
			});
			if (!hasStructuralChange && !hasResultChange) return;
			if (hasStructuralChange) {
				this.#observerMatches = newObserverMatches;
				this.#observers = newObservers;
			}
			this.#result = newResult;
			if (!this.hasListeners()) return;
			if (hasStructuralChange) {
				difference(prevObservers, newObservers).forEach((observer) => {
					observer.destroy();
				});
				difference(newObservers, prevObservers).forEach((observer) => {
					observer.subscribe((result) => {
						this.#onUpdate(observer, result);
					});
				});
			}
			this.#notify();
		});
	}
	getCurrentResult() {
		return this.#result;
	}
	getQueries() {
		return this.#observers.map((observer) => observer.getCurrentQuery());
	}
	getObservers() {
		return this.#observers;
	}
	getOptimisticResult(queries, combine) {
		const matches = this.#findMatchingObservers(queries);
		const result = matches.map((match) => match.observer.getOptimisticResult(match.defaultedQueryOptions));
		const queryHashes = matches.map((match) => match.defaultedQueryOptions.queryHash);
		return [
			result,
			(r) => {
				return this.#combineResult(r ?? result, combine, queryHashes);
			},
			() => {
				return this.#trackResult(result, matches);
			}
		];
	}
	#trackResult(result, matches) {
		const trackedProps = /* @__PURE__ */ new Set();
		return matches.map((match, index) => {
			const observerResult = result[index];
			return !match.defaultedQueryOptions.notifyOnChangeProps ? match.observer.trackResult(observerResult, (accessedProp) => {
				if (!trackedProps.has(accessedProp)) {
					trackedProps.add(accessedProp);
					matches.forEach((m) => {
						m.observer.trackProp(accessedProp);
					});
				}
			}) : observerResult;
		});
	}
	#combineResult(input, combine, queryHashes) {
		if (combine) {
			const lastHashes = this.#lastQueryHashes;
			const queryHashesChanged = queryHashes !== void 0 && lastHashes !== void 0 && (lastHashes.length !== queryHashes.length || queryHashes.some((hash, i) => hash !== lastHashes[i]));
			if (this.#result !== this.#lastResult || queryHashesChanged || combine !== this.#lastCombine) {
				this.#lastCombine = combine;
				this.#lastResult = this.#result;
				if (queryHashes !== void 0) this.#lastQueryHashes = queryHashes;
				this.#combinedResult = replaceEqualDeep(this.#combinedResult, combine(input));
			}
			return this.#combinedResult;
		}
		return input;
	}
	#shouldSkipCombine() {
		return !this.#options?.combine || this.#observers.some((observer, index) => {
			return observer.options.suspense && this.#result[index]?.data === void 0;
		});
	}
	#findMatchingObservers(queries) {
		const prevObserversMap = /* @__PURE__ */ new Map();
		this.#observers.forEach((observer) => {
			const key = observer.options.queryHash;
			if (!key) return;
			const previousObservers = prevObserversMap.get(key);
			if (previousObservers) previousObservers.push(observer);
			else prevObserversMap.set(key, [observer]);
		});
		const observers = [];
		queries.forEach((options) => {
			const defaultedOptions = this.#client.defaultQueryOptions(options);
			const observer = prevObserversMap.get(defaultedOptions.queryHash)?.shift() ?? new QueryObserver(this.#client, defaultedOptions);
			observers.push({
				defaultedQueryOptions: defaultedOptions,
				observer
			});
		});
		return observers;
	}
	#onUpdate(observer, result) {
		const index = this.#observers.indexOf(observer);
		if (index !== -1) {
			this.#result = this.#result.slice();
			this.#result[index] = result;
			this.#notify();
		}
	}
	#notify() {
		if (this.hasListeners()) {
			const shouldSkipCombine = this.#shouldSkipCombine();
			const previousResult = this.#combinedResult;
			const newResult = shouldSkipCombine ? previousResult : this.#combineResult(this.#trackResult(this.#result, this.#observerMatches), this.#options?.combine);
			if (shouldSkipCombine || previousResult !== newResult) notifyManager.batch(() => {
				this.listeners.forEach((listener) => {
					listener(this.#result);
				});
			});
		}
	}
};
// node_modules/.pnpm/@tanstack+react-query@5.102.8_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQueries.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useQueries({ queries, ...options }, queryClient) {
	const client = useQueryClient(queryClient);
	const isRestoring = useIsRestoring();
	const errorResetBoundary = useQueryErrorResetBoundary();
	const subscribed = options.subscribed !== false;
	const defaultedQueries = import_react.useMemo(() => queries.map((opts) => {
		const defaultedOptions = client.defaultQueryOptions(opts);
		defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : subscribed ? "optimistic" : void 0;
		return defaultedOptions;
	}), [
		queries,
		client,
		isRestoring,
		subscribed
	]);
	defaultedQueries.forEach((queryOptions) => {
		ensureSuspenseTimers(queryOptions);
		const query = client.getQueryCache().get(queryOptions.queryHash);
		ensurePreventErrorBoundaryRetry(queryOptions, errorResetBoundary, query);
	});
	useClearResetErrorBoundary(errorResetBoundary);
	const [observer] = import_react.useState(() => new QueriesObserver(client, defaultedQueries, options));
	const [optimisticResult, getCombinedResult, trackResult] = observer.getOptimisticResult(defaultedQueries, options.combine);
	const shouldSubscribe = !isRestoring && subscribed;
	import_react.useSyncExternalStore(import_react.useCallback((onStoreChange) => shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop, [observer, shouldSubscribe]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
	import_react.useEffect(() => {
		observer.setQueries(defaultedQueries, options);
	}, [
		defaultedQueries,
		options,
		observer
	]);
	const suspensePromises = optimisticResult.some((result, index) => shouldSuspend(defaultedQueries[index], result)) ? optimisticResult.flatMap((result, index) => {
		const opts = defaultedQueries[index];
		if (opts && shouldSuspend(opts, result)) {
			const queryObserver = new QueryObserver(client, opts);
			return fetchOptimistic(opts, queryObserver, errorResetBoundary);
		}
		return [];
	}) : [];
	if (suspensePromises.length > 0) throw Promise.all(suspensePromises);
	const firstSingleResultWhichShouldThrow = optimisticResult.find((result, index) => {
		const query = defaultedQueries[index];
		return query && getHasError({
			result,
			errorResetBoundary,
			throwOnError: query.throwOnError,
			query: client.getQueryCache().get(query.queryHash),
			suspense: query.suspense
		});
	});
	if (firstSingleResultWhichShouldThrow) throw firstSingleResultWhichShouldThrow.error;
	return getCombinedResult(trackResult());
}
// node_modules/.pnpm/@salla.sa+twilight-components-react@3.0.8_@salla.sa+twilight-components@3.0.8_@jitsu+pr_94883ce67dd87f28e91a5e42e5a69270/node_modules/@salla.sa/twilight-components-react/dist/components/salla-conditional-offer.js
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var SallaConditionalOfferElement_runtime = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var defineSallaConditionalOffer_runtime = () => {};
var SallaConditionalOfferCore = /*@__PURE__*/ L({
	tagName: "salla-conditional-offer",
	elementClass: SallaConditionalOfferElement_runtime,
	react: import_react.default,
	events: {},
	defineCustomElement: defineSallaConditionalOffer_runtime
});
SallaConditionalOfferCore.displayName = "SallaConditionalOfferCore";
var SallaConditionalOffer = withDeferredHydration(SallaConditionalOfferCore, "SallaConditionalOffer");
// app/hooks/useAppSafeAreaTop.ts
var VAR = "--app-safe-area-top";
function read() {
	const value = parseFloat(document.documentElement.style.getPropertyValue(VAR));
	return Number.isFinite(value) ? value : 0;
}
/**
* The Salla app's top inset (status bar / notch) in pixels, as the engine
* writes it to `--app-safe-area-top` on `<html>` from `mobile::ui.safearea`.
* 0 on the server, in a browser, and until the app reports it; follows later
* reports, which the app can send at any time.
*/
function useAppSafeAreaTop() {
	const [top, setTop] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setTop(read());
		const observer = new MutationObserver(() => setTop(read()));
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style"]
		});
		return () => observer.disconnect();
	}, []);
	return top;
}
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/index.js
function useComponent(name) {
	return registry.resolve(name);
}
// node_modules/.pnpm/@tanstack+react-router-devtools@1.167.2_@tanstack+react-router@1.170.45_react-dom@19.2._691633d03359d6c7f2ec84b8f00a0fcb/node_modules/@tanstack/react-router-devtools/dist/esm/index.js
var TanStackRouterDevtools = function() {
	return null;
};
// \0virtual:twilight/theme-translations
var theme_translations_default = {
	"ar.trans": {
		"pages.cart.total": "الإجمالي",
		"pages.cart.empty": "السلة فارغة",
		"pages.cart.continue_shopping": "متابعة التسوق",
		"pages.cart.added_to_cart": "تمت الإضافة إلى سلة التسوق",
		"pages.cart.view_cart": "عرض السلة",
		"pages.cart.apply_coupon_btn": "تطبيق",
		"pages.products.add_to_cart": "أضف للسلة",
		"pages.products.out_of_stock": "نفذت الكمية",
		"common.actions.save": "حفظ",
		"common.actions.cancel": "إلغاء",
		"pages.thank_you.hero_title": "شكراً لتسوقكم عبر متجرنا... 😊",
		"pages.thank_you.description": "تم استقبال طلبك بنجاح وسيتم مراجعته وتأكيده في أقرب وقت.",
		"pages.thank_you.view_order_details": "عرض تفاصيل الطلب",
		"pages.thank_you.order_id_label": "رقم الطلب",
		"pages.thank_you.email_sent_to": "تم إرسال البريد الإلكتروني إلى",
		"pages.thank_you.resend_invoice": "إعادة إرسال الفاتورة عبر البريد الإلكتروني",
		"pages.thank_you.send": "إرسال",
		"pages.thank_you.support": "الدعم",
		"pages.thank_you.invoice_sent_success": "تم إرسال الفاتورة بنجاح",
		"common.titles.home": "الرئيسية",
		"common.titles.categories": "التصنيفات",
		"common.titles.account": "حسابي",
		"common.titles.my_account": "حسابي",
		"common.titles.more": "المزيد",
		"common.titles.profile": "الملف الشخصي",
		"blocks.header.main_menu": "القائمة",
		"blocks.header.search": "بحث",
		"blocks.header.cart": "السلة",
		"blocks.header.close": "إغلاق",
		"blocks.header.back": "رجوع",
		"blocks.header.browse_all": "تصفّح كل",
		"blocks.header.login_to_your_account": "سجل دخول إلى حسابك في المتجر",
		"blocks.header.login": "تسجيل الدخول",
		"blocks.header.logout": "تسجيل الخروج",
		"blocks.header.change_language": "تغيير اللغة",
		"blocks.header.change_currency": "تغيير العملة",
		"blocks.header.branches": "الفرع",
		"blocks.cart.products": "المنتجات",
		"blocks.cart.item_total": "المجموع",
		"blocks.home.featured_products_tab": "منتجات",
		"blocks.footer.important_links": "روابط مهمة",
		"blocks.footer.telegram": "تليجرام",
		"blocks.footer.email": "البريد",
		"blocks.footer.mobile": "رقم الجوال",
		"blocks.footer.phone": "الهاتف",
		"blocks.footer.whatsapp": "الواتساب",
		"blocks.footer.sbc_trusted_by": "موثوق لدى",
		"blocks.footer.sbc_platform": "منصة الأعمال",
		"blocks.footer.newsletter": "النشرة البريدية",
		"blocks.footer.newsletter_placeholder": "البريد الإلكتروني",
		"blocks.footer.newsletter_subscribe": "اشترك الآن",
		"blocks.footer.newsletter_success": "تم الاشتراك بنجاح",
		"blocks.footer.newsletter_error": "حدث خطأ، يرجى المحاولة مرة أخرى",
		"blocks.product.in_stock": "متوفر في المخزون",
		"pages.products.barcode": "الباركود",
		"blocks.home.testimonials": "آراء العملاء",
		"blocks.home.reviews_prev": "السابق",
		"blocks.home.reviews_next": "التالي",
		"blocks.home.slider_page": "الشريحة",
		"blocks.home.discover_now": "اكتشف الآن",
		"blocks.catalog.products_count": "منتج",
		"blocks.catalog.hide_filters": "اخفاء التصفية",
		"blocks.catalog.show_filters": "اظهار التصفية",
		"blocks.catalog.view": "طريقة العرض",
		"blocks.catalog.view_grid": "عرض شبكي",
		"blocks.catalog.view_list": "عرض قائمة",
		"pages.wishlist.share": "شارك",
		"pages.wishlist.share_all": "مشاركة القائمة",
		"pages.wishlist.share_specific": "مشاركة منتجات محددة",
		"pages.wishlist.share_list_title": "مشاركة قائمة الأمنيات",
		"pages.wishlist.select_all": "تحديد الكل",
		"common.elements.try_again": "حاول مرة أخرى",
		"pages.order.option_name": "الخيار",
		"pages.order.option_content": "المحتوى",
		"pages.order.can_edit_or_delete_your_review_within": "يمكنك تعديل أو حذف تقييمك خلال",
		"pages.order.edit_period_ended": "تم انتهاء المدة المحددة لتعديل التقييم",
		"pages.order.delete_period_ended": "تم انتهاء المدة المحددة لحذف التقييم",
		"pages.order.days_since_added": "أيام من إضافته",
		"blocks.home.blog": "المدونة",
		"blocks.order_options.title": "خيارات الطلب",
		"blocks.order_options.subtitle": "اختر من الخيارات المتاحة.",
		"blocks.order_options.continue": "متابعة",
		"blocks.order_options.total": "الإجمالي",
		"blocks.order_options.required_message": "يرجى تعبئة الحقول المطلوبة"
	},
	"en.trans": {
		"pages.cart.total": "Total",
		"pages.cart.empty": "Your cart is empty",
		"pages.cart.continue_shopping": "Continue Shopping",
		"pages.cart.added_to_cart": "Added to Cart",
		"pages.cart.view_cart": "View Cart",
		"pages.cart.apply_coupon_btn": "Apply",
		"pages.products.add_to_cart": "Add to Cart",
		"pages.products.out_of_stock": "Out of Stock",
		"common.actions.save": "Save",
		"common.actions.cancel": "Cancel",
		"pages.thank_you.hero_title": "Thank you for shopping with us! 😊",
		"pages.thank_you.description": "Your order has been received and will be reviewed and confirmed shortly.",
		"pages.thank_you.view_order_details": "View Order Details",
		"pages.thank_you.order_id_label": "Order ID",
		"pages.thank_you.email_sent_to": "Email sent to",
		"pages.thank_you.resend_invoice": "Resend invoice email",
		"pages.thank_you.send": "Send",
		"pages.thank_you.support": "Support",
		"pages.thank_you.invoice_sent_success": "Invoice sent successfully",
		"common.titles.home": "Home",
		"common.titles.categories": "Categories",
		"common.titles.account": "Account",
		"common.titles.my_account": "My Account",
		"common.titles.more": "More",
		"common.titles.profile": "Profile",
		"blocks.header.main_menu": "Menu",
		"blocks.header.search": "Search",
		"blocks.header.cart": "Cart",
		"blocks.header.close": "Close",
		"blocks.header.back": "Back",
		"blocks.header.browse_all": "Browse all",
		"blocks.header.login_to_your_account": "Log in to your store account",
		"blocks.header.login": "Login",
		"blocks.header.logout": "Logout",
		"blocks.header.change_language": "Change language",
		"blocks.header.change_currency": "Change currency",
		"blocks.header.branches": "Branch",
		"blocks.cart.products": "Products",
		"blocks.cart.item_total": "Total",
		"blocks.home.featured_products_tab": "Products",
		"blocks.footer.important_links": "Important links",
		"blocks.footer.telegram": "Telegram",
		"blocks.footer.email": "Email",
		"blocks.footer.mobile": "Mobile",
		"blocks.footer.phone": "Phone",
		"blocks.footer.whatsapp": "WhatsApp",
		"blocks.footer.sbc_trusted_by": "Trusted by",
		"blocks.footer.sbc_platform": "Business Platform",
		"blocks.footer.newsletter": "Newsletter",
		"blocks.footer.newsletter_placeholder": "Email address",
		"blocks.footer.newsletter_subscribe": "Subscribe now",
		"blocks.footer.newsletter_success": "Subscribed successfully",
		"blocks.footer.newsletter_error": "Something went wrong, please try again",
		"blocks.product.in_stock": "In stock",
		"pages.products.barcode": "Barcode",
		"blocks.home.testimonials": "Customer reviews",
		"blocks.home.reviews_prev": "Previous",
		"blocks.home.reviews_next": "Next",
		"blocks.home.slider_page": "Slide",
		"blocks.home.discover_now": "Discover now",
		"blocks.catalog.products_count": "products",
		"blocks.catalog.hide_filters": "Hide filters",
		"blocks.catalog.show_filters": "Show filters",
		"blocks.catalog.view": "View",
		"blocks.catalog.view_grid": "Grid view",
		"blocks.catalog.view_list": "List view",
		"pages.wishlist.share": "Share",
		"pages.wishlist.share_all": "Share the list",
		"pages.wishlist.share_specific": "Share specific items",
		"pages.wishlist.share_list_title": "Share wishlist",
		"pages.wishlist.select_all": "Select all",
		"common.elements.try_again": "Try again",
		"pages.order.option_name": "Option name",
		"pages.order.option_content": "Content",
		"pages.order.can_edit_or_delete_your_review_within": "You can edit or delete your review within",
		"pages.order.edit_period_ended": "The period to edit the review has ended",
		"pages.order.delete_period_ended": "The period to delete the review has ended",
		"pages.order.days_since_added": "days since it was added",
		"blocks.home.blog": "Blog",
		"blocks.order_options.title": "Order options",
		"blocks.order_options.subtitle": "Choose from the available options.",
		"blocks.order_options.continue": "Continue",
		"blocks.order_options.total": "Total",
		"blocks.order_options.required_message": "Please fill in the required fields"
	}
};
// app/lib/routeIds.ts
var PRODUCT_ROUTE_ID = "/{-$locale}/$slug/p{$id}";
var HOME_ROUTE_ID = "/{-$locale}/";
// app/lib/menuOverflow.ts
/** Marks the "More" item's `<li>`, so the stylesheet can find it (`[data-more-menu]`). */
var MORE_MENU_ATTR = "data-more-menu";
/** The synthetic "More" item's id; no real menu item uses a string id like it. */
var MORE_MENU_ID = "more-menu";
/**
* Drop items with no title (the API returns e.g. the `brands` link as
* `title: null`), recursively, so menus only ever see renderable rows.
*/
var pruneUntitled = (items) => items.filter((item) => item.title != null && item.title !== "").map((item) => item.children?.length ? {
	...item,
	children: pruneUntitled(item.children)
} : item);
/**
* The featured products a menu item carries, which make its panel a mega panel.
*
* The menus API sends them as `products`, not declared on the engine's
* `MenuItem`: a list of ids, or the same as a comma-separated string. Anything
* that isn't a positive id is dropped.
*/
function menuProductIds(item) {
	const raw = item.products;
	return (Array.isArray(raw) ? raw : typeof raw === "string" ? raw.replace(/[[\]\s]/g, "").split(",") : typeof raw === "number" ? [raw] : []).map(Number).filter((id) => Number.isInteger(id) && id > 0);
}
/**
* How many root items fit on one line.
*
* `widths` are the items' own widths, `gap` the space between two of them. When
* every item fits, all of them show. Otherwise room is kept for the "More" item
* (`moreWidth`) and as many items as fit go ahead of it, in menu order.
*/
function fitCount(widths, available, moreWidth, gap) {
	if (widths.reduce((sum, width) => sum + width, 0) + gap * (widths.length - 1) <= available) return widths.length;
	let used = moreWidth;
	let count = 0;
	while (count < widths.length && used + gap + widths[count] <= available) {
		used += gap + widths[count];
		count += 1;
	}
	return count;
}
/**
* The first `fit` items, then one "More" item holding the rest as its children,
* which renders as a dropdown like any parent. Unchanged when everything fits.
*/
function splitMenu(items, fit, moreTitle) {
	if (fit >= items.length) return items;
	return [...items.slice(0, fit), {
		id: MORE_MENU_ID,
		title: moreTitle,
		url: "#",
		children: items.slice(fit)
	}];
}
/**
* How many columns a first-level panel's links take: one per {@link PANEL_ROWS}
* links, at most {@link PANEL_MAX_COLUMNS}, so a long list grows sideways
* rather than past the bottom of the screen.
*/
function panelColumns(count) {
	return Math.min(4, Math.max(1, Math.ceil(count / 8)));
}
// app/components/layout/HeaderMainMenu.tsx
/** Layout effects measure before paint; on the server there is nothing to measure. */
var useIsomorphicLayoutEffect = typeof window === "undefined" ? import_react.useEffect : import_react.useLayoutEffect;
var NO_ITEMS = [];
/**
* A short, stable key for what decides the root items' widths: each one's id,
* title, and whether it has children (which adds a caret).
*/
function menuKey(items) {
	const text = items.map((item) => `${String(item.id)}:${item.title ?? ""}:${item.children?.length ? 1 : 0}`).join("|");
	let hash = 0;
	for (let i = 0; i < text.length; i += 1) hash = hash * 31 + text.charCodeAt(i) | 0;
	return `${items.length}-${(hash >>> 0).toString(36)}`;
}
/** The "More" link only opens its dropdown (on hover / focus); it goes nowhere. */
var preventJump = (event) => event.preventDefault();
/**
* The default layout's main menu (`lg+`).
*
* Rendered by the theme rather than by `<salla-menu suppressHydrationWarning>`, so a mega panel's
* featured products are the theme's own {@link ProductCard} — the same card as
* every product list — and the markup is the same on every Twilight version.
* Data is the store's `menus/header`, the drawer's source too.
*
* With `enable_more_menu` on (the default) the menu stays on one line: items
* that don't fit move into a last "More" item. Off, it wraps onto more lines.
*/
function HeaderMainMenu() {
	const { theme } = useTwilight();
	const { t } = useTranslation();
	const oneLine = (theme?.settings)?.enable_more_menu !== false;
	const { data: rawItems = NO_ITEMS } = useQuery(menu.queries.header());
	const items = (0, import_react.useMemo)(() => pruneUntitled(rawItems), [rawItems]);
	if (!oneLine) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "main-menu",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItems, {
			items,
			root: true
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneLineMenu, {
		items,
		moreTitle: t("common.titles.more", "More")
	});
}
/**
* The menu kept to one line.
*
* 1. The whole menu renders once, clipped to one line, and each root item's
*    width is read before the browser paints. That happens again only when the
*    menu itself changes (another language, a merchant edit) or once the web
*    font has loaded.
* 2. On every resize, those widths decide how many items fit; the rest become
*    the children of a last "More" item.
*/
function OneLineMenu({ items, moreTitle }) {
	const key = (0, import_react.useMemo)(() => menuKey(items), [items]);
	const rootRef = (0, import_react.useRef)(null);
	const listRef = (0, import_react.useRef)(null);
	const probeRef = (0, import_react.useRef)(null);
	const [measured, setMeasured] = (0, import_react.useState)(null);
	const [available, setAvailable] = (0, import_react.useState)(0);
	const current = measured?.key === key ? measured : null;
	const fit = current ? fitCount(current.widths, available, current.more, current.gap) : items.length;
	const shown = (0, import_react.useMemo)(() => current ? splitMenu(items, fit, moreTitle) : items, [
		current,
		items,
		fit,
		moreTitle
	]);
	useIsomorphicLayoutEffect(() => {
		const root = rootRef.current;
		const list = listRef.current;
		if (current || !root || !list || !items.length) return;
		const width = root.clientWidth;
		setAvailable(width);
		if (width === 0) return;
		const lis = list.querySelectorAll(":scope > .s-menu-root-level");
		setMeasured({
			key,
			widths: Array.from(lis, (li) => li.getBoundingClientRect().width),
			more: probeRef.current?.getBoundingClientRect().width ?? 0,
			gap: parseFloat(getComputedStyle(list).columnGap) || 0
		});
	}, [
		current,
		items,
		key,
		available
	]);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root || typeof ResizeObserver === "undefined") return;
		const observer = new ResizeObserver(() => setAvailable(root.clientWidth));
		observer.observe(root);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined" || !document.fonts || document.fonts.status === "loaded") return;
		let active = true;
		document.fonts.ready.then(() => {
			if (active) setMeasured(null);
		});
		return () => {
			active = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: `site-header__oneline-menu${current ? "" : " is-measuring"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			ref: listRef,
			className: "main-menu",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItems, {
				items: shown,
				root: true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "main-menu site-header__more-probe",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				ref: probeRef,
				className: "s-menu-root-level s-menu-has-children",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					tabIndex: -1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: moreTitle })
				})
			})
		})]
	});
}
function MenuItems({ items, root }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuEntry, {
		item,
		root
	}, `${String(item.id)}-${item.url}`)) });
}
/**
* One menu item: its link, and a panel of its children when it has any. With
* featured products it is a mega panel, which loads them the first time it
* opens rather than with the page.
*/
function MenuEntry({ item, root }) {
	const children = item.children ?? [];
	const hasChildren = children.length > 0;
	const productIds = hasChildren ? menuProductIds(item) : [];
	const isMega = productIds.length > 0;
	const isMore = item.id === MORE_MENU_ID;
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [placement, setPlacement] = (0, import_react.useState)(END_PLACEMENT);
	const [shift, setShift] = (0, import_react.useState)(0);
	const panelRef = (0, import_react.useRef)(null);
	/** The panel's own width, read while it isn't capped to the room beside it. */
	const naturalWidth = (0, import_react.useRef)(0);
	const columns = panelColumns(children.length);
	const onOpen = (event) => {
		if (isMega) setOpened(true);
		if (!root && panelRef.current) {
			if (placement.maxWidth === void 0) naturalWidth.current = panelRef.current.offsetWidth;
			setPlacement(placeNested(event.currentTarget, naturalWidth.current));
		}
		if (root && !isMega && panelRef.current) setShift(shiftIntoView(panelRef.current, shift));
	};
	const className = [
		root ? "s-menu-root-level" : "s-menu-non-root-level",
		hasChildren && "s-menu-has-children",
		isMega && "s-menu-mega-menu",
		placement.start && "s-menu-opens-start"
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className,
		...isMore ? { [MORE_MENU_ATTR]: "true" } : {},
		...hasChildren ? {
			onMouseEnter: onOpen,
			onFocus: onOpen
		} : {},
		children: [isMore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#",
			role: "button",
			"aria-haspopup": "true",
			onClick: preventJump,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.url,
			...item.target && item.target !== "_self" ? {
				target: item.target,
				rel: "noopener noreferrer"
			} : {},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title })
		}), hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: panelRef,
			className: `s-menu-sub-menu${isMega && columns > 1 ? " is-stacked" : ""}`,
			...shift || placement.maxWidth !== void 0 ? {
				style: {
					...shift ? { "--panel-shift": `${shift}px` } : {},
					...placement.maxWidth !== void 0 ? { "--panel-max": `${placement.maxWidth}px` } : {}
				},
				...placement.maxWidth !== void 0 ? { "data-capped": "true" } : {}
			} : {},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				...columns > 1 ? {
					className: "s-menu-columns",
					style: { "--menu-columns": columns }
				} : {},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItems, {
					items: children,
					root: false
				})
			}), isMega && opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaProducts, { ids: productIds })]
		})]
	});
}
/** Space kept between a panel and the window's edge. */
var VIEWPORT_MARGIN = 8;
var END_PLACEMENT = { start: false };
/**
* Where a nested panel `width` px wide opens beside its row. Past the row's end
* edge (left of it in a right-to-left page) when it fits there; else past its
* start edge when it fits there; else on the roomier side, capped to that room.
*/
function placeNested(row, width) {
	const rect = row.getBoundingClientRect();
	const rtl = getComputedStyle(row).direction === "rtl";
	const left = rect.left - VIEWPORT_MARGIN;
	const right = window.innerWidth - rect.right - VIEWPORT_MARGIN;
	const roomEnd = rtl ? left : right;
	const roomStart = rtl ? right : left;
	if (roomEnd >= width) return END_PLACEMENT;
	if (roomStart >= width) return { start: true };
	const start = roomStart > roomEnd;
	return {
		start,
		maxWidth: Math.max(0, Math.floor(start ? roomStart : roomEnd))
	};
}
/**
* How far (in px, positive to the right) to move a panel so it stays inside the
* window. `current` is the shift already applied, which its position includes.
*/
function shiftIntoView(panel, current) {
	const rect = panel.getBoundingClientRect();
	const left = rect.left - current;
	const right = left + rect.width;
	const max = window.innerWidth - VIEWPORT_MARGIN;
	let next = 0;
	if (right > max) next = max - right;
	if (left + next < VIEWPORT_MARGIN) next = VIEWPORT_MARGIN - left;
	return Math.round(next);
}
/** Space left under a mega panel's products, and the least height they keep. */
var PRODUCTS_BOTTOM_GAP = 32;
var PRODUCTS_MIN_HEIGHT = 160;
/**
* A mega panel's featured products, as the theme's product cards in its product
* grid. Capped to the room left in the window below them, and scrollable within
* it: a fixed header leaves no other way to reach a card that falls below the
* window. Only this area scrolls, never the panel, whose links' nested menus
* would be clipped by a scrolling box.
*/
function MegaProducts({ ids }) {
	const { data } = useQuery(product.queries.list({
		source: "selected",
		sourceValue: ids,
		perPage: ids.length
	}));
	const products = data?.items ?? [];
	const ref = (0, import_react.useRef)(null);
	const [maxHeight, setMaxHeight] = (0, import_react.useState)();
	useIsomorphicLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;
		const update = () => setMaxHeight(Math.max(PRODUCTS_MIN_HEIGHT, Math.floor(window.innerHeight - el.getBoundingClientRect().top - PRODUCTS_BOTTOM_GAP)));
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, [products.length]);
	if (!products.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "s-menu-products-wrapper",
		...maxHeight ? { style: { maxHeight } } : {},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "s-products-list-wrapper s-products-list-vertical-cards",
			children: products.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.id))
		})
	});
}
// app/lib/menuItemKind.ts
var KINDS = [
	"offers",
	"blog",
	"brands"
];
var asKind = (value) => typeof value === "string" && KINDS.includes(value) ? value : null;
/**
* Which built-in page a menu item links to, or null for anything else (a
* category, a product, a custom link). Built-in items carry a word id
* (`"offers"`, `"blog"`), echoed in `attrs` as ` id="offers"`; the URL's last
* path segment (`/ar/blog`) is the fallback when neither is set.
*/
function builtInMenuKind(item) {
	const byId = asKind(item.id);
	if (byId) return byId;
	const byAttrs = asKind(item.attrs?.match(/\bid="([^"]+)"/)?.[1]);
	if (byAttrs) return byAttrs;
	return asKind((item.url ?? "").split(/[?#]/)[0].replace(/^[a-z]+:\/\/[^/]+/i, "").split("/").filter(Boolean).pop());
}
// app/lib/storeSwitchers.ts
/**
* Inside the Salla app, asks the app to open its own language or currency sheet
* (`mobile::language.open` / `mobile::currency.open`), through the SDK's
* `salla.mobile` methods when it has them, else by emitting the event, which the
* SDK forwards to the app. Returns false outside the app.
*/
function openNativeSheet(sheet) {
	if (!isNativeApp()) return false;
	const salla = window.salla;
	const open = sheet === "language" ? salla?.mobile?.openLanguages : salla?.mobile?.openCurrencies;
	if (typeof open === "function") open.call(salla?.mobile);
	else salla?.event?.dispatch?.(`mobile::${sheet}.open`, {});
	return true;
}
/**
* Opens a switcher. Inside the Salla app, language and currency open the app's
* own sheets instead of the web modal; everywhere else they open the shared
* `<SallaLocalizationModal>` (`localization::open`). The branch opens
* `<SallaScopes>` (`scopes::open`). Both modals are mounted in `ThemeLayout`.
*/
function openStoreSwitcher(switcher) {
	if (switcher !== "branch" && openNativeSheet(switcher)) return;
	window.salla?.event?.dispatch(switcher === "branch" ? "scopes::open" : "localization::open");
}
// app/components/layout/HeaderNav.tsx
/** Keep in sync with the panel transition in `header.scss`. */
var TRANSITION_MS = 320;
/** Nothing to subscribe to: `document.body` only ever differs between server and client. */
var subscribeNothing = () => () => {};
/** A menu item opens a sub-column only when its children are actually present. */
var hasChildren = (item) => Array.isArray(item.children) && item.children.length > 0;
var PLACEHOLDER_ICONS = {
	offers: DiscountTagIcon,
	blog: NoteIcon,
	brands: CrownIcon
};
/**
* Stands in for a missing menu image: a grey circle with the page's icon
* (offers, blog, brands) or a general one for anything else.
*/
function NavImagePlaceholder({ item }) {
	const kind = builtInMenuKind(item);
	const Icon = kind ? PLACEHOLDER_ICONS[kind] : DashboardSquare01Icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "site-nav-drawer__link-img-placeholder",
		"data-kind": kind ?? "general",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "site-nav-drawer__link-img-icon" })
	});
}
/** A real destination — the API uses `#` / empty for "group only" items. */
var isLinkable = (url) => !!url && url !== "#";
/**
* A row's label — with the merchant's menu image ahead of it on the root level.
*
* Root-level rows mix items that do and don't have an image, and merchants
* reorder/rename them freely, so which rows have one isn't predictable. An
* image-less row rendered with no reserved space leaves its text flush
* against the row edge instead of lined up with an image row's text (image
* width + gap to the right of it) — fine when *no* root row has an image
* (every row is flush, consistently), wrong the moment even one does. So the
* placeholder (`NavImagePlaceholder`) is reserved only when the root level
* actually mixes image and image-less rows (`withImage`, computed once from whether any
* root item has one — see `NavColumns`), not unconditionally for every
* root-level row regardless of whether the menu has images at all.
*/
function NavLabel({ item, withImage }) {
	if (!withImage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "site-nav-drawer__label",
		children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: item.image,
			alt: "",
			width: 40,
			height: 40,
			loading: "lazy",
			decoding: "async",
			className: "site-nav-drawer__link-img"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavImagePlaceholder, { item }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title })]
	});
}
/** One Miller column: an optional "browse all" link then the level's rows. */
function NavColumn({ parent, items, activeId, staggered, hasImages, onOpenChild, onClose }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: `site-nav-drawer__list${staggered ? " is-in" : ""}`,
		children: [parent && isLinkable(parent.url) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: parent.url,
			className: "site-nav-drawer__browse-all",
			onClick: onClose,
			children: [
				t("blocks.header.browse_all", "Browse all"),
				" ",
				parent.title
			]
		}) }), items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			style: { transitionDelay: staggered ? `${index * 40}ms` : "0ms" },
			children: hasChildren(item) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `site-nav-drawer__link site-nav-drawer__link--parent${item.id === activeId ? " is-active" : ""}`,
				"aria-expanded": item.id === activeId,
				onClick: () => onOpenChild(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLabel, {
					item,
					withImage: !parent && hasImages
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightIcon, {
					className: "site-nav-drawer__chevron",
					"aria-hidden": "true"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.url,
				className: "site-nav-drawer__link",
				onClick: onClose,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLabel, {
					item,
					withImage: !parent && hasImages
				})
			})
		}, `${item.id}-${item.url}`))]
	});
}
/** Shared drawer header — a back control (once drilled in), the store logo, close. */
function NavHead({ canGoBack, onBack, onClose }) {
	const { t } = useTranslation();
	const { store } = useTwilight();
	const storeName = store?.name || "Store";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-nav-drawer__head",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-nav-drawer__head-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `site-nav-drawer__back${canGoBack ? " is-visible" : ""}`,
				"aria-label": t("blocks.header.back", "Back"),
				"aria-hidden": !canGoBack,
				tabIndex: canGoBack ? void 0 : -1,
				onClick: onBack,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftIcon, { "aria-hidden": "true" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "site-nav-drawer__brand",
				href: store?.url || "/",
				onClick: onClose,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					src: store?.logo,
					alt: `${storeName} logo`,
					width: 140,
					height: 44,
					priority: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: storeName
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "site-nav-drawer__close",
			"aria-label": t("blocks.header.close", "Close"),
			onClick: onClose,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, { "aria-hidden": "true" })
		})]
	});
}
/** The sliding viewport holding every column of the current trail. */
function NavColumns({ columns, itemsIn, menuLabel, viewportRef, onOpenChild, onClose }) {
	const hasImages = columns[0]?.items.some((item) => !!item.image) ?? false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: viewportRef,
		className: "site-nav-drawer__viewport",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-nav-drawer__track",
			children: columns.map((column, level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "site-nav-drawer__panel",
				"aria-label": column.parent?.title ?? menuLabel,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavColumn, {
					parent: column.parent,
					items: column.items,
					hasImages,
					activeId: columns[level + 1]?.parent?.id,
					staggered: itemsIn || level > 0,
					onOpenChild: (item) => onOpenChild(level, item),
					onClose
				})
			}, column.parent ? `${column.parent.id}` : "root"))
		})
	});
}
/** A footer trigger: leading icon, current-selection label, dropdown caret. */
function LocButton({ icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "site-nav-drawer__loc",
		"aria-haspopup": "dialog",
		onClick,
		children: [
			icon,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "site-nav-drawer__loc-label",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {
				className: "site-nav-drawer__loc-caret",
				"aria-hidden": "true"
			})
		]
	});
}
/**
* Sticky footer bar — language, branch and currency triggers. Each closes the
* drawer first (so the modal isn't stuck behind the drawer's backdrop), then opens
* it through `openStoreSwitcher` (`lib/storeSwitchers.ts`): the shared modals on
* the web, the app's own sheets for language and currency inside the Salla app. This bar only reflects the current selection; each trigger shows
* only when the store has that feature (more than one language / currency, or a
* scope).
*/
function NavFooter({ onClose, entered }) {
	const { t, languageName } = useTranslation();
	const { store, currency } = useTwilight();
	const open = (switcher) => () => {
		onClose();
		openStoreSwitcher(switcher);
	};
	const currencyLabel = currency?.name || currency?.symbol || currency?.code || "SAR";
	const visible = [
		{
			key: "language",
			show: !!store?.settings?.is_multilingual,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagesIcon, {
				className: "site-nav-drawer__loc-icon",
				"aria-hidden": "true"
			}),
			label: languageName
		},
		{
			key: "branch",
			show: !!store?.scope,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinIcon, {
				className: "site-nav-drawer__loc-icon",
				"aria-hidden": "true"
			}),
			label: store?.scope?.name || t("blocks.header.branches", "Branches")
		},
		{
			key: "currency",
			show: !!store?.settings?.currencies_enabled,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money01Icon, {
				className: "site-nav-drawer__loc-icon",
				"aria-hidden": "true"
			}),
			label: currencyLabel
		}
	].filter((item) => item.show);
	if (!visible.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `site-nav-drawer__foot${entered ? " is-in" : ""}`,
		children: visible.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "site-nav-drawer__foot-sep",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocButton, {
			icon: item.icon,
			label: item.label,
			onClick: open(item.key)
		})] }, item.key))
	});
}
/**
* Drives the drawer's mount lifecycle and staged entrance:
*  - `mounted` keeps it in the tree through the exit animation,
*  - `entered` flips the open class (backdrop fade + slide-in),
*  - `itemsIn` releases the link stagger (and, via a CSS delay, the footer).
*
* The entrance runs from a *mount-committed* effect (not the `open` effect) and
* forces a reflow first, so the closed transform is always painted before the
* open class flips it — otherwise the slide-in intermittently skipped.
*/
function useDrawerTransition(open) {
	const rootRef = (0, import_react.useRef)(null);
	const [mounted, setMounted] = (0, import_react.useState)(open);
	const [entered, setEntered] = (0, import_react.useState)(false);
	const [itemsIn, setItemsIn] = (0, import_react.useState)(false);
	useScrollLock(open);
	(0, import_react.useEffect)(() => {
		if (open) {
			setMounted(true);
			return;
		}
		setEntered(false);
		setItemsIn(false);
		const unmount = setTimeout(() => setMounted(false), TRANSITION_MS);
		return () => clearTimeout(unmount);
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!mounted || !open) return;
		rootRef.current?.offsetWidth;
		const cancelEnter = afterNextPaint(() => setEntered(true));
		const stagger = setTimeout(() => setItemsIn(true), TRANSITION_MS * .55);
		return () => {
			cancelEnter();
			clearTimeout(stagger);
		};
	}, [mounted, open]);
	return {
		rootRef,
		mounted,
		entered,
		itemsIn
	};
}
/**
* Primary navigation for the rebuilt header — a slide-in side panel opened by
* the header's menu button, at every breakpoint.
*
* Categories cascade as Miller columns: a wide root column (`--root-col-w`,
* 400px) lists the top-level items, and tapping a parent opens its children in
* a **narrower column beside it** (`--child-col-w`, 230px) so the whole trail
* stays visible. Any depth — each parent with children adds another column;
* tapping a different parent in an earlier column truncates the trail from
* there. When the columns outgrow the drawer the track shifts to keep the
* newest ones in view (RTL-aware); phones fall back to one full-width column
* that pushes one level per tap. See `04-components/header.scss`.
*
* Animation is theme-owned (the engine `Drawer` mounts already in place, so it
* can't transition): `mounted` keeps the drawer in the tree through its exit,
* `entered` drives the backdrop fade + drawer slide, and `itemsIn` staggers the
* root column's links in once the drawer has arrived. Data is the store's
* `menus/header`, so the merchant dashboard drives it unchanged. Styling:
* `04-components/header.scss`.
*/
var HeaderNav = (0, import_react.memo)(function HeaderNav({ open, onClose }) {
	const { data: rawItems = [] } = useQuery(menu.queries.header());
	const items = (0, import_react.useMemo)(() => pruneUntitled(rawItems), [rawItems]);
	const { rootRef, mounted, entered, itemsIn } = useDrawerTransition(open);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderNavDrawer, {
		items,
		rootRef,
		entered,
		itemsIn,
		onClose
	});
});
/**
* The drawer itself. It only exists while `useDrawerTransition` keeps the
* drawer mounted, so every opening is a fresh mount and the trail starts at the
* root column. That replaces an effect that reset the trail whenever `open`
* flipped, which cost an extra render with the old trail first.
*/
function HeaderNavDrawer({ items, rootRef, entered, itemsIn, onClose }) {
	const { t } = useTranslation();
	const drawerRef = (0, import_react.useRef)(null);
	const viewportRef = (0, import_react.useRef)(null);
	const depthRef = (0, import_react.useRef)(0);
	useDialogFocus(drawerRef, entered);
	const [path, setPath] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (path.length > depthRef.current && viewportRef.current) viewportRef.current.scrollTop = 0;
		depthRef.current = path.length;
	}, [path.length]);
	const onEscapeEvent = (0, import_react.useEffectEvent)(() => {
		if (path.length === 0) {
			onClose();
			return;
		}
		setPath((prev) => prev.slice(0, -1));
	});
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onEscapeEvent();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, []);
	const openChild = (0, import_react.useCallback)((level, item) => setPath((prev) => [...prev.slice(0, level), item]), []);
	const goBack = (0, import_react.useCallback)(() => setPath((prev) => prev.slice(0, -1)), []);
	const columns = (0, import_react.useMemo)(() => [{
		parent: null,
		items
	}, ...path.map((parent) => ({
		parent,
		items: parent.children ?? []
	}))], [items, path]);
	const portalTarget = (0, import_react.useSyncExternalStore)(subscribeNothing, () => document.body, () => null);
	if (!portalTarget) return null;
	const menuLabel = t("blocks.header.main_menu", "Menu");
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: `site-nav-drawer-root${entered ? " is-open" : ""}`,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": menuLabel,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-nav-drawer__backdrop",
			role: "presentation",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: drawerRef,
			tabIndex: -1,
			className: "site-nav-drawer",
			style: { "--col-count": columns.length },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavHead, {
					canGoBack: path.length > 0,
					onBack: goBack,
					onClose
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavColumns, {
					columns,
					itemsIn,
					menuLabel,
					viewportRef,
					onOpenChild: openChild,
					onClose
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavFooter, {
					onClose,
					entered: itemsIn
				})
			]
		})]
	}), portalTarget);
}
// app/components/layout/HeaderTopnav.tsx
/** One topnav trigger: leading icon, current-selection label, caret. */
function TopnavAction({ icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "site-header__topnav-action",
		"aria-haspopup": "dialog",
		onClick,
		children: [
			icon,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "site-header__topnav-action-label",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {
				className: "site-header__topnav-caret",
				"aria-hidden": "true"
			})
		]
	});
}
/**
* The store's phone and email at the end of the top bar. Rendered here rather
* than by `<salla-contacts is-header suppressHydrationWarning>`, which draws nothing until the SDK has
* loaded and then pushed the switchers aside; these come with the page.
*/
function TopnavContacts({ phone, email }) {
	if (!phone && !email) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-header__topnav-contacts",
		"data-testid": "store-header-contacts",
		children: [phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `tel:${phone}`,
			className: "site-header__topnav-contact",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Call02Icon, {
				className: "site-header__topnav-icon",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "unicode",
				dir: "ltr",
				children: phone
			})]
		}), email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `mailto:${email}`,
			className: "site-header__topnav-contact",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail01Icon, {
				className: "site-header__topnav-icon",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: email })]
		})]
	});
}
/**
* Top bar for the "default" header layout — the footer menu on the start side
* and the language / branch / currency switchers on the end side. Desktop only
* (`lg+`); on smaller screens the header collapses to the shared mobile bar.
* Each opens through `openStoreSwitcher` (`lib/storeSwitchers.ts`): the
* shared modals on the web, the app's own sheets for language and currency
* inside the Salla app. Styling: `header.scss`
* (`.site-header__topnav`).
*/
function HeaderTopnav() {
	const { t, languageName } = useTranslation();
	const { store, currency } = useTwilight();
	const currencyLabel = currency?.name || currency?.symbol || currency?.code || "SAR";
	const scopeLabel = store?.scope?.name || t("blocks.header.branches", "Branches");
	const actions = [
		{
			key: "language",
			show: !!store?.settings?.is_multilingual,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagesIcon, {
				className: "site-header__topnav-icon",
				"aria-hidden": "true"
			}),
			label: languageName
		},
		{
			key: "branch",
			show: !!store?.scope,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinIcon, {
				className: "site-header__topnav-icon",
				"aria-hidden": "true"
			}),
			label: scopeLabel
		},
		{
			key: "currency",
			show: !!store?.settings?.currencies_enabled,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money01Icon, {
				className: "site-header__topnav-icon",
				"aria-hidden": "true"
			}),
			label: currencyLabel
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "site-header__topnav",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container site-header__topnav-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaMenu, {
				source: "footer",
				topnav: true,
				className: "site-header__topnav-menu",
				suppressHydrationWarning: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-header__topnav-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("salla-bullet-delivery-tag", {
						"data-testid": "store-header-bullet-delivery-desktop",
						suppressHydrationWarning: true
					}),
					actions.filter((action) => action.show).map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopnavAction, {
						icon: action.icon,
						label: action.label,
						onClick: () => openStoreSwitcher(action.key)
					}, action.key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopnavContacts, {
						phone: store?.contacts?.phone,
						email: store?.contacts?.email
					})
				]
			})]
		})
	});
}
// app/components/layout/Header.tsx
/** Opens the Salla search modal (the `<SallaSearch />` at the end of the header). */
var openSearch$1 = () => window.salla?.event?.dispatch("search::open");
var openScopes = () => window.salla?.event?.dispatch("scopes::open");
var hasSocialLinks = (social) => Object.entries(social ?? {}).some(([key, value]) => Boolean(value) && key !== "whatsapp");
/** Search trigger — opens the Salla search modal via the `search::open` event. */
function SearchButton({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "header-action site-header__search",
		"aria-label": label,
		onClick: openSearch$1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, { "aria-hidden": "true" })
	});
}
/** Branch / scope trigger — opens `<SallaScopes>` (mounted in `ThemeLayout`) via the
* `scopes::open` event. Icon-only; the current scope name is the accessible label. */
function ScopeButton({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"data-testid": "store-header-scope-btn",
		className: "header-action site-header__scope",
		"aria-label": label,
		"aria-haspopup": "dialog",
		title: label,
		onClick: openScopes,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinIcon, { "aria-hidden": "true" })
	});
}
/** Store name, description and social links, under the main bar. The store's
*  phone and email are in the footer, under its description. */
function HeaderIntro() {
	const { store } = useTwilight();
	const isHome = useIsHome();
	const Title = useHydrated() && isHome ? "h1" : "p";
	const hasSocial = hasSocialLinks(store?.social);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "site-header__intro",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container site-header__intro-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
					className: "site-header__intro-title",
					children: store?.name
				}),
				store?.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "site-header__intro-text",
					dangerouslySetInnerHTML: { __html: store.description }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `site-header__social-slot${hasSocial ? " has-links" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaSocial, { className: "site-header__social" })
				})
			]
		})
	});
}
function Header({ navOpen: navOpenProp, onNavOpenChange } = {}) {
	const { store, theme } = useTwilight();
	const { t } = useTranslation();
	const isDefaultLayout = theme?.settings?.header_layout === "default";
	const stickyEnabled = theme?.settings?.header_is_sticky !== false;
	const [navOpenState, setNavOpenState] = (0, import_react.useState)(false);
	const navOpen = navOpenProp ?? navOpenState;
	const setNavOpen = (open) => {
		if (navOpenProp === void 0) setNavOpenState(open);
		onNavOpenChange?.(open);
	};
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const isProductPage = useRouterState({ select: (state) => state.matches.some((match) => match.routeId === PRODUCT_ROUTE_ID) });
	const isHomePage = useRouterState({ select: (state) => state.matches.some((match) => match.routeId === HOME_ROUTE_ID) });
	const introSettings = theme?.settings;
	const showIntro = !isDefaultLayout && introSettings?.header_show_store_info !== false && (introSettings?.header_store_info_home_only === false || isHomePage);
	const stickySentinelRef = (0, import_react.useRef)(null);
	const safeTop = useAppSafeAreaTop();
	(0, import_react.useEffect)(() => {
		if (!stickyEnabled) {
			setScrolled(false);
			return;
		}
		if (!isDefaultLayout) {
			const onScroll = () => setScrolled(window.scrollY > 4);
			onScroll();
			window.addEventListener("scroll", onScroll, { passive: true });
			return () => window.removeEventListener("scroll", onScroll);
		}
		const sentinel = stickySentinelRef.current;
		if (!sentinel) return;
		const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
			threshold: 0,
			rootMargin: `-${safeTop}px 0px 0px 0px`
		});
		observer.observe(sentinel);
		return () => observer.disconnect();
	}, [
		isDefaultLayout,
		stickyEnabled,
		safeTop
	]);
	const searchLabel = t("blocks.header.search", "Search");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-header site-header--${isDefaultLayout ? "default" : "lite"}${isProductPage ? " site-header--product" : ""}${isHomePage ? " site-header--home" : ""}`,
		suppressHydrationWarning: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "header:start" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-header__ad",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageAdvertisements, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-header__bullet lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("salla-bullet-delivery-tag", {
					"data-testid": "store-header-bullet-delivery-mobile",
					suppressHydrationWarning: true
				})
			}),
			isDefaultLayout ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderTopnav, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-header__bullet site-header__bullet--desktop hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("salla-bullet-delivery-tag", {
						"data-testid": "store-header-bullet-delivery-desktop",
						suppressHydrationWarning: true
					})
				})
			}),
			isDefaultLayout && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: stickySentinelRef,
				className: "site-header__sticky-sentinel",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-header__bar-outer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `site-header__bar${scrolled ? " is-scrolled" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container site-header__bar-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "site-header__nav-toggle",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "header-action",
									"aria-label": t("blocks.header.main_menu", "Menu"),
									"aria-expanded": navOpen,
									onClick: () => setNavOpen(true),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "site-header__burger",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
										]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "site-header__brand",
								href: store?.url || "/",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
									src: store?.logo,
									alt: `${store?.name || "Store"} logo`,
									priority: true,
									width: 140,
									height: 48
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: store?.name || "Store"
								})]
							}),
							isDefaultLayout && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "site-header__mainmenu",
								"aria-label": t("blocks.header.main_menu", "Menu"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMainMenu, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "site-header__actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaUserMenu, {
										avatarOnly: true,
										showHeader: true,
										relativeDropdown: true,
										className: "header-action"
									}),
									store?.scope && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeButton, { label: store.scope.name || t("blocks.header.branches", "Branches") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaCartSummary, {
										className: "header-action",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBagIcon, {
											slot: "icon",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchButton, { label: searchLabel })
								]
							})
						]
					})
				})
			}),
			showIntro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIntro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderNav, {
				open: navOpen,
				onClose: () => setNavOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaSearch, { suppressHydrationWarning: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "header:end" })
		]
	});
}
// app/hooks/useCloseOnDesktop.ts
/**
* Calls `onClose` when the viewport widens past `MOBILE_QUERY` while `open`.
*
* For mobile-only overlays: without it, resizing or rotating past the
* breakpoint leaves a fullscreen sheet stuck open over the desktop page, and
* the bottom bar that would otherwise close it is hidden by then too.
*/
function useCloseOnDesktop(open, onClose) {
	const onCloseEvent = (0, import_react.useEffectEvent)(onClose);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const mql = window.matchMedia(MOBILE_QUERY);
		const onChange = () => {
			if (!mql.matches) onCloseEvent();
		};
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, [open]);
}
/**
* Whether a sheet's rows should play their staggered entrance (`.is-in`).
* `false` while closed, so it replays from the top on every open.
*
* For a sheet whose rows come from a web component (`<salla-menu>`,
* `<salla-user-menu>`): two things can still be missing when `open` flips
* true. `BottomSheet` defers its own mount to an effect, so `containerSelector`
* may not exist yet, and the component renders its rows asynchronously on top
* of that (registering the custom element, fetching data). A fixed delay can't
* cover either reliably, so this watches the document (`BottomSheet` portals to
* `<body>`) until a `rowSelector` match shows up, then releases the stagger.
*
* The build's `no-manual-dom` check flags its `document.querySelector` calls.
* They stay: the rows are rendered by the web component, inside a portal, so
* there is no ref or React state that reaches them.
*/
function useStaggeredRows(open, containerSelector, rowSelector) {
	const [rowsIn, setRowsIn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) {
			setRowsIn(false);
			return;
		}
		let timer;
		let cancelPaint;
		let observer;
		const release = () => {
			timer = setTimeout(() => {
				document.querySelector(containerSelector)?.offsetWidth;
				cancelPaint = afterNextPaint(() => setRowsIn(true));
			}, 350);
		};
		if (document.querySelector(rowSelector)) release();
		else {
			observer = new MutationObserver(() => {
				if (document.querySelector(rowSelector)) {
					observer?.disconnect();
					release();
				}
			});
			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
		}
		return () => {
			observer?.disconnect();
			clearTimeout(timer);
			cancelPaint?.();
		};
	}, [
		open,
		containerSelector,
		rowSelector
	]);
	return rowsIn;
}
// app/components/layout/ImportantLinksSheet.tsx
/**
* Full-screen sheet for the footer menu ("important links") — opened from the
* More sheet's own "Important links" row ({@link MobileAccountSheet}), as a
* second sheet rather than a drill-in within the first.
*
* `<Footer inSheet>` skips its own footer menu (`FooterLinksMenu` returns
* `null` for it), so this sheet owns the mobile footer links entirely — the
* page footer keeps its own menu for desktop.
* Styling: `04-components/mobile-account-sheet.scss`.
*/
function ImportantLinksSheet({ open, onClose }) {
	const { t } = useTranslation();
	useCloseOnDesktop(open, onClose);
	const rowsIn = useStaggeredRows(open, ".important-links-sheet__menu", ".important-links-sheet__menu .s-menu-footer-item");
	const closeOnLink = (e) => {
		if (e.target.closest("a[href]:not([target=\"_blank\"])")) onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
		open,
		onClose,
		title: t("blocks.footer.important_links", "Important links"),
		className: "important-links-sheet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "presentation",
			onClick: closeOnLink,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaMenu, {
				source: "footer",
				className: `important-links-sheet__menu${rowsIn ? " is-in" : ""}`,
				suppressHydrationWarning: true
			})
		})
	});
}
// app/components/layout/MobileAccountSheet.tsx
/** Close the sheet, then open the Salla login modal over the page. */
function openLogin(onClose) {
	onClose();
	window.salla?.event?.dispatch("login::open");
}
/** `StoreContacts.telegram` / `.whatsapp` may already be a full link, not just
*  a handle or number -- building a `t.me` / `wa.me` URL unconditionally on
*  top of one duplicates it (`https://t.me/https://t.me/acme_store`). */
var isUrl = (value) => /^https?:\/\//i.test(value);
function telegramHref(value) {
	return isUrl(value) ? value : `https://t.me/${value.replace(/^@/, "")}`;
}
function whatsappHref(value) {
	return isUrl(value) ? value : `https://wa.me/${value.replace(/[\s+-]/g, "")}`;
}
/** Close the sheet, then open the switcher (the web modal, or the app's own sheet). */
function openSwitcher(switcher, onClose) {
	onClose();
	openStoreSwitcher(switcher);
}
/** One settings/contact row: leading icon, label (+ optional muted value), trailing chevron. */
function ListButton({ icon, label, value, testId, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "account-sheet__list-item",
		"data-testid": testId,
		onClick,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "account-sheet__list-icon",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "account-sheet__list-label",
				children: label
			}),
			value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "account-sheet__list-value",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftIcon, {
				className: "account-sheet__list-chevron",
				"aria-hidden": "true"
			})
		]
	});
}
/**
* The logged-in customer's links: `<salla-user-menu inline suppressHydrationWarning>`, the same items
* as the desktop header's dropdown (orders, notifications, pending orders,
* wishlist, wallet, loyalty, profile, logout). Each is gated on store features
* inside the component, with no equivalent check exposed to theme code, so the
* component renders the rows rather than a hand-built list.
*/
function UserMenuCard({ open }) {
	const rowsIn = useStaggeredRows(open, ".account-sheet__user-menu", ".account-sheet__user-menu .s-user-menu-dropdown-item");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "account-sheet__user-menu-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaUserMenu, {
			inline: true,
			className: `account-sheet__user-menu${rowsIn ? " is-in" : ""}`,
			suppressHydrationWarning: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenuPlaceholder, {})]
	});
}
/**
* The customer's links card's box while `<salla-user-menu suppressHydrationWarning>` waits for the SDK
* and its translations before drawing a row: the same card and rows, with a
* `Pulse` for each icon and title, so the settings and contacts below it don't
* jump down when the rows arrive. Hidden by CSS once a row exists.
*
* Its row count is the component's own: six it always lists (notifications,
* orders, pending orders, wishlist, profile, logout), plus wallet, loyalty
* points and account settings under the same conditions it checks.
*/
function UserMenuPlaceholder() {
	const [rowCount] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return 6;
		const features = window.salla?.config?.get("store.features") ?? [];
		return 6 + (window.can_access_wallet ? 1 : 0) + (features.includes("loyalty-system") ? 1 : 0) + (features.includes("salla-account") ? 1 : 0);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "account-sheet__user-menu-placeholder",
		"aria-hidden": "true",
		children: Array.from({ length: rowCount }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "account-sheet__user-menu-placeholder-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-6 w-6 shrink-0 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-4 w-28" })]
		}, i))
	});
}
/** A guest's first card, in place of the customer's links: a prompt and a login button. */
function LoginCard({ onClose }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "account-sheet__login-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "account-sheet__login-title",
			children: t("blocks.header.login_to_your_account", "Log in to your store account")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "account-sheet__login",
			"data-testid": "account-sheet-login",
			onClick: () => openLogin(onClose),
			children: t("blocks.header.login", "Login")
		})]
	});
}
/**
* Settings card: language, currency, branch, important links. Each of language / currency / branch shows only
* when the store actually has that feature -- same condition
* {@link HeaderNav}'s own footer triggers use, so the two never disagree
* about what the store supports.
*/
function SettingsList({ onClose, onOpenImportantLinks }) {
	const { t, languageName } = useTranslation();
	const { store, currency } = useTwilight();
	const currencyLabel = currency?.name || currency?.symbol || currency?.code || "SAR";
	const rows = [
		{
			key: "language",
			show: !!store?.settings?.is_multilingual,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagesIcon, { "aria-hidden": "true" }),
			label: t("blocks.header.change_language", "Change language"),
			value: languageName
		},
		{
			key: "currency",
			show: !!store?.settings?.currencies_enabled,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money01Icon, { "aria-hidden": "true" }),
			label: t("blocks.header.change_currency", "Change currency"),
			value: currencyLabel
		},
		{
			key: "branch",
			show: !!store?.scope,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinIcon, { "aria-hidden": "true" }),
			label: t("blocks.header.branches", "Branch"),
			value: store?.scope?.name
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "account-sheet__list",
		children: [rows.filter((row) => row.show).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListButton, {
			icon: row.icon,
			label: row.label,
			value: row.value,
			onClick: () => openSwitcher(row.key, onClose)
		}, row.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListButton, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "sicon-list",
				"aria-hidden": "true"
			}),
			label: t("blocks.footer.important_links", "Important links"),
			testId: "account-sheet-important-links",
			onClick: onOpenImportantLinks
		})]
	});
}
/**
* Contacts card: one row per {@link StoreContacts} field the merchant actually
* set -- an empty/missing field drops its row, not just its value, and the
* whole card renders nothing when none are set (same "section only if it has
* something to show" rule the footer's own contacts row applies).
*/
function ContactsList() {
	const { store } = useTwilight();
	const { t } = useTranslation();
	const contacts = store?.contacts;
	const rows = [
		contacts?.telegram ? {
			key: "telegram",
			icon: "sicon-paper-plane",
			label: t("blocks.footer.telegram", "Telegram"),
			value: contacts.telegram,
			href: telegramHref(contacts.telegram)
		} : null,
		contacts?.email ? {
			key: "email",
			icon: "sicon-mail-letter",
			label: t("blocks.footer.email", "Email"),
			value: contacts.email,
			href: `mailto:${contacts.email}`
		} : null,
		contacts?.mobile ? {
			key: "mobile",
			icon: "sicon-phone",
			label: t("blocks.footer.mobile", "Mobile"),
			value: contacts.mobile,
			href: `tel:${contacts.mobile}`
		} : null,
		contacts?.phone && contacts.phone !== contacts.mobile ? {
			key: "phone",
			icon: "sicon-phone",
			label: t("blocks.footer.phone", "Phone"),
			value: contacts.phone,
			href: `tel:${contacts.phone}`
		} : null,
		contacts?.whatsapp ? {
			key: "whatsapp",
			icon: "sicon-whatsapp",
			label: t("blocks.footer.whatsapp", "WhatsApp"),
			value: contacts.whatsapp,
			href: whatsappHref(contacts.whatsapp)
		} : null
	].filter((row) => row !== null);
	if (!rows.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "account-sheet__list account-sheet__contacts",
		children: rows.map((row) => {
			const isExternal = row.key === "telegram" || row.key === "whatsapp";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: row.href,
				...isExternal ? {
					target: "_blank",
					rel: "noopener noreferrer"
				} : {},
				className: "account-sheet__contact-item",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "account-sheet__contact-text",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "account-sheet__contact-label",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "account-sheet__contact-value unicode",
						children: row.value
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
					className: row.icon,
					"aria-hidden": "true"
				})]
			}, row.key);
		})
	});
}
/**
* Full-height "My Account" sheet the mobile bottom bar's account tab opens.
* The customer's own links first (or a login card for a guest), then two card groups --
* settings (language, currency, branch, important links) then
* contacts (telegram, email, mobile, phone, WhatsApp, each conditional on the
* merchant actually having set it) -- followed by the same footer widgets
* (logo, description, social, tax / SBC / trust badges, footer menu, app
* buttons, copyright, payments) the page footer itself hides on mobile.
*
* Mounted once in {@link ThemeLayout}, which owns `open` and shares it with
* {@link MobileBottomBar}. Styling: `04-components/mobile-account-sheet.scss`.
*/
function MobileAccountSheet({ open, onClose, onOpenImportantLinks }) {
	const { t } = useTranslation();
	const { isLoggedIn } = useUser();
	useCloseOnDesktop(open, onClose);
	const [itemsIn, setItemsIn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) {
			setItemsIn(false);
			return;
		}
		const stagger = setTimeout(() => setItemsIn(true), 350);
		return () => clearTimeout(stagger);
	}, [open]);
	const closeOnLink = (e) => {
		if (e.target.closest("a[href]:not([target=\"_blank\"])")) onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
		open,
		onClose,
		title: t("common.titles.my_account", "My Account"),
		className: "account-sheet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "presentation",
			className: `account-sheet__content${itemsIn ? " is-in" : ""}`,
			onClick: closeOnLink,
			children: [
				isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenuCard, { open }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginCard, { onClose }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsList, {
					onClose,
					onOpenImportantLinks
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactsList, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyFooter, { inSheet: true })
				})
			]
		})
	});
}
// app/components/layout/MobileBottomBar.tsx
function getCartSdk() {
	if (typeof window === "undefined") return void 0;
	return window.salla;
}
var searchModal = () => document.querySelector("salla-modal.s-search-modal");
var userMenu = () => document.querySelector("salla-user-menu.header-action") ?? document.querySelector("salla-user-menu");
/** Open the Salla search modal — the same event the header's search button fires. */
function openSearch() {
	window.salla?.event?.dispatch("search::open");
}
/** Close the search modal if it's up — drops the `visible` attribute it toggles on. */
function closeSearch() {
	searchModal()?.removeAttribute("visible");
}
/** Force-close the `<salla-user-menu suppressHydrationWarning>` sheet if it's open (toggle its trigger). */
function closeUserMenu() {
	const menu = userMenu();
	if (menu?.querySelector(".s-user-menu-toggler.opened")) menu.querySelector(".s-user-menu-trigger-slot")?.click();
}
/** Dismiss every overlay the bar owns except the one `keep` is about to open. */
function closeOverlays(keep, closeNav, closeAccount, closeSecondSheet) {
	if (keep !== "categories") closeNav?.();
	if (keep !== "search") closeSearch();
	closeUserMenu();
	if (keep !== "account") {
		closeAccount?.();
		closeSecondSheet?.();
	}
}
/**
* Which single tab is lit, or `null` when the current route / state belongs to
* no tab (a product, blog, listing page…) — in that case nothing in the bar is
* highlighted. Home lights only on the home page itself.
*/
function activeTab(state, path) {
	if (state.searchOpen) return "search";
	if (state.menuOpen) return "account";
	if (state.navOpen) return "categories";
	if (path === "/") return "home";
	if (path === "/cart") return "cart";
	if (path === "/account" || path.startsWith("/account/")) return "account";
	return null;
}
var isSearchOpen = () => !!document.querySelector("salla-modal.s-search-modal[visible]");
var isMenuOpen = () => !!document.querySelector(".s-user-menu-toggler.opened");
/**
* Reflect a DOM condition into React state. Used for the two overlays the bar
* doesn't own — the search modal (`<salla-search suppressHydrationWarning>`'s `<salla-modal suppressHydrationWarning>`) and the
* header's `<salla-user-menu suppressHydrationWarning>` dropdown: both mount *after* this component and are opened /
* closed by the Salla web components themselves (their trigger, the modal's own
* dismiss, an outside click…).
*
* A permanent `<body>` observer — not a one-shot `querySelector` + retries — is
* what makes this reliable: `theme::ready` has usually already fired by the time
* this bar hydrates, and the watched nodes appear late then just toggle a class
* / attribute in place. Mutation callbacks are batched, and `test()` is a single
* cheap selector, so the whole-subtree scope is fine here — but only while the
* bar can actually be seen: the component stays mounted (CSS-hidden) on desktop,
* so `enabled` (from `useMobileViewport`) skips the observer there entirely
* instead of running it for the component's whole lifetime regardless of
* viewport.
*/
function useDomFlag(test, enabled) {
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!enabled) {
			setOn(false);
			return;
		}
		let current = test();
		setOn(current);
		const check = () => {
			const next = test();
			if (next === current) return;
			current = next;
			setOn(next);
		};
		const obs = new MutationObserver(check);
		obs.observe(document.body, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ["class", "visible"]
		});
		document.addEventListener("theme::ready", check);
		return () => {
			obs.disconnect();
			document.removeEventListener("theme::ready", check);
		};
	}, [test, enabled]);
	return on;
}
var useSearchOpen = (enabled) => useDomFlag(isSearchOpen, enabled);
var useUserMenuOpen = (enabled) => useDomFlag(isMenuOpen, enabled);
/**
* Drop a leading `/ar` / `/en-US` locale segment and any trailing slash so the
* tab match is a plain `'/cart'` / `'/account/…'` comparison. Path-based (not
* `routeId`-based) because the twilight route id lags SPA navigation into engine
* routes — the account pages would otherwise never light their tab.
*/
function normalizePath(pathname) {
	const withoutLocale = pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?(?=\/|$)/, "") || "/";
	return withoutLocale.length > 1 ? withoutLocale.replace(/\/$/, "") : withoutLocale;
}
function normalizeCount(value) {
	const n = typeof value === "number" ? value : typeof value === "string" ? Number(value) : 0;
	return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}
function formatCount(count) {
	const formatted = getCartSdk()?.helpers?.number?.(count);
	return typeof formatted === "string" ? formatted : String(count);
}
/**
* Live cart count for the bar's badge. Seeds `0` and reads `salla.storage` only
* inside the effect: touching it during render makes the client hydrate a
* non-zero count over the server's `0` (React hydration mismatch).
*/
function useCartCount() {
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let subscribed;
		const readStorage = () => {
			if (!cancelled) setCount(normalizeCount(getCartSdk()?.storage?.get?.("cart.summary.count", 0)));
		};
		const onUpdated = (summary) => {
			if (cancelled) return;
			if (summary && Object.prototype.hasOwnProperty.call(summary, "count")) {
				setCount(normalizeCount(summary.count));
				return;
			}
			readStorage();
		};
		const sync = () => {
			const sdk = getCartSdk();
			if (sdk && sdk !== subscribed) {
				subscribed?.event?.off?.("cart::updated", onUpdated);
				subscribed = sdk;
				subscribed.event?.on?.("cart::updated", onUpdated);
			}
			readStorage();
		};
		sync();
		document.addEventListener("theme::ready", sync);
		return () => {
			cancelled = true;
			subscribed?.event?.off?.("cart::updated", onUpdated);
			document.removeEventListener("theme::ready", sync);
		};
	}, []);
	return count;
}
/** A route tab — a real link so it SPA-navigates and works before hydration. */
function BarLink({ to, label, active, icon, testId, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `mobile-bottom-bar__item${active ? " is-active" : ""}`,
		"aria-current": active ? "page" : void 0,
		"data-testid": testId,
		onClick,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mobile-bottom-bar__icon",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mobile-bottom-bar__label",
			children: label
		})]
	});
}
/**
* Fixed bottom navigation for small screens (`md:hidden`). Five tabs — Home,
* Search, Categories, Cart, Account — rendered in document order so RTL puts
* Home on the trailing (right) edge. At most one tab is lit at a time and the
* lit tab expands into a filled primary pill that reveals its label; the rest
* stay icon-only. On a page no tab owns (product, blog, listing…) nothing is
* lit.
*
* Tapping any tab first dismisses every overlay the other tabs own — the nav
* drawer, the search modal and the account sheet — so nothing is ever left
* stacked behind another's backdrop (see {@link closeOverlays}). A tab then
* lights while its own overlay is open (Search modal, Account sheet,
* Categories drawer); with none open the route decides — Home on `/`, Cart on
* `/cart`, Account under `/account` (see {@link activeTab}).
*
* The Account tab toggles {@link MobileAccountSheet} — for guests too, since
* it also carries the footer widgets the page footer no longer shows on mobile
* (a guest gets a login button in place of the account links).
*
* Mounted once in {@link ThemeLayout}, which also owns the drawer and account
* sheet `open` state (the drawer is shared with the header). Styling: `04-components/mobile-bottom-bar.scss`.
*
* Shown on every route, including the product page — its sticky add-to-cart bar
* is lifted to sit above this one (see `04-components/product.scss`).
*/
function MobileBottomBar({ navOpen, onOpenNav, onCloseNav, accountOpen = false, onAccountOpenChange, secondSheetOpen = false, onCloseSecondSheet }) {
	const { t } = useTranslation();
	const cartCount = useCartCount();
	const isMobile = useMobileViewport();
	const searchOpen = useSearchOpen(isMobile);
	const headerMenuOpen = useUserMenuOpen(isMobile);
	const moreOpen = accountOpen || secondSheetOpen;
	const menuOpen = moreOpen || headerMenuOpen;
	const path = normalizePath(useRouterState({ select: (s) => s.location.pathname }));
	const active = activeTab({
		searchOpen,
		menuOpen,
		navOpen
	}, path);
	const openTab = (tab) => closeOverlays(tab, onCloseNav, () => onAccountOpenChange?.(false), onCloseSecondSheet);
	const handleCategories = () => {
		openTab("categories");
		onOpenNav();
	};
	const handleSearch = () => {
		openTab("search");
		openSearch();
	};
	const handleAccount = () => {
		openTab("account");
		if (moreOpen) {
			onAccountOpenChange?.(false);
			onCloseSecondSheet?.();
		} else onAccountOpenChange?.(true);
	};
	const labels = {
		home: t("common.titles.home", "Home"),
		search: t("blocks.header.search", "Search"),
		categories: t("blocks.header.main_menu", "Menu"),
		cart: t("blocks.header.cart", "Cart"),
		account: t("common.titles.my_account", "My Account")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mobile-bottom-bar-scrim",
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "mobile-bottom-bar",
		"aria-label": t("blocks.header.main_menu", "Menu"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mobile-bottom-bar__inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLink, {
					to: "/",
					label: labels.home,
					active: active === "home",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeIcon, { "aria-hidden": "true" }),
					testId: "mobile-bottom-bar-home",
					onClick: () => openTab("home")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `mobile-bottom-bar__item${active === "categories" ? " is-active" : ""}`,
					"aria-expanded": active === "categories",
					"data-testid": "mobile-bottom-bar-categories",
					onClick: handleCategories,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mobile-bottom-bar__icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSquare01Icon, { "aria-hidden": "true" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mobile-bottom-bar__label",
						children: labels.categories
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `mobile-bottom-bar__item${active === "search" ? " is-active" : ""}`,
					"aria-pressed": active === "search",
					"data-testid": "mobile-bottom-bar-search",
					onClick: handleSearch,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mobile-bottom-bar__icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, { "aria-hidden": "true" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mobile-bottom-bar__label",
						children: labels.search
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/cart",
					className: `mobile-bottom-bar__item mobile-bottom-bar__item--cart${active === "cart" ? " is-active" : ""}`,
					"aria-current": active === "cart" ? "page" : void 0,
					"data-testid": "mobile-bottom-bar-cart",
					onClick: () => openTab("cart"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mobile-bottom-bar__icon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBagIcon, { "aria-hidden": "true" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mobile-bottom-bar__badge",
							"data-testid": "mobile-bottom-bar-cart-count",
							children: formatCount(cartCount)
						}, cartCount)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mobile-bottom-bar__label",
						children: labels.cart
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `mobile-bottom-bar__item${active === "account" ? " is-active" : ""}`,
					"aria-haspopup": "dialog",
					"aria-expanded": moreOpen,
					"data-testid": "mobile-bottom-bar-account",
					onClick: handleAccount,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mobile-bottom-bar__icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserIcon, { "aria-hidden": "true" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mobile-bottom-bar__label",
						children: labels.account
					})]
				})
			]
		})
	})] });
}
// app/components/layout/MobilePageTitleBar.tsx
/** Deepest matched route that carries a `page.title` in its loader data. */
function routePageTitle(state) {
	for (let i = state.matches.length - 1; i >= 0; i--) {
		const title = state.matches[i].loaderData?.page?.title;
		if (title) return title;
	}
}
/** Route match state, in one selector so the bar re-renders once per navigation. */
function pageTitleState(state) {
	return {
		title: routePageTitle(state),
		isProductPage: state.matches.some((m) => m.routeId === PRODUCT_ROUTE_ID),
		isHomePage: state.matches.some((m) => m.routeId === HOME_ROUTE_ID)
	};
}
/** `<title>` minus the " | Store" / " - Store" suffix the head builder appends. */
function cleanDocumentTitle() {
	if (typeof document === "undefined") return "";
	return document.title.split(/\s+[|–—-]\s+/)[0].trim();
}
/**
* Mobile page-title bar — shown at the top of every route except the home page
* and the product page (which run their own headers). The site header is
* collapsed on mobile away from home (`04-components/header.scss`), so this is
* what names the page. Styling: `04-components/mobile-page-title.scss`.
*
* Title comes from the matched route's `page.title` (set by the theme / engine
* loaders — e.g. the cart loader returns `common.titles.cart`); falls back to
* the document title with its store suffix trimmed.
*
* The home and product-page exclusions are decided here from route-match state (identical
* on the server and the client, no timing gap) rather than only in CSS keyed
* off the `body.index` / `body.product-single` classes — those are applied by a client
* effect, so on first paint it isn't there yet and the bar would flash
* visible before disappearing.
*/
function MobilePageTitleBar() {
	const { t } = useTranslation();
	const { title: routeTitle, isProductPage, isHomePage } = useRouterState({ select: pageTitleState });
	const [docTitle, setDocTitle] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setDocTitle(routeTitle ? "" : cleanDocumentTitle());
	}, [routeTitle]);
	if (isProductPage || isHomePage) return null;
	const title = routeTitle || docTitle;
	if (!title) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mobile-page-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mobile-page-title__back",
			onClick: () => {
				if (window.history.length > 1) window.history.back();
				else window.location.assign("/");
			},
			"aria-label": t("blocks.header.back", "Back"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightIcon, { "aria-hidden": "true" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mobile-page-title__text",
			children: title
		})]
	});
}
// app/lib/componentTranslations.ts
/**
* Keys that `<salla-*>` web components read straight from `salla.lang`, which
* some stores' translation packs don't carry yet. The theme's own
* `locales/*.json` only reach React's `useTranslation`, not `salla.lang`, so a
* missing key showed raw in the component (the Apple Pay order options modal
* printed `blocks.order_options.total` beside its total).
*
* Their text lives in `locales/{ar,en}.json` like every other theme string;
* these are copied from there into `salla.lang`, each only while the store has
* no text of its own for it, so a store's translation always wins.
*/
var COMPONENT_TRANSLATION_KEYS = [
	"blocks.order_options.title",
	"blocks.order_options.subtitle",
	"blocks.order_options.continue",
	"blocks.order_options.total",
	"blocks.order_options.required_message"
];
/**
* Add each of {@link COMPONENT_TRANSLATION_KEYS} the loaded pack lacks (`get`
* returns the key itself for a missing one), in every locale the theme
* translates it into.
*/
function fillComponentTranslations(lang, theme) {
	for (const key of COMPONENT_TRANSLATION_KEYS) {
		if (lang.get(key) !== key) continue;
		const messages = {};
		for (const [bucket, strings] of Object.entries(theme)) {
			const value = strings?.[key];
			if (value) messages[bucket.replace(/\.trans$/, "")] = value;
		}
		if (Object.keys(messages).length) lang.add(key, messages);
	}
}
// app/components/layout/ThemeLayout.tsx
/**
* Theme layout — passed to `<TwilightProvider layout={ThemeLayout}>` in
* `app/routes/__root.tsx` to swap in the rebuilt {@link Header} and the same
* global modals (offer / login / scopes) as the engine's `MasterLayout`.
*
* `Footer` is the engine's own shared component (`@salla.sa/twilight-theme-engine/layout`)
* now, not a theme-owned fork -- `Header` stays theme-owned since it's deeply
* specific to this theme's nav/search/account UI.
*/
var SallaLoginModal = (0, import_react.lazy)(() => import("./salla-login-modal-CYu3UvvU.js").then((m) => ({ default: m.SallaLoginModal })));
var SallaScopes = (0, import_react.lazy)(() => import("./salla-scopes-hCOKnPpf.js").then((m) => ({ default: m.SallaScopes })));
var SallaOfferModal = (0, import_react.lazy)(() => import("./salla-offer-modal-D1c5rw06.js").then((m) => ({ default: m.SallaOfferModal })));
var SallaLocalizationModal = (0, import_react.lazy)(() => import("./shared-home-LYGTeQ_-.js").then((n) => n.zn).then((m) => ({ default: m.SallaLocalizationModal })));
var IMG_RATIOS = [
	"square",
	"landscape",
	"portrait"
];
/** Read the `product_card_img_ratio` dropdown setting (string, or `[{value}]`). */
function productImageRatio(raw) {
	const first = Array.isArray(raw) ? raw[0] : raw;
	const value = typeof first === "string" ? first : first?.value;
	return IMG_RATIOS.includes(value ?? "") ? value : "square";
}
/**
* The engine's shared modals ThemeLayout mounts globally, each gated on
* whether the store actually needs it: the offer modal always, the
* language / currency switcher only when the store has more than one of
* either, the login modal only for a guest, scopes only when the store has
* one. Split out from {@link ThemeLayout} itself so that component stays
* about the page structure (header, footer, bottom bar, sheets) rather than
* also carrying every modal's own gating condition.
*/
function GlobalModals() {
	const { store, currency } = useTwilight();
	const { locale } = useTranslation();
	const { isLoggedIn } = useUser();
	const showLocalization = !!store?.settings?.is_multilingual || !!store?.settings?.currencies_enabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaOfferModal, {}) }),
		showLocalization && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaLocalizationModal, {
			language: locale,
			currency: currency?.code || "SAR",
			suppressHydrationWarning: true
		}) }),
		!isLoggedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaLoginModal, {
			isEmailAllowed: store?.settings?.auth?.email_allowed,
			isMobileAllowed: store?.settings?.auth?.mobile_allowed,
			suppressHydrationWarning: true
		}) }),
		store?.scope && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaScopes, {
			selection: store?.scope?.display_as === "popup" ? "mandatory" : "optional",
			suppressHydrationWarning: true
		}) })
	] });
}
function ThemeLayout({ children }) {
	const { theme } = useTwilight();
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const [accountOpen, setAccountOpen] = (0, import_react.useState)(false);
	const [importantLinksOpen, setImportantLinksOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setNavOpen(false);
		setAccountOpen(false);
		setImportantLinksOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const lang = window.salla?.lang;
		if (typeof lang?.subscribe !== "function" || typeof lang.add !== "function") return;
		return lang.subscribe(() => fillComponentTranslations(lang, theme_translations_default));
	}, []);
	const imgRatio = productImageRatio(theme?.settings?.product_card_img_ratio);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `app-inner flex flex-col min-h-full product-card-img--${imgRatio}`,
			suppressHydrationWarning: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
					navOpen,
					onNavOpenChange: setNavOpen
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageTitleBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "main-content",
					className: "flex-1",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyFooter, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBottomBar, {
					navOpen,
					onOpenNav: () => setNavOpen(true),
					onCloseNav: () => setNavOpen(false),
					accountOpen,
					onAccountOpenChange: setAccountOpen,
					secondSheetOpen: importantLinksOpen,
					onCloseSecondSheet: () => setImportantLinksOpen(false)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileAccountSheet, {
			open: accountOpen,
			onClose: () => setAccountOpen(false),
			onOpenImportantLinks: () => {
				setAccountOpen(false);
				setImportantLinksOpen(true);
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportantLinksSheet, {
			open: importantLinksOpen,
			onClose: () => setImportantLinksOpen(false)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalModals, {})
	] });
}
// app/styles/app.css?url
var app_default = "/assets/app-Dop2yEVv.css";
// app/styles/critical.scss?inline
var critical_default = ":root{--swiper-theme-color:#007aff}:host{z-index:1;margin-left:auto;margin-right:auto;display:block;position:relative}.swiper{z-index:1;margin-left:auto;margin-right:auto;padding:0;list-style:none;display:block;position:relative;overflow:hidden}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{z-index:1;width:100%;height:100%;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box;display:flex;position:relative}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translate(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;transition-property:transform;display:block;position:relative}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{backface-visibility:hidden;transform:translateZ(0)}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:\"\";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{pointer-events:none;z-index:10;width:100%;height:100%;position:absolute;top:0;left:0}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(#0000,#00000080)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(#00000080,#0000)}.swiper-lazy-preloader{z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-top-color:#0000;border-radius:50%;width:42px;height:42px;margin-top:-21px;margin-left:-21px;position:absolute;top:50%;left:50%}:is(.swiper:not(.swiper-watch-progress),.swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader{animation:1s linear infinite swiper-preloader-spin}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--swiper-navigation-size:44px}.swiper-button-prev,.swiper-button-next{width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;color:var(--swiper-navigation-color,var(--swiper-theme-color));justify-content:center;align-items:center;display:flex;position:absolute}:is(.swiper-button-prev,.swiper-button-next).swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}:is(.swiper-button-prev,.swiper-button-next).swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled :is(.swiper-button-prev,.swiper-button-next){display:none!important}:is(.swiper-button-prev,.swiper-button-next) ::slotted(svg),:is(.swiper-button-prev,.swiper-button-next) svg{-o-object-fit:contain;object-fit:contain;transform-origin:50%;fill:currentColor;pointer-events:none;width:100%;height:100%}.swiper-button-lock{display:none}.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset,50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}.swiper-button-prev{left:var(--swiper-navigation-sides-offset,4px);right:auto}.swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}.swiper-button-next{right:var(--swiper-navigation-sides-offset,4px);left:auto}.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset,50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset,4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset,4px);left:auto}:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) .swiper-navigation-icon{transform:rotate(180deg)}:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(0)}.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset,50%);margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0;right:auto}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset,4px);bottom:auto}:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset,4px);top:auto}:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) .swiper-navigation-icon{transform:rotate(90deg)}*,:before,:after,::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border:0 solid #e5e7eb}:before,:after{--tw-content:\"\"}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--font-main), -apple-system, BlinkMacSystemFont;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-feature-settings:normal;font-variation-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-feature-settings:inherit;font-variation-settings:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:#0000;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{margin:0;padding:0;list-style:none}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input:where([type=text]),input:where(:not([type])),input:where([type=email]),input:where([type=url]),input:where([type=password]),input:where([type=number]),input:where([type=date]),input:where([type=datetime-local]),input:where([type=month]),input:where([type=search]),input:where([type=tel]),input:where([type=time]),input:where([type=week]),select:where([multiple]),textarea,select{appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6b7280;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}input:where([type=text]):focus,input:where(:not([type])):focus,input:where([type=email]):focus,input:where([type=url]):focus,input:where([type=password]):focus,input:where([type=number]):focus,input:where([type=date]):focus,input:where([type=datetime-local]):focus,input:where([type=month]):focus,input:where([type=search]):focus,input:where([type=tel]):focus,input:where([type=time]):focus,input:where([type=week]):focus,select:where([multiple]):focus,textarea:focus,select:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#2563eb;outline:2px solid #0000}input::-moz-placeholder{color:#6b7280;opacity:1}textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}select:where([multiple]),select:where([size]:not([size=\"1\"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}input:where([type=checkbox]),input:where([type=radio]){appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#2563eb;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6b7280;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}input:where([type=checkbox]){border-radius:0}input:where([type=radio]){border-radius:100%}input:where([type=checkbox]):focus,input:where([type=radio]):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);outline:2px solid #0000}input:where([type=checkbox]):checked,input:where([type=radio]):checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}input:where([type=checkbox]):checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}@media (forced-colors:active){input:where([type=checkbox]):checked{appearance:auto}}input:where([type=radio]):checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}@media (forced-colors:active){input:where([type=radio]):checked{appearance:auto}}input:where([type=checkbox]):checked:hover,input:where([type=checkbox]):checked:focus,input:where([type=radio]):checked:hover,input:where([type=radio]):checked:focus{background-color:currentColor;border-color:#0000}input:where([type=checkbox]):indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){input:where([type=checkbox]):indeterminate{appearance:auto}}input:where([type=checkbox]):indeterminate:hover,input:where([type=checkbox]):indeterminate:focus{background-color:currentColor;border-color:#0000}input:where([type=file]){background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}input:where([type=file]):focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}.container{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.container{max-width:1280px}}.sr-only{clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.\\!visible{visibility:visible!important}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:0}.left-0{left:0}.top-0{top:0}.top-24{top:6rem}.z-50{z-index:50}.m-0{margin:0}.m-auto{margin:auto}.mx-1\\.5{margin-left:.375rem;margin-right:.375rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.-mt-62{margin-top:-248px}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.me-2{margin-inline-end:.5rem}.ml-4{margin-left:1rem}.ms-2{margin-inline-start:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-8{margin-top:2rem}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-20{height:5rem}.h-4{height:1rem}.h-56{height:14rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-banner{height:200px}.h-full{height:100%}.h-lg-banner{height:428px}.max-h-32{max-height:8rem}.max-h-full{max-height:100%}.min-h-\\[300px\\]{min-height:300px}.min-h-full{min-height:100%}.w-10{width:2.5rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-28{width:7rem}.w-4\\/6{width:66.6667%}.w-48{width:12rem}.w-6{width:1.5rem}.w-auto{width:auto}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-\\[180px\\]{max-width:180px}.max-w-lg{max-width:32rem}.max-w-sm{max-width:24rem}.flex-1{flex:1}.shrink-0{flex-shrink:0}.translate-y-0{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-3{--tw-translate-y:.75rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:2s cubic-bezier(.4,0,.6,1) infinite pulse}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-flow-row{grid-auto-flow:row}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2,.grid-cols-\\[repeat\\(2\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-3{row-gap:.75rem}.space-y-px>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:16px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-dashed{border-style:dashed}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.border-red-300{--tw-border-opacity:1;border-color:rgb(252 165 165/var(--tw-border-opacity,1))}.border-white\\/10{border-color:#ffffff1a}.border-yellow-200{--tw-border-opacity:1;border-color:rgb(254 240 138/var(--tw-border-opacity,1))}.bg-\\[\\#0E0F0F\\]{--tw-bg-opacity:1;background-color:rgb(14 15 15/var(--tw-bg-opacity,1))}.bg-\\[\\#1D1F1F\\]{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1))}.bg-\\[\\#F4F7F2\\]{--tw-bg-opacity:1;background-color:rgb(244 247 242/var(--tw-bg-opacity,1))}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity,1))}.bg-dark{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.bg-inherit{background-color:inherit}.bg-red-50{--tw-bg-opacity:1;background-color:rgb(254 242 242/var(--tw-bg-opacity,1))}.bg-transparent{background-color:#0000}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.bg-yellow-50{--tw-bg-opacity:1;background-color:rgb(254 252 232/var(--tw-bg-opacity,1))}.bg-cover{background-size:cover}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-8{padding-left:2rem;padding-right:2rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pt-8{padding-top:2rem}.text-center{text-align:center}.align-middle{vertical-align:middle}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.leading-12{line-height:3rem}.leading-6{line-height:1.5rem}.leading-none{line-height:1}.leading-tight{line-height:1.25}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.text-primary{color:var(--color-primary)}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity,1))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28/var(--tw-text-opacity,1))}.text-red-800{--tw-text-opacity:1;color:rgb(153 27 27/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.text-yellow-700{--tw-text-opacity:1;color:rgb(161 98 7/var(--tw-text-opacity,1))}.text-yellow-800{--tw-text-opacity:1;color:rgb(133 77 14/var(--tw-text-opacity,1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.shadow-default{--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.outline{outline-style:solid}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.s-block{display:block}.s-accordion-head-wrapper-toggle.active{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-color:var(--color-primary);background-color:var(--color-primary);--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.s-accordion-head-wrapper-toggle.active svg{fill:#fff}.s-add-product-button-with-sticky-bar salla-quick-buy .s-quick-buy-button .s-button-text span{display:none}@media (width>=768px){.s-add-product-button-with-sticky-bar salla-quick-buy .s-quick-buy-button .s-button-text span{display:block}}.s-advertisement-content{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-advertisement-content{max-width:1280px}}.s-advertisement-content{justify-content:space-between;align-items:center;padding-top:.625rem;padding-bottom:.625rem;display:flex}@media (width>=1024px){.s-block--testimonials.s-advertisement-content,.s-advertisement-content.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-advertisement-content,.s-advertisement-content.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-advertisement-content,.s-advertisement-content.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-advertisement-content-main{text-align:center;flex:1;font-size:.875rem;font-weight:700;line-height:1.25rem}.s-advertisement-content-icon{vertical-align:middle;font-size:1rem;line-height:1.5rem;display:inline-block}.s-advertisement-content-icon:where([dir=ltr],[dir=ltr] *){margin-right:.5rem}.s-advertisement-content-icon:where([dir=rtl],[dir=rtl] *){margin-left:.5rem}.s-advertisement-action{padding-left:.25rem;padding-right:.25rem}.s-app-install-alert-wrapper.\\!open[position=top]{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));display:flex}@keyframes slideDownFromTop{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(-0%)}}.s-app-install-alert-wrapper.\\!open[position=top]{transition-duration:.5s;animation:.6s linear slideDownFromTop}.s-app-install-alert-wrapper.open[position=top]{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.5s;animation:.6s linear slideDownFromTop;display:flex}.s-app-install-alert-wrapper.\\!open[position=bottom]{display:flex}@keyframes slideUpFromBottom{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0%)}}.s-app-install-alert-wrapper.\\!open[position=bottom]{animation:.6s linear slideUpFromBottom}.s-app-install-alert-wrapper.open[position=bottom]{animation:.6s linear slideUpFromBottom;display:flex}.s-apps-icons-list.vertical{flex-direction:column}.s-bottom-alert-modal-content-screenshot.swiper-slide{width:370px!important;height:200px!important}.s-bottom-alert-modal-content-footer button .s-button-text{align-items:center;gap:.5rem;display:flex}.s-button-wrap[loading] .s-button-loader-center .s-button-text{opacity:0}.s-button-icon .s-button-text{display:flex}.s-button-text{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;align-items:center;transition-property:opacity;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden}.s-comments-item-like-btn .s-button-text{flex-direction:row-reverse;gap:.5rem;display:flex}.s-count-down-with-button button .s-button-text{-moz-column-gap:.5rem;align-items:center;column-gap:.5rem;display:flex}.s-count-down-with-button button .s-button-text:where([dir=ltr],[dir=ltr] *){flex-direction:row-reverse}.s-count-down-with-button button .s-button-text:where([dir=rtl],[dir=rtl] *){flex-direction:row}.flatpickr-day.selected{background:var(--color-primary);border-color:var(--color-primary)}.flatpickr-day.selected:hover{background:var(--color-primary);border-color:var(--color-primary);opacity:.8}.s-delivery-promise-arrow.\\!open,.s-delivery-promise-arrow.open{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s-gifting-widget .s-button-text{display:flex}.s-gifting-step-one .swiper-slide{width:auto!important}.s-gifting-calendar.\\!shown,.s-gifting-calendar.shown{opacity:1;height:75px;margin-top:.75rem}.s-gifting-textarea.\\!shown,.s-gifting-textarea.shown{opacity:1;height:122px}.s-loyalty-prize-item.swiper-slide{cursor:pointer;flex-direction:column;width:calc(33.33% - 10px);min-width:200px;margin-bottom:.5rem;margin-left:5px;margin-right:5px;display:flex}.s-loyalty-prize-item.swiper-slide>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-loyalty-prize-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;background-size:cover;border-radius:.375rem;font-size:1.875rem;line-height:2.25rem;overflow:hidden;padding:0!important}.s-loyalty-prize-item.swiper-slide *{pointer-events:none}:is(.s-block--enhanced-slider .s-loyalty-prize-item.swiper-slide:has(>.enhanced-slider__video),.s-block--photos-slider-with-text .s-loyalty-prize-item.swiper-slide:has(>.enhanced-slider__video)){overflow:hidden;container-type:size}.s-loyalty-skeleton .s-loyalty-prize-item .s-skeleton-wrapper{margin-left:auto;margin-right:auto}.s-loyalty-points-history-no-content .icon{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:8rem;height:8rem;color:rgb(209 213 219/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;margin-bottom:1rem;font-size:3rem;line-height:1;display:flex}.s-map-location-button .s-button-text{align-items:center;display:flex}@media (width>=1024px){.s-menu-root-level{display:inline-block!important}}.s-menu-non-root-level{position:relative}.s-menu-footer-item{margin-bottom:1.25rem;font-size:.875rem;line-height:1;display:block}.s-menu-footer-item:last-child{margin-bottom:0}.s-multiple-bundle-product-options-modal-slider .s-slider-container .swiper-slide{justify-content:center;align-items:center;display:flex}.s-multiple-bundle-product-options-modal-slider .s-slider-thumbs-container .swiper-slide{justify-content:center;align-items:center;width:100%;padding:.25rem;height:40px!important;margin-top:0!important;display:flex!important}.s-offer-products-list-single-column .s-products-list-wrapper{gap:.75rem;grid-template-columns:repeat(1,minmax(0,1fr))!important;display:grid!important}.s-offer-modal-cat-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;max-width:180px;height:9rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:.375rem;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem;padding:.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.s-offer-modal-cat-item.swiper-slide:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-shadow:5px 10px 99px #2b2d340d;--tw-shadow-colored:5px 10px 99px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-offer-modal-brand-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;max-width:180px;height:9rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:.375rem;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem;padding:.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.s-offer-modal-brand-item.swiper-slide:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-shadow:5px 10px 99px #2b2d340d;--tw-shadow-colored:5px 10px 99px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-offer-modal-tag-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;max-width:180px;height:9rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:.375rem;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem;padding:.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.s-offer-modal-tag-item.swiper-slide:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-shadow:5px 10px 99px #2b2d340d;--tw-shadow-colored:5px 10px 99px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-offer-modal-product.swiper-slide{flex-direction:column;flex-grow:1;flex-shrink:0;width:70%;display:flex}@media (width>=640px){.s-offer-modal-product.swiper-slide{width:40%}}@media (width>=1024px){.s-offer-modal-product.swiper-slide{width:28%}}.s-order-edit-products-list .s-products-list-wrapper{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}@media (width>=769px){.s-order-edit-products-list .s-products-list-wrapper{grid-template-columns:repeat(3,minmax(0,1fr))}}.s-order-edit-no-content-placeholder .icon{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));font-size:1.25rem;line-height:1.75rem}.s-order-edit-mobile-products-modal .products-list .s-products-list-wrapper{grid-template-columns:repeat(2,minmax(0,1fr));gap:.625rem}.s-order-edit-expired .icon{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));font-size:1.25rem;line-height:1.75rem}.s-order-summary-item-copy-button.copied .s-button-text{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.s-orders-no-content .icon{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:8rem;height:8rem;color:rgb(209 213 219/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;margin-bottom:1rem;font-size:3rem;line-height:1;display:flex}.s-payments-list-item{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px;justify-content:center;align-items:center;width:3rem;height:2rem;padding:.25rem;display:flex}.s-payments-list-item img{-o-object-fit:contain;object-fit:contain;max-height:100%}.s-product-card-entry{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px;justify-content:space-between;height:100%;transition-property:box-shadow;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative}.s-product-card-out-of-stock img.loaded{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.s-product-card-vertical{flex-direction:column}.s-product-card-vertical .s-product-card-image{border-top-left-radius:16px;border-top-right-radius:16px;flex:1}.s-product-card-vertical .s-product-card-wishlist-btn{opacity:.75;position:absolute;top:.5rem;right:.5rem}.s-product-card-vertical .s-product-card-wishlist-btn:hover{opacity:1}@media (width>=768px){.s-product-card-vertical .s-product-card-wishlist-btn{right:.5rem}}.s-product-card-vertical .s-product-card-wishlist-btn:where([dir=rtl],[dir=rtl] *){left:.5rem;right:unset}@media (width>=768px){.s-product-card-vertical .s-product-card-wishlist-btn:where([dir=rtl],[dir=rtl] *){left:.5rem;right:unset}}.s-product-card-minimal .s-product-card-image{width:8rem}@media (width>=640px){.s-product-card-minimal .s-product-card-image{width:14rem}}@media (width>=1024px){.s-product-card-minimal .s-product-card-image{width:7rem}}.s-product-card-minimal .s-product-card-content{flex-direction:column;flex:1;padding:1.25rem;display:flex;overflow:hidden}.s-product-card-vertical .s-product-card-wishlist-btn button{margin:0;--tw-bg-opacity:1!important;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))!important}.s-product-card-fit-height .s-product-card-image{height:11rem;max-height:15rem}.s-product-card-image{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));flex-shrink:0;width:100%;height:100%;position:relative;overflow:hidden}.s-product-card-image:before{--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));content:var(--tw-content);--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1));font-size:1.875rem;line-height:2.25rem;display:inline-block;position:absolute;top:50%;left:50%}.s-product-card-image:hover{opacity:.9}.s-product-card-image img{width:100%;height:100%;transition-property:opacity;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.s-product-card-image img.lazy{opacity:0}.s-product-card-image img.loaded{opacity:1;position:relative}.s-product-card-content{flex-direction:column;padding:.75rem;display:flex;position:relative}@media (width>=640px){.s-product-card-content{padding:1.25rem}}.s-product-card-horizontal .s-product-card-image{width:8rem;height:auto}@media (width>=640px){.s-product-card-horizontal .s-product-card-image{width:14rem}}.s-product-card-horizontal .s-product-card-image:where([dir=ltr],[dir=ltr] *){border-top-left-radius:16px;border-bottom-left-radius:16px}.s-product-card-horizontal .s-product-card-image:where([dir=rtl],[dir=rtl] *){border-top-right-radius:16px;border-bottom-right-radius:16px}.s-product-card-horizontal .s-product-card-content{width:100%;margin-bottom:.625rem}.s-product-card-full-image .s-product-card-content{z-index:10;width:100%;padding:1.25rem 2.5rem 1.75rem;position:absolute;bottom:0}.s-product-card-full-image .s-product-card-image a{width:100%;height:100%}.s-product-card-compact .s-product-card-content{text-align:right;flex:1;min-width:0;padding:0}.s-product-card-compact .s-product-card-image{border-radius:.375rem;flex-shrink:0;width:5rem;height:5rem}.s-product-card-compact .s-product-card-image img{-o-object-fit:cover;object-fit:cover;border-radius:.375rem;width:100%;height:100%}article:has(salla-product-card-embed):after{clear:both;--tw-content:\"\";content:var(--tw-content);display:block}.s-product-options-donation-input-group.\\!shown,.s-product-options-donation-input-group.shown{opacity:1;height:auto;transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.s-products-list-wrapper{margin-bottom:2rem;display:grid}.s-products-list-vertical-cards{grid-template-columns:repeat(2,minmax(0,1fr));gap:.625rem}@media (width>=640px){.s-products-list-vertical-cards{gap:1rem}}@media (width>=768px){.s-products-list-vertical-cards{grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem}}@media (width>=1024px){.s-products-list-vertical-cards{grid-template-columns:repeat(4,minmax(0,1fr))}}.s-products-list-horizontal-cards{grid-template-columns:repeat(1,minmax(0,1fr));gap:1rem}@media (width>=640px){.s-products-list-horizontal-cards{gap:2rem}}@media (width>=1024px){.s-products-list-horizontal-cards{grid-template-columns:repeat(2,minmax(0,1fr))}}.s-products-slider-card{width:100%;max-width:250px;padding-left:.5rem;padding-right:.5rem;height:auto!important}@media (width>=640px){.s-products-slider-card{width:50%;max-width:320px}}@media (width>=768px){.s-products-slider-card{width:33.3333%}}@media (width>=1024px){.s-products-slider-card{width:25%}}unicode{unicode-bidi:plaintext}.s-review-card-slider-dot.active{--tw-scale-x:1.5;--tw-scale-y:1.5;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));background-color:var(--color-primary)}.s-reviews-container .swiper-slide{width:20%;height:auto;padding-left:10px;padding-right:10px;overflow:hidden}@media (width>=1024px){.s-reviews-container .swiper-slide{padding-left:15px;padding-right:15px}}.s-reviews-container .swiper-slide:not(.swiper-slide-active) .s-reviews-testimonial__avatar{margin-bottom:2rem}.s-reviews-container .swiper-slide:not(.swiper-slide-active) .s-reviews-testimonial__inner{text-align:center;flex-direction:column;align-items:center;position:relative}.s-reviews-container .swiper-slide:not(.swiper-slide-active) .s-reviews-testimonial__icon svg{--tw-translate-x:-50%;--tw-translate-y:.25rem;width:1.5rem;height:1.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));top:-2rem;left:50%}.s-search-modal .s-modal-wrapper{align-items:flex-start;padding:0}.s-search-modal .s-modal-spacer{display:inline}.s-search-modal .s-modal-body{background:0 0;border-radius:.5rem;width:700px;max-width:90%;margin-top:3.2rem;padding:0;overflow:visible;position:relative!important}.s-search-modal .s-modal-close{top:50%;transform:translateY(-50%)}@media (width<=639px){.s-search-modal .s-modal-body .s-search-results{margin-top:0;position:static}.s-search-modal.s-search-modal-new .s-modal-body{height:100dvh;max-height:100dvh!important}}@media (width>=640px){.s-search-modal.s-search-modal-new .s-modal-body{background:var(--color-surface,#fff);width:1100px;max-width:95%;overflow:hidden}}.s-search-product-card-out-of-stock img.loaded{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.s-search-product-card-image img.lazy{opacity:0}.s-search-product-card-image img.loaded{opacity:1;position:relative}.s-skeleton-pulse{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));animation:2s cubic-bezier(.4,0,.6,1) infinite pulse}.s-skeleton-pulse:is(.dark *){--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.s-skeleton-button{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));border-radius:.375rem;justify-content:center;align-items:center;display:flex}.s-skeleton-button:is(.dark *){--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.s-skeleton-products-slider{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-products-slider{max-width:1280px}}.s-skeleton-products-slider{overflow:hidden}@media (width>=1024px){.s-block--testimonials.s-skeleton-products-slider,.s-skeleton-products-slider.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-skeleton-products-slider,.s-skeleton-products-slider.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-products-slider,.s-skeleton-products-slider.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-skeleton-products-slider-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;padding-top:.5rem;padding-bottom:.5rem;display:grid}@media (width>=1024px){.s-skeleton-products-slider-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}.s-skeleton-card-image{aspect-ratio:1;border-radius:.375rem;width:100%}.s-skeleton-card-line{margin-top:.5rem}.s-skeleton-card-line-lg{margin-top:.75rem}.s-skeleton-card-line-sm{margin-top:.25rem}.s-skeleton-body-fill{flex:1}.s-skeleton-circle-default{margin-left:.25rem;margin-right:.25rem}.s-skeleton-product-card-content>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-skeleton-product-card-content{padding:.75rem}.s-skeleton-menu-rows{align-items:center;gap:1rem;display:flex}.s-skeleton-menu-columns{flex-direction:column;gap:.5rem;display:flex}.s-skeleton-products-list{gap:1rem;display:grid}.s-skeleton-products-list-grid-2,.s-skeleton-products-list-grid-3{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}@media (width>=640px){.s-skeleton-products-list-grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.s-skeleton-products-list-grid-4{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}@media (width>=640px){.s-skeleton-products-list-grid-4{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=1024px){.s-skeleton-products-list-grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}}.s-skeleton-bullet-delivery{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;flex-direction:column;gap:.75rem;padding:1rem;display:flex}.s-skeleton-bullet-delivery:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-bullet-item{align-items:center;gap:.5rem;display:flex}.s-skeleton-card{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;margin-top:.5rem;margin-bottom:.5rem;padding:1rem}.s-skeleton-card:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-review{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-review{max-width:1280px}}.s-skeleton-review{margin-top:1.25rem}@media (width>=1024px){.s-block--testimonials.s-skeleton-review,.s-skeleton-review.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-skeleton-review,.s-skeleton-review.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-review,.s-skeleton-review.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-skeleton-review-body{border-radius:.375rem;gap:.75rem;padding:.75rem;display:flex}.s-skeleton-review-stars{align-items:center;gap:.25rem;margin-bottom:.5rem;display:flex}.s-skeleton-review-star{border-radius:.125rem;width:1rem;height:1rem;--tw-bg-opacity:1!important;background-color:rgb(209 213 219/var(--tw-bg-opacity,1))!important}.s-skeleton-review-star:is(.dark *){--tw-bg-opacity:1!important;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))!important}.s-skeleton-list{flex-direction:column;gap:.75rem;display:flex}.s-skeleton-list-item{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;gap:.75rem;padding:.75rem;display:flex}.s-skeleton-list-item:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-form{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;flex-direction:column;gap:1rem;margin-top:.5rem;margin-bottom:.5rem;padding:1rem;display:flex}.s-skeleton-form:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-search{align-items:center;gap:.75rem;padding:.375rem .75rem;display:flex}.s-skeleton-filters{border-radius:.375rem;flex-direction:column;gap:1rem;padding:1rem;display:flex}.s-skeleton-payment{flex-wrap:wrap;align-items:center;gap:.5rem;display:flex}.s-skeleton-input{margin-left:.5rem;margin-right:.5rem}.s-skeleton-slider{border-radius:.375rem;overflow:hidden}.s-skeleton-slider-image{border-radius:.375rem;width:100%;height:clamp(130px,30vw,350px)}.s-skeleton-slider-thumbs{gap:.5rem;margin-top:.75rem;display:flex}.s-skeleton-slider-thumb{border-radius:.375rem;width:5rem;height:5rem}.s-skeleton-thumbs-centered{justify-content:center;gap:.5rem;margin-top:.75rem;display:flex}.s-skeleton-bgslider-dot{border-radius:.375rem;width:1.5rem;height:.5rem}.s-skeleton-breadcrumb{align-items:center;gap:.5rem;padding-top:1.25rem;padding-bottom:1.25rem;display:flex}.s-skeleton-breadcrumb-item-sm{width:4rem;height:1rem}.s-skeleton-breadcrumb-item-lg{width:6rem;height:1rem}.s-skeleton-breadcrumb-sep{width:1rem;height:1rem}.s-skeleton-page{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-page{max-width:1280px}}.s-skeleton-page{margin-bottom:2.5rem;padding-left:.625rem;padding-right:.625rem}@media (width>=1024px){.s-block--testimonials.s-skeleton-page,.s-skeleton-page.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-skeleton-page,.s-skeleton-page.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-page,.s-skeleton-page.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}@media (width>=640px){.s-skeleton-page{padding-left:1.25rem;padding-right:1.25rem}}.s-skeleton-page-content>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.s-skeleton-section-title{width:12rem;height:1.5rem;margin-bottom:1rem}@media (width>=640px){.s-skeleton-section-title{margin-bottom:1.5rem}}.s-skeleton-text-line-full{width:100%;height:1rem}.s-skeleton-text-line-lg{width:75%;height:1rem}.s-skeleton-text-line-sm{width:50%;height:1rem}.s-skeleton-circle-md{width:2.5rem;height:2.5rem}.s-skeleton-rounded-md-sm{border-radius:16px;width:2.5rem;height:2.5rem}.s-skeleton-detail-container{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-detail-container{max-width:1280px}}@media (width>=1024px){.s-block--testimonials.s-skeleton-detail-container,.s-skeleton-detail-container.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-skeleton-detail-container,.s-skeleton-detail-container.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-detail-container,.s-skeleton-detail-container.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-skeleton-detail-layout{flex-direction:column;align-items:flex-start;display:flex}@media (width>=768px){.s-skeleton-detail-layout{flex-direction:row}}.s-skeleton-detail-images{flex-shrink:0;width:100%;padding-bottom:2rem;top:6rem;overflow:hidden}@media (width>=768px){.s-skeleton-detail-images{padding-bottom:4rem;position:sticky;width:50%!important}}.s-skeleton-detail-images:where([dir=ltr],[dir=ltr] *){margin-right:2rem}.s-skeleton-detail-images:where([dir=rtl],[dir=rtl] *){margin-left:2rem}.s-skeleton-detail-content{width:100%;top:6rem}.s-skeleton-detail-content>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}@media (width>=768px){.s-skeleton-detail-content{width:50%;padding-bottom:4rem;position:sticky;overflow:hidden}}.s-skeleton-detail-description>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-skeleton-detail-description{padding-top:.5rem;padding-bottom:.5rem}.s-skeleton-detail-colors{display:flex}.s-skeleton-detail-colors>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.s-skeleton-detail-colors:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.s-skeleton-detail-title{width:75%;height:1.75rem}.s-skeleton-detail-badge{width:5rem;height:.75rem}.s-skeleton-detail-price{width:6rem;height:1.75rem}.s-skeleton-detail-bar-label{width:3rem;height:1.25rem}.s-skeleton-detail-bar-value{width:5rem;height:1.75rem}.s-skeleton-detail-actions-label{width:4rem;height:1.25rem}.s-skeleton-detail-size-rect{border-radius:16px;width:3rem;height:2.5rem}.s-skeleton-detail-add-btn{border-radius:.375rem;width:100%;height:3.5rem}.s-skeleton-detail-price-bar{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:.375rem .375rem 0 0;justify-content:space-between;align-items:center;padding:1.25rem;display:flex}.s-skeleton-detail-actions>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.s-skeleton-detail-actions{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:.375rem .375rem 0 0;padding:1.25rem}.s-skeleton-detail-actions-row{justify-content:space-between;align-items:center;display:flex}.s-skeleton-detail-size-selectors{align-items:center;gap:.5rem;display:flex}.s-skeleton-blog-grid{grid-template-columns:repeat(1,minmax(0,1fr));gap:1.5rem;display:grid}@media (width>=768px){.s-skeleton-blog-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width>=1024px){.s-skeleton-blog-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}.s-skeleton-blog-card>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-skeleton-blog-card-image{aspect-ratio:16/9;width:100%}.s-skeleton-blog-card-title{width:75%;height:1.25rem}.s-skeleton-cart-layout{flex-direction:column;align-items:flex-start;padding-top:1.25rem;padding-bottom:1.5rem;display:flex}@media (width>=1024px){.s-skeleton-cart-layout{flex-direction:row;padding-bottom:5rem}}.s-skeleton-cart-items{width:100%}.s-skeleton-cart-items>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}@media (width>=1024px){.s-skeleton-cart-items{width:calc(100% - 384px)}}.s-skeleton-cart-item{align-items:flex-start;min-height:96px;margin-bottom:1.25rem;display:flex;position:relative}.s-skeleton-cart-item>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.s-skeleton-cart-item{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:.375rem;padding:1.25rem}@media (width>=480px){.s-skeleton-cart-item{padding:1.75rem}}.s-skeleton-cart-item:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.s-skeleton-cart-item-image{border-radius:.375rem;flex-shrink:0;width:6rem;height:5rem}.s-skeleton-cart-item-info{flex:1}.s-skeleton-cart-item-info>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.s-skeleton-cart-item-title{width:75%;height:1.25rem}.s-skeleton-cart-item-price{width:4rem;height:1rem}.s-skeleton-cart-item-actions{align-items:center;gap:2rem;display:flex}.s-skeleton-cart-item-qty{border-radius:16px;width:2.5rem;height:2rem}.s-skeleton-cart-item-total{width:5rem;height:1.25rem}.s-skeleton-cart-item-delete{border-radius:9999px;width:2rem;height:2rem}.s-skeleton-cart-summary{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);width:368px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:.375rem;margin-inline-start:1rem;padding:1.25rem;display:none}@media (width>=1024px){.s-skeleton-cart-summary{display:block}}@media (width>=480px){.s-skeleton-cart-summary{padding:1.75rem}}.s-skeleton-cart-summary-title{width:8rem;height:1.25rem;margin-bottom:1.25rem}.s-skeleton-cart-summary-row{justify-content:space-between;margin-bottom:1.25rem;display:flex}.s-skeleton-cart-summary-label{width:8rem;height:1rem}.s-skeleton-cart-summary-value,.s-skeleton-cart-summary-total-label{width:4rem;height:1.25rem}.s-skeleton-cart-summary-total-value{width:5rem;height:1.5rem}.s-skeleton-cart-summary-button{border-radius:.375rem;width:100%;height:3rem;margin-top:1.25rem}salla-slider:not(.hydrated),.carousel-slider{visibility:visible}salla-slider[type]:not(.hydrated)>div,salla-slider[type]:not(.hydrated) .swiper>div>div,.carousel-slider .swiper{margin-left:-.625rem;margin-right:-.625rem;padding-left:5px;padding-right:5px;display:flex}@media (width>=640px){salla-slider[type]:not(.hydrated)>div,salla-slider[type]:not(.hydrated) .swiper>div>div,.carousel-slider .swiper{padding-left:0;padding-right:0}}salla-slider[type]:not(.hydrated)>div:where([dir=ltr],[dir=ltr] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=ltr],[dir=ltr] *),.carousel-slider .swiper:where([dir=ltr],[dir=ltr] *){padding-right:3rem}@media (width>=1024px){salla-slider[type]:not(.hydrated)>div:where([dir=ltr],[dir=ltr] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=ltr],[dir=ltr] *),.carousel-slider .swiper:where([dir=ltr],[dir=ltr] *){padding-right:0}}salla-slider[type]:not(.hydrated)>div:where([dir=rtl],[dir=rtl] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=rtl],[dir=rtl] *),.carousel-slider .swiper:where([dir=rtl],[dir=rtl] *){padding-left:3rem}@media (width>=1024px){salla-slider[type]:not(.hydrated)>div:where([dir=rtl],[dir=rtl] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=rtl],[dir=rtl] *),.carousel-slider .swiper:where([dir=rtl],[dir=rtl] *){padding-left:0}}salla-slider[type]:not(.hydrated)>div>div,salla-slider[type]:not(.hydrated) .swiper>div>div>div,.carousel-slider .swiper-wrapper>div{flex-shrink:0;padding-left:5px;padding-right:5px}@media (width>=640px){salla-slider[type]:not(.hydrated)>div>div,salla-slider[type]:not(.hydrated) .swiper>div>div>div,.carousel-slider .swiper-wrapper>div{padding-left:.625rem;padding-right:.625rem}}salla-slider:not([type=carousel]):not([type=thumbs]):not(.hydrated)>div,salla-slider.photos-slider:not(.hydrated)>div{width:100%;margin-left:0;margin-right:0;padding-left:0;padding-right:0}salla-slider:not([type=carousel]):not([type=thumbs]):not(.hydrated)>div>div,salla-slider.photos-slider:not(.hydrated)>div>div{padding:0}salla-slider:not([type=carousel]):not([type=thumbs]):not(.hydrated)>div>div:nth-child(n+2){display:none}salla-slider[type=fullscreen] [slot=items]>div{width:100%;min-height:calc(100vh - 100px)}salla-slider:not(.hydrated){display:block;overflow:hidden}salla-slider div[slot=thumbs]{margin-top:.625rem}salla-slider div[slot=thumbs]>div{height:5rem;padding-left:5px;padding-right:5px}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{cursor:pointer;--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));border-radius:16px;width:25%;height:4rem;margin-left:5px;margin-right:5px;padding:0;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide *{pointer-events:none}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide:hover{opacity:.8}@media (width>=640px){.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{width:20%}}@media (width>=768px){.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{width:25%;height:5rem}}@media (width>=1024px){.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{width:20%}}.s-slider-vertical .s-slider-thumbs-container .swiper-slide{cursor:pointer;height:4rem;margin:5px 0;padding:0}.s-slider-vertical .s-slider-thumbs-container .swiper-slide *{pointer-events:none}@media (width>=768px){.s-slider-vertical .s-slider-thumbs-container .swiper-slide{width:100%;height:5rem}}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide:after{z-index:1;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);width:100%;height:100%;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000);--tw-ring-inset:inset;--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235/var(--tw-ring-opacity,1));--tw-content:\"\";content:var(--tw-content);border-radius:16px;transition-property:box-shadow;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:absolute;top:0;left:0}.s-slider-thumbs .swiper-slide.video-entry:before,.s-slider-thumbs .swiper-slide.model-entry:before{width:1.75rem;height:1.75rem;font-size:1.25rem;line-height:1.75rem}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide.swiper-slide-thumb-active:after{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000);--tw-ring-color:var(--color-primary)}.s-slider-with-grid-thumbs .s-slider-thumbs .s-slider-thumbs-container .swiper-slide{-o-object-fit:cover;object-fit:cover;margin-left:0!important;margin-right:0!important}.s-social-share-list.opened{height:auto}salla-user-menu div[slot=trigger]{display:none}.s-user-menu-toggler:before{pointer-events:none;visibility:hidden;z-index:10;opacity:0;--tw-content:\"\";content:var(--tw-content);background-color:#71717abf;width:100vw;height:100vh;transition-duration:.3s;position:fixed;top:0;left:0}.s-user-menu-toggler.opened:before{pointer-events:auto;visibility:visible;content:var(--tw-content);opacity:1}@media (width>=768px){.s-user-menu-toggler.opened:before{pointer-events:none;visibility:hidden;content:var(--tw-content);opacity:0}}.s-user-menu-toggler.opened .s-user-menu-trigger svg{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s-user-menu-toggler.opened .s-user-menu-dropdown{visibility:visible;--tw-translate-y:0px;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.s-user-menu-dropdown-item a{--tw-text-opacity:1;color:rgb(68 68 68/var(--tw-text-opacity,1));align-items:center;padding:.625rem 1.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.s-user-menu-dropdown-item a:hover{background-color:#e5e7eb4d}@media (width>=640px){.s-user-menu-dropdown-item a{font-size:.875rem;line-height:1.25rem}}.s-wallet-no-content .icon{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:8rem;height:8rem;color:rgb(209 213 219/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;margin-bottom:1rem;font-size:3rem;line-height:1;display:flex}.s-menu-products-wrapper{flex-grow:1;padding:2rem}@keyframes sFadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.s-product-card-animated{animation:1.2s cubic-bezier(.16,1,.3,1) forwards sFadeInUp}@media (prefers-reduced-motion:reduce){.s-product-card-animated{opacity:1;animation:none;transform:none}}:root{--s-radius:16px;--infinte-color:#c9c9c9;--main-text-color:#231f1e;--main-text-color-dark:#2b2d34;--color-text:#7c8082;--bg-gray:#c6c7ce1a;--color-grey:#f5f7f9;--color-light-grey:#eee;--font-sm:.868571rem;--mm-ocd-width:calc(100% - 51px);--safe-top:max(env(safe-area-inset-top,0px), var(--app-safe-area-top,0px));--safe-bottom:max(env(safe-area-inset-bottom,0px), var(--app-safe-area-bottom,0px));--flow-safe-top:max(0px, env(safe-area-inset-top,0px) - var(--app-safe-area-top,0px));--flow-safe-bottom:max(0px, env(safe-area-inset-bottom,0px) - var(--app-safe-area-bottom,0px))}body{color:var(--main-text-color);font-size:15px;font-weight:400;line-height:26px;position:relative}html{-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;width:100%;height:100%;position:relative}body{border:0;margin:0;padding:0}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{margin-bottom:0;font-weight:600}a{text-decoration:none;transition:color .2s}img{max-width:100%}a:focus{outline:none;text-decoration:none}ul,li{margin:0;padding:0;list-style:none}h1{font-size:1.875rem;line-height:2.25rem}h2{font-size:1.25rem;line-height:1.75rem}h3{font-size:1.25rem;line-height:38px}.f-color{color:#ff6767}h5.subtitle{font-size:16px;font-weight:400}salla-hook{all:unset;display:none}html{scroll-behavior:smooth}.cursor-pointer *{pointer-events:none}.flip-x{transform:scaleX(-1)}input[type=file]{display:none}html body{padding-top:var(--app-safe-area-top,0px);padding-bottom:var(--app-safe-area-bottom,0px)}body [type=text]:focus,body [type=email]:focus,body [type=url]:focus,body [type=password]:focus,body [type=number]:focus,body [type=date]:focus,body [type=datetime-local]:focus,body [type=month]:focus,body [type=search]:focus,body [type=tel]:focus,body [type=time]:focus,body [type=week]:focus,body [multiple]:focus,body textarea:focus,body select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000)}.text-start:where([dir=ltr],[dir=ltr] *){text-align:left}.text-start:where([dir=rtl],[dir=rtl] *){text-align:right}input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}[type=submit]{-webkit-appearance:listitem}input[type=number]{-moz-appearance:textfield}.unicode{unicode-bidi:plaintext}.spinner-loader{border-right-color:var(--color-primary)!important}.spinner-loader.reverse{background-color:#f98181;border-right-color:#9f7171!important}.hide-scroll{-ms-overflow-style:none;scrollbar-width:none;overflow-y:scroll}.hide-scroll::-webkit-scrollbar{display:none}.remove-item-btn:after{content:\"\";font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-weight:400;line-height:1;font-family:sallaicons!important}.cart-thumb{z-index:30;transition:all .3s cubic-bezier(.2,1,.3,1);position:fixed}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}body.fslightbox-open #tidio-chat-iframe,body.fslightbox-open .fb_reset,body.fslightbox-open [id^=gb-widget],body.modal-open #tidio-chat-iframe,body.modal-open .fb_reset,body.modal-open [id^=gb-widget]{display:none!important}.loader:before{content:\"\";opacity:1;border:2px solid;border-top-color:var(--color-primary);border-bottom-color:#eee;border-left-color:var(--color-primary);border-right-color:#eee;border-radius:50%;width:20px;height:20px;animation:1s ease-in-out infinite loader;display:inline-block}.btn--danger .loader:before{border-top-color:#ff6767;border-left-color:#ff6767}.loader--small:before{width:16px;height:16px}@keyframes loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pulse-anime{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.pulse-anime{animation-name:pulse-anime;animation-timing-function:ease-in-out}.content .content-entry img{margin:15px 0 25px}.content .content-entry ul,.content .content-entry li{list-style:inherit!important}.content .content-entry ol{list-style:auto!important}salla-modal:not(.hydrated){display:none}salla-slider,salla-advertisement{display:block}salla-offer-modal,salla-login-modal,salla-scopes{pointer-events:none;z-index:50;position:fixed;inset:0}salla-localization-modal{pointer-events:none;z-index:210;position:fixed;inset:0}@media (width<=767px){.s-modal-container{z-index:999}.s-modal-body{bottom:15px}.s-search-modal .s-modal-body{background-color:#fff;border-radius:0;max-width:100%;margin:0;bottom:0;transform:none}}.videoWrapper{height:0;padding-bottom:56.25%;position:relative}.videoWrapper>*{width:100%;height:100%;max-width:initial;position:absolute;top:0;left:0}.grid-trigger{cursor:pointer;--tw-text-opacity:1;width:2.5rem;height:2.5rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:16px;justify-content:center;align-items:center;margin-left:.25rem;margin-right:.25rem;font-size:1.25rem;line-height:1.75rem;display:flex}.grid-trigger *{pointer-events:none}.flex-center{justify-content:center;align-items:center;display:flex}.center-between{justify-content:space-between;align-items:center;display:flex}.grow-0{flex-grow:0!important}.basis-0{flex-basis:0}.gradient-bg{--tw-gradient-from:var(--color-primary) var(--tw-gradient-from-position);--tw-gradient-to:var(--color-primary-dark) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}[dir=ltr] .gradient-bg{background-image:linear-gradient(to right, var(--tw-gradient-stops))}[dir=rtl] .gradient-bg{background-image:linear-gradient(to left, var(--tw-gradient-stops))}@media (width<=1024px){.gradient-bg.profile-header{background-image:none}.gradient-bg.profile-header .breadcrumbs a,.gradient-bg.profile-header .breadcrumbs span,.gradient-bg.profile-header .breadcrumbs .arrow{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}}.badge{border-radius:9999px;justify-content:center;align-items:center;min-width:20px;height:1.25rem;padding:.25rem;font-size:.75rem;line-height:1rem;display:inline-flex}.badge--red{--tw-bg-opacity:1;background-color:rgb(248 113 113/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.copy-icon{font-size:.75rem;line-height:1rem}.s-localization-modal-inner{width:100%}.s-rating-modal-wrap .s-modal-body{position:relative!important}.s-verify-back{top:.5rem}.s-verify-back svg{max-width:18px;fill:rgba(107, 114, 128, var(--tw-text-opacity))}[dir=rtl] .s-verify-back{right:.5rem}[dir=ltr] .s-verify-back{left:.5rem}@media (width<=639px){.s-verify-back{display:none}}.article--main iframe{width:100%;height:30vw}@media (width<=639px){.article--main iframe{height:50vw}}.cart-submit-wrap{justify-content:space-between;align-items:center;gap:.625rem;margin-left:-5px;margin-right:-5px;display:flex}.cart-submit-wrap:where([dir=ltr],[dir=ltr] *){flex-wrap:wrap}.cart-submit-wrap>*{flex-grow:1;margin-left:5px;margin-right:5px}.s-button-btn,.s-price-range-number-input{border-radius:16px}.s-app-install-banner{z-index:999;--tw-drop-shadow:drop-shadow(0 4px 3px #00000012) drop-shadow(0 2px 2px #0000000f);width:95%;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);background-color:color-mix(in srgb, var(--color-primary) 15%, white);border-radius:16px;flex-direction:row;align-items:center;gap:.5rem;margin:1rem auto;padding:.75rem;display:none;position:fixed;left:0;right:0}.s-app-install-banner[open=false]{display:none}.s-app-install-banner[open=true][position=top]{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.5s;display:flex}.s-app-install-banner[open=true][position=bottom]{animation:.6s linear slideUpFromBottom;display:flex}.s-app-install-banner[position=top]{border-radius:0;width:100%;margin:0;position:relative;top:0}.s-app-install-banner[position=bottom]{bottom:0}@keyframes slideDownFromBottom{0%{opacity:1;transform:translateY(0%)}to{opacity:0;transform:translateY(100%)}}.s-app-install-banner[closing][position=bottom]{animation:.6s linear forwards slideDownFromBottom}.s-app-install-banner-title{color:var(--color-primary);font-size:1rem;font-weight:700;line-height:1.5rem}.s-app-install-banner-sub-title{max-width:95%;font-size:.875rem;font-weight:400;line-height:1.25rem}.s-app-install-banner-cta{color:var(--color-primary);text-decoration-line:underline}.s-app-install-banner-cancel-button{position:absolute;top:.5rem}.s-app-install-banner-cancel-button:where([dir=ltr],[dir=ltr] *){right:.75rem}.s-app-install-banner-cancel-button:where([dir=rtl],[dir=rtl] *){left:.75rem}.blog-category ul:where([dir=ltr],[dir=ltr] *),.blog-category ol:where([dir=ltr],[dir=ltr] *){padding-left:1rem}.blog-category ul:where([dir=rtl],[dir=rtl] *),.blog-category ol:where([dir=rtl],[dir=rtl] *){padding-right:1rem}.blog-category ul li{list-style:outside}.blog-category ol li{list-style:auto}.blog-category a{color:var(--color-primary)}.blog-category a:hover{color:var(--color-primary-dark)}.collapse-content{opacity:0;grid-template-rows:0fr;transition:grid-template-rows .225s ease-out,opacity .225s ease-out;display:grid}.collapse-content>*{min-height:0;overflow:hidden}.collapse-content.is-closed{overflow:hidden}.collapse-content.is-opened{opacity:1;grid-template-rows:1fr}@keyframes slideInStart{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}.slide-in-start{animation:.5s ease-out forwards slideInStart}@keyframes scalePulse{0%{transform:scale(.88)}50%{transform:scale(1.2)}to{transform:scale(1)}}.scale-pulse{animation:.4s ease-out scalePulse}.fade-out-collapse{opacity:0;transition:height .3s ease-in-out,opacity .3s ease-in-out;overflow:hidden;height:0!important}@keyframes s-skeleton-pulse-fade{0%,to{opacity:1}50%{opacity:.4}}.s-skeleton-pulse{animation:1.5s ease-in-out infinite s-skeleton-pulse-fade!important;transform:none!important}main>.s-block:nth-of-type(n+4)[style*=min-height]{content-visibility:auto}.s-skeleton-slider-image{height:380px!important}@media (width<=767px){.s-skeleton-detail-images .s-skeleton-slider-thumbs{display:none!important}}@keyframes fadeInDown{0%{transform:translateY(-15px)}to{opacity:1;transform:translate(0,0)}}.animated{animation-duration:.4s;animation-fill-mode:both}.animatedfadeInDown{opacity:0}.fadeInDown{opacity:0;animation-name:fadeInDown}@keyframes toRightFromLeft{49%{transform:translate(100%)}50%{opacity:0;transform:translate(-100%)}51%{opacity:1}}@keyframes toTopFromBottom{0%{opacity:0;transform:translate(50px)}to{transform:translate(0);opacity:1!important}}@keyframes delayKeyframe{0%{opacity:0}to{opacity:0}}@keyframes rubberBand{0%{transform:scale(1)}30%{transform:scale(1.25,.75)}40%{transform:scale(.75,1.25)}50%{transform:scale(1.15,.85)}65%{transform:scale(.95,1.05)}75%{transform:scale(1.05,.95)}to{transform:scale(1)}}.rubberBand{animation-name:rubberBand;animation-duration:1s;animation-iteration-count:1;animation-fill-mode:both}.rtl .rtl-range-slider,[dir=rtl] .rtl-range-slider{transform:rotateY(180deg)}.rtl .rtl-range-numbers,[dir=rtl] .rtl-range-numbers{flex-direction:row-reverse}.rtl .form-select,.rtl select,[dir=rtl] .form-select,[dir=rtl] select{background-position:.5rem;padding-right:12px}.rtl .fix-align,[dir=rtl] .fix-align{display:inline-block;transform:translateY(-2px)}.rtl .flatpickr-months .numInputWrapper .cur-year,[dir=rtl] .flatpickr-months .numInputWrapper .cur-year{padding:0 15px 0 0}.sf-dump{direction:ltr}[dir=ltr] .with-arrow .sicon-keyboard_arrow_left:before,[dir=ltr] nav .sicon-keyboard_arrow_left:before,[dir=ltr] .sub-menu .has-children>a:after{content:\"\"}[dir=ltr] .s-breadcrumb-arrow svg{transform:scaleX(-1)}[dir=ltr] .flatpickr-months .numInputWrapper .cur-year{padding:0 0 0 15px}[dir=ltr] .flatpickr-months [class^=arrow]{right:unset;left:0}salla-button[width=wide]{width:100%}salla-button.copied .s-button-text{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}salla-button.copied i:before{content:\"\";--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.btn{white-space:nowrap;border-radius:16px;flex:1;justify-content:center;align-items:center;padding:.5rem 1.5rem .625rem;font-size:.875rem;font-weight:700;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.btn:hover{opacity:.8}.btn .loader{opacity:0;width:0;height:16px;transition:all .3s;transform:scale(0)}.btn--is-loading{pointer-events:none}.btn--is-loading .loader{opacity:1;width:16px;margin:0 5px;transform:scale(1)}.btn--delete .loader{width:15px}.btn--delete .loader:before{border-color:#0000 #fff #fff #0000;width:12px;height:12px}.btn--delete.btn--is-loading .icon{opacity:0}.btn--quantity{--tw-text-opacity:1;width:2.75rem;color:rgb(156 163 175/var(--tw-text-opacity,1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn--quantity:hover{color:var(--color-primary)}.btn__text{pointer-events:none;transition-property:transform;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block}.btn--wishlist{margin:0}.btn--wishlist:where([dir=ltr],[dir=ltr] *){margin-left:.125rem}.btn--wishlist:where([dir=rtl],[dir=rtl] *){margin-right:.125rem}.btn--wishlist:hover{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.btn--wishlist.is-added{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.btn--rounded-gray{white-space:nowrap;background-color:#e5e7eb80;border-radius:9999px;flex-grow:0;justify-content:center;align-items:center;width:100%;padding:.5rem .875rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.btn--rounded-gray:hover{background-color:#e5e7ebb3}.btn--circle-gray{background-color:#e5e7eb4d;border-radius:9999px;justify-content:center;align-items:center;width:2.25rem;height:2.25rem;padding:.75rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.btn--circle-gray:hover{background-color:#e5e7eb80}.btn--icon{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:2.5rem;height:2.5rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;margin-left:.25rem;margin-right:.25rem;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.btn--icon:hover{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.btn--icon i{pointer-events:none}.btn--icon i.sicon-heart{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1))}.btn--share{margin:0}.btn--close{z-index:50;--tw-text-opacity:1;width:3.5rem;height:3rem;color:rgb(239 68 68/var(--tw-text-opacity,1));font-size:1.5rem;line-height:2rem;display:none;position:absolute;top:0}@media (width>=480px){.btn--close{display:block}}.btn--close:where([dir=ltr],[dir=ltr] *){right:0}.btn--close:where([dir=rtl],[dir=rtl] *){left:0}.btn--close-sm{z-index:50;--tw-translate-y:-100%;width:51px;height:51px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));opacity:0;font-size:1.25rem;line-height:1.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:fixed;top:0}.btn--close-sm:where([dir=ltr],[dir=ltr] *){right:0}.btn--close-sm:where([dir=rtl],[dir=rtl] *){left:0}.btn--collapse{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:100%;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:16px;justify-content:center;align-items:center;padding-top:.625rem;padding-bottom:.625rem;font-size:.875rem;line-height:1.25rem;display:flex}@media (width>=480px){.btn--collapse:where([dir=ltr],[dir=ltr] *){padding-left:1.75rem;padding-right:1.25rem}.btn--collapse:where([dir=rtl],[dir=rtl] *){padding-left:1.25rem;padding-right:1.75rem}}.btn.btn:disabled{cursor:default;--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);background-color:#0000}.btn.btn:disabled:hover{background-color:#0000}.btn:disabled .s-button-text{opacity:.7}.btn--danger{--tw-bg-opacity:1;background-color:rgb(248 113 113/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.btn--danger:hover{opacity:.8}.btn--primary{border-width:1px;border-color:var(--color-primary);background-color:var(--color-primary);color:var(--color-primary-reverse)}.btn--outline-primary{border-width:1px;border-color:var(--color-primary);color:var(--color-primary)}.btn--outline-primary:hover{background-color:var(--color-primary);color:var(--color-primary-reverse)}.btn--outline{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.btn--outline:hover{border-color:var(--color-primary);background-color:var(--color-primary);--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.btn--outline.light{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));background-color:#0000}.btn--rounded-full{border-radius:9999px}.rounded-icon{border-radius:9999px;justify-content:center;align-items:center;width:4rem;height:4rem;font-size:1.5rem;line-height:2rem;display:flex}button.btn--coupon{flex-shrink:0;height:40px;position:absolute;top:0}button.btn--coupon:where([dir=ltr],[dir=ltr] *){border-top-left-radius:0;border-bottom-left-radius:0;right:0}button.btn--coupon:where([dir=rtl],[dir=rtl] *){border-top-right-radius:0;border-bottom-right-radius:0;left:0}button.btn--coupon .s-button-text{display:flex!important}salla-button.has-not-coupon button .icon,salla-button.has-coupon button .coupon-text{display:none}salla-button.has-coupon button{width:3rem;padding-left:0;padding-right:0}.link--primary{color:var(--color-primary);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.link--primary:hover{color:var(--color-primary-dark)}#btn-show-more{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}#btn-show-more.is-expanded{pointer-events:none;opacity:0}#blog-like.liked i{background-color:var(--color-primary);width:18px;height:16px;display:inline-block;position:relative;top:-2px;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='16'%20viewBox='0%200%2018%2016'%20fill='none'%3E%3Cpath%20d='M1.5%206.74998H3.75V15.75H1.5C1.08579%2015.75%200.75%2015.4142%200.75%2015V7.49998C0.75%207.08577%201.08579%206.74998%201.5%206.74998ZM5.46967%205.78031L10.2701%200.979957C10.402%200.847994%2010.6109%200.833152%2010.7602%200.945119L11.3996%201.4247C11.7632%201.69734%2011.927%202.1619%2011.8148%202.60224L10.9499%205.99998H15.75C16.5784%205.99998%2017.25%206.67155%2017.25%207.49998V9.07822C17.25%209.2742%2017.2116%209.46822%2017.137%209.64935L14.8162%2015.2855C14.7005%2015.5665%2014.4266%2015.75%2014.1227%2015.75H6C5.58579%2015.75%205.25%2015.4142%205.25%2015V6.31064C5.25%206.11173%205.32902%205.92096%205.46967%205.78031Z'%20fill='%23236E4C'/%3E%3C/svg%3E\") 50%/contain no-repeat;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='16'%20viewBox='0%200%2018%2016'%20fill='none'%3E%3Cpath%20d='M1.5%206.74998H3.75V15.75H1.5C1.08579%2015.75%200.75%2015.4142%200.75%2015V7.49998C0.75%207.08577%201.08579%206.74998%201.5%206.74998ZM5.46967%205.78031L10.2701%200.979957C10.402%200.847994%2010.6109%200.833152%2010.7602%200.945119L11.3996%201.4247C11.7632%201.69734%2011.927%202.1619%2011.8148%202.60224L10.9499%205.99998H15.75C16.5784%205.99998%2017.25%206.67155%2017.25%207.49998V9.07822C17.25%209.2742%2017.2116%209.46822%2017.137%209.64935L14.8162%2015.2855C14.7005%2015.5665%2014.4266%2015.75%2014.1227%2015.75H6C5.58579%2015.75%205.25%2015.4142%205.25%2015V6.31064C5.25%206.11173%205.32902%205.92096%205.46967%205.78031Z'%20fill='%23236E4C'/%3E%3C/svg%3E\") 50%/contain no-repeat}.site-header{display:contents}.site-header .s-skeleton-search{display:none}.site-header__bar-outer{min-height:72px}@media (width>=1024px){.site-header__bar-outer{min-height:88px}}.site-header__bar{z-index:40;border-color:#0000;border-bottom-width:1px;transition:background-color .25s,border-color .25s,box-shadow .25s}.site-header__bar.is-scrolled{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);left:0;right:0;top:var(--app-safe-area-top,0px);position:fixed}.site-header__bar-inner{grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;min-height:72px;display:grid}@media (width>=1024px){.site-header__bar-inner{min-height:88px}}.site-header__bar-inner{transition:min-height .25s}.site-header__bar.is-scrolled .site-header__bar-inner{min-height:56px}@media (width>=1024px){.site-header__bar.is-scrolled .site-header__bar-inner{min-height:64px}}.site-header__nav-toggle{justify-self:start;align-items:center;gap:.375rem;display:flex}@media (width>=1024px){.site-header__nav-toggle{gap:1rem}}.site-header__actions{justify-self:end;align-items:center;display:flex}@media (width>=640px){.site-header__actions{gap:.375rem}}@media (width>=1024px){.site-header__actions{gap:1rem}}@media (width<=767px){.site-header:not(.site-header--home) .site-header__ad,.site-header:not(.site-header--home) .site-header__intro,.site-header--product .site-header__ad,.site-header--product .site-header__intro{display:none}.site-header:not(.site-header--home) .site-header__bar-outer,.site-header--product .site-header__bar-outer{min-height:0}.site-header:not(.site-header--home) .site-header__bar,.site-header--product .site-header__bar{visibility:hidden;height:0;overflow:hidden}.site-header__nav-toggle button,.site-header--home .site-header__actions salla-cart-summary{display:none}.site-header--home .site-header__actions salla-user-menu{visibility:hidden;width:0;height:0;position:absolute;overflow:hidden}}.header-action{--tw-text-opacity:1;width:2.5rem;height:2.5rem;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:9999px;place-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-grid}.header-action:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));color:var(--color-primary)}.header-action svg:not(.s-user-menu-dropdown-item *){width:1.5rem;height:1.5rem}@media (width<=767px){.header-action.site-header__search{display:none}}.site-header__burger{width:1.25rem;height:1.25rem;display:block;position:relative}.site-header__burger span{background-color:color-mix(in srgb, currentColor 80%, transparent);border-radius:9999px;height:.125rem;transition:width .25s cubic-bezier(.4,0,.2,1);position:absolute}.site-header__burger span:first-child{top:0;width:70%;transition-delay:60ms;inset-inline-end:0}.site-header__burger span:nth-child(2){top:7px;width:100%;transition-delay:30ms;inset-inline:0}.site-header__burger span:nth-child(3){top:14px;width:70%;transition-delay:0s;inset-inline-start:0}.header-action:hover .site-header__burger span,.header-action:focus-visible .site-header__burger span{width:100%}.site-header__actions .s-user-menu-trigger{background-color:#0000;border-style:none;padding:0}.site-header__actions>div:has(>salla-user-menu){align-items:center;display:flex}.site-header__actions .s-user-menu-login-btn{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));border-style:none;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.site-header__actions .s-user-menu-login-btn:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));color:var(--color-primary)}@media (width>=768px){.site-header__actions salla-user-menu{position:relative}.site-header__actions .s-user-menu-dropdown{top:100%;left:auto;right:auto;border-radius:16px;position:absolute;inset-inline-end:0;overflow:hidden}}@media (width<=767px){.site-header__actions .s-user-menu-toggler{z-index:210;pointer-events:none;visibility:visible;position:fixed;inset:0}.site-header__actions .s-user-menu-toggler:before{content:\"\";background-color:#0000;transition:background-color .3s;position:absolute;inset:0}.site-header__actions .s-user-menu-toggler.opened{pointer-events:auto}.site-header__actions .s-user-menu-toggler.opened:before{background-color:#00000080}.site-header__actions .s-user-menu-dropdown{overscroll-behavior:contain;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:0 25px 50px -12px #00000040;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);max-height:85vh;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);padding-bottom:calc(76px + var(--safe-bottom));border-top-left-radius:16px;border-top-right-radius:16px;transition:transform .3s cubic-bezier(.4,0,.2,1);position:absolute;bottom:0;left:0;right:0;overflow-y:auto;transform:translateY(100%)}.site-header__actions .s-user-menu-dropdown:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1));border-radius:9999px;width:2.5rem;height:.25rem;margin-top:.625rem;margin-left:auto;margin-right:auto;display:block}.s-user-menu-toggler.opened .s-user-menu-dropdown{transform:translateY(0)}}.site-header__brand{justify-self:center;align-items:center;display:flex}.site-header__brand img{-o-object-fit:contain;object-fit:contain;width:auto;max-width:160px;height:3rem;transition:height .25s}.site-header__bar.is-scrolled .site-header__brand img{height:2.25rem}@media (prefers-reduced-motion:reduce){.site-header__bar,.site-header__bar-inner,.site-header__brand img,.site-header__burger span,.site-nav-drawer,.site-nav-drawer__foot,.site-nav-drawer__back{transition:none}.site-nav-drawer__foot{opacity:1;transform:none}}.site-header__intro-inner{text-align:center;flex-direction:column;align-items:center;gap:.75rem;padding-top:1.25rem;padding-bottom:1.25rem;display:flex}.site-header__intro-title{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));font-size:1.125rem;font-weight:600;line-height:1.75rem}.site-header__intro-text{--tw-text-opacity:1;max-width:36rem;color:rgb(107 114 128/var(--tw-text-opacity,1));font-size:1rem;line-height:1.5rem}.site-header__social-slot.has-links{min-height:48px}.site-header__social-slot:not(.has-links) .s-skeleton-wrapper{display:none}.site-header__social .s-social-list{align-items:center;gap:.75rem;display:flex}.site-header__social .s-social-link a{width:3rem;height:3rem;color:var(--color-primary);background-color:color-mix(in srgb, var(--color-primary) 5%, transparent);border-style:none;border-radius:9999px;place-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-grid}.site-header__social .s-social-link a svg{fill:currentColor;width:1.25rem;height:1.25rem}.site-header__social .s-social-link a:hover .s-social-icon{color:var(--color-primary);background-color:#0000}.site-header__social a:hover .s-social-icon{background-color:var(--color-primary);--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.site-nav-drawer-root{z-index:200;pointer-events:none;position:fixed;inset:0}.site-nav-drawer-root.is-open{pointer-events:auto}.site-nav-drawer__backdrop{opacity:0;background-color:#00000080;transition:opacity .3s;position:absolute;inset:0}.site-nav-drawer-root.is-open .site-nav-drawer__backdrop{opacity:1}.site-nav-drawer{--root-col-w:min(400px, 90vw);--child-col-w:min(230px, 76vw);--visible-children:1;--shown-children:max(0, min(var(--col-count,1) - 1, var(--visible-children)));--extra-children:max(0, (var(--col-count,1) - 1) - var(--visible-children));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:0 25px 50px -12px #00000040;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);top:0;bottom:0;width:min(96vw, var(--root-col-w) + var(--child-col-w) * var(--shown-children));will-change:transform;flex-direction:column;transition:transform .32s cubic-bezier(.4,0,.2,1),width .3s cubic-bezier(.4,0,.2,1);display:flex;position:absolute;inset-inline-start:0;overflow:hidden;transform:translate(-100%)}@media (width>=768px){.site-nav-drawer{--visible-children:2}}[dir=rtl] .site-nav-drawer{transform:translate(100%)}.site-nav-drawer-root.is-open .site-nav-drawer{transform:translate(0)}.site-nav-drawer__head{flex-shrink:0;justify-content:space-between;align-items:center;padding:2rem 1rem;display:flex}.site-nav-drawer__head-start{align-items:center;min-width:0;display:flex}.site-nav-drawer__brand{align-items:center;display:inline-flex}.site-nav-drawer__brand img{-o-object-fit:contain;object-fit:contain;width:auto;max-width:150px;height:2.5rem}.site-nav-drawer__close{--tw-text-opacity:1;width:2.25rem;height:2.25rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-nav-drawer__close:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.site-nav-drawer__close svg{width:1.25rem;height:1.25rem}.site-nav-drawer__viewport{flex:1;overflow:hidden}.site-nav-drawer__track{width:max-content;height:100%;transform:translateX(calc(var(--child-col-w) * var(--extra-children) * -1));transition:transform .32s cubic-bezier(.4,0,.2,1);display:flex}[dir=rtl] .site-nav-drawer__track{transform:translateX(calc(var(--child-col-w) * var(--extra-children)))}.site-nav-drawer__panel{flex-grow:0;flex-shrink:0;flex-basis:var(--child-col-w) ;height:100%;padding-top:.5rem;padding-bottom:.5rem;overflow-y:auto}.site-nav-drawer__panel:first-child{flex-basis:var(--root-col-w)}.site-nav-drawer__panel+.site-nav-drawer__panel{--tw-border-opacity:1;border-inline-start-width:1px;border-inline-start-color:rgb(243 244 246/var(--tw-border-opacity,1))}@media (width<=767px){.site-nav-drawer{--mobile-col-w:100vw;width:auto;max-height:85vh;padding-bottom:calc(76px + var(--safe-bottom));border-start-start-radius:1rem;border-start-end-radius:1rem;inset-block:auto 0;inset-inline:0;transform:translateY(100%)}.site-nav-drawer:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1));border-radius:9999px;flex-shrink:0;width:2.5rem;height:.25rem;margin:.625rem auto .25rem;display:block}[dir=rtl] .site-nav-drawer{transform:translateY(100%)}.site-nav-drawer-root.is-open .site-nav-drawer{transform:translateY(0)}.site-nav-drawer__head{padding-top:.75rem;padding-bottom:.75rem}.site-nav-drawer__panel,.site-nav-drawer__panel:first-child{flex-basis:var(--mobile-col-w)}.site-nav-drawer__viewport{overscroll-behavior:contain;min-height:0;overflow:hidden auto}.site-nav-drawer__track{height:auto;min-height:100%;transform:translateX(calc(var(--mobile-col-w) * (var(--col-count,1) - 1) * -1))}[dir=rtl] .site-nav-drawer__track{transform:translateX(calc(var(--mobile-col-w) * (var(--col-count,1) - 1)))}.site-nav-drawer__panel{height:auto;min-height:100%;overflow:visible}}.site-nav-drawer__list{padding-left:1rem;padding-right:1rem}.site-nav-drawer__list li{opacity:0;transition:opacity .35s,transform .35s cubic-bezier(.4,0,.2,1);transform:translateY(10px)}.site-nav-drawer__list.is-in li{opacity:1;transform:none}.site-nav-drawer__link{text-align:start;--tw-text-opacity:1;width:100%;color:rgb(31 41 55/var(--tw-text-opacity,1));justify-content:space-between;align-items:center;gap:.75rem;padding-top:.875rem;padding-bottom:.875rem;font-size:1rem;font-weight:500;line-height:1.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.site-nav-drawer__link:where([dir=ltr],[dir=ltr] *){text-align:left}.site-nav-drawer__link:where([dir=rtl],[dir=rtl] *){text-align:right}.site-nav-drawer__link:hover{color:var(--color-primary)}.site-nav-drawer__link.is-active{color:var(--color-primary);text-underline-offset:4px;font-weight:600;text-decoration-line:underline;text-decoration-thickness:1px}.site-nav-drawer__link.is-active .site-nav-drawer__chevron{color:var(--color-primary)}.site-nav-drawer__label{align-items:center;gap:.75rem;min-width:0;display:flex}.site-nav-drawer__link-img{-o-object-fit:cover;object-fit:cover;border-radius:9999px;flex-shrink:0;width:2.5rem;max-width:none;height:2.5rem;display:block}.site-nav-drawer__link-img-placeholder{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:2.5rem;max-width:none;height:2.5rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;display:flex}.site-nav-drawer__link-img-icon{width:1.25rem;height:1.25rem}.site-nav-drawer__chevron{--tw-text-opacity:1;width:1rem;height:1rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}[dir=rtl] .site-nav-drawer__chevron{transform:scaleX(-1)}.site-nav-drawer__back{--tw-text-opacity:1;height:2.25rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;margin-inline-start:-.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex;overflow:hidden}.site-nav-drawer__back:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.site-nav-drawer__back{opacity:0;pointer-events:none;width:0;margin-inline-end:0;transition:width .28s cubic-bezier(.4,0,.2,1),margin .28s cubic-bezier(.4,0,.2,1),opacity .2s,background-color .2s,color .2s}.site-nav-drawer__back.is-visible{opacity:1;pointer-events:auto;width:2.25rem;margin-inline-end:.5rem}.site-nav-drawer__back svg{flex-shrink:0;width:1.25rem;height:1.25rem}[dir=rtl] .site-nav-drawer__back svg{transform:scaleX(-1)}.site-nav-drawer__browse-all{color:var(--color-primary);padding-top:.75rem;padding-bottom:.75rem;font-size:.875rem;font-weight:600;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:block}.site-nav-drawer__browse-all:hover{opacity:.8}.site-nav-drawer__foot{-moz-column-gap:.75rem;opacity:0;flex-wrap:wrap;flex-shrink:0;justify-content:center;align-items:center;gap:.25rem .75rem;padding:.875rem 1rem;transition:opacity .3s,transform .3s cubic-bezier(.4,0,.2,1);display:flex;transform:translateY(10px)}.site-nav-drawer__foot.is-in{opacity:1;transition-delay:.42s;transform:none}.site-nav-drawer__loc{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));align-items:center;gap:.375rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-nav-drawer__loc:hover{color:var(--color-primary)}.site-nav-drawer__loc-icon{--tw-text-opacity:1;width:18px;height:18px;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}.site-nav-drawer__loc-caret{--tw-text-opacity:1;width:1rem;height:1rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}.site-nav-drawer__foot-sep{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));flex-shrink:0;width:1px;height:1rem}.s-cart-summary-total{display:none}.s-cart-summary-count{--tw-translate-x:-50%;width:1rem;height:1rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(185 28 28/var(--tw-bg-opacity,1));padding:0;font-size:10px;line-height:1;bottom:-.375rem;left:50%;right:auto;top:auto!important}.site-header__sticky-sentinel{height:0}.site-header__topnav{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));font-size:.75rem;line-height:1rem;display:none}@media (width>=1024px){.site-header__topnav{display:block}}.site-header__topnav-inner{justify-content:space-between;align-items:center;gap:1.5rem;min-height:40px;display:flex}.site-header__topnav-menu{min-width:0}.site-header__topnav-menu .s-menu-topnav-list{flex-wrap:wrap;align-items:center;row-gap:.25rem;display:flex}.site-header__topnav-menu a{white-space:nowrap;--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.site-header__topnav-menu a:hover{color:var(--color-primary)}.site-header__topnav-menu .s-menu-topnav-item{padding-left:.75rem;padding-right:.75rem}.site-header__topnav-menu .s-menu-topnav-item:first-child{padding-inline-start:0}.site-header__topnav-menu .s-menu-topnav-item:last-child{padding-inline-end:0}.site-header__topnav-inner .s-skeleton-menu-columns{align-items:center;display:flex}.site-header__topnav-inner .s-skeleton-menu-columns .s-skeleton-wrapper{width:16rem!important;height:.75rem!important}.site-header__topnav-inner .s-skeleton-menu-columns .s-skeleton-wrapper:not(:first-child){display:none}.site-header__topnav-actions{flex-shrink:0;align-items:center;gap:.25rem;display:flex}.site-header__topnav-action{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1));border-radius:9999px;align-items:center;gap:.375rem;padding:.25rem .5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-header__topnav-action:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));color:var(--color-primary)}.site-header__topnav-action+.site-header__topnav-action{position:relative}.site-header__topnav-action+.site-header__topnav-action:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));top:.375rem;bottom:.375rem;width:1px;position:absolute;inset-inline-start:-2px}.site-header__topnav-contacts{align-items:center;gap:.25rem;padding-inline-start:.25rem;display:flex;position:relative}.site-header__topnav-action+.site-header__topnav-contacts:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));top:.375rem;bottom:.375rem;width:1px;position:absolute;inset-inline-start:-2px}.site-header__topnav-contact{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1));border-radius:9999px;align-items:center;gap:.375rem;padding:.25rem .5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-header__topnav-contact:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));color:var(--color-primary)}.site-header__topnav-action-label{text-overflow:ellipsis;white-space:nowrap;max-width:10rem;font-weight:500;overflow:hidden}.site-header__topnav-icon{--tw-text-opacity:1;width:1rem;height:1rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}.site-header__topnav-caret{--tw-text-opacity:1;width:.75rem;height:.75rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}body.topnav-is-dark .site-header__topnav{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1));border-color:#d1d5db1a}body.topnav-is-dark .site-header__topnav .site-header__topnav-menu a,body.topnav-is-dark .site-header__topnav .site-header__topnav-action,body.topnav-is-dark .site-header__topnav .site-header__topnav-contact,body.topnav-is-dark .site-header__topnav .site-header__topnav-icon,body.topnav-is-dark .site-header__topnav .site-header__topnav-caret{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}body.topnav-is-dark .site-header__topnav .site-header__topnav-menu a:hover,body.topnav-is-dark .site-header__topnav .site-header__topnav-action:hover,body.topnav-is-dark .site-header__topnav .site-header__topnav-contact:hover{opacity:.8}body.topnav-is-dark .site-header__topnav .site-header__topnav-action:hover,body.topnav-is-dark .site-header__topnav .site-header__topnav-contact:hover{background-color:#f3f4f626}body.topnav-is-dark .site-header__topnav .site-header__topnav-action+.site-header__topnav-action:before,body.topnav-is-dark .site-header__topnav .site-header__topnav-action+.site-header__topnav-contacts:before{background-color:#d1d5db1a}body.topnav-is-dark .site-header--lite .site-header__bar{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1))}body.topnav-is-dark .site-header--lite .site-header__bar.is-scrolled{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1));border-color:#d1d5db1a}body.topnav-is-dark .site-header--lite .site-header__bar .header-action,body.topnav-is-dark .site-header--lite .site-header__bar .s-cart-summary-wrapper{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}body.topnav-is-dark .site-header--lite .site-header__bar .header-action:hover,body.topnav-is-dark .site-header--lite .site-header__bar .s-cart-summary-wrapper:hover{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1));opacity:.8;background-color:#f3f4f626}@media (width>=1024px){.site-header--default .site-header__nav-toggle{display:none}.site-header--default .site-header__bar-inner{grid-template-columns:auto minmax(0,1fr) auto;gap:2rem;position:relative}.site-header--default .site-header__brand{justify-self:start}.site-header--default .site-header__intro{display:none}.site-header--default .site-header__mainmenu{align-self:stretch;align-items:stretch;min-width:0;display:flex}.site-header--default .site-header__mainmenu .main-menu{-moz-column-gap:.125rem;flex-wrap:wrap;justify-content:center;align-items:stretch;column-gap:.125rem;width:100%;min-width:0;display:flex;margin:0!important;padding:0!important}.site-header--default .site-header__mainmenu .s-menu-root-level{align-items:center;margin-top:0;margin-bottom:0;position:relative;display:flex!important}.site-header--default .site-header__mainmenu .s-menu-root-level>a{white-space:nowrap;--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:16px;align-items:center;gap:.25rem;padding:.5rem .75rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-header--default .site-header__mainmenu .s-menu-root-level>a:hover{color:var(--color-primary)}.site-header--default .site-header__mainmenu .s-menu-non-root-level{margin-top:0;margin-bottom:0;display:block;position:relative}.site-header--default .site-header__mainmenu .s-menu-sub-menu ul{margin:0;padding:0;list-style-type:none}.site-header--default .site-header__mainmenu .s-menu-sub-menu a{white-space:nowrap;--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:16px;justify-content:space-between;align-items:center;gap:.5rem;padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.site-header--default .site-header__mainmenu .s-menu-sub-menu a:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));color:var(--color-primary)}.site-header--default .site-header__mainmenu .s-menu-sub-menu{visibility:hidden;z-index:40;--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));opacity:0;--tw-shadow:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);max-width:90vw;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);top:100%;border-radius:16px;min-width:14rem;max-height:none;padding:.375rem;transition:opacity .18s,transform .18s,visibility .18s;position:absolute;inset-inline-start:0;overflow:visible;transform:translateY(4px)}.site-header--default .site-header__mainmenu .s-menu-root-level>.s-menu-sub-menu{translate:var(--panel-shift,0) 0;border-top-left-radius:0;border-top-right-radius:0}.site-header--default .site-header__mainmenu .s-menu-sub-menu>ul.s-menu-columns{grid-template-columns:repeat(var(--menu-columns), minmax(12rem, 1fr));-moz-column-gap:.25rem;column-gap:.25rem;display:grid}.site-header--default .site-header__mainmenu .s-menu-sub-menu .s-menu-sub-menu{top:-.375rem;inset-inline:100% auto;transform:translateY(0)}.site-header--default .site-header__mainmenu .s-menu-opens-start>.s-menu-sub-menu{inset-inline:auto 100%}.site-header--default .site-header__mainmenu .s-menu-has-children>.s-menu-sub-menu[data-capped]{min-width:0;max-width:var(--panel-max)}.site-header--default .site-header__mainmenu .s-menu-has-children:hover>.s-menu-sub-menu,.site-header--default .site-header__mainmenu .s-menu-has-children:focus-within>.s-menu-sub-menu{visibility:visible;opacity:1;transform:translateY(0)}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-mega-menu{position:static}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu{gap:1rem;min-width:min(48rem,90vw);display:flex}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-mega-menu>.s-menu-sub-menu{top:100%;width:auto;min-width:0;max-width:none;inset-inline:0}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu>ul{flex-shrink:0;width:14rem}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu>ul.s-menu-columns{width:auto}.site-header--default .site-header__mainmenu .s-menu-products-wrapper{overscroll-behavior:contain;flex:1;min-width:0;overflow-y:auto}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu.is-stacked{flex-direction:column}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu.is-stacked>ul.s-menu-columns{width:100%}.site-header--default .site-header__mainmenu .s-menu-products-wrapper .s-products-list-vertical-cards{grid-template-columns:repeat(4,minmax(0,1fr))}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-mega-menu>.s-menu-sub-menu{gap:1.5rem;padding:1.5rem}.site-header--default .site-header__mainmenu .site-header__oneline-menu{justify-content:center;align-items:stretch;width:100%;min-width:0;display:flex}.site-header--default .site-header__mainmenu .site-header__oneline-menu .main-menu{flex-wrap:nowrap}.site-header--default .site-header__mainmenu .site-header__oneline-menu .s-menu-root-level,.site-header--default .site-header__mainmenu .site-header__oneline-menu .s-menu-root-level>a{white-space:nowrap;flex-shrink:0}.site-header--default .site-header__mainmenu .site-header__oneline-menu.is-measuring{overflow:hidden}.site-header--default .site-header__mainmenu .site-header__more-probe{pointer-events:none;visibility:hidden;top:0;position:absolute;inset-inline-start:0}.site-header--default .site-header__mainmenu [data-more-menu]>.s-menu-sub-menu{inset-inline:auto 0}.site-header--default .site-header__mainmenu .s-menu-has-children>a:after{content:\"\";opacity:.5;margin-inline-start:.25rem;font-family:sallaicons;font-size:1rem;line-height:1;transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block}.site-header--default .site-header__mainmenu .s-menu-non-root-level.s-menu-has-children>a:where([dir=ltr] *):after{transform:scaleX(-1)}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-has-children>a:after{content:\"\"}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-has-children:hover>a:after{opacity:1;transform:scaleY(-1)}}.site-header__mainmenu,salla-social a[title=snapchat] svg{display:none}salla-social a[title=snapchat] .s-social-icon{width:1.25rem;height:1.25rem;display:inline-block;-webkit-mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27><path d=%27M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118m-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118%27/></svg>\");mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27><path d=%27M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118m-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118%27/></svg>\");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;background-color:currentColor!important}.mobile-bottom-bar{--mbb-badge-bg:#b3261e;--mbb-badge-text:#fff;--mbb-muted:color-mix(in srgb, var(--color-text,#7c8082) 55%, #000 45%);z-index:220;justify-content:center;display:flex;position:fixed;bottom:0;left:0;right:0}@media (width>=768px){.mobile-bottom-bar{display:none}}.mobile-bottom-bar{padding:0 16px calc(12px + var(--safe-bottom));pointer-events:none}.mobile-bottom-bar-scrim{z-index:219;position:fixed;bottom:0;left:0;right:0}@media (width>=768px){.mobile-bottom-bar-scrim{display:none}}.mobile-bottom-bar-scrim{height:calc(72px + var(--safe-bottom));pointer-events:none;-webkit-backdrop-filter:blur(22px)saturate(180%)brightness(1.06);background:linear-gradient(#fff0 0%,#ffffff85 58%,#ffffffb8 100%);-webkit-mask-image:linear-gradient(#0000 0%,#000 68%);mask-image:linear-gradient(#0000 0%,#000 68%)}.mobile-bottom-bar__inner{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));pointer-events:auto ;border-radius:9999px;justify-content:space-between;align-items:center;gap:.25rem;width:100%;max-width:28rem;height:52px;padding:0 8px;display:flex;box-shadow:0 8px 30px #0000001f}.mobile-bottom-bar__item{min-width:40px;height:36px;color:var(--mbb-muted);font:inherit;cursor:pointer;background:0 0;border:0;border-radius:9999px;flex:none;justify-content:center;align-items:center;gap:0;padding:0 6px;text-decoration-line:none;transition:color .32s cubic-bezier(.22,1,.36,1),background-color .32s cubic-bezier(.22,1,.36,1),padding .32s cubic-bezier(.22,1,.36,1);display:inline-flex;position:relative}.mobile-bottom-bar__item.is-active{background:var(--color-primary,#9ca3af);color:var(--color-primary-reverse,#fff);padding:0 10px}.mobile-bottom-bar__icon{flex:none;justify-content:center;align-items:center;width:24px;height:24px;display:flex;position:relative}.mobile-bottom-bar svg{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px}.mobile-bottom-bar__icon .sicon-ellipsis{font-size:22px;line-height:1}.mobile-bottom-bar__label{white-space:nowrap;opacity:0;max-width:0;margin-inline-start:0;font-size:14px;font-weight:600;line-height:1;transition:max-width .6s cubic-bezier(.22,1,.36,1),margin-inline-start .6s cubic-bezier(.22,1,.36,1),opacity .14s,transform .6s;display:block;overflow:hidden;transform:translate(4px)}.mobile-bottom-bar__item.is-active .mobile-bottom-bar__label{opacity:1;max-width:6.5rem;margin-inline-start:8px;transition:max-width .6s cubic-bezier(.22,1,.36,1),margin-inline-start .6s cubic-bezier(.22,1,.36,1),opacity .22s .1s,transform .22s cubic-bezier(.22,1,.36,1) .1s;transform:none}.mobile-bottom-bar__badge{background:var(--mbb-badge-bg);min-width:16px;height:16px;color:var(--mbb-badge-text);border:2px solid #fff;border-radius:9999px;justify-content:center;align-items:center;padding:0 3px;font-size:10px;font-weight:700;line-height:1;animation:.28s mbb-badge-pop;display:flex;position:absolute;bottom:-6px;left:50%;transform:translate(-50%)}.mobile-bottom-bar__item.is-active .mobile-bottom-bar__badge{border-color:var(--color-primary,#9ca3af)}@keyframes mbb-badge-pop{0%{opacity:0;transform:translate(-50%)scale(.4)}to{opacity:1;transform:translate(-50%)scale(1)}}@media (prefers-reduced-motion:reduce){.mobile-bottom-bar__item,.mobile-bottom-bar__label{transition:none}.mobile-bottom-bar__label{transform:none}.mobile-bottom-bar__badge{animation:none}}@media (width<=767px){.app-inner{padding-bottom:calc(76px + var(--flow-safe-bottom))}body.product-single.is-sticky-product-bar{padding-bottom:calc(188px + var(--safe-bottom))!important}body.product-single .sticky-product-bar{bottom:calc(76px + var(--safe-bottom))!important}}.mobile-page-title{z-index:30;--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));align-items:center;gap:.25rem;height:3rem;padding-left:.5rem;padding-right:.5rem;display:flex;position:sticky}@media (width>=768px){.mobile-page-title{display:none}}.mobile-page-title{top:var(--app-safe-area-top,0px)}.mobile-page-title__back{--tw-text-opacity:1;width:2.25rem;height:2.25rem;color:rgb(55 65 81/var(--tw-text-opacity,1)) ;border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;margin-inline-start:-.25rem;display:inline-flex}.mobile-page-title__back svg{width:1.25rem;height:1.25rem}.mobile-page-title__back svg:where([dir=ltr],[dir=ltr] *){--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mobile-page-title__text{text-overflow:ellipsis;white-space:nowrap;--tw-text-opacity:1;min-width:0;color:rgb(17 24 39/var(--tw-text-opacity,1));margin:0;font-size:1rem;font-weight:700;line-height:1.5rem;overflow:hidden}body.product-single .mobile-page-title{display:none}@media (width<=767px){#page-main-title{display:none}body:has(.profile-header) .main-content>h1{display:none}}.s-block__title{justify-content:space-between;align-items:center;margin-bottom:1rem;display:flex}@media (width>=768px){.s-block__title{margin-bottom:2rem}}.s-block__title .right-side:where([dir=ltr],[dir=ltr] *){padding-right:2rem}.s-block__title .right-side:where([dir=rtl],[dir=rtl] *){padding-left:2rem}.s-block__title h2{font-size:1.125rem;font-weight:700;line-height:1.2;position:relative}.s-block__title p{-webkit-line-clamp:1;opacity:.6;-webkit-box-orient:vertical;margin-top:.5rem;font-size:.875rem;line-height:1.25rem;display:-webkit-box;overflow:hidden}@media (width>=640px){.s-block__title p{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media (width>=768px){.s-block__title p:where([dir=ltr],[dir=ltr] *){padding-right:4rem}.s-block__title p:where([dir=rtl],[dir=rtl] *){padding-left:4rem}}.s-block__title-nav{display:none}.s-block__title-nav>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.625rem * var(--tw-space-x-reverse));margin-left:calc(.625rem * calc(1 - var(--tw-space-x-reverse)))}@media (width>=640px){.s-block__title-nav{display:flex}}.s-block__title-nav:where([dir=ltr],[dir=ltr] *){flex-direction:row-reverse;margin-left:1.5rem}.s-block__title-nav:where([dir=rtl],[dir=rtl] *){margin-right:1.5rem}.s-block__title-nav:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.s-block__display-all{opacity:.8;align-items:center;gap:.5rem;font-size:.875rem;font-weight:700;line-height:1.25rem;display:inline-flex}.s-block__display-all:hover{opacity:1}.s-block__display-all i{display:inline-block}.s-block__display-all i:where([dir=ltr],[dir=ltr] *){--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s-block--hero-slider .swiper-slide,.s-block--enhanced-slider .swiper-slide{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1));aspect-ratio:1/.5;position:relative}@media (width>=640px){.s-block--hero-slider .swiper-slide,.s-block--enhanced-slider .swiper-slide{aspect-ratio:12/5}}@media (width>=1024px){.s-block--hero-slider .swiper-slide,.s-block--enhanced-slider .swiper-slide{aspect-ratio:12/5.5}}@media (width>=1280px){.s-block--hero-slider .swiper-slide,.s-block--enhanced-slider .swiper-slide{aspect-ratio:12/5.5}}.s-block--hero-slider .swiper-slide .swiper-lazy:after,.s-block--enhanced-slider .swiper-slide .swiper-lazy:after{--tw-content:\"\";content:var(--tw-content);background-color:#0009;width:100%;height:100%;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:absolute;top:0}.s-block--hero-slider .swiper-slide .overlay-bg:after,.s-block--enhanced-slider .swiper-slide .overlay-bg:after{--tw-content:\"\";content:var(--tw-content);background-color:#0009;width:100%;height:100%;position:absolute;top:0}:is(.s-block--enhanced-slider:has(.s-skeleton-slider),.s-block--main-links:has(.s-skeleton-slider),.s-block--square-links:has(.s-skeleton-slider)){min-height:0!important}:is(.s-block--enhanced-slider:has(.s-skeleton-slider) .s-skeleton-thumbs-centered,.s-block--enhanced-slider:has(.s-skeleton-slider) .s-skeleton-slider-thumbs,.s-block--main-links:has(.s-skeleton-slider) .s-skeleton-thumbs-centered,.s-block--main-links:has(.s-skeleton-slider) .s-skeleton-slider-thumbs,.s-block--square-links:has(.s-skeleton-slider) .s-skeleton-thumbs-centered,.s-block--square-links:has(.s-skeleton-slider) .s-skeleton-slider-thumbs){display:none}.s-block--enhanced-slider .s-skeleton-slider-image{aspect-ratio:4/3;height:auto!important}@media (width>=640px){.s-block--enhanced-slider .s-skeleton-slider-image{aspect-ratio:12/5}}.s-block--enhanced-slider-boxed .s-skeleton-slider-image{width:calc(100% - 20px);max-width:1260px;margin-inline:auto}.s-block--main-links .s-skeleton-slider-image{height:112px!important}@media (width>=768px){.s-block--main-links .s-skeleton-slider-image{height:128px!important}}.s-block--square-links .s-skeleton-slider-image{height:144px!important}.enhanced-slider{position:relative}.enhanced-slider__poster{inset-inline:0;z-index:3;position:absolute;top:0}@media screen and (width>=768px){.banner:hover .banner__title{animation:.9s toTopFromBottom}.banner:hover .banner__description{animation:.3s delayKeyframe,.9s .3s toTopFromBottom}}.banner--fixed img{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));-o-object-fit:cover;object-fit:cover;border-style:none;border-radius:16px;width:100%;display:block}.banner-entry{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;height:200px;min-height:200px;color:rgb(255 255 255/var(--tw-text-opacity,1));border-radius:16px;padding:.75rem;position:relative;overflow:hidden;background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important}@media (width>=480px){.banner-entry{padding:1rem}}.banner-entry article{flex-direction:column;justify-content:center;align-items:center;height:100%;padding:.625rem;display:flex}.banner-entry.square-photos h3{height:100%;padding-left:.75rem;padding-right:.75rem}.banner-entry h3{flex-direction:column;justify-content:center;display:flex}@media (width>=480px){.banner-entry h3{padding-left:.25rem;padding-right:.25rem}}.banner-entry h3.text-with-border{--tw-border-opacity:1;border-style:dashed;border-color:rgb(229 231 235/var(--tw-border-opacity,1));border-radius:16px}@media (width>=480px){.banner-entry h3.text-with-border{border-width:1px}}.banner-entry h3.text-with-border span{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.banner-entry p{-webkit-line-clamp:2;opacity:.8;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.banner-entry h3,.banner-entry p{z-index:1;transition-property:all;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:relative}@media (width>=1024px){.banner-entry h3,.banner-entry p{--tw-translate-y:1.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}}.banner-entry:hover h3{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.banner-entry:hover p{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:.8}.two-row .banner-entry:first-child{padding:1.25rem}@media (width>=640px){.two-row .banner-entry:first-child{grid-area:span 2/span 1/span 2/span 1}}@media (width>=768px){.two-row .banner-entry:first-child{height:100%}}.two-row .banner-entry:first-child>a{opacity:1}.two-row .banner-entry:first-child h3{font-size:1.5rem;line-height:3rem}.has-overlay:after{--tw-content:\"\";content:var(--tw-content);background-color:#0009;width:100%;height:100%;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:absolute;top:0;left:0}.has-overlay.with-hover:after{opacity:0;transition:opacity .3s}.has-overlay.with-hover:hover:after{opacity:1}.has-overlay:hover:after{background-color:#000000b3}.full-banner-entry{--tw-bg-opacity:1;background-color:rgb(231 229 228/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));background-position:50%;background-size:cover;background-attachment:fixed;grid-row:span 2/span 2;padding:1.25rem;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}:is(.s-block--enhanced-slider .full-banner-entry:has(>.enhanced-slider__video),.s-block--photos-slider-with-text .full-banner-entry:has(>.enhanced-slider__video)){overflow:hidden;container-type:size}.full-banner-entry:hover{opacity:.95}.full-banner-entry{aspect-ratio:12/5;background-attachment:initial;min-height:320px}.full-banner-entry:after,.full-banner-entry:before{content:\"\";background:var(--color-primary);opacity:.25;width:100%;height:100%;transition:all .3s ease-in-out;position:absolute;top:0;right:-93%;transform:rotate(220deg)translateY(-50%)translate(33%)}.full-banner-entry:before{background:#fff;right:auto;transform:rotate(220deg)translateY(-40%)translate(0)}[dir=ltr] .full-banner-entry:before{left:-52%}@media (width<=1330px){.full-banner-entry:after{top:-50%}}@media (width<=480px){.full-banner-entry:before{top:20%}.full-banner-entry:after{top:-80%}}.tabs-wrapper .tabs__item{transition-property:all;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:none}.tabs-wrapper .tabs__item.is-active{display:block}.s-block--tabs-produtcs .tabs{margin-left:-.625rem;margin-right:-.625rem}.s-block--tabs-produtcs .tabs>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.25rem * var(--tw-space-x-reverse));margin-left:calc(.25rem * calc(1 - var(--tw-space-x-reverse)))}.s-block--tabs-produtcs .tabs{white-space:nowrap;text-align:center;padding-bottom:1.5rem;padding-left:1.25rem;padding-right:1.25rem;overflow-x:auto}@media (width>=640px){.s-block--tabs-produtcs .tabs{margin-left:-1.25rem;margin-right:-1.25rem;padding-bottom:2.5rem}}@media (width>=768px){.s-block--tabs-produtcs .tabs>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}}@media (width>=1024px){.s-block--tabs-produtcs .tabs{margin-left:0;margin-right:0}}.s-block--tabs-produtcs .tabs:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.s-block--tabs-produtcs .tab-trigger{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.s-block--tabs-produtcs .tab-trigger.is-active button{border-color:var(--color-primary-dark);background-color:var(--color-primary-dark);color:var(--color-primary-reverse)}.s-block--special-products .tabs{margin-bottom:1rem}.s-block--special-products .tabs>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.s-block--special-products .tabs{white-space:nowrap;overflow-x:auto}@media (width>=640px){.s-block--special-products .tabs{margin-bottom:0}}@media (width>=768px){.s-block--special-products .tabs>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}}.s-block--special-products .tabs:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.s-block--special-products .tabs__item{flex:1;gap:.625rem}@media (width>=640px){.s-block--special-products .tabs__item{gap:2rem}}.s-block--special-products .tabs__item.is-active{display:grid}.s-block--special-products .tab-trigger{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1));font-weight:700;line-height:1.75rem}.s-block--special-products .tab-trigger.is-active button{border-color:var(--color-primary-dark);color:var(--color-primary-dark)}.s-block--tabs-produtcs:not(.tabs-initialized) .tabs-wrapper>div:not(:first-child),.s-block--special-products:not(.tabs-initialized) .tabs-wrapper>div:not(:first-child){display:none}.s-block--featured-products .tabs{white-space:nowrap;justify-content:center;align-items:center;gap:.5rem;height:76px;margin-bottom:1.5rem;padding-left:1rem;padding-right:1rem;display:flex;overflow-x:auto}@media (width>=1024px){.s-block--featured-products .tabs{margin-bottom:3rem}}.s-block--featured-products .tabs{background-color:color-mix(in srgb, var(--color-primary) 10%, transparent);width:100vw;margin-inline:calc(50% - 50vw)}.s-block--featured-products .tab-trigger{--tw-text-opacity:1;height:2.75rem;color:rgb(55 65 81/var(--tw-text-opacity,1));background-color:#0000;border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;padding-left:1.25rem;padding-right:1.25rem;font-size:.875rem;font-weight:600;line-height:1;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.s-block--featured-products .tab-trigger .s-button-text{line-height:1.6}.s-block--featured-products .tab-trigger:hover,.s-block--featured-products .tab-trigger.is-active{background-color:var(--color-primary);color:var(--color-primary-reverse);opacity:1}@media (width>=768px){.s-block--featured-products .s-products-list-wrapper.s-products-list-vertical-cards{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=1024px){.s-block--featured-products .s-products-list-wrapper.s-products-list-vertical-cards{grid-template-columns:repeat(5,minmax(0,1fr));gap:1.5rem}}.s-block--featured-products .featured-products__header{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1.5rem;display:flex}@media (width>=1024px){.s-block--featured-products .featured-products__header{margin-bottom:2rem}}.s-block--featured-products .featured-products__header .s-block__title{margin:0}.s-block--featured-products .tabs.tabs--inline{background-color:#0000;justify-content:flex-end;width:auto;height:auto;margin:0;padding-left:0;padding-right:0}.s-block--featured-products .tabs.tabs--inline .tab-trigger{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));height:2.25rem;padding-left:1rem;padding-right:1rem}.s-block--featured-products .tabs.tabs--inline .tab-trigger:hover,.s-block--featured-products .tabs.tabs--inline .tab-trigger.is-active{border-color:var(--color-primary)}.s-block--featured-products .featured-products__layout.has-special{align-items:start}.s-block--featured-products .featured-products__layout.has-special .s-products-list-wrapper.s-products-list-vertical-cards{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}@media (width>=1024px){.s-block--featured-products .featured-products__layout.has-special .s-products-list-wrapper.s-products-list-vertical-cards{gap:1.5rem}.s-block--featured-products .featured-products__layout.has-special .s-product-card-special .s-product-card-image{aspect-ratio:4/5;flex:none;min-height:0}}.s-block--featured-products .featured-products__column .s-block__title{margin-bottom:1rem}.s-block--featured-products .featured-products__column-body{align-items:stretch}.s-block--featured-products .featured-products__column-body .s-products-list-wrapper.s-products-list-horizontal-cards{grid-template-columns:minmax(0,1fr);gap:1rem}.s-block--featured-products .featured-products__column-body .s-products-list-wrapper{margin-bottom:0}.s-block--featured-products .featured-products__column-body .s-product-card-horizontal .s-product-card-image{align-self:center;width:6rem}@media (width>=640px){.s-block--featured-products .featured-products__column-body .s-product-card-horizontal .s-product-card-image{width:7rem}}.s-block--featured-products .featured-products__column-body .s-product-card-horizontal .s-product-card-image{aspect-ratio:1;height:auto}.s-block--featured-products .featured-products__column-body .s-product-card-horizontal .s-product-card-content{flex:1;min-width:0}.s-block--featured-products .featured-products__column-body .s-products-list-wrapper.featured-products__column-grid{grid-template-columns:minmax(0,1fr);gap:1rem}@media (width>=640px){.s-block--featured-products .featured-products__column-body .s-products-list-wrapper.featured-products__column-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.s-block--featured-products .featured-products__column-body .s-products-list-wrapper.featured-products__column-grid .s-product-card-special{grid-area:1/1/span 3}.s-block--featured-products .featured-products__column-body .s-products-list-wrapper.featured-products__column-grid .s-product-card-horizontal{grid-column:2}}@media (width>=1024px){.s-block--featured-products .featured-products__column{flex-direction:column;display:flex}.s-block--featured-products .featured-products__column-body{flex:auto}.s-block--featured-products .featured-products__column-body>.s-products-list{flex-direction:column;display:flex}.s-block--featured-products .featured-products__column-body .s-products-list-wrapper.s-products-list-horizontal-cards{flex:auto;grid-template-rows:repeat(3,1fr)}.s-block--featured-products .featured-products__column-body .s-product-card-horizontal{height:100%}}.s-block--featured-products .featured-products__special>*,.s-block--featured-products .featured-products__special .featured-products__special-list{flex-direction:column;flex:auto;min-height:0;display:flex}.s-block--featured-products .featured-products__special .featured-products__special-list>div{display:contents}.s-block--featured-products .s-product-card-special{background-color:#fff;border-radius:.75rem;flex-direction:column;flex:auto;width:100%;height:100%;display:flex;overflow:hidden}.s-block--featured-products .s-product-card-special .s-product-card-image{aspect-ratio:1;flex:auto;width:100%;height:auto}@media (width>=1024px){.s-block--featured-products .s-product-card-special .s-product-card-image{aspect-ratio:auto;min-height:16rem}}.s-block--featured-products .s-product-card-special .s-product-card-image>a,.s-block--featured-products .s-product-card-special .s-product-card-image picture{width:100%;height:100%;display:block;aspect-ratio:auto!important}.s-block--featured-products .s-product-card-special .s-product-card-image>a>div:has(>img){width:100%;height:100%;display:block;aspect-ratio:auto!important}.s-block--featured-products .s-product-card-special .s-product-card-image img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%;position:absolute;inset:0}.s-block--featured-products .s-product-card-special .s-product-card-content{flex:none;width:100%;height:auto;padding:1rem 1.25rem 1.25rem}.s-block--featured-products .s-product-card-special .s-product-card-content-title{font-size:1.125rem;line-height:1.75rem}.s-block--features-products.two-cols .inner{gap:1.25rem;display:grid}@media (width>=1024px){.s-block--features-products.two-cols .inner{grid-template-columns:repeat(2,minmax(0,1fr))}}.s-block--slider-with-bg,.s-block--slider-products-with-header{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));margin-top:2rem;padding-bottom:2rem}.s-block--slider-with-bg:first-of-type,.s-block--slider-products-with-header:first-of-type{margin-top:0}@media (width>=640px){.s-block--slider-with-bg,.s-block--slider-products-with-header{margin-top:4rem;padding-bottom:4rem}}.s-block--slider-with-bg .slider-bg,.s-block--slider-products-with-header .slider-bg{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));background-position:50%;background-size:cover;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:relative}:is(.s-block--enhanced-slider .s-block--slider-with-bg .slider-bg:has(>.enhanced-slider__video),.s-block--photos-slider-with-text .s-block--slider-with-bg .slider-bg:has(>.enhanced-slider__video),.s-block--enhanced-slider .s-block--slider-products-with-header .slider-bg:has(>.enhanced-slider__video),.s-block--photos-slider-with-text .s-block--slider-products-with-header .slider-bg:has(>.enhanced-slider__video)){overflow:hidden;container-type:size}.s-block--slider-with-bg .slider-bg,.s-block--slider-products-with-header .slider-bg{aspect-ratio:12/5;min-height:384px}.s-block--slider-with-bg .slider-bg:before,.s-block--slider-products-with-header .slider-bg:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity,1));opacity:.6;width:100%;height:100%;position:absolute;top:0;left:0}.s-block--slider-with-bg .s-slider-block__title-right,.s-block--slider-products-with-header .s-slider-block__title-right{display:none}.s-block--slider-with-bg .s-slider-block__title-left,.s-block--slider-products-with-header .s-slider-block__title-left{justify-content:space-between;width:100%;display:flex}.s-block--slider-with-bg .s-slider-block__display-all,.s-block--slider-products-with-header .s-slider-block__display-all{white-space:nowrap;border-radius:16px;flex:1;justify-content:center;align-items:center;padding:.5rem 1.5rem .625rem;font-size:.875rem;font-weight:700;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.s-block--slider-with-bg .s-slider-block__display-all:hover,.s-block--slider-products-with-header .s-slider-block__display-all:hover{opacity:.8}.s-block--slider-with-bg .s-slider-block__display-all .loader,.s-block--slider-products-with-header .s-slider-block__display-all .loader{opacity:0;width:0;height:16px;transition:all .3s;transform:scale(0)}.s-block--slider-with-bg .s-slider-block__display-all.btn:disabled,.s-block--slider-products-with-header .s-slider-block__display-all.btn:disabled{cursor:default;--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);background-color:#0000}.s-block--slider-with-bg .s-slider-block__display-all.btn:disabled:hover,.s-block--slider-products-with-header .s-slider-block__display-all.btn:disabled:hover{background-color:#0000}.s-block--slider-with-bg .s-slider-block__display-all:disabled .s-button-text,.s-block--slider-products-with-header .s-slider-block__display-all:disabled .s-button-text{opacity:.7}.s-block--slider-with-bg .s-slider-block__display-all,.s-block--slider-products-with-header .s-slider-block__display-all{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-block--slider-with-bg .s-slider-block__display-all:hover,.s-block--slider-products-with-header .s-slider-block__display-all:hover{border-color:var(--color-primary);background-color:var(--color-primary);--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.s-block--slider-with-bg .s-slider-block__display-all.light,.s-block--slider-products-with-header .s-slider-block__display-all.light,.btn--outline.s-block--slider-with-bg .s-slider-block__display-all,.btn--outline .s-block--slider-products-with-header .s-slider-block__display-all{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));background-color:#0000}.s-block--slider-with-bg .s-slider-block__display-all,.s-block--slider-products-with-header .s-slider-block__display-all{border-radius:9999px;--tw-text-opacity:1!important;color:rgb(255 255 255/var(--tw-text-opacity,1))!important;background-color:#0000!important;flex-grow:0!important}.slide--cat-entry{--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;border-radius:16px;flex-direction:column;justify-content:center;align-items:center;height:9rem;padding:.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.slide--cat-entry:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.slide--cat-entry i{color:var(--color-primary);margin-bottom:1rem;font-size:33px;display:inline-block}.slide--cat-entry h2{font-size:.875rem;font-weight:700;line-height:1.25rem}.slide--offer-entry{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;height:9rem;color:rgb(75 85 99/var(--tw-text-opacity,1));border-radius:16px;flex-direction:column;justify-content:space-between;align-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.slide--offer-entry:hover{--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-photos-slider__slide{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));aspect-ratio:3/2;scroll-snap-align:start;border-radius:16px;flex:0 0 88%;display:block;overflow:hidden}@media (width>=640px){.s-photos-slider__slide{flex-basis:70%}}@media (width>=1024px){.s-photos-slider__slide{flex-basis:calc(50% - 1rem)}}.s-photos-slider__slide img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.s-block--photos-slider .scroll-carousel__track{padding-inline:max(1rem,50% - 630px) 1rem;scroll-padding-inline-start:max(1rem,50% - 630px)}.s-block--photos-slider .scroll-carousel__controls{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-block--photos-slider .scroll-carousel__controls{max-width:1280px}}@media (width>=1024px){.s-block--testimonials.s-block--photos-slider .scroll-carousel__controls,.s-block--photos-slider .scroll-carousel__controls.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-block--photos-slider .scroll-carousel__controls,.s-block--photos-slider .scroll-carousel__controls.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-block--photos-slider .scroll-carousel__controls,.s-block--photos-slider .scroll-carousel__controls.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-text-photos-slider__slide{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));border-radius:1rem;flex-shrink:0;display:block;position:relative;overflow:hidden}.s-text-photos-slider__slide:hover{text-decoration-line:none}.s-text-photos-slider__slide{aspect-ratio:4/3;scroll-snap-align:start;flex:0 0 88%;container-type:size}@media (width>=640px){.s-text-photos-slider__slide{aspect-ratio:3/2;flex-basis:70%}}@media (width>=1024px){.s-text-photos-slider__slide{flex-basis:calc(50% - .75rem)}}.s-text-photos-slider__overlay{pointer-events:none;background-color:#0006;position:absolute;inset:0}.s-text-photos-slider__content{text-align:center;flex-direction:column;justify-content:center;align-items:center;height:100%;padding-left:1.5rem;padding-right:1.5rem;display:flex;position:relative}@media (width>=640px){.s-text-photos-slider__content{padding-left:3rem;padding-right:3rem}}@media (width>=1024px){.s-text-photos-slider__content{padding-left:4rem;padding-right:4rem}}.s-text-photos-slider__title{margin-bottom:.75rem;font-size:1.25rem;font-weight:700;line-height:1.25}.s-text-photos-slider__title:last-child{margin-bottom:0}@media (width>=640px){.s-text-photos-slider__title{margin-bottom:1rem;font-size:1.5rem;line-height:2rem}}@media (width>=1024px){.s-text-photos-slider__title{font-size:2rem}}.s-text-photos-slider__description{-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:.875rem;line-height:1.625;display:-webkit-box;overflow:hidden}@media (width>=640px){.s-text-photos-slider__description{font-size:1rem;line-height:1.5rem}}@media (width>=1024px){.s-text-photos-slider__description{-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:1.125rem;line-height:1.75rem;display:-webkit-box;overflow:hidden}}.s-block--photos-slider-with-text .scroll-carousel__track{padding-inline:max(1rem,50% - 630px) 1rem;scroll-padding-inline-start:max(1rem,50% - 630px)}.s-block--photos-slider-with-text .scroll-carousel__controls{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-block--photos-slider-with-text .scroll-carousel__controls{max-width:1280px}}@media (width>=1024px){.s-block--testimonials.s-block--photos-slider-with-text .scroll-carousel__controls,.s-block--photos-slider-with-text .scroll-carousel__controls.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-block--photos-slider-with-text .scroll-carousel__controls,.s-block--photos-slider-with-text .scroll-carousel__controls.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-block--photos-slider-with-text .scroll-carousel__controls,.s-block--photos-slider-with-text .scroll-carousel__controls.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--photos-slider-with-text .home-slider__cta{margin-top:1.25rem}@media (width>=640px){.s-block--photos-slider-with-text .home-slider__cta{margin-top:2rem}}.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel{max-width:1280px}}@media (width>=1024px){.s-block--testimonials.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel,.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel,.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel,.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel .scroll-carousel__track{padding-inline:0;scroll-padding-inline-start:0}.s-block--photos-slider-with-text.s-block--photos-slider-with-text-boxed .scroll-carousel .scroll-carousel__controls{padding-left:0;padding-right:0}.s-block{margin-top:2rem}@media (width>=640px){.s-block{margin-top:4rem}}.s-block:first-of-type{margin-top:1.25rem}.s-block.skeleton-block-hero{min-height:350px}.s-block.skeleton-block-products{min-height:450px}.s-block--full-bg+footer,.s-block--slider-products-with-header+footer,.s-block--enhanced-slider+footer,.s-block--brands+footer,.s-block--parallax-background+footer,.s-block--full-bg+.s-block--full-bg,.s-block--slider-products-with-header+.s-block--full-bg,.s-block--full-bg+.s-block--slider-products-with-header,.s-block--slider-products-with-header+.s-block--slider-products-with-header,.s-block--enhanced-slider+.s-block--full-bg,.s-block--enhanced-slider+.s-block--slider-products-with-header,.s-block--full-bg+.s-block--enhanced-slider,.s-block--slider-products-with-header+.s-block--enhanced-slider,.s-block--enhanced-slider+.s-block--enhanced-slider,.s-block--brands+.s-block--full-bg,.s-block--brands+.s-block--slider-products-with-header,.s-block--brands+.s-block--enhanced-slider,.s-block--full-bg+.s-block--brands,.s-block--slider-products-with-header+.s-block--brands,.s-block--enhanced-slider+.s-block--brands,.s-block--brands+.s-block--brands,.s-block--parallax-background+.s-block--full-bg,.s-block--parallax-background+.s-block--slider-products-with-header,.s-block--parallax-background+.s-block--enhanced-slider,.s-block--parallax-background+.s-block--brands,.s-block--full-bg+.s-block--parallax-background,.s-block--slider-products-with-header+.s-block--parallax-background,.s-block--enhanced-slider+.s-block--parallax-background,.s-block--brands+.s-block--parallax-background,.s-block--parallax-background+.s-block--parallax-background,.s-block--full-bg:first-of-type,.s-block--slider-products-with-header:first-of-type,.s-block--enhanced-slider:first-of-type,.s-block--brands:first-of-type,.s-block--parallax-background:first-of-type{margin-top:0}.s-block--full-bg+.merge-with-top-component,.s-block--slider-products-with-header+.merge-with-top-component,.s-block--enhanced-slider+.merge-with-top-component,.s-block--brands+.merge-with-top-component,.s-block--parallax-background+.merge-with-top-component{z-index:1;margin-top:-7rem}@media (width>=768px){.s-block--full-bg+.merge-with-top-component,.s-block--slider-products-with-header+.merge-with-top-component,.s-block--enhanced-slider+.merge-with-top-component,.s-block--brands+.merge-with-top-component,.s-block--parallax-background+.merge-with-top-component{margin-top:-8rem}}.s-block--full-bg+.merge-with-top-component .s-slider-block__title,.s-block--slider-products-with-header+.merge-with-top-component .s-slider-block__title,.s-block--enhanced-slider+.merge-with-top-component .s-slider-block__title,.s-block--brands+.merge-with-top-component .s-slider-block__title,.s-block--parallax-background+.merge-with-top-component .s-slider-block__title{text-align:center;color:#fff!important}@media (width>=640px){.s-block--full-bg+.merge-with-top-component .s-slider-block__title,.s-block--slider-products-with-header+.merge-with-top-component .s-slider-block__title,.s-block--enhanced-slider+.merge-with-top-component .s-slider-block__title,.s-block--brands+.merge-with-top-component .s-slider-block__title,.s-block--parallax-background+.merge-with-top-component .s-slider-block__title{text-align:start;margin-bottom:1rem}}.s-block--full-bg+.merged-has-no-title,.s-block--slider-products-with-header+.merged-has-no-title,.s-block--enhanced-slider+.merged-has-no-title,.s-block--brands+.merged-has-no-title,.s-block--parallax-background+.merged-has-no-title{margin-top:-4rem}@media (width>=768px){.s-block--full-bg+.merged-has-no-title,.s-block--slider-products-with-header+.merged-has-no-title,.s-block--enhanced-slider+.merged-has-no-title,.s-block--brands+.merged-has-no-title,.s-block--parallax-background+.merged-has-no-title{margin-top:-74px}}@media (width>=640px){.s-block--full-bg+.merged-has-no-title .s-slider-block__title,.s-block--slider-products-with-header+.merged-has-no-title .s-slider-block__title,.s-block--enhanced-slider+.merged-has-no-title .s-slider-block__title,.s-block--brands+.merged-has-no-title .s-slider-block__title,.s-block--parallax-background+.merged-has-no-title .s-slider-block__title{margin-bottom:0}}.s-block--categories,.s-block--square-links,.s-block--main-links{position:relative;overflow:hidden}.s-block--categories__title{z-index:1;min-height:28px;font-size:1rem;font-weight:700;line-height:1.5rem;position:relative}@media (width>=640px){.s-block--categories__title{margin-bottom:1rem;font-size:1.125rem;line-height:1.75rem}}.s-block--features__item{cursor:pointer;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-shadow:0 4px 16px #2b2d340f;--tw-shadow-colored:0 4px 16px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:16px;flex-direction:column;flex-grow:1;align-items:center;padding:2rem 1rem;transition-property:box-shadow;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.s-block--features__item *{pointer-events:none}.s-block--features__item:hover{--tw-shadow:0 6px 20px #2b2d341a;--tw-shadow-colored:0 6px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}@media (width>=768px){.s-block--features__item{padding-left:2rem;padding-right:2rem}}.s-block--features__item:first-child{grid-column:span 2/span 2}@media (width>=768px){.s-block--features__item:first-child{grid-column:span 1/span 1}}.s-block--features__item .feature-icon{background-color:var(--color-primary);border-radius:9999px;justify-content:center;align-items:center;width:4rem;height:4rem;margin-bottom:.75rem;display:flex;overflow:hidden}.s-block--features__item .feature-icon i{color:var(--color-primary-reverse);font-size:1.875rem;line-height:2.25rem}.s-block--features__item h2{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1));margin-bottom:.25rem;font-size:.875rem;font-weight:700;line-height:1.25rem}.s-block--features__item p{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));font-size:.875rem;line-height:1.25rem}.s-block--features__item:hover .feature-icon i{animation:.3s forwards toRightFromLeft}.s-block--features+.s-block--features,.s-block--store-features+.s-block--features,.s-block--features+.s-block--store-features,.s-block--store-features+.s-block--store-features,.s-block--fixed-banner+.s-block--fixed-banner,.s-block--banners+.s-block--banners{margin-top:2em}.s-block--tabs-produtcs+.s-block--tabs-produtcs{padding-top:2em}.s-products-list-wrapper.s-products-list-vertical-cards{grid-template-columns:repeat(5,minmax(0,1fr));gap:1rem}@media (width<=767px){.s-products-list-wrapper.s-products-list-vertical-cards{grid-template-columns:repeat(2,minmax(0,1fr))}}.s-products-list-wrapper.s-products-list-vertical-cards.s-products-list-with-filters{grid-template-columns:repeat(3,minmax(0,1fr))}@media (width<=767px){.s-products-list-wrapper.s-products-list-vertical-cards.s-products-list-with-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width>=1024px){.s-products-list-wrapper.s-products-list-vertical-cards.s-products-list-with-filters{grid-template-columns:repeat(4,minmax(0,1fr))}}.s-block--enhanced-square-banners,.s-block--square-photos,.s-block--store-features,.s-block--testimonial,.s-block--fixed-products,.s-block--products-slider{width:100%;max-width:1280px;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.s-block--products-slider,.s-block--fixed-products,.s-block--testimonial{overflow:hidden}.s-block--square-photos+.s-block--square-photos{margin-top:2em}.s-block--brands{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));padding-top:2rem;padding-bottom:2rem}@media (width>=640px){.s-block--brands{padding-top:3rem;padding-bottom:5rem}}.s-block--enhanced-slider .home-slider__cta,.s-block--photos-slider-with-text .home-slider__cta{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;min-height:2.75rem;color:rgb(17 24 39/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:9999px;justify-content:center;align-items:center;margin-top:1.5rem;padding:.375rem 1.25rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.s-block--enhanced-slider .home-slider__cta:hover,.s-block--photos-slider-with-text .home-slider__cta:hover{--tw-scale-x:1.03;--tw-scale-y:1.03;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));text-decoration-line:none}@media (width>=640px){.s-block--enhanced-slider .home-slider__cta,.s-block--photos-slider-with-text .home-slider__cta{min-height:44px;margin-top:2rem;padding-left:1.5rem;padding-right:1.5rem;font-size:1rem;line-height:1.5rem}}:is(.s-block--enhanced-slider .bg-cover:has(>.enhanced-slider__video),.s-block--photos-slider-with-text .bg-cover:has(>.enhanced-slider__video)){overflow:hidden;container-type:size}.s-block--enhanced-slider .enhanced-slider__video,.s-block--photos-slider-with-text .enhanced-slider__video{pointer-events:none;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;position:absolute;inset:0}.s-block--enhanced-slider .enhanced-slider__video--embed,.s-block--photos-slider-with-text .enhanced-slider__video--embed{border:0;width:max(100cqw,177.78cqh);height:max(100cqh,56.25cqw);transition:opacity .4s;inset:50% auto auto 50%;translate:-50% -50%}.s-block--enhanced-slider .enhanced-slider__video--embed:not([data-state=playing]),.s-block--photos-slider-with-text .enhanced-slider__video--embed:not([data-state=playing]){opacity:0}.s-block--enhanced-slider salla-slider.fullwidth-slider{position:relative}.s-block--enhanced-slider .swiper-slide{aspect-ratio:4/3}@media (width>=640px){.s-block--enhanced-slider .swiper-slide{aspect-ratio:12/5}}.s-block--enhanced-slider salla-slider.in-container{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-block--enhanced-slider salla-slider.in-container{max-width:1280px}}@media (width>=1024px){.s-block--testimonials.s-block--enhanced-slider salla-slider.in-container,.s-block--enhanced-slider salla-slider.in-container.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-block--enhanced-slider salla-slider.in-container,.s-block--enhanced-slider salla-slider.in-container.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-block--enhanced-slider salla-slider.in-container,.s-block--enhanced-slider salla-slider.in-container.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--enhanced-slider salla-slider.in-container .s-slider-container{border-radius:16px;overflow:hidden}.s-block--enhanced-slider .s-slider-block__title{z-index:3!important;background-color:#0000!important;justify-content:center!important;align-items:center!important;max-width:none!important;height:0!important;margin:0!important;padding:0!important;display:flex!important;position:absolute!important;bottom:1.5rem!important;left:0!important;right:0!important}@media (width>=640px){.s-block--enhanced-slider .s-slider-block__title{bottom:2rem!important}}.s-block--enhanced-slider .s-slider-block__title-nav{gap:2.5rem;width:100%;position:relative;top:0!important;left:0!important;transform:none!important}.s-block--enhanced-slider salla-slider:has(.swiper-slide:nth-child(4)) .s-slider-block__title-nav{gap:4rem}.s-block--enhanced-slider salla-slider:has(.swiper-slide:nth-child(6)) .s-slider-block__title-nav{gap:100px}.s-block--enhanced-slider salla-slider:has(.swiper-slide:nth-child(10)) .s-slider-block__title-nav{gap:140px}.s-block--enhanced-slider .s-slider-nav-arrow{z-index:1!important;--tw-text-opacity:1!important;width:3rem!important;height:3rem!important;color:rgb(255 255 255/var(--tw-text-opacity,1))!important;--tw-shadow:0 0 #0000!important;--tw-shadow-colored:0 0 #0000!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)!important;background-color:#0000!important;border-width:0!important;border-radius:9999px!important;flex-shrink:0!important;justify-content:center!important;align-items:center!important;margin:0!important;padding:0!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke!important;transition-duration:.15s!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;display:inline-flex!important}.s-block--enhanced-slider .s-slider-nav-arrow:hover{background-color:#ffffff26!important}.s-block--enhanced-slider .s-slider-nav-arrow .s-slider-button-icon{display:none!important}.s-block--enhanced-slider .s-slider-nav-arrow:before{content:\"\";background-color:currentColor;width:1.5rem;height:1.5rem;display:block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=ltr] .s-block--enhanced-slider .s-slider-nav-arrow:before{transform:scaleX(-1)}.s-block--enhanced-slider .s-slider-prev:before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M9.00005%206C9.00005%206%2015%2010.4189%2015%2012C15%2013.5812%209%2018%209%2018'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M9.00005%206C9.00005%206%2015%2010.4189%2015%2012C15%2013.5812%209%2018%209%2018'/%3E%3C/svg%3E\")}.s-block--enhanced-slider .s-slider-next:before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M15%206C15%206%209.00001%2010.4189%209%2012C8.99999%2013.5812%2015%2018%2015%2018'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M15%206C15%206%209.00001%2010.4189%209%2012C8.99999%2013.5812%2015%2018%2015%2018'/%3E%3C/svg%3E\")}.s-block--enhanced-slider .swiper-pagination-bullets.swiper-pagination-horizontal.swiper-pagination{z-index:2;--tw-translate-y:50%;height:.375rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));justify-content:center;align-items:center;gap:.375rem;margin:0;display:flex;position:absolute;bottom:1.5rem;left:0;right:0}@media (width>=640px){.s-block--enhanced-slider .swiper-pagination-bullets.swiper-pagination-horizontal.swiper-pagination{bottom:2rem}}.s-block--enhanced-slider .swiper-pagination-bullet{opacity:1;background-color:#fff6;border-radius:9999px;width:.375rem;height:.375rem;transition:width .25s,background-color .25s;margin:0!important}.s-block--enhanced-slider .swiper-pagination-bullet-active{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));width:1.5rem}.s-block--custom-testimonials{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));padding-top:2.5rem;padding-bottom:2.5rem;overflow:hidden}@media (width>=1024px){.s-block--custom-testimonials{padding-top:4rem;padding-bottom:4rem}}salla-reviews:not(:has(.s-reviews-swiper-slide)){display:none}.s-testimonials__head{margin-bottom:1.5rem}@media (width>=1024px){.s-testimonials__head{margin-bottom:2.5rem}}.s-testimonials__title{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));font-size:1.25rem;font-weight:700;line-height:1.75rem}.s-testimonials__desc{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));margin-top:.5rem;font-size:.875rem;line-height:1.25rem}.s-testimonials__scroller{cursor:grab;gap:1rem;padding-bottom:.25rem;display:flex;overflow-x:auto}@media (width>=1024px){.s-testimonials__scroller{gap:1.5rem}}.s-testimonials__scroller{scroll-snap-type:x proximity;padding-inline:max(1rem,50% - 630px) 1rem;scroll-padding-inline-start:max(1rem,50% - 630px)}.s-testimonials__scroller.is-dragging{cursor:grabbing;-webkit-user-select:none;user-select:none;scroll-snap-type:none;scroll-behavior:auto}.s-testimonials__controls{align-items:center;gap:1rem;margin-top:1.5rem;display:flex}@media (width>=1024px){.s-testimonials__controls{margin-top:2rem}}.s-testimonials__nav{flex-shrink:0;align-items:center;gap:.5rem;display:flex}.s-testimonials__nav button{--tw-border-opacity:1;border-width:1px;border-color:rgb(209 213 219/var(--tw-border-opacity,1));--tw-text-opacity:1;width:2.75rem;height:2.75rem;color:rgb(75 85 99/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.s-testimonials__nav button:hover{border-color:var(--color-primary);color:var(--color-primary)}.s-testimonials__nav button svg{width:1.25rem;height:1.25rem}.s-testimonials__nav button svg:where([dir=ltr],[dir=ltr] *){--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s-testimonials__progress{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));border-radius:9999px;flex:1;height:.125rem;position:relative}.s-testimonials__progress-thumb{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1));border-radius:9999px;height:.125rem;transition-property:all;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:absolute;top:0}.testimonial-card{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px;flex-direction:column;flex-shrink:0;padding:1.25rem;display:flex}@media (width>=1024px){.testimonial-card{padding:1.5rem}}.testimonial-card{scroll-snap-align:start;flex-basis:clamp(260px,30%,340px)}.testimonial-card__head{justify-content:space-between;align-items:flex-start;gap:.75rem;margin-bottom:1rem;display:flex}.testimonial-card__rating{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1));border-radius:9999px;flex-shrink:0;align-items:center;gap:.25rem;padding:.25rem .625rem;font-size:.875rem;font-weight:700;line-height:1.25rem;display:inline-flex}.testimonial-card__rating svg{fill:currentColor;--tw-text-opacity:1;width:.875rem;height:.875rem;color:rgb(251 191 36/var(--tw-text-opacity,1))}.testimonial-card__person{align-items:center;gap:.625rem;display:flex}.testimonial-card__person:where([dir=ltr],[dir=ltr] *){text-align:left}.testimonial-card__person:where([dir=rtl],[dir=rtl] *){text-align:right}.testimonial-card__name{white-space:nowrap;--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));font-size:.875rem;font-weight:700;line-height:1.25rem}.testimonial-card__avatar{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));-o-object-fit:cover;object-fit:cover;border-radius:9999px;flex-shrink:0;width:2.75rem;height:2.75rem}.testimonial-card__text{-webkit-line-clamp:4;--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1));-webkit-box-orient:vertical;font-size:.875rem;line-height:1.5rem;display:-webkit-box;overflow:hidden}.scroll-carousel__track{cursor:grab;gap:1rem;padding-bottom:.25rem;display:flex;overflow-x:auto}@media (width>=1024px){.scroll-carousel__track{gap:1.5rem}}.scroll-carousel__track{scroll-snap-type:x proximity}.scroll-carousel__track.is-dragging{cursor:grabbing;-webkit-user-select:none;user-select:none;scroll-snap-type:none;scroll-behavior:auto}.scroll-carousel__controls{align-items:center;gap:1rem;margin-top:1.5rem;display:flex}.scroll-carousel__nav{flex-shrink:0;align-items:center;gap:.5rem;display:flex}.scroll-carousel__nav button{--tw-border-opacity:1;border-width:1px;border-color:rgb(209 213 219/var(--tw-border-opacity,1));--tw-text-opacity:1;width:2.75rem;height:2.75rem;color:rgb(75 85 99/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.scroll-carousel__nav button:hover{border-color:var(--color-primary);color:var(--color-primary)}.scroll-carousel__nav button svg{width:1.25rem;height:1.25rem}.scroll-carousel__nav button svg:where([dir=ltr],[dir=ltr] *){--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scroll-carousel__progress{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));border-radius:9999px;flex:1;height:.125rem;position:relative}.scroll-carousel__progress-thumb{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1));border-radius:9999px;height:.125rem;position:absolute;top:0}.carousel-dots{justify-content:center;align-items:center;gap:.375rem;margin-top:1.25rem;display:flex}@media (width>=768px){.carousel-dots{display:none}}.carousel-dots__dot{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1));border-radius:9999px;flex-shrink:0;width:.375rem;height:.375rem;padding:0;transition:width .25s,background-color .25s}.carousel-dots__dot.is-active{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1));width:1.5rem}@media (width<=767px){.scroll-carousel__controls,.s-testimonials__controls{display:none}}.s-products-carousel{margin-top:1rem}.s-products-carousel__head{justify-content:space-between;align-items:center;margin-bottom:1rem;display:flex}.s-products-carousel__title{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));font-size:1.125rem;font-weight:700;line-height:1.75rem}.s-products-carousel__slide{scroll-snap-align:start;flex:0 0 calc(43% - .5rem)}@media (width>=640px){.s-products-carousel__slide{flex-basis:42%}}@media (width>=768px){.s-products-carousel__slide{flex-basis:30%}}@media (width>=1024px){.s-products-carousel__slide{flex-basis:21%}}.s-block--main-links .slide--one-eighth{width:33.3333%}@media (width>=768px){.s-block--main-links .slide--one-eighth{width:25%}}@media (width>=1024px){.s-block--main-links .slide--one-eighth{width:12.5%}}.s-block--main-links .slide--cat-entry{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;height:auto;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);background-color:#0000;border-width:0;flex-direction:column;align-items:center;gap:.75rem;padding:0;display:flex}.s-block--main-links .slide--cat-entry:hover{color:inherit;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-block--main-links .slide--cat-entry__media{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;width:5rem;height:5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden}@media (width>=640px){.s-block--main-links .slide--cat-entry__media{width:6rem;height:6rem}}.s-block--main-links .slide--cat-entry img{-o-object-fit:cover;object-fit:cover;border-radius:9999px;width:100%;height:100%}.s-block--main-links .slide--cat-entry i{color:var(--color-primary);margin:0;font-size:33px}.s-block--main-links .slide--cat-entry h2{-webkit-line-clamp:2;--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1));-webkit-box-orient:vertical;font-size:.875rem;font-weight:700;line-height:1.25rem;display:-webkit-box;overflow:hidden}.s-block--main-links .slide--cat-entry:hover .slide--cat-entry__media{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.s-block--main-links .slide--cat-entry:hover h2{color:var(--color-primary)}.s-block--main-links salla-slider:not(.hydrated)>[slot=items],.s-block--square-links salla-slider:not(.hydrated)>[slot=items]{flex-wrap:nowrap;display:flex;overflow:hidden}.s-block--main-links salla-slider:not(.hydrated)>[slot=items]>div,.s-block--square-links salla-slider:not(.hydrated)>[slot=items]>div{flex-shrink:0;display:block!important}.s-block--main-links salla-slider:not(.hydrated)>[slot=items]>div:first-child,.s-block--square-links salla-slider:not(.hydrated)>[slot=items]>div:first-child{margin-inline-start:auto}.s-block--main-links salla-slider:not(.hydrated)>[slot=items]>div:last-child,.s-block--square-links salla-slider:not(.hydrated)>[slot=items]>div:last-child{margin-inline-end:auto}.s-block--slider-products-with-header .s-product-card-content{padding:.75rem}@media (width<=639px){.s-block--slider-products-with-header .swiper-slide{width:43vw;padding-inline-end:.75rem}}.s-block--enhanced-square-banners+.s-block--enhanced-square-banners{margin-top:2em}.enhanced-square-banners-mosaic{grid-template-rows:repeat(2,minmax(0,1fr));grid-template-columns:repeat(3,1fr);grid-template-areas:\"tl center tr\"\"bl center br\";gap:.75rem;display:grid}@media (width>=640px){.enhanced-square-banners-mosaic{gap:1.5rem}}.enhanced-square-banners-mosaic{aspect-ratio:21/8}@media (width<=767px){.enhanced-square-banners-mosaic{aspect-ratio:auto;grid-template-rows:none;grid-template-columns:1fr;grid-template-areas:\"tl\"\"center\"\"tr\"\"bl\"\"br\"}}.enhanced-square-banner{text-align:center;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));border-radius:16px;justify-content:center;align-items:center;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative;overflow:hidden}.enhanced-square-banner:hover{opacity:.95}.enhanced-square-banner:first-child{grid-area:tl}.enhanced-square-banner:nth-child(2){grid-area:center}.enhanced-square-banner:nth-child(2) .enhanced-square-banner__title{font-size:1.5rem;line-height:2rem}@media (width>=640px){.enhanced-square-banner:nth-child(2) .enhanced-square-banner__title{font-size:1.875rem;line-height:2.25rem}}.enhanced-square-banner:nth-child(3){grid-area:tr}.enhanced-square-banner:nth-child(4){grid-area:bl}.enhanced-square-banner:nth-child(5){grid-area:br}@media (width<=767px){.enhanced-square-banner{aspect-ratio:3/2}}.enhanced-square-banner:after{content:\"\";background-color:#00000059;position:absolute;inset:0}.enhanced-square-banner__content{z-index:1;flex-direction:column;align-items:center;gap:.5rem;padding-left:1rem;padding-right:1rem;display:flex;position:relative}.enhanced-square-banner__title{font-size:1.25rem;font-weight:700;line-height:1.25}@media (width>=640px){.enhanced-square-banner__title{font-size:1.5rem;line-height:2rem}}.enhanced-square-banner__description{opacity:.9;font-size:.875rem;line-height:1.25rem}@media (width>=640px){.enhanced-square-banner__description{font-size:1rem;line-height:1.5rem}}.enhanced-square-banner__cta{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));--tw-shadow:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:9999px;justify-content:center;align-items:center;margin-top:.75rem;padding:.625rem 1.5rem;font-size:.875rem;font-weight:700;line-height:1.25rem;transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.enhanced-square-banner__cta:hover{--tw-scale-x:1.03;--tw-scale-y:1.03;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));text-decoration-line:none}.s-block--blog{overflow:hidden}.s-block--blog .scroll-carousel__track{padding-block:.5rem;padding-inline:max(1rem,50% - 630px) 1rem;scroll-padding-inline-start:max(1rem,50% - 630px)}.s-block--blog .scroll-carousel__controls{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-block--blog .scroll-carousel__controls{max-width:1280px}}@media (width>=1024px){.s-block--testimonials.s-block--blog .scroll-carousel__controls,.s-block--blog .scroll-carousel__controls.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials.s-block--blog .scroll-carousel__controls,.s-block--blog .scroll-carousel__controls.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.s-block--blog .scroll-carousel__controls,.s-block--blog .scroll-carousel__controls.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-blog{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));padding-top:2.5rem;padding-bottom:2.5rem}@media (width>=1024px){.s-blog{padding-top:4rem;padding-bottom:4rem}}.s-blog__head{margin-bottom:1.5rem}@media (width>=1024px){.s-blog__head{margin-bottom:2rem}}.s-blog__title{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));font-size:1.25rem;font-weight:700;line-height:1.75rem}@media (width>=1024px){.s-blog__title{font-size:1.5rem;line-height:2rem}}.s-blog__desc{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));margin-top:.5rem;font-size:.875rem;line-height:1.25rem}@media (width>=1024px){.s-blog__desc{margin-top:.75rem;font-size:1rem;line-height:1.5rem}}.s-blog-card{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:1rem;flex-direction:column;flex-shrink:0;padding:1rem;display:flex}@media (width>=1024px){.s-blog-card{padding:1.5rem}}.s-blog-card{scroll-snap-align:start;flex:0 0 85%}@media (width>=640px){.s-blog-card{flex-basis:55%}}@media (width>=1024px){.s-blog-card{flex-basis:calc(38.4615% - 1.15385rem)}}.s-blog-card.is-loading{min-height:22rem;animation:2s cubic-bezier(.4,0,.6,1) infinite pulse}.s-blog-card__image{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));aspect-ratio:16/7.2;border-radius:.75rem;display:block;overflow:hidden}.s-blog-card__image img{transition-property:transform;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.s-blog-card__image:hover img{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s-blog-card__meta{-moz-column-gap:1.5rem;--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));flex-wrap:wrap;align-items:center;gap:.25rem 1.5rem;margin-top:1rem;font-size:.875rem;line-height:1.25rem;display:flex}@media (width>=1024px){.s-blog-card__meta{margin-top:1.25rem}}.s-blog-card__meta span{align-items:center;gap:.375rem;display:inline-flex}.s-blog-card__meta svg{flex-shrink:0;width:1rem;height:1rem}.s-blog-card__title{-webkit-line-clamp:1;--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));-webkit-box-orient:vertical;margin-top:.5rem;font-size:1rem;font-weight:700;line-height:1.375;display:-webkit-box;overflow:hidden}@media (width>=1024px){.s-blog-card__title{font-size:1.125rem;line-height:1.75rem}}.s-blog-card__title a:hover{color:var(--color-primary);text-decoration-line:none}.s-blog-card__excerpt{-webkit-line-clamp:2;--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));-webkit-box-orient:vertical;margin-top:.5rem;font-size:.875rem;line-height:1.625;display:-webkit-box;overflow:hidden}@media (width>=1024px){.s-blog-card__excerpt{margin-top:.75rem;font-size:1rem;line-height:1.5rem}}salla-slider{display:block}salla-slider.details-slider{margin-bottom:.625rem}@media (width>=768px){salla-slider.details-slider{margin-bottom:0}}salla-slider.details-slider:not(.hydrated) .swiper-slide:not(:first-child){display:none}salla-slider.details-slider .s-slider-container{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-width:1px;border-radius:16px}salla-slider.details-slider .swiper-slide{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000);--tw-ring-inset:inset;--tw-ring-opacity:1;--tw-ring-color:rgb(243 244 246/var(--tw-ring-opacity,1));border-radius:16px;position:relative}salla-slider.details-slider .s-slider-thumbs .s-slider-thumbs-container .swiper-slide{flex:0 0 80px;max-width:80px;width:80px!important;height:80px!important}salla-slider.details-slider .s-slider-thumbs .slide--one-fourth{width:100%;max-width:none;height:100%}salla-slider.details-slider salla-button.btn--wishlist{z-index:2;position:absolute;bottom:1rem}@media (width>=640px){salla-slider.details-slider salla-button.btn--wishlist{display:none}}salla-slider.details-slider salla-button.btn--wishlist:where([dir=ltr],[dir=ltr] *){left:1rem}salla-slider.details-slider salla-button.btn--wishlist:where([dir=rtl],[dir=rtl] *){right:1rem}salla-slider.details-slider .s-slider-block__title-nav{display:none}@media (width>=640px){salla-slider.details-slider .s-slider-block__title-nav{display:flex}}salla-slider.details-slider .swiper-pagination{display:none}@media (width<=767px){salla-slider.details-slider .s-slider-thumbs{display:none}salla-slider.details-slider .s-slider-container,salla-slider.details-slider .swiper-slide,salla-slider.details-slider .swiper-slide img,salla-slider.details-slider .swiper-slide picture{border-radius:0}salla-slider.details-slider .swiper-slide{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000)}salla-slider.details-slider .swiper-pagination.swiper-pagination-bullets{z-index:3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:#fff9;border-radius:9999px;justify-content:center;align-items:center;gap:.375rem;width:max-content;margin-left:auto;margin-right:auto;padding:5px 12px;display:flex;position:absolute;bottom:1rem;left:0;right:0}salla-slider.details-slider .swiper-pagination-bullet{opacity:1;background:#00000040;border-radius:9999px;width:.375rem;height:.375rem;transition:width .25s,background-color .25s;display:block;margin:0!important}salla-slider.details-slider .swiper-pagination-bullet-active{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1));width:1.25rem}}salla-slider .slide--one-fourth{width:100%;max-width:250px;height:auto}@media (width>=640px){salla-slider .slide--one-fourth{width:50%;max-width:320px}}@media (width>=768px){salla-slider .slide--one-fourth{width:33.3333%}}@media (width>=1024px){salla-slider .slide--one-fourth{width:25%}}salla-slider .slide--one-sixth{width:50%}@media (width>=640px){salla-slider .slide--one-sixth{width:33.3333%}}@media (width>=768px){salla-slider .slide--one-sixth{width:25%}}@media (width>=1024px){salla-slider .slide--one-sixth{width:16.6667%}}salla-slider .slide--one-eighth{width:50%}@media (width>=640px){salla-slider .slide--one-eighth{width:33.3333%}}@media (width>=768px){salla-slider .slide--one-eighth{width:25%}}@media (width>=1024px){salla-slider .slide--one-eighth{width:12.5%}}salla-slider .swiper-slide{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0)}.promotion-title{z-index:10;--tw-bg-opacity:1;background-color:rgb(153 27 27/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));font-size:.875rem;font-weight:700;line-height:1.25rem;position:absolute;top:1rem}.promotion-title:where([dir=ltr],[dir=ltr] *){border-top-right-radius:16px;border-bottom-right-radius:16px;left:0}.promotion-title:where([dir=rtl],[dir=rtl] *){border-top-left-radius:16px;border-bottom-left-radius:16px;right:0}.promotion-title{width:auto!important;margin:0!important;padding:.5rem .75rem!important}.home-slider__slide{background-position:50%;background-repeat:no-repeat;background-size:cover}.home-slider__slide:not(.loaded) .overlay,.swiper:not(.swiper-initialized) .swiper-button{opacity:0}.s-block--testimonials.container,.container.s-block--testimonial{padding:0}@media (width>=1024px){.s-block--testimonials.container,.container.s-block--testimonial{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials .s-slider-block__title,.s-block--testimonial .s-slider-block__title{padding-left:.625rem;padding-right:.625rem}@media (width>=1024px){.s-block--testimonials .s-slider-block__title,.s-block--testimonial .s-slider-block__title{padding-left:0;padding-right:0}}.s-block--testimonials .s-slider-block__title-nav,.s-block--testimonial .s-slider-block__title-nav{max-width:88%!important;display:none!important;top:65%!important}@media (width>=1024px){.s-block--testimonials .s-slider-block__title-nav,.s-block--testimonial .s-slider-block__title-nav{display:flex!important}}.s-block--testimonials .s-slider-block__title-nav button,.s-block--testimonial .s-slider-block__title-nav button{--tw-border-opacity:1!important;border-color:rgb(243 244 246/var(--tw-border-opacity,1))!important;--tw-shadow-color:#d1d5db!important;--tw-shadow:var(--tw-shadow-colored)!important}@media screen and (width>=768px){.best-products-slider .swiper-wrapper{height:510px}.best-products-slider .swiper-wrapper .swiper-slide{height:calc(50% - 15px)}}.swiper-button-disabled{opacity:.5}salla-slider .swiper-pagination-bullet{opacity:.3;background:#fff;border-radius:16px;width:20px}salla-slider .swiper-pagination-bullet-active{opacity:1;background-color:var(--color-primary)}salla-slider .swiper-pagination-bullets.swiper-pagination-horizontal{bottom:.75rem}@media (width>=640px){salla-slider .swiper-pagination-bullets.swiper-pagination-horizontal{bottom:1.5rem}}.offer-slider .s-slider-block__title{margin-bottom:1.25rem;position:relative}.offer-slider .s-slider-block__title:before{--tw-text-opacity:1;color:rgb(254 242 242/var(--tw-text-opacity,1));font-size:3rem;font-weight:400;line-height:1;position:absolute;top:1rem}.offer-slider .s-slider-block__title:where([dir=ltr],[dir=ltr] *):before{left:0}.offer-slider .s-slider-block__title:where([dir=rtl],[dir=rtl] *):before{right:0}.offer-slider .s-slider-block__title:before{content:\"\";font-family:sallaicons}.offer-slider .s-slider-block__title h2{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1));font-size:1.125rem;line-height:1.75rem}.offer-slider .s-slider-block__title p{-webkit-line-clamp:none;-webkit-box-orient:horizontal;margin-top:.25rem;line-height:1.5rem;display:block;overflow:visible}.bank-offer .s-slider-block__title,model-viewer[style*=width]:before{display:none}.blog-slider .swiper-slide img{min-height:380px;max-height:480px}@media (width>=768px){.blog-slider .swiper-slide img{max-height:680px}}body.font-dinnextltarabic-regular .btn--add-to-cart{padding-top:0!important;padding-bottom:0!important}[dir=rtl]{--font-main:var(--font-ar)}body{font-family:var(--font-main)}html{scrollbar-gutter:stable}.last\\:mb-0:last-child{margin-bottom:0}.hover\\:text-primary:hover{color:var(--color-primary)}.hover\\:opacity-75:hover{opacity:.75}.hover\\:opacity-80:hover{opacity:.8}@media (width>=640px){.sm\\:col-span-2{grid-column:span 2/span 2}.sm\\:row-span-2{grid-row:span 2/span 2}.sm\\:mb-8{margin-bottom:2rem}.sm\\:mt-16{margin-top:4rem}.sm\\:h-80{height:20rem}.sm\\:h-auto{height:auto}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:gap-6{gap:1.5rem}.sm\\:gap-8{gap:2rem}.sm\\:py-0{padding-top:0;padding-bottom:0}.sm\\:py-16{padding-top:4rem;padding-bottom:4rem}.sm\\:pt-20{padding-top:5rem}}@media (width>=768px){.md\\:mb-9{margin-bottom:2.25rem}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-7\\/12{width:58.3333%}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.md\\:grid-cols-\\[repeat\\(3\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=1024px){.lg\\:sticky{position:sticky}.lg\\:-mt-28{margin-top:-7rem}.lg\\:mb-24{margin-bottom:6rem}.lg\\:mb-5{margin-bottom:1.25rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:w-5\\/12{width:41.6667%}.lg\\:w-72{width:18rem}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:gap-16{gap:4rem}.lg\\:gap-8{gap:2rem}.lg\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.lg\\:py-16{padding-top:4rem;padding-bottom:4rem}.lg\\:py-7{padding-top:1.75rem;padding-bottom:1.75rem}.lg\\:pb-11{padding-bottom:2.75rem}.lg\\:pt-10{padding-top:2.5rem}.lg\\:pt-8{padding-top:2rem}.lg\\:text-title-size{font-size:42px}.lg\\:shadow-default{--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}}@media (width>=1280px){.xl\\:gap-8{gap:2rem}}@media (width>=480px){.xs\\:p-11{padding:2.75rem}}.ltr\\:mr-1:where([dir=ltr],[dir=ltr] *){margin-right:.25rem}.ltr\\:mr-4:where([dir=ltr],[dir=ltr] *){margin-right:1rem}@media (width>=640px){.sm\\:ltr\\:text-left:where([dir=ltr],[dir=ltr] *){text-align:left}}@media (width>=1024px){.ltr\\:lg\\:mr-8:where([dir=ltr],[dir=ltr] *){margin-right:2rem}.ltr\\:lg\\:pr-16:where([dir=ltr],[dir=ltr] *){padding-right:4rem}}.rtl\\:ml-1:where([dir=rtl],[dir=rtl] *){margin-left:.25rem}.rtl\\:ml-4:where([dir=rtl],[dir=rtl] *){margin-left:1rem}.rtl\\:ml-\\[unset\\]:where([dir=rtl],[dir=rtl] *){margin-left:unset}.rtl\\:mr-4:where([dir=rtl],[dir=rtl] *){margin-right:1rem}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}@media (width>=640px){.sm\\:rtl\\:text-right:where([dir=rtl],[dir=rtl] *){text-align:right}}@media (width>=1024px){.rtl\\:lg\\:ml-8:where([dir=rtl],[dir=rtl] *){margin-left:2rem}.rtl\\:lg\\:pl-16:where([dir=rtl],[dir=rtl] *){padding-left:4rem}}";
// app/styles/critical-product.scss?inline
var critical_product_default = ":root{--swiper-theme-color:#007aff}:host{z-index:1;margin-left:auto;margin-right:auto;display:block;position:relative}.swiper{z-index:1;margin-left:auto;margin-right:auto;padding:0;list-style:none;display:block;position:relative;overflow:hidden}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{z-index:1;width:100%;height:100%;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box;display:flex;position:relative}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translate(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;transition-property:transform;display:block;position:relative}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{backface-visibility:hidden;transform:translateZ(0)}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:\"\";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{pointer-events:none;z-index:10;width:100%;height:100%;position:absolute;top:0;left:0}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(#0000,#00000080)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(#00000080,#0000)}.swiper-lazy-preloader{z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-top-color:#0000;border-radius:50%;width:42px;height:42px;margin-top:-21px;margin-left:-21px;position:absolute;top:50%;left:50%}:is(.swiper:not(.swiper-watch-progress),.swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader{animation:1s linear infinite swiper-preloader-spin}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--swiper-navigation-size:44px}.swiper-button-prev,.swiper-button-next{width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;color:var(--swiper-navigation-color,var(--swiper-theme-color));justify-content:center;align-items:center;display:flex;position:absolute}:is(.swiper-button-prev,.swiper-button-next).swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}:is(.swiper-button-prev,.swiper-button-next).swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled :is(.swiper-button-prev,.swiper-button-next){display:none!important}:is(.swiper-button-prev,.swiper-button-next) ::slotted(svg),:is(.swiper-button-prev,.swiper-button-next) svg{-o-object-fit:contain;object-fit:contain;transform-origin:50%;fill:currentColor;pointer-events:none;width:100%;height:100%}.swiper-button-lock{display:none}.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset,50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}.swiper-button-prev{left:var(--swiper-navigation-sides-offset,4px);right:auto}.swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}.swiper-button-next{right:var(--swiper-navigation-sides-offset,4px);left:auto}.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset,50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset,4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset,4px);left:auto}:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) .swiper-navigation-icon{transform:rotate(180deg)}:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(0)}.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset,50%);margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0;right:auto}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset,4px);bottom:auto}:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset,4px);top:auto}:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) .swiper-navigation-icon{transform:rotate(90deg)}*,:before,:after,::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border:0 solid #e5e7eb}:before,:after{--tw-content:\"\"}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--font-main), -apple-system, BlinkMacSystemFont;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-feature-settings:normal;font-variation-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-feature-settings:inherit;font-variation-settings:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:#0000;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{margin:0;padding:0;list-style:none}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input:where([type=text]),input:where(:not([type])),input:where([type=email]),input:where([type=url]),input:where([type=password]),input:where([type=number]),input:where([type=date]),input:where([type=datetime-local]),input:where([type=month]),input:where([type=search]),input:where([type=tel]),input:where([type=time]),input:where([type=week]),select:where([multiple]),textarea,select{appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6b7280;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}input:where([type=text]):focus,input:where(:not([type])):focus,input:where([type=email]):focus,input:where([type=url]):focus,input:where([type=password]):focus,input:where([type=number]):focus,input:where([type=date]):focus,input:where([type=datetime-local]):focus,input:where([type=month]):focus,input:where([type=search]):focus,input:where([type=tel]):focus,input:where([type=time]):focus,input:where([type=week]):focus,select:where([multiple]):focus,textarea:focus,select:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#2563eb;outline:2px solid #0000}input::-moz-placeholder{color:#6b7280;opacity:1}textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}select:where([multiple]),select:where([size]:not([size=\"1\"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}input:where([type=checkbox]),input:where([type=radio]){appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#2563eb;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6b7280;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}input:where([type=checkbox]){border-radius:0}input:where([type=radio]){border-radius:100%}input:where([type=checkbox]):focus,input:where([type=radio]):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);outline:2px solid #0000}input:where([type=checkbox]):checked,input:where([type=radio]):checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}input:where([type=checkbox]):checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}@media (forced-colors:active){input:where([type=checkbox]):checked{appearance:auto}}input:where([type=radio]):checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}@media (forced-colors:active){input:where([type=radio]):checked{appearance:auto}}input:where([type=checkbox]):checked:hover,input:where([type=checkbox]):checked:focus,input:where([type=radio]):checked:hover,input:where([type=radio]):checked:focus{background-color:currentColor;border-color:#0000}input:where([type=checkbox]):indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){input:where([type=checkbox]):indeterminate{appearance:auto}}input:where([type=checkbox]):indeterminate:hover,input:where([type=checkbox]):indeterminate:focus{background-color:currentColor;border-color:#0000}input:where([type=file]){background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}input:where([type=file]):focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}.container{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.container{max-width:1280px}}.form-input,.form-textarea,.form-select,.form-multiselect{appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6b7280;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}.form-input:focus,.form-textarea:focus,.form-select:focus,.form-multiselect:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#2563eb;outline:2px solid #0000}.form-input::-moz-placeholder{color:#6b7280;opacity:1}.form-textarea::-moz-placeholder{color:#6b7280;opacity:1}.form-input::placeholder,.form-textarea::placeholder{color:#6b7280;opacity:1}.form-input::-webkit-datetime-edit-fields-wrapper{padding:0}.form-input::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}.form-input::-webkit-datetime-edit{display:inline-flex}.form-input::-webkit-datetime-edit{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}.form-input::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}.sr-only{clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.\\!visible{visibility:visible!important}.visible{visibility:visible}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.top-24{top:6rem}.top-4{top:1rem}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.m-0{margin:0}.m-auto{margin:auto}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-1\\.5{margin-left:.375rem;margin-right:.375rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.\\!mt-0{margin-top:0!important}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.me-2{margin-inline-end:.5rem}.ml-4{margin-left:1rem}.mr-2{margin-right:.5rem}.ms-2{margin-inline-start:.5rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-16{height:4rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-4{height:1rem}.h-6{height:1.5rem}.h-full{height:100%}.max-h-full{max-height:100%}.min-h-7{min-height:1.75rem}.min-h-full{min-height:100%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-2\\.5{width:.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-6{width:1.5rem}.w-auto{width:auto}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-\\[180px\\]{max-width:180px}.max-w-sm{max-width:24rem}.flex-1{flex:1}.shrink-0{flex-shrink:0}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}.animate-ping{animation:1s cubic-bezier(0,0,.2,1) infinite ping}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:2s cubic-bezier(.4,0,.6,1) infinite pulse}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;user-select:none}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-3{row-gap:.75rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.25rem * var(--tw-space-x-reverse));margin-left:calc(.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-px>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:16px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.border-0{border-width:0}.border-b,.border-b-\\[1px\\]{border-bottom-width:1px}.border-dashed{border-style:dashed}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.border-white\\/10{border-color:#ffffff1a}.bg-\\[\\#0E0F0F\\]{--tw-bg-opacity:1;background-color:rgb(14 15 15/var(--tw-bg-opacity,1))}.bg-\\[\\#1D1F1F\\]{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1))}.bg-\\[\\#F4F7F2\\]{--tw-bg-opacity:1;background-color:rgb(244 247 242/var(--tw-bg-opacity,1))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94/var(--tw-bg-opacity,1))}.bg-green-600{--tw-bg-opacity:1;background-color:rgb(22 163 74/var(--tw-bg-opacity,1))}.bg-inherit{background-color:inherit}.bg-transparent{background-color:#0000}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.\\!p-0{padding:0!important}.p-0{padding:0}.p-2{padding:.5rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-1{padding-bottom:.25rem}.pb-5{padding-bottom:1.25rem}.pb-8{padding-bottom:2rem}.pt-4{padding-top:1rem}.text-center{text-align:center}.text-end{text-align:end}.align-middle{vertical-align:middle}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.leading-10{line-height:2.5rem}.leading-6{line-height:1.5rem}.leading-7{line-height:1.75rem}.leading-8{line-height:2rem}.leading-none{line-height:1}.\\!text-red-800{--tw-text-opacity:1!important;color:rgb(153 27 27/var(--tw-text-opacity,1))!important}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.text-green-700{--tw-text-opacity:1;color:rgb(21 128 61/var(--tw-text-opacity,1))}.text-primary{color:var(--color-primary)}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity,1))}.text-red-800{--tw-text-opacity:1;color:rgb(153 27 27/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.underline{text-decoration-line:underline}.line-through{text-decoration-line:line-through}.\\!opacity-50{opacity:.5!important}.opacity-40{opacity:.4}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-80{opacity:.8}.shadow-default{--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.outline{outline-style:solid}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-\\[max-height\\]{transition-property:max-height;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.form-input{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1));border-radius:.375rem;width:100%;height:2.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (width>=640px){.form-input{font-size:.875rem;line-height:1.25rem}}.s-accordion-head-wrapper-toggle.active{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-color:var(--color-primary);background-color:var(--color-primary);--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.s-accordion-head-wrapper-toggle.active svg{fill:#fff}.s-add-product-button-with-sticky-bar salla-quick-buy .s-quick-buy-button .s-button-text span{display:none}@media (width>=768px){.s-add-product-button-with-sticky-bar salla-quick-buy .s-quick-buy-button .s-button-text span{display:block}}.s-advertisement-content{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-advertisement-content{max-width:1280px}}.s-advertisement-content{justify-content:space-between;align-items:center;padding-top:.625rem;padding-bottom:.625rem;display:flex}.s-block--testimonials.s-advertisement-content{padding:0}@media (width>=1024px){.s-block--testimonials.s-advertisement-content{padding-left:.625rem;padding-right:.625rem}}@media (width>=768px){.product-single .s-advertisement-content:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}.s-advertisement-content-main{text-align:center;flex:1;font-size:.875rem;font-weight:700;line-height:1.25rem}.s-advertisement-content-icon{vertical-align:middle;font-size:1rem;line-height:1.5rem;display:inline-block}.s-advertisement-content-icon:where([dir=ltr],[dir=ltr] *){margin-right:.5rem}.s-advertisement-content-icon:where([dir=rtl],[dir=rtl] *){margin-left:.5rem}.s-advertisement-action{padding-left:.25rem;padding-right:.25rem}.s-app-install-alert-wrapper.\\!open[position=top]{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));display:flex}@keyframes slideDownFromTop{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(-0%)}}.s-app-install-alert-wrapper.\\!open[position=top]{transition-duration:.5s;animation:.6s linear slideDownFromTop}.s-app-install-alert-wrapper.open[position=top]{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.5s;animation:.6s linear slideDownFromTop;display:flex}.s-app-install-alert-wrapper.\\!open[position=bottom]{display:flex}@keyframes slideUpFromBottom{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0%)}}.s-app-install-alert-wrapper.\\!open[position=bottom]{animation:.6s linear slideUpFromBottom}.s-app-install-alert-wrapper.open[position=bottom]{animation:.6s linear slideUpFromBottom;display:flex}.s-apps-icons-list.vertical{flex-direction:column}.s-bottom-alert-modal-content-screenshot.swiper-slide{width:370px!important;height:200px!important}.s-bottom-alert-modal-content-footer button .s-button-text{align-items:center;gap:.5rem;display:flex}.s-breadcrumb-wrapper{flex-wrap:wrap;align-items:center;font-size:.875rem;line-height:1.25rem;display:flex}.s-breadcrumb-item{display:inline-block}.s-breadcrumb-arrow{margin-left:.5rem;margin-right:.5rem}.s-breadcrumb-arrow svg{width:.875rem;height:.875rem}.s-button-wrap{pointer-events:none}.s-button-wrap[width=wide]{width:100%}.s-button-wrap[type=submit],.s-button-wrap[type=button],.s-button-wrap[type=reset]{appearance:none}.s-button-wrap[loading] .s-button-loader-center .s-button-text{opacity:0}.s-button-element:not(:disabled):not([loading]){pointer-events:auto}.s-button-wrap svg{fill:currentColor;width:1.25rem;height:1.25rem}.s-button-icon{flex-shrink:0;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;margin-left:.25rem;margin-right:.25rem;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex;position:relative;border-radius:9999px!important;padding:0!important;line-height:1!important}.s-button-icon .s-button-text{display:flex}.s-button-icon.s-button-large{width:3.5rem;height:3.5rem}.s-button-icon.s-button-large svg{width:2rem;height:2rem}.s-button-icon.s-button-small{width:1.5rem;height:1.5rem}.s-button-icon.s-button-small svg,.s-button-icon.s-button-small .s-button-loader:before{width:.875rem;height:.875rem}.s-button-outline{border-width:1px;border-color:currentColor}.s-button-outline:hover{border-color:#0000}.s-button-outline .s-button-loader:before{border-top-color:currentColor;border-left-color:currentColor}.s-button-light-outline{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));fill:#6b7280;--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-border-opacity:1!important;border-color:rgb(229 231 235/var(--tw-border-opacity,1))!important}.main-content>div.s-button-light-outline,.main-content>section.s-button-light-outline{border-radius:0;padding:0}.s-button-light-outline:hover{--tw-border-opacity:1!important;border-color:rgb(229 231 235/var(--tw-border-opacity,1))!important}.s-button-text{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;align-items:center;transition-property:opacity;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden}.s-button-loader-start.s-button-element:where([dir=ltr],[dir=ltr] *){padding-left:2.5rem;padding-right:2rem}.s-button-loader-start.s-button-element:where([dir=rtl],[dir=rtl] *),.s-button-loader-end.s-button-element:where([dir=ltr],[dir=ltr] *){padding-left:2rem;padding-right:2.5rem}.s-button-loader-end.s-button-element:where([dir=rtl],[dir=rtl] *){padding-left:2.5rem;padding-right:2rem}.s-button-loader-center .s-button-loader{--tw-translate-y:-50%;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));position:absolute;top:50%;left:50%;margin:0!important}input[type=radio].sr-only div.s-button-loader-center .s-button-loader{transition:all .3s}input[type=radio].sr-only:checked~div.s-button-loader-center .s-button-loader{border-color:var(--color-main)}.s-cart-coupons-coupon-input-container .form-input{flex:1;height:auto}.s-cart-coupons-coupon-input-container .form-input:where([dir=ltr],[dir=ltr] *){border-right-width:0;border-top-left-radius:.5rem;border-bottom-left-radius:.5rem;border-top-right-radius:0!important;border-bottom-right-radius:0!important}.s-cart-coupons-coupon-input-container .form-input:where([dir=rtl],[dir=rtl] *){border-left-width:0;border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;border-top-left-radius:0!important;border-bottom-left-radius:0!important}.s-cart-coupons-coupon-input-container .form-input:focus{z-index:10;position:relative}.s-cart-coupons-coupon-input-container .form-input.s-coupon-input-error{--tw-shadow:0 0 0 3px #ef44441a!important;--tw-shadow-colored:0 0 0 3px var(--tw-shadow-color)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)!important}.s-comments-item-like-btn .s-button-text{flex-direction:row-reverse;gap:.5rem;display:flex}.s-count-down-with-button button .s-button-text{-moz-column-gap:.5rem;align-items:center;column-gap:.5rem;display:flex}.s-count-down-with-button button .s-button-text:where([dir=ltr],[dir=ltr] *){flex-direction:row-reverse}.s-count-down-with-button button .s-button-text:where([dir=rtl],[dir=rtl] *){flex-direction:row}.flatpickr-day.selected{background:var(--color-primary);border-color:var(--color-primary)}.flatpickr-day.selected:hover{background:var(--color-primary);border-color:var(--color-primary);opacity:.8}.s-delivery-promise-arrow.\\!open,.s-delivery-promise-arrow.open{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s-file-upload-wrapper .filepond--label-action{text-decoration-color:#6b7280}.s-gifting-widget .s-button-text{display:flex}.s-gifting-steps-wrapper .s-button-wrap{pointer-events:auto!important}.s-gifting-step-one .swiper-slide{width:auto!important}.s-gifting-calendar.\\!shown,.s-gifting-calendar.shown{opacity:1;height:75px;margin-top:.75rem}.s-gifting-textarea.\\!shown,.s-gifting-textarea.shown{opacity:1;height:122px}.s-loyalty-prize-item.swiper-slide{cursor:pointer;flex-direction:column;width:calc(33.33% - 10px);min-width:200px;margin-bottom:.5rem;margin-left:5px;margin-right:5px;display:flex}.s-loyalty-prize-item.swiper-slide>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-loyalty-prize-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;background-size:cover;border-radius:.375rem;font-size:1.875rem;line-height:2.25rem;overflow:hidden;padding:0!important}.s-loyalty-prize-item.swiper-slide *{pointer-events:none}.main-content>div.s-loyalty-prize-item.swiper-slide,.main-content>section.s-loyalty-prize-item.swiper-slide{border-radius:0;padding:0}.s-loyalty-skeleton .s-loyalty-prize-item .s-skeleton-wrapper{margin-left:auto;margin-right:auto}.s-loyalty-points-history-no-content .icon{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:8rem;height:8rem;color:rgb(209 213 219/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;margin-bottom:1rem;font-size:3rem;line-height:1;display:flex}.s-map-location-button .s-button-text{align-items:center;display:flex}@media (width>=1024px){.s-menu-root-level{display:inline-block!important}}.s-menu-non-root-level{position:relative}.s-menu-footer-item{margin-bottom:1.25rem;font-size:.875rem;line-height:1;display:block}.s-menu-footer-item:last-child{margin-bottom:0}.s-metadata-box{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:.375rem;margin-bottom:1.25rem;padding:1.25rem;display:block}.main-content>div.s-metadata-box,.main-content>section.s-metadata-box{border-radius:0;padding:0}.s-metadata-box-header{-moz-column-gap:.5rem;--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));align-items:center;column-gap:.5rem;margin-bottom:.75rem;padding-bottom:.75rem;font-size:1rem;font-weight:700;line-height:1.5rem;display:flex}.s-multiple-bundle-product-options-modal-slider .s-slider-container .swiper-slide{justify-content:center;align-items:center;display:flex}.s-multiple-bundle-product-options-modal-slider .s-slider-thumbs{margin-top:0!important}.s-multiple-bundle-product-options-modal-slider .s-slider-thumbs-container .swiper-slide{justify-content:center;align-items:center;width:100%;padding:.25rem;height:40px!important;margin-top:0!important;display:flex!important}.s-offer-products-list-single-column .s-products-list-wrapper{gap:.75rem;grid-template-columns:repeat(1,minmax(0,1fr))!important;display:grid!important}.s-offer-modal-cat-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;max-width:180px;height:9rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:.375rem;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem;padding:.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.main-content>div.s-offer-modal-cat-item.swiper-slide,.main-content>section.s-offer-modal-cat-item.swiper-slide{border-radius:0;padding:0}.s-offer-modal-cat-item.swiper-slide:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-shadow:5px 10px 99px #2b2d340d;--tw-shadow-colored:5px 10px 99px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-offer-modal-brand-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;max-width:180px;height:9rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:.375rem;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem;padding:.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.main-content>div.s-offer-modal-brand-item.swiper-slide,.main-content>section.s-offer-modal-brand-item.swiper-slide{border-radius:0;padding:0}.s-offer-modal-brand-item.swiper-slide:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-shadow:5px 10px 99px #2b2d340d;--tw-shadow-colored:5px 10px 99px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-offer-modal-tag-item.swiper-slide{--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));text-align:center;--tw-text-opacity:1;max-width:180px;height:9rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:.375rem;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem;padding:.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.main-content>div.s-offer-modal-tag-item.swiper-slide,.main-content>section.s-offer-modal-tag-item.swiper-slide{border-radius:0;padding:0}.s-offer-modal-tag-item.swiper-slide:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));--tw-shadow:5px 10px 99px #2b2d340d;--tw-shadow-colored:5px 10px 99px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.s-offer-modal-product.swiper-slide{flex-direction:column;flex-grow:1;flex-shrink:0;width:70%;display:flex}@media (width>=640px){.s-offer-modal-product.swiper-slide{width:40%}}@media (width>=1024px){.s-offer-modal-product.swiper-slide{width:28%}}.s-order-edit-products-list .s-products-list-wrapper{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}@media (width>=769px){.s-order-edit-products-list .s-products-list-wrapper{grid-template-columns:repeat(3,minmax(0,1fr))}}.s-order-edit-no-content-placeholder .icon{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));font-size:1.25rem;line-height:1.75rem}.s-order-edit-mobile-products-modal .products-list .s-products-list-wrapper{grid-template-columns:repeat(2,minmax(0,1fr));gap:.625rem}.s-order-edit-expired .icon{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));font-size:1.25rem;line-height:1.75rem}@media (width<=768px){.s-order-edit-actions salla-button .s-button-element{width:100%;min-width:0;padding-inline:.5rem}}.s-order-summary-item-copy-button.copied .s-button-text{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.s-orders-no-content .icon{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:8rem;height:8rem;color:rgb(209 213 219/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;margin-bottom:1rem;font-size:3rem;line-height:1;display:flex}.s-payments-list-item{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px;justify-content:center;align-items:center;width:3rem;height:2rem;padding:.25rem;display:flex}.main-content>div.s-payments-list-item,.main-content>section.s-payments-list-item{border-radius:0;padding:0}.s-payments-list-item img{-o-object-fit:contain;object-fit:contain;max-height:100%}.s-product-card-entry{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px;justify-content:space-between;height:100%;transition-property:box-shadow;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative}.main-content>div.s-product-card-entry,.main-content>section.s-product-card-entry{border-radius:0;padding:0}.s-product-card-out-of-stock img.loaded{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.s-product-card-vertical{flex-direction:column}.s-product-card-vertical .s-product-card-image{border-top-left-radius:16px;border-top-right-radius:16px;flex:1}.s-product-card-vertical .s-product-card-wishlist-btn{opacity:.75;position:absolute;top:.5rem;right:.5rem}input[type=radio].sr-only div.s-product-card-vertical .s-product-card-wishlist-btn{transition:all .3s}input[type=radio].sr-only:checked~div.s-product-card-vertical .s-product-card-wishlist-btn{border-color:var(--color-main)}.s-product-card-vertical .s-product-card-wishlist-btn:hover{opacity:1}@media (width>=768px){.s-product-card-vertical .s-product-card-wishlist-btn{right:.5rem}}.s-product-card-vertical .s-product-card-wishlist-btn:where([dir=rtl],[dir=rtl] *){left:.5rem;right:unset}@media (width>=768px){.s-product-card-vertical .s-product-card-wishlist-btn:where([dir=rtl],[dir=rtl] *){left:.5rem;right:unset}}.s-product-card-minimal .s-product-card-image{width:8rem}@media (width>=640px){.s-product-card-minimal .s-product-card-image{width:14rem}}@media (width>=1024px){.s-product-card-minimal .s-product-card-image{width:7rem}}.s-product-card-minimal .s-product-card-content{flex-direction:column;flex:1;padding:1.25rem;display:flex;overflow:hidden}.s-product-card-vertical .s-product-card-wishlist-btn button{margin:0;--tw-bg-opacity:1!important;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))!important}.s-product-card-fit-height .s-product-card-image{height:11rem;max-height:15rem}.s-product-card-image{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));flex-shrink:0;width:100%;height:100%;position:relative;overflow:hidden}.s-product-card-image:before{--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));content:var(--tw-content);--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1));font-size:1.875rem;line-height:2.25rem;display:inline-block;position:absolute;top:50%;left:50%}.s-product-card-image:hover{opacity:.9}.s-product-card-image img{width:100%;height:100%;transition-property:opacity;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.s-product-card-image img.lazy{opacity:0}.s-product-card-image img.loaded{opacity:1;position:relative}.s-product-card-content{flex-direction:column;padding:.75rem;display:flex;position:relative}@media (width>=640px){.s-product-card-content{padding:1.25rem}}.s-product-card-horizontal .s-product-card-image{width:8rem;height:auto}@media (width>=640px){.s-product-card-horizontal .s-product-card-image{width:14rem}}.s-product-card-horizontal .s-product-card-image:where([dir=ltr],[dir=ltr] *){border-top-left-radius:16px;border-bottom-left-radius:16px}.s-product-card-horizontal .s-product-card-image:where([dir=rtl],[dir=rtl] *){border-top-right-radius:16px;border-bottom-right-radius:16px}.s-product-card-horizontal .s-product-card-content{width:100%;margin-bottom:.625rem}.s-product-card-full-image .s-product-card-content{z-index:10;width:100%;padding:1.25rem 2.5rem 1.75rem;position:absolute;bottom:0}input[type=radio].sr-only div.s-product-card-full-image .s-product-card-content{transition:all .3s}input[type=radio].sr-only:checked~div.s-product-card-full-image .s-product-card-content{border-color:var(--color-main)}.s-product-card-full-image .s-product-card-image a{width:100%;height:100%}.s-product-card-compact .s-product-card-content{text-align:right;flex:1;min-width:0;padding:0}.s-product-card-compact .s-product-card-image{border-radius:.375rem;flex-shrink:0;width:5rem;height:5rem}.s-product-card-compact .s-product-card-image img{-o-object-fit:cover;object-fit:cover;border-radius:.375rem;width:100%;height:100%}article:has(salla-product-card-embed):after{clear:both;--tw-content:\"\";content:var(--tw-content);display:block}.s-product-options-donation-input-group.\\!shown,.s-product-options-donation-input-group.shown{opacity:1;height:auto;transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.s-products-list-wrapper{margin-bottom:2rem;display:grid}.s-products-list-vertical-cards{grid-template-columns:repeat(2,minmax(0,1fr));gap:.625rem}@media (width>=640px){.s-products-list-vertical-cards{gap:1rem}}@media (width>=768px){.s-products-list-vertical-cards{grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem}}@media (width>=1024px){.s-products-list-vertical-cards{grid-template-columns:repeat(4,minmax(0,1fr))}}unicode{unicode-bidi:plaintext}.s-rating-modal-uploader.is-opened{margin-bottom:1.5rem}.s-rating-modal-uploader.is-closed{pointer-events:none;z-index:0}.s-review-card-slider-dot.active{--tw-scale-x:1.5;--tw-scale-y:1.5;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));background-color:var(--color-primary)}.s-reviews-container .swiper-slide{width:20%;height:auto;padding-left:10px;padding-right:10px;overflow:hidden}@media (width>=1024px){.s-reviews-container .swiper-slide{padding-left:15px;padding-right:15px}}.s-reviews-container .swiper-slide:not(.swiper-slide-active) .s-reviews-testimonial__avatar{margin-bottom:2rem}.s-reviews-container .swiper-slide:not(.swiper-slide-active) .s-reviews-testimonial__inner{text-align:center;flex-direction:column;align-items:center;position:relative}.s-reviews-container .swiper-slide:not(.swiper-slide-active) .s-reviews-testimonial__icon svg{--tw-translate-x:-50%;--tw-translate-y:.25rem;width:1.5rem;height:1.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));top:-2rem;left:50%}.s-search-modal .s-modal-wrapper{align-items:flex-start;padding:0}.s-search-modal .s-modal-spacer{display:inline}.s-search-modal .s-modal-body{background:0 0;border-radius:.5rem;width:700px;max-width:90%;margin-top:3.2rem;padding:0;overflow:visible;position:relative!important}.s-search-modal .s-modal-close{top:50%;transform:translateY(-50%)}@media (width<=639px){.s-search-modal .s-modal-body .s-search-results{margin-top:0;position:static}.s-search-modal.s-search-modal-new .s-modal-body{height:100dvh;max-height:100dvh!important}}@media (width>=640px){.s-search-modal.s-search-modal-new .s-modal-body{background:var(--color-surface,#fff);width:1100px;max-width:95%;overflow:hidden}}.s-search-product-card-out-of-stock img.loaded{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.s-search-product-card-image img.lazy{opacity:0}.s-search-product-card-image img.loaded{opacity:1;position:relative}.s-skeleton-pulse{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));animation:2s cubic-bezier(.4,0,.6,1) infinite pulse}.s-skeleton-pulse:is(.dark *){--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.s-skeleton-button{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));border-radius:.375rem;justify-content:center;align-items:center;display:flex}.s-skeleton-button:is(.dark *){--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.s-skeleton-products-slider{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-products-slider{max-width:1280px}}.s-skeleton-products-slider{overflow:hidden}.s-block--testimonials.s-skeleton-products-slider{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-products-slider{padding-left:.625rem;padding-right:.625rem}}@media (width>=768px){.product-single .s-skeleton-products-slider:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}.s-skeleton-products-slider-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;padding-top:.5rem;padding-bottom:.5rem;display:grid}@media (width>=1024px){.s-skeleton-products-slider-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}.s-skeleton-card-image{aspect-ratio:1;border-radius:.375rem;width:100%}.s-skeleton-card-line{margin-top:.5rem}.s-skeleton-card-line-lg{margin-top:.75rem}.s-skeleton-card-line-sm{margin-top:.25rem}.s-skeleton-body-fill{flex:1}.s-skeleton-circle-default{margin-left:.25rem;margin-right:.25rem}.s-skeleton-product-card-content>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-skeleton-product-card-content{padding:.75rem}.s-skeleton-menu-rows{align-items:center;gap:1rem;display:flex}.s-skeleton-menu-columns{flex-direction:column;gap:.5rem;display:flex}.s-skeleton-products-list{gap:1rem;display:grid}.s-skeleton-products-list-grid-2,.s-skeleton-products-list-grid-3{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}@media (width>=640px){.s-skeleton-products-list-grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.s-skeleton-products-list-grid-4{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}@media (width>=640px){.s-skeleton-products-list-grid-4{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=1024px){.s-skeleton-products-list-grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}}.s-skeleton-bullet-delivery{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;flex-direction:column;gap:.75rem;padding:1rem;display:flex}.s-skeleton-bullet-delivery:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-bullet-item{align-items:center;gap:.5rem;display:flex}.s-skeleton-card{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;margin-top:.5rem;margin-bottom:.5rem;padding:1rem}.s-skeleton-card:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-review{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-review{max-width:1280px}}.s-skeleton-review{margin-top:1.25rem}.s-block--testimonials.s-skeleton-review{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-review{padding-left:.625rem;padding-right:.625rem}}@media (width>=768px){.product-single .s-skeleton-review:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}.s-skeleton-review-body{border-radius:.375rem;gap:.75rem;padding:.75rem;display:flex}.s-skeleton-review-stars{align-items:center;gap:.25rem;margin-bottom:.5rem;display:flex}.s-skeleton-review-star{border-radius:.125rem;width:1rem;height:1rem;--tw-bg-opacity:1!important;background-color:rgb(209 213 219/var(--tw-bg-opacity,1))!important}.s-skeleton-review-star:is(.dark *){--tw-bg-opacity:1!important;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))!important}.s-skeleton-list{flex-direction:column;gap:.75rem;display:flex}.s-skeleton-list-item{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;gap:.75rem;padding:.75rem;display:flex}.s-skeleton-list-item:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-form{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));border-radius:.375rem;flex-direction:column;gap:1rem;margin-top:.5rem;margin-bottom:.5rem;padding:1rem;display:flex}.s-skeleton-form:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.s-skeleton-search{align-items:center;gap:.75rem;padding:.375rem .75rem;display:flex}.s-skeleton-filters{border-radius:.375rem;flex-direction:column;gap:1rem;padding:1rem;display:flex}.s-skeleton-payment{flex-wrap:wrap;align-items:center;gap:.5rem;display:flex}.s-skeleton-input{margin-left:.5rem;margin-right:.5rem}.s-skeleton-slider{border-radius:.375rem;overflow:hidden}.s-skeleton-slider-image{border-radius:.375rem;width:100%;height:clamp(130px,30vw,350px)}.s-skeleton-slider-thumbs{gap:.5rem;margin-top:.75rem;display:flex}.s-skeleton-slider-thumb{border-radius:.375rem;width:5rem;height:5rem}.s-skeleton-thumbs-centered{justify-content:center;gap:.5rem;margin-top:.75rem;display:flex}.s-skeleton-bgslider-dot{border-radius:.375rem;width:1.5rem;height:.5rem}.s-skeleton-breadcrumb{align-items:center;gap:.5rem;padding-top:1.25rem;padding-bottom:1.25rem;display:flex}.s-skeleton-breadcrumb-item-sm{width:4rem;height:1rem}.s-skeleton-breadcrumb-item-lg{width:6rem;height:1rem}.s-skeleton-breadcrumb-sep{width:1rem;height:1rem}.s-skeleton-page{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-page{max-width:1280px}}.s-skeleton-page{margin-bottom:2.5rem;padding-left:.625rem;padding-right:.625rem}.s-block--testimonials.s-skeleton-page{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-page{padding-left:.625rem;padding-right:.625rem}}@media (width>=768px){.product-single .s-skeleton-page:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}@media (width>=640px){.s-skeleton-page{padding-left:1.25rem;padding-right:1.25rem}}.s-skeleton-page-content>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.s-skeleton-section-title{width:12rem;height:1.5rem;margin-bottom:1rem}@media (width>=640px){.s-skeleton-section-title{margin-bottom:1.5rem}}.s-skeleton-text-line-full{width:100%;height:1rem}.s-skeleton-text-line-lg{width:75%;height:1rem}.s-skeleton-text-line-sm{width:50%;height:1rem}.s-skeleton-circle-md{width:2.5rem;height:2.5rem}.s-skeleton-rounded-md-sm{border-radius:16px;width:2.5rem;height:2.5rem}.s-skeleton-detail-container{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-skeleton-detail-container{max-width:1280px}}.s-block--testimonials.s-skeleton-detail-container{padding:0}@media (width>=1024px){.s-block--testimonials.s-skeleton-detail-container{padding-left:.625rem;padding-right:.625rem}}@media (width>=768px){.product-single .s-skeleton-detail-container:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}.s-skeleton-detail-layout{flex-direction:column;align-items:flex-start;display:flex}@media (width>=768px){.s-skeleton-detail-layout{flex-direction:row}}.s-skeleton-detail-images{flex-shrink:0;width:100%;padding-bottom:2rem;top:6rem;overflow:hidden}@media (width>=768px){.s-skeleton-detail-images{padding-bottom:4rem;position:sticky;width:50%!important}}.s-skeleton-detail-images:where([dir=ltr],[dir=ltr] *){margin-right:2rem}.s-skeleton-detail-images:where([dir=rtl],[dir=rtl] *){margin-left:2rem}.s-skeleton-detail-content{width:100%;top:6rem}.s-skeleton-detail-content>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}@media (width>=768px){.s-skeleton-detail-content{width:50%;padding-bottom:4rem;position:sticky;overflow:hidden}}.s-skeleton-detail-description>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-skeleton-detail-description{padding-top:.5rem;padding-bottom:.5rem}.s-skeleton-detail-colors{display:flex}.s-skeleton-detail-colors>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.s-skeleton-detail-colors:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.s-skeleton-detail-title{width:75%;height:1.75rem}.s-skeleton-detail-badge{width:5rem;height:.75rem}.s-skeleton-detail-price{width:6rem;height:1.75rem}.s-skeleton-detail-bar-label{width:3rem;height:1.25rem}.s-skeleton-detail-bar-value{width:5rem;height:1.75rem}.s-skeleton-detail-actions-label{width:4rem;height:1.25rem}.s-skeleton-detail-size-rect{border-radius:16px;width:3rem;height:2.5rem}.s-skeleton-detail-add-btn{border-radius:.375rem;width:100%;height:3.5rem}.s-skeleton-detail-price-bar{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:.375rem .375rem 0 0;justify-content:space-between;align-items:center;padding:1.25rem;display:flex}.main-content>div.s-skeleton-detail-price-bar,.main-content>section.s-skeleton-detail-price-bar{border-radius:0;padding:0}.s-skeleton-detail-actions>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.s-skeleton-detail-actions{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:.375rem .375rem 0 0;padding:1.25rem}.main-content>div.s-skeleton-detail-actions,.main-content>section.s-skeleton-detail-actions{border-radius:0;padding:0}.s-skeleton-detail-actions-row{justify-content:space-between;align-items:center;display:flex}.s-skeleton-detail-size-selectors{align-items:center;gap:.5rem;display:flex}.s-skeleton-blog-grid{grid-template-columns:repeat(1,minmax(0,1fr));gap:1.5rem;display:grid}@media (width>=768px){.s-skeleton-blog-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width>=1024px){.s-skeleton-blog-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}.s-skeleton-blog-card>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.s-skeleton-blog-card-image{aspect-ratio:16/9;width:100%}.s-skeleton-blog-card-title{width:75%;height:1.25rem}.s-skeleton-cart-layout{flex-direction:column;align-items:flex-start;padding-top:1.25rem;padding-bottom:1.5rem;display:flex}@media (width>=1024px){.s-skeleton-cart-layout{flex-direction:row;padding-bottom:5rem}}.s-skeleton-cart-items{width:100%}.s-skeleton-cart-items>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}@media (width>=1024px){.s-skeleton-cart-items{width:calc(100% - 384px)}}.s-skeleton-cart-item{align-items:flex-start;min-height:96px;margin-bottom:1.25rem;display:flex;position:relative}.s-skeleton-cart-item>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.s-skeleton-cart-item{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:.375rem;padding:1.25rem}.main-content>div.s-skeleton-cart-item,.main-content>section.s-skeleton-cart-item{border-radius:0;padding:0}@media (width>=480px){.s-skeleton-cart-item{padding:1.75rem}}.s-skeleton-cart-item:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.s-skeleton-cart-item-image{border-radius:.375rem;flex-shrink:0;width:6rem;height:5rem}.s-skeleton-cart-item-info{flex:1}.s-skeleton-cart-item-info>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.s-skeleton-cart-item-title{width:75%;height:1.25rem}.s-skeleton-cart-item-price{width:4rem;height:1rem}.s-skeleton-cart-item-actions{align-items:center;gap:2rem;display:flex}.s-skeleton-cart-item-qty{border-radius:16px;width:2.5rem;height:2rem}.s-skeleton-cart-item-total{width:5rem;height:1.25rem}.s-skeleton-cart-item-delete{border-radius:9999px;width:2rem;height:2rem}.s-skeleton-cart-summary{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);width:368px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:.375rem;margin-inline-start:1rem;padding:1.25rem;display:none}.main-content>div.s-skeleton-cart-summary,.main-content>section.s-skeleton-cart-summary{border-radius:0;padding:0}@media (width>=1024px){.s-skeleton-cart-summary{display:block}}@media (width>=480px){.s-skeleton-cart-summary{padding:1.75rem}}.s-skeleton-cart-summary-title{width:8rem;height:1.25rem;margin-bottom:1.25rem}.s-skeleton-cart-summary-row{justify-content:space-between;margin-bottom:1.25rem;display:flex}.s-skeleton-cart-summary-label{width:8rem;height:1rem}.s-skeleton-cart-summary-value,.s-skeleton-cart-summary-total-label{width:4rem;height:1.25rem}.s-skeleton-cart-summary-total-value{width:5rem;height:1.5rem}.s-skeleton-cart-summary-button{border-radius:.375rem;width:100%;height:3rem;margin-top:1.25rem}.s-slider-horizontal .s-slider-thumbs{margin-top:1rem}salla-slider:not(.hydrated),.carousel-slider{visibility:visible}salla-slider[type]:not(.hydrated)>div,salla-slider[type]:not(.hydrated) .swiper>div>div,.carousel-slider .swiper{margin-left:-.625rem;margin-right:-.625rem;padding-left:5px;padding-right:5px;display:flex}@media (width>=640px){salla-slider[type]:not(.hydrated)>div,salla-slider[type]:not(.hydrated) .swiper>div>div,.carousel-slider .swiper{padding-left:0;padding-right:0}}salla-slider[type]:not(.hydrated)>div:where([dir=ltr],[dir=ltr] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=ltr],[dir=ltr] *),.carousel-slider .swiper:where([dir=ltr],[dir=ltr] *){padding-right:3rem}@media (width>=1024px){salla-slider[type]:not(.hydrated)>div:where([dir=ltr],[dir=ltr] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=ltr],[dir=ltr] *),.carousel-slider .swiper:where([dir=ltr],[dir=ltr] *){padding-right:0}}salla-slider[type]:not(.hydrated)>div:where([dir=rtl],[dir=rtl] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=rtl],[dir=rtl] *),.carousel-slider .swiper:where([dir=rtl],[dir=rtl] *){padding-left:3rem}@media (width>=1024px){salla-slider[type]:not(.hydrated)>div:where([dir=rtl],[dir=rtl] *),salla-slider[type]:not(.hydrated) .swiper>div>div:where([dir=rtl],[dir=rtl] *),.carousel-slider .swiper:where([dir=rtl],[dir=rtl] *){padding-left:0}}salla-slider[type]:not(.hydrated)>div>div,salla-slider[type]:not(.hydrated) .swiper>div>div>div,.carousel-slider .swiper-wrapper>div{flex-shrink:0;padding-left:5px;padding-right:5px}@media (width>=640px){salla-slider[type]:not(.hydrated)>div>div,salla-slider[type]:not(.hydrated) .swiper>div>div>div,.carousel-slider .swiper-wrapper>div{padding-left:.625rem;padding-right:.625rem}}salla-slider:not([type=carousel]):not([type=thumbs]):not(.hydrated)>div,salla-slider.photos-slider:not(.hydrated)>div{width:100%;margin-left:0;margin-right:0;padding-left:0;padding-right:0}salla-slider:not([type=carousel]):not([type=thumbs]):not(.hydrated)>div>div,salla-slider.photos-slider:not(.hydrated)>div>div{padding:0}salla-slider:not([type=carousel]):not([type=thumbs]):not(.hydrated)>div>div:nth-child(n+2){display:none}salla-slider[type=fullscreen] [slot=items]>div{width:100%;min-height:calc(100vh - 100px)}salla-slider:not(.hydrated){display:block;overflow:hidden}salla-slider div[slot=thumbs]{margin-top:.625rem}salla-slider div[slot=thumbs]>div{height:5rem;padding-left:5px;padding-right:5px}.s-slider-vertical .s-slider-thumbs{width:100%;margin-top:.625rem;margin-left:-.625rem;margin-right:-.625rem}@media (width>=768px){.s-slider-vertical .s-slider-thumbs{width:8rem;height:100%;margin-top:0;margin-bottom:0;margin-left:15px;padding:0}.s-slider-vertical .s-slider-thumbs:where([dir=rtl],[dir=rtl] *){margin-left:0;margin-right:15px}}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{cursor:pointer;--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));border-radius:16px;width:25%;height:4rem;margin-left:5px;margin-right:5px;padding:0;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide *{pointer-events:none}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide:hover{opacity:.8}@media (width>=640px){.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{width:20%}}@media (width>=768px){.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{width:25%;height:5rem}}@media (width>=1024px){.s-slider-thumbs .s-slider-thumbs-container .swiper-slide{width:20%}}.s-slider-vertical .s-slider-thumbs-container .swiper-slide{cursor:pointer;height:4rem;margin:5px 0;padding:0}.s-slider-vertical .s-slider-thumbs-container .swiper-slide *{pointer-events:none}@media (width>=768px){.s-slider-vertical .s-slider-thumbs-container .swiper-slide{width:100%;height:5rem}}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide:after{z-index:1;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);width:100%;height:100%;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000);--tw-ring-inset:inset;--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235/var(--tw-ring-opacity,1));--tw-content:\"\";content:var(--tw-content);border-radius:16px;transition-property:box-shadow;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:absolute;top:0;left:0}input[type=radio].sr-only div.s-slider-thumbs .s-slider-thumbs-container .swiper-slide:after{transition:all .3s}input[type=radio].sr-only:checked~div.s-slider-thumbs .s-slider-thumbs-container .swiper-slide:after{border-color:var(--color-main)}@media (width>=768px){.s-slider-thumbs .s-slider-thumbs-container.has-more-4-slides{padding-left:0;padding-right:0}}.s-slider-thumbs .s-slider-thumbs-container.has-more-4-slides:where([dir=ltr],[dir=ltr] *){padding-right:2.5rem}.s-slider-thumbs .s-slider-thumbs-container.has-more-4-slides:where([dir=rtl],[dir=rtl] *){padding-left:2.5rem}salla-slider .video-entry,salla-slider .model-entry{position:relative}salla-slider .video-entry:before,salla-slider .model-entry:before{pointer-events:none;z-index:1;--tw-translate-x:-50%;--tw-translate-y:-50%;width:4rem;height:4rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));color:#fffc;--tw-content:\"\";content:var(--tw-content);background-color:#0000004d;border-radius:9999px;justify-content:center;align-items:center;font-size:3rem;line-height:1;display:flex;position:absolute;top:50%;left:50%}input[type=radio].sr-only divsalla-slider .video-entry:before,input[type=radio].sr-only div salla-slider .model-entry:before{transition:all .3s}input[type=radio].sr-only:checked~divsalla-slider .video-entry:before,input[type=radio].sr-only:checked~div salla-slider .model-entry:before{border-color:var(--color-main)}.video-entry:before,.model-entry:before{font-family:sallaicons}salla-slider .model-entry .s-toggle-switcher{pointer-events:auto}salla-slider .model-entry:before{--tw-content:\"\";content:var(--tw-content)}.s-slider-thumbs .swiper-slide.video-entry:before,.s-slider-thumbs .swiper-slide.model-entry:before{width:1.75rem;height:1.75rem;font-size:1.25rem;line-height:1.75rem}.s-slider-thumbs .s-slider-thumbs-container .swiper-slide.swiper-slide-thumb-active:after{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000);--tw-ring-color:var(--color-primary)}.s-slider-with-grid-thumbs .s-slider-thumbs .s-slider-thumbs-container .swiper-slide{-o-object-fit:cover;object-fit:cover;margin-left:0!important;margin-right:0!important}.s-slider-with-grid-thumbs .s-slider-thumbs .s-slider-thumbs-container{padding-left:.375rem;padding-right:.375rem}.s-social-share-list.opened{height:auto}salla-user-menu div[slot=trigger]{display:none}.s-user-menu-toggler:before{pointer-events:none;visibility:hidden;z-index:10;opacity:0;--tw-content:\"\";content:var(--tw-content);background-color:#71717abf;width:100vw;height:100vh;transition-duration:.3s;position:fixed;top:0;left:0}.s-user-menu-toggler.opened:before{pointer-events:auto;visibility:visible;content:var(--tw-content);opacity:1}@media (width>=768px){.s-user-menu-toggler.opened:before{pointer-events:none;visibility:hidden;content:var(--tw-content);opacity:0}}.s-user-menu-toggler.opened .s-user-menu-trigger svg{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s-user-menu-toggler.opened .s-user-menu-dropdown{visibility:visible;--tw-translate-y:0px;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.s-user-menu-dropdown-item a{--tw-text-opacity:1;color:rgb(68 68 68/var(--tw-text-opacity,1));align-items:center;padding:.625rem 1.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.s-user-menu-dropdown-item a:hover{background-color:#e5e7eb4d}@media (width>=640px){.s-user-menu-dropdown-item a{font-size:.875rem;line-height:1.25rem}}.s-wallet-no-content .icon{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:8rem;height:8rem;color:rgb(209 213 219/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;margin-bottom:1rem;font-size:3rem;line-height:1;display:flex}.s-menu-products-wrapper{flex-grow:1;padding:2rem}@keyframes sFadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.s-product-card-animated{animation:1.2s cubic-bezier(.16,1,.3,1) forwards sFadeInUp}@media (prefers-reduced-motion:reduce){.s-product-card-animated{opacity:1;animation:none;transform:none}}:root{--s-radius:16px;--infinte-color:#c9c9c9;--main-text-color:#231f1e;--main-text-color-dark:#2b2d34;--color-text:#7c8082;--bg-gray:#c6c7ce1a;--color-grey:#f5f7f9;--color-light-grey:#eee;--font-sm:.868571rem;--mm-ocd-width:calc(100% - 51px);--safe-top:max(env(safe-area-inset-top,0px), var(--app-safe-area-top,0px));--safe-bottom:max(env(safe-area-inset-bottom,0px), var(--app-safe-area-bottom,0px));--flow-safe-top:max(0px, env(safe-area-inset-top,0px) - var(--app-safe-area-top,0px));--flow-safe-bottom:max(0px, env(safe-area-inset-bottom,0px) - var(--app-safe-area-bottom,0px))}body{color:var(--main-text-color);font-size:15px;font-weight:400;line-height:26px;position:relative}html{-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;width:100%;height:100%;position:relative}body{border:0;margin:0;padding:0}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{margin-bottom:0;font-weight:600}a{text-decoration:none;transition:color .2s}img{max-width:100%}a:focus{outline:none;text-decoration:none}ul,li{margin:0;padding:0;list-style:none}h1{font-size:1.875rem;line-height:2.25rem}h2{font-size:1.25rem;line-height:1.75rem}h3{font-size:1.25rem;line-height:38px}.f-color{color:#ff6767}h5.subtitle{font-size:16px;font-weight:400}salla-hook{all:unset;display:none}html{scroll-behavior:smooth}.cursor-pointer *{pointer-events:none}.flip-x{transform:scaleX(-1)}input[type=file]{display:none}html body{padding-top:var(--app-safe-area-top,0px);padding-bottom:var(--app-safe-area-bottom,0px)}body [type=text]:focus,body [type=email]:focus,body [type=url]:focus,body [type=password]:focus,body [type=number]:focus,body [type=date]:focus,body [type=datetime-local]:focus,body [type=month]:focus,body [type=search]:focus,body [type=tel]:focus,body [type=time]:focus,body [type=week]:focus,body [multiple]:focus,body textarea:focus,body select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000)}.text-start:where([dir=ltr],[dir=ltr] *){text-align:left}.text-start:where([dir=rtl],[dir=rtl] *){text-align:right}input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}[type=submit]{-webkit-appearance:listitem}input[type=number]{-moz-appearance:textfield}.unicode{unicode-bidi:plaintext}.spinner-loader{border-right-color:var(--color-primary)!important}.spinner-loader.reverse{background-color:#f98181;border-right-color:#9f7171!important}.hide-scroll{-ms-overflow-style:none;scrollbar-width:none;overflow-y:scroll}.hide-scroll::-webkit-scrollbar{display:none}.remove-item-btn:after{content:\"\";font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-weight:400;line-height:1;font-family:sallaicons!important}.cart-thumb{z-index:30;transition:all .3s cubic-bezier(.2,1,.3,1);position:fixed}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}body.fslightbox-open #tidio-chat-iframe,body.fslightbox-open .fb_reset,body.fslightbox-open [id^=gb-widget],body.modal-open #tidio-chat-iframe,body.modal-open .fb_reset,body.modal-open [id^=gb-widget]{display:none!important}.loader:before{content:\"\";opacity:1;border:2px solid;border-top-color:var(--color-primary);border-bottom-color:#eee;border-left-color:var(--color-primary);border-right-color:#eee;border-radius:50%;width:20px;height:20px;animation:1s ease-in-out infinite loader;display:inline-block}.btn--danger .loader:before{border-top-color:#ff6767;border-left-color:#ff6767}.loader--small:before{width:16px;height:16px}@keyframes loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pulse-anime{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.pulse-anime{animation-name:pulse-anime;animation-timing-function:ease-in-out}.content .content-entry img{margin:15px 0 25px}.content .content-entry ul,.content .content-entry li{list-style:inherit!important}.content .content-entry ol{list-style:auto!important}salla-modal:not(.hydrated){display:none}salla-slider,salla-advertisement{display:block}salla-offer-modal,salla-login-modal,salla-scopes{pointer-events:none;z-index:50;position:fixed;inset:0}salla-localization-modal{pointer-events:none;z-index:210;position:fixed;inset:0}@media (width<=767px){.s-modal-container{z-index:999}.s-modal-body{bottom:15px}.s-search-modal .s-modal-body{background-color:#fff;border-radius:0;max-width:100%;margin:0;bottom:0;transform:none}}.videoWrapper{height:0;padding-bottom:56.25%;position:relative}.videoWrapper>*{width:100%;height:100%;max-width:initial;position:absolute;top:0;left:0}.grid-trigger{cursor:pointer;--tw-text-opacity:1;width:2.5rem;height:2.5rem;color:rgb(156 163 175/var(--tw-text-opacity,1));border-radius:16px;justify-content:center;align-items:center;margin-left:.25rem;margin-right:.25rem;font-size:1.25rem;line-height:1.75rem;display:flex}.grid-trigger *{pointer-events:none}.flex-center{justify-content:center;align-items:center;display:flex}.center-between{justify-content:space-between;align-items:center;display:flex}.grow-0{flex-grow:0!important}.basis-0{flex-basis:0}.gradient-bg{--tw-gradient-from:var(--color-primary) var(--tw-gradient-from-position);--tw-gradient-to:var(--color-primary-dark) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}[dir=ltr] .gradient-bg{background-image:linear-gradient(to right, var(--tw-gradient-stops))}[dir=rtl] .gradient-bg{background-image:linear-gradient(to left, var(--tw-gradient-stops))}@media (width<=1024px){.gradient-bg.profile-header{background-image:none}.gradient-bg.profile-header .breadcrumbs a,.gradient-bg.profile-header .breadcrumbs span,.gradient-bg.profile-header .breadcrumbs .arrow{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}}.badge{border-radius:9999px;justify-content:center;align-items:center;min-width:20px;height:1.25rem;padding:.25rem;font-size:.75rem;line-height:1rem;display:inline-flex}.badge--red{--tw-bg-opacity:1;background-color:rgb(248 113 113/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.copy-icon{font-size:.75rem;line-height:1rem}.s-localization-modal-inner{width:100%}.s-rating-modal-wrap .s-modal-body{position:relative!important}.s-verify-back{top:.5rem}.s-verify-back svg{max-width:18px;fill:rgba(107, 114, 128, var(--tw-text-opacity))}[dir=rtl] .s-verify-back{right:.5rem}[dir=ltr] .s-verify-back{left:.5rem}@media (width<=639px){.s-verify-back{display:none}}.article--main iframe{width:100%;height:30vw}@media (width<=639px){.article--main iframe{height:50vw}}.cart-submit-wrap{justify-content:space-between;align-items:center;gap:.625rem;margin-left:-5px;margin-right:-5px;display:flex}.cart-submit-wrap:where([dir=ltr],[dir=ltr] *){flex-wrap:wrap}.cart-submit-wrap>*{flex-grow:1;margin-left:5px;margin-right:5px}.s-button-btn,.s-price-range-number-input{border-radius:16px}.s-app-install-banner{z-index:999;--tw-drop-shadow:drop-shadow(0 4px 3px #00000012) drop-shadow(0 2px 2px #0000000f);width:95%;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);background-color:color-mix(in srgb, var(--color-primary) 15%, white);border-radius:16px;flex-direction:row;align-items:center;gap:.5rem;margin:1rem auto;padding:.75rem;display:none;position:fixed;left:0;right:0}.s-app-install-banner[open=false]{display:none}.s-app-install-banner[open=true][position=top]{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.5s;display:flex}.s-app-install-banner[open=true][position=bottom]{animation:.6s linear slideUpFromBottom;display:flex}.s-app-install-banner[position=top]{border-radius:0;width:100%;margin:0;position:relative;top:0}.s-app-install-banner[position=bottom]{bottom:0}@keyframes slideDownFromBottom{0%{opacity:1;transform:translateY(0%)}to{opacity:0;transform:translateY(100%)}}.s-app-install-banner[closing][position=bottom]{animation:.6s linear forwards slideDownFromBottom}.s-app-install-banner-title{color:var(--color-primary);font-size:1rem;font-weight:700;line-height:1.5rem}.s-app-install-banner-sub-title{max-width:95%;font-size:.875rem;font-weight:400;line-height:1.25rem}.s-app-install-banner-cta{color:var(--color-primary);text-decoration-line:underline}.s-app-install-banner-cancel-button{position:absolute;top:.5rem}input[type=radio].sr-only div.s-app-install-banner-cancel-button{transition:all .3s}input[type=radio].sr-only:checked~div.s-app-install-banner-cancel-button{border-color:var(--color-main)}.s-app-install-banner-cancel-button:where([dir=ltr],[dir=ltr] *){right:.75rem}.s-app-install-banner-cancel-button:where([dir=rtl],[dir=rtl] *){left:.75rem}.blog-category ul:where([dir=ltr],[dir=ltr] *),.blog-category ol:where([dir=ltr],[dir=ltr] *){padding-left:1rem}.blog-category ul:where([dir=rtl],[dir=rtl] *),.blog-category ol:where([dir=rtl],[dir=rtl] *){padding-right:1rem}.blog-category ul li{list-style:outside}.blog-category ol li{list-style:auto}.blog-category a{color:var(--color-primary)}.blog-category a:hover{color:var(--color-primary-dark)}.collapse-content{opacity:0;grid-template-rows:0fr;transition:grid-template-rows .225s ease-out,opacity .225s ease-out;display:grid}.collapse-content>*{min-height:0;overflow:hidden}.collapse-content.is-closed{overflow:hidden}.collapse-content.is-opened{opacity:1;grid-template-rows:1fr}@keyframes slideInStart{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}.slide-in-start{animation:.5s ease-out forwards slideInStart}@keyframes scalePulse{0%{transform:scale(.88)}50%{transform:scale(1.2)}to{transform:scale(1)}}.scale-pulse{animation:.4s ease-out scalePulse}.fade-out-collapse{opacity:0;transition:height .3s ease-in-out,opacity .3s ease-in-out;overflow:hidden;height:0!important}@keyframes s-skeleton-pulse-fade{0%,to{opacity:1}50%{opacity:.4}}.s-skeleton-pulse{animation:1.5s ease-in-out infinite s-skeleton-pulse-fade!important;transform:none!important}main>.s-block:nth-of-type(n+4)[style*=min-height]{content-visibility:auto}.s-skeleton-slider-image{height:380px!important}@media (width<=767px){.s-skeleton-detail-images .s-skeleton-slider-thumbs{display:none!important}}@keyframes fadeInDown{0%{transform:translateY(-15px)}to{opacity:1;transform:translate(0,0)}}.animated{animation-duration:.4s;animation-fill-mode:both}.animatedfadeInDown{opacity:0}.fadeInDown{opacity:0;animation-name:fadeInDown}@keyframes toRightFromLeft{49%{transform:translate(100%)}50%{opacity:0;transform:translate(-100%)}51%{opacity:1}}@keyframes toTopFromBottom{0%{opacity:0;transform:translate(50px)}to{transform:translate(0);opacity:1!important}}@keyframes delayKeyframe{0%{opacity:0}to{opacity:0}}@keyframes rubberBand{0%{transform:scale(1)}30%{transform:scale(1.25,.75)}40%{transform:scale(.75,1.25)}50%{transform:scale(1.15,.85)}65%{transform:scale(.95,1.05)}75%{transform:scale(1.05,.95)}to{transform:scale(1)}}.rubberBand{animation-name:rubberBand;animation-duration:1s;animation-iteration-count:1;animation-fill-mode:both}.rtl .rtl-range-slider,[dir=rtl] .rtl-range-slider{transform:rotateY(180deg)}.rtl .rtl-range-numbers,[dir=rtl] .rtl-range-numbers{flex-direction:row-reverse}.rtl .form-select,.rtl select,[dir=rtl] .form-select,[dir=rtl] select{background-position:.5rem;padding-right:12px}.rtl .fix-align,[dir=rtl] .fix-align{display:inline-block;transform:translateY(-2px)}.rtl .flatpickr-months .numInputWrapper .cur-year,[dir=rtl] .flatpickr-months .numInputWrapper .cur-year{padding:0 15px 0 0}.sf-dump{direction:ltr}[dir=ltr] .with-arrow .sicon-keyboard_arrow_left:before,[dir=ltr] nav .sicon-keyboard_arrow_left:before,[dir=ltr] .sub-menu .has-children>a:after{content:\"\"}[dir=ltr] .s-breadcrumb-arrow svg{transform:scaleX(-1)}[dir=ltr] .flatpickr-months .numInputWrapper .cur-year{padding:0 0 0 15px}[dir=ltr] .flatpickr-months [class^=arrow]{right:unset;left:0}input[type=radio].sr-only div.absolute{transition:all .3s}input[type=radio].sr-only:checked~div.absolute{border-color:var(--color-main)}input[type=text]:disabled{color:#838383}.form-label{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));margin-bottom:.625rem;font-size:.875rem;font-weight:700;line-height:1.25rem;display:block}@media (width>=640px){.form-label{margin-top:1px}}@media (width>=768px){.form-label{margin-bottom:0}}.form-input{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1));border-radius:16px;width:100%;height:2.5rem;font-size:.875rem;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input:focus{border-color:var(--color-primary);--tw-ring-color:transparent}.form-input:is(.dark *){--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))}.form-input:focus:is(.dark *){border-color:var(--color-primary)}.form-input{appearance:none}textarea.form-input{height:6rem}.has-error{--tw-border-opacity:1;border-color:rgb(248 113 113/var(--tw-border-opacity,1))}.has-error:focus{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity,1))}.has-success{--tw-border-opacity:1;border-color:rgb(34 197 94/var(--tw-border-opacity,1))}.has-success:focus{--tw-border-opacity:1;border-color:rgb(22 163 74/var(--tw-border-opacity,1))}input[type=text],input[type=email],input[type=password],input[type=tel],input[type=number],input[type=search],input[type=url],textarea,select{font-size:16px!important}@media screen and (width<=768px){input,textarea,select{transform:scale(1);font-size:16px!important}}salla-button[width=wide]{width:100%}salla-button.copied .s-button-text{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}salla-button.copied i:before{content:\"\";--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.btn{white-space:nowrap;border-radius:16px;flex:1;justify-content:center;align-items:center;padding:.5rem 1.5rem .625rem;font-size:.875rem;font-weight:700;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.btn:hover{opacity:.8}.btn .loader{opacity:0;width:0;height:16px;transition:all .3s;transform:scale(0)}.btn--is-loading{pointer-events:none}.btn--is-loading .loader{opacity:1;width:16px;margin:0 5px;transform:scale(1)}.btn--delete .loader{width:15px}.btn--delete .loader:before{border-color:#0000 #fff #fff #0000;width:12px;height:12px}.btn--delete.btn--is-loading .icon{opacity:0}.btn--quantity{--tw-text-opacity:1;width:2.75rem;color:rgb(156 163 175/var(--tw-text-opacity,1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn--quantity:hover{color:var(--color-primary)}.btn__text{pointer-events:none;transition-property:transform;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block}.btn--wishlist{margin:0}.btn--wishlist:where([dir=ltr],[dir=ltr] *){margin-left:.125rem}.btn--wishlist:where([dir=rtl],[dir=rtl] *){margin-right:.125rem}.btn--wishlist:hover{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.btn--wishlist.is-added{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.btn--rounded-gray{white-space:nowrap;background-color:#e5e7eb80;border-radius:9999px;flex-grow:0;justify-content:center;align-items:center;width:100%;padding:.5rem .875rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.btn--rounded-gray:hover{background-color:#e5e7ebb3}.btn--circle-gray{background-color:#e5e7eb4d;border-radius:9999px;justify-content:center;align-items:center;width:2.25rem;height:2.25rem;padding:.75rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.btn--circle-gray:hover{background-color:#e5e7eb80}.btn--icon{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:2.5rem;height:2.5rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;margin-left:.25rem;margin-right:.25rem;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.main-content>div.btn--icon,.main-content>section.btn--icon{border-radius:0;padding:0}.btn--icon:hover{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.btn--icon i{pointer-events:none}.btn--icon i.sicon-heart{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1))}.btn--share{margin:0}.btn--close{z-index:50;--tw-text-opacity:1;width:3.5rem;height:3rem;color:rgb(239 68 68/var(--tw-text-opacity,1));font-size:1.5rem;line-height:2rem;display:none;position:absolute;top:0}input[type=radio].sr-only div.btn--close{transition:all .3s}input[type=radio].sr-only:checked~div.btn--close{border-color:var(--color-main)}@media (width>=480px){.btn--close{display:block}}.btn--close:where([dir=ltr],[dir=ltr] *){right:0}.btn--close:where([dir=rtl],[dir=rtl] *){left:0}.btn--close-sm{z-index:50;--tw-translate-y:-100%;width:51px;height:51px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));opacity:0;font-size:1.25rem;line-height:1.75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);position:fixed;top:0}.btn--close-sm:where([dir=ltr],[dir=ltr] *){right:0}.btn--close-sm:where([dir=rtl],[dir=rtl] *){left:0}.btn--collapse{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:100%;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:16px;justify-content:center;align-items:center;padding-top:.625rem;padding-bottom:.625rem;font-size:.875rem;line-height:1.25rem;display:flex}@media (width>=480px){.btn--collapse:where([dir=ltr],[dir=ltr] *){padding-left:1.75rem;padding-right:1.25rem}.btn--collapse:where([dir=rtl],[dir=rtl] *){padding-left:1.25rem;padding-right:1.75rem}}.btn.btn:disabled{cursor:default;--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);background-color:#0000}.btn.btn:disabled:hover{background-color:#0000}.btn:disabled .s-button-text{opacity:.7}.btn--danger{--tw-bg-opacity:1;background-color:rgb(248 113 113/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.btn--danger:hover{opacity:.8}.btn--primary{border-width:1px;border-color:var(--color-primary);background-color:var(--color-primary);color:var(--color-primary-reverse)}.btn--outline-primary{border-width:1px;border-color:var(--color-primary);color:var(--color-primary)}.btn--outline-primary:hover{background-color:var(--color-primary);color:var(--color-primary-reverse)}.btn--outline{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.main-content>div.btn--outline,.main-content>section.btn--outline{border-radius:0;padding:0}.btn--outline:hover{border-color:var(--color-primary);background-color:var(--color-primary);--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.btn--outline.light{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));background-color:#0000}.btn--rounded-full{border-radius:9999px}.rounded-icon{border-radius:9999px;justify-content:center;align-items:center;width:4rem;height:4rem;font-size:1.5rem;line-height:2rem;display:flex}button.btn--coupon{flex-shrink:0;height:40px;position:absolute;top:0}input[type=radio].sr-only divbutton.btn--coupon{transition:all .3s}input[type=radio].sr-only:checked~divbutton.btn--coupon{border-color:var(--color-main)}button.btn--coupon:where([dir=ltr],[dir=ltr] *){border-top-left-radius:0;border-bottom-left-radius:0;right:0}button.btn--coupon:where([dir=rtl],[dir=rtl] *){border-top-right-radius:0;border-bottom-right-radius:0;left:0}button.btn--coupon .s-button-text{display:flex!important}salla-button.has-not-coupon button .icon,salla-button.has-coupon button .coupon-text{display:none}salla-button.has-coupon button{width:3rem;padding-left:0;padding-right:0}.link--primary{color:var(--color-primary);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.link--primary:hover{color:var(--color-primary-dark)}#btn-show-more{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}#btn-show-more.is-expanded{pointer-events:none;opacity:0}#blog-like.liked i{background-color:var(--color-primary);width:18px;height:16px;display:inline-block;position:relative;top:-2px;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='16'%20viewBox='0%200%2018%2016'%20fill='none'%3E%3Cpath%20d='M1.5%206.74998H3.75V15.75H1.5C1.08579%2015.75%200.75%2015.4142%200.75%2015V7.49998C0.75%207.08577%201.08579%206.74998%201.5%206.74998ZM5.46967%205.78031L10.2701%200.979957C10.402%200.847994%2010.6109%200.833152%2010.7602%200.945119L11.3996%201.4247C11.7632%201.69734%2011.927%202.1619%2011.8148%202.60224L10.9499%205.99998H15.75C16.5784%205.99998%2017.25%206.67155%2017.25%207.49998V9.07822C17.25%209.2742%2017.2116%209.46822%2017.137%209.64935L14.8162%2015.2855C14.7005%2015.5665%2014.4266%2015.75%2014.1227%2015.75H6C5.58579%2015.75%205.25%2015.4142%205.25%2015V6.31064C5.25%206.11173%205.32902%205.92096%205.46967%205.78031Z'%20fill='%23236E4C'/%3E%3C/svg%3E\") 50%/contain no-repeat;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='16'%20viewBox='0%200%2018%2016'%20fill='none'%3E%3Cpath%20d='M1.5%206.74998H3.75V15.75H1.5C1.08579%2015.75%200.75%2015.4142%200.75%2015V7.49998C0.75%207.08577%201.08579%206.74998%201.5%206.74998ZM5.46967%205.78031L10.2701%200.979957C10.402%200.847994%2010.6109%200.833152%2010.7602%200.945119L11.3996%201.4247C11.7632%201.69734%2011.927%202.1619%2011.8148%202.60224L10.9499%205.99998H15.75C16.5784%205.99998%2017.25%206.67155%2017.25%207.49998V9.07822C17.25%209.2742%2017.2116%209.46822%2017.137%209.64935L14.8162%2015.2855C14.7005%2015.5665%2014.4266%2015.75%2014.1227%2015.75H6C5.58579%2015.75%205.25%2015.4142%205.25%2015V6.31064C5.25%206.11173%205.32902%205.92096%205.46967%205.78031Z'%20fill='%23236E4C'/%3E%3C/svg%3E\") 50%/contain no-repeat}.custom-radios div{display:inline-block}.custom-radios input[type=radio]{display:none}.custom-radios input[type=radio]+label{cursor:pointer}.custom-radios input[type=radio]+label span{vertical-align:middle;cursor:pointer;text-align:center;background-position:50%;background-repeat:no-repeat;border:2px solid #fff;border-radius:16px;width:40px;height:40px;line-height:40px;display:inline-block;box-shadow:0 1px 3px #00000013}.custom-radios input[type=radio]+label span:after{opacity:0;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;content:\"\";color:#fff;font-size:20px;font-style:normal;font-weight:700;line-height:1;transition:all .3s;display:inline-block;transform:scale(.4);font-family:sallaicons!important}.custom-radios input[type=radio]:checked+label span:after{opacity:1;transform:scale(1)}.custom-radios input[type=radio]:disabled+label{opacity:.45}.custom-radios--rounded input[type=radio]+label span{background-color:#ddd;border-radius:50%;justify-content:center;align-items:center;width:30px;height:30px;display:inline-flex}.custom-radios--rounded input[type=radio]+label span:after{content:\"\";background-color:#f1f1f1;border-radius:50%;width:14px;height:14px}.custom-radios--icons{font-size:40px;line-height:42px}.custom-radios--icons input[type=radio]+label{filter:grayscale();transition:transform .2s,color .3s}.custom-radios--icons input[type=radio]+label:hover{filter:grayscale(0)}.custom-radios--icons input[type=radio]:checked+label{filter:grayscale(0);transform:scale(1.25)translateY(-3px)}.custom-radios--icons input[type=radio]:checked+label .rate-title{color:#2b2d34;font-weight:700}.radio-images__label{cursor:pointer;border-radius:16px;width:100%;height:6rem;margin-bottom:.125rem;display:inline-block;overflow:hidden}.radio-images__label *{pointer-events:none}@media (width>=768px){.radio-images__label{height:5rem}}.radio-images__badge{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));white-space:nowrap;--tw-bg-opacity:1;background-color:rgb(248 113 113/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));border-radius:9999px;padding-left:.375rem;padding-right:.375rem;display:block;position:absolute;bottom:2.5rem;left:50%}input[type=radio].sr-only div.radio-images__badge{transition:all .3s}input[type=radio].sr-only:checked~div.radio-images__badge{border-color:var(--color-main)}.radio-images input[type=radio]{display:none}.radio-images input[type=radio]+label{position:relative}.radio-images input[type=radio]+label:after{content:\"\";speak:never;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;opacity:0;background:#fff;border-radius:50%;justify-content:center;align-items:center;width:20px;height:20px;font-size:14px;font-style:normal;font-weight:400;line-height:1;transition:transform .3s;display:flex;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)scale(.4);font-family:sallaicons!important}.radio-images input[type=radio]+label:before{content:\"\";opacity:0;background-color:#000;transition:opacity .3s;position:absolute;inset:0}.radio-images input[type=radio]:checked+label:after{opacity:1;transform:translate(-50%,-50%)scale(1)}.radio-images input[type=radio]:checked+label:before{opacity:.3}.radio-images input[type=radio]:disabled+label{opacity:.45}.site-header{display:contents}.site-header .s-skeleton-search{display:none}.site-header__bar-outer{min-height:72px}@media (width>=1024px){.site-header__bar-outer{min-height:88px}}.site-header__bar{z-index:40;border-color:#0000;border-bottom-width:1px;transition:background-color .25s,border-color .25s,box-shadow .25s}.site-header__bar.is-scrolled{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);position:fixed;left:0;right:0}.main-content>div.site-header__bar.is-scrolled,.main-content>section.site-header__bar.is-scrolled{border-radius:0;padding:0}.site-header__bar.is-scrolled{top:var(--app-safe-area-top,0px)}.site-header__bar-inner{grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;min-height:72px;display:grid}@media (width>=1024px){.site-header__bar-inner{min-height:88px}}.site-header__bar-inner{transition:min-height .25s}.site-header__bar.is-scrolled .site-header__bar-inner{min-height:56px}@media (width>=1024px){.site-header__bar.is-scrolled .site-header__bar-inner{min-height:64px}}.site-header__nav-toggle{justify-self:start;align-items:center;gap:.375rem;display:flex}@media (width>=1024px){.site-header__nav-toggle{gap:1rem}}.site-header__actions{justify-self:end;align-items:center;display:flex}@media (width>=640px){.site-header__actions{gap:.375rem}}@media (width>=1024px){.site-header__actions{gap:1rem}}@media (width<=767px){.site-header:not(.site-header--home) .site-header__ad,.site-header:not(.site-header--home) .site-header__intro,.site-header--product .site-header__ad,.site-header--product .site-header__intro{display:none}.site-header:not(.site-header--home) .site-header__bar-outer,.site-header--product .site-header__bar-outer{min-height:0}.site-header:not(.site-header--home) .site-header__bar,.site-header--product .site-header__bar{visibility:hidden;height:0;overflow:hidden}.site-header__nav-toggle button,.site-header--home .site-header__actions salla-cart-summary{display:none}.site-header--home .site-header__actions salla-user-menu{visibility:hidden;width:0;height:0;position:absolute;overflow:hidden}}.header-action{--tw-text-opacity:1;width:2.5rem;height:2.5rem;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:9999px;place-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-grid}.header-action:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));color:var(--color-primary)}.header-action svg:not(.s-user-menu-dropdown-item *){width:1.5rem;height:1.5rem}@media (width<=767px){.header-action.site-header__search{display:none}}.site-header__burger{width:1.25rem;height:1.25rem;display:block;position:relative}.site-header__burger span{border-radius:9999px;height:.125rem;position:absolute}input[type=radio].sr-only div.site-header__burger span{transition:all .3s}input[type=radio].sr-only:checked~div.site-header__burger span{border-color:var(--color-main)}.site-header__burger span{background-color:color-mix(in srgb, currentColor 80%, transparent);transition:width .25s cubic-bezier(.4,0,.2,1)}.site-header__burger span:first-child{top:0;width:70%;transition-delay:60ms;inset-inline-end:0}.site-header__burger span:nth-child(2){top:7px;width:100%;transition-delay:30ms;inset-inline:0}.site-header__burger span:nth-child(3){top:14px;width:70%;transition-delay:0s;inset-inline-start:0}.header-action:hover .site-header__burger span,.header-action:focus-visible .site-header__burger span{width:100%}.site-header__actions .s-user-menu-trigger{background-color:#0000;border-style:none;padding:0}.site-header__actions>div:has(>salla-user-menu){align-items:center;display:flex}.site-header__actions .s-user-menu-login-btn{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));border-style:none;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.site-header__actions .s-user-menu-login-btn:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));color:var(--color-primary)}@media (width>=768px){.site-header__actions salla-user-menu{position:relative}.site-header__actions .s-user-menu-dropdown{border-radius:16px;position:absolute;top:100%;left:auto;right:auto;overflow:hidden}input[type=radio].sr-only div.site-header__actions .s-user-menu-dropdown{transition:all .3s}input[type=radio].sr-only:checked~div.site-header__actions .s-user-menu-dropdown{border-color:var(--color-main)}.site-header__actions .s-user-menu-dropdown{inset-inline-end:0}}@media (width<=767px){.site-header__actions .s-user-menu-toggler{z-index:210;pointer-events:none;visibility:visible;position:fixed;inset:0}.site-header__actions .s-user-menu-toggler:before{content:\"\";background-color:#0000;position:absolute;inset:0}input[type=radio].sr-only div.site-header__actions .s-user-menu-toggler:before{transition:all .3s}input[type=radio].sr-only:checked~div.site-header__actions .s-user-menu-toggler:before{border-color:var(--color-main)}.site-header__actions .s-user-menu-toggler:before{transition:background-color .3s}.site-header__actions .s-user-menu-toggler.opened{pointer-events:auto}.site-header__actions .s-user-menu-toggler.opened:before{background-color:#00000080}.site-header__actions .s-user-menu-dropdown{overscroll-behavior:contain;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:0 25px 50px -12px #00000040;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);max-height:85vh;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-top-left-radius:16px;border-top-right-radius:16px;position:absolute;bottom:0;left:0;right:0;overflow-y:auto}input[type=radio].sr-only div.site-header__actions .s-user-menu-dropdown{transition:all .3s}input[type=radio].sr-only:checked~div.site-header__actions .s-user-menu-dropdown{border-color:var(--color-main)}.main-content>div.site-header__actions .s-user-menu-dropdown,.main-content>section.site-header__actions .s-user-menu-dropdown{border-radius:0;padding:0}.site-header__actions .s-user-menu-dropdown{padding-bottom:calc(76px + var(--safe-bottom));transition:transform .3s cubic-bezier(.4,0,.2,1);transform:translateY(100%)}.site-header__actions .s-user-menu-dropdown:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1));border-radius:9999px;width:2.5rem;height:.25rem;margin-top:.625rem;margin-left:auto;margin-right:auto;display:block}.s-user-menu-toggler.opened .s-user-menu-dropdown{transform:translateY(0)}}.site-header__brand{justify-self:center;align-items:center;display:flex}.site-header__brand img{-o-object-fit:contain;object-fit:contain;width:auto;max-width:160px;height:3rem;transition:height .25s}.site-header__bar.is-scrolled .site-header__brand img{height:2.25rem}@media (prefers-reduced-motion:reduce){.site-header__bar,.site-header__bar-inner,.site-header__brand img,.site-header__burger span,.site-nav-drawer,.site-nav-drawer__foot,.site-nav-drawer__back{transition:none}.site-nav-drawer__foot{opacity:1;transform:none}}.site-header__intro-inner{text-align:center;flex-direction:column;align-items:center;gap:.75rem;padding-top:1.25rem;padding-bottom:1.25rem;display:flex}.site-header__intro-title{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1));font-size:1.125rem;font-weight:600;line-height:1.75rem}.site-header__intro-text{--tw-text-opacity:1;max-width:36rem;color:rgb(107 114 128/var(--tw-text-opacity,1));font-size:1rem;line-height:1.5rem}.site-header__social-slot.has-links{min-height:48px}.site-header__social-slot:not(.has-links) .s-skeleton-wrapper{display:none}.site-header__social .s-social-list{align-items:center;gap:.75rem;display:flex}.site-header__social .s-social-link a{width:3rem;height:3rem;color:var(--color-primary);background-color:color-mix(in srgb, var(--color-primary) 5%, transparent);border-style:none;border-radius:9999px;place-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-grid}.site-header__social .s-social-link a svg{fill:currentColor;width:1.25rem;height:1.25rem}.site-header__social .s-social-link a:hover .s-social-icon{color:var(--color-primary);background-color:#0000}.site-header__social a:hover .s-social-icon{background-color:var(--color-primary);--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.site-nav-drawer-root{z-index:200;pointer-events:none;position:fixed;inset:0}.site-nav-drawer-root.is-open{pointer-events:auto}.site-nav-drawer__backdrop{background-color:#00000080;position:absolute;inset:0}input[type=radio].sr-only div.site-nav-drawer__backdrop{transition:all .3s}input[type=radio].sr-only:checked~div.site-nav-drawer__backdrop{border-color:var(--color-main)}.site-nav-drawer__backdrop{opacity:0;transition:opacity .3s}.site-nav-drawer-root.is-open .site-nav-drawer__backdrop{opacity:1}.site-nav-drawer{--root-col-w:min(400px, 90vw);--child-col-w:min(230px, 76vw);--visible-children:1;--shown-children:max(0, min(var(--col-count,1) - 1, var(--visible-children)));--extra-children:max(0, (var(--col-count,1) - 1) - var(--visible-children));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-shadow:0 25px 50px -12px #00000040;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);flex-direction:column;display:flex;position:absolute;top:0;bottom:0;overflow:hidden}input[type=radio].sr-only div.site-nav-drawer{transition:all .3s}input[type=radio].sr-only:checked~div.site-nav-drawer{border-color:var(--color-main)}.main-content>div.site-nav-drawer,.main-content>section.site-nav-drawer{border-radius:0;padding:0}.site-nav-drawer{width:min(96vw, var(--root-col-w) + var(--child-col-w) * var(--shown-children));will-change:transform;transition:transform .32s cubic-bezier(.4,0,.2,1),width .3s cubic-bezier(.4,0,.2,1);inset-inline-start:0;transform:translate(-100%)}@media (width>=768px){.site-nav-drawer{--visible-children:2}}[dir=rtl] .site-nav-drawer{transform:translate(100%)}.site-nav-drawer-root.is-open .site-nav-drawer{transform:translate(0)}.site-nav-drawer__head{flex-shrink:0;justify-content:space-between;align-items:center;padding:2rem 1rem;display:flex}.site-nav-drawer__head-start{align-items:center;min-width:0;display:flex}.site-nav-drawer__brand{align-items:center;display:inline-flex}.site-nav-drawer__brand img{-o-object-fit:contain;object-fit:contain;width:auto;max-width:150px;height:2.5rem}.site-nav-drawer__close{--tw-text-opacity:1;width:2.25rem;height:2.25rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;justify-content:center;align-items:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-nav-drawer__close:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.site-nav-drawer__close svg{width:1.25rem;height:1.25rem}.site-nav-drawer__viewport{flex:1;overflow:hidden}.site-nav-drawer__track{width:max-content;height:100%;transform:translateX(calc(var(--child-col-w) * var(--extra-children) * -1));transition:transform .32s cubic-bezier(.4,0,.2,1);display:flex}[dir=rtl] .site-nav-drawer__track{transform:translateX(calc(var(--child-col-w) * var(--extra-children)))}.site-nav-drawer__panel{flex-grow:0;flex-shrink:0;flex-basis:var(--child-col-w) ;height:100%;padding-top:.5rem;padding-bottom:.5rem;overflow-y:auto}.site-nav-drawer__panel:first-child{flex-basis:var(--root-col-w)}.site-nav-drawer__panel+.site-nav-drawer__panel{--tw-border-opacity:1;border-inline-start-width:1px;border-inline-start-color:rgb(243 244 246/var(--tw-border-opacity,1))}@media (width<=767px){.site-nav-drawer{--mobile-col-w:100vw;width:auto;max-height:85vh;padding-bottom:calc(76px + var(--safe-bottom));border-start-start-radius:1rem;border-start-end-radius:1rem;inset-block:auto 0;inset-inline:0;transform:translateY(100%)}.site-nav-drawer:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1));border-radius:9999px;flex-shrink:0;width:2.5rem;height:.25rem;margin:.625rem auto .25rem;display:block}[dir=rtl] .site-nav-drawer{transform:translateY(100%)}.site-nav-drawer-root.is-open .site-nav-drawer{transform:translateY(0)}.site-nav-drawer__head{padding-top:.75rem;padding-bottom:.75rem}.site-nav-drawer__panel,.site-nav-drawer__panel:first-child{flex-basis:var(--mobile-col-w)}.site-nav-drawer__viewport{overscroll-behavior:contain;min-height:0;overflow:hidden auto}.site-nav-drawer__track{height:auto;min-height:100%;transform:translateX(calc(var(--mobile-col-w) * (var(--col-count,1) - 1) * -1))}[dir=rtl] .site-nav-drawer__track{transform:translateX(calc(var(--mobile-col-w) * (var(--col-count,1) - 1)))}.site-nav-drawer__panel{height:auto;min-height:100%;overflow:visible}}.site-nav-drawer__list{padding-left:1rem;padding-right:1rem}.site-nav-drawer__list li{opacity:0;transition:opacity .35s,transform .35s cubic-bezier(.4,0,.2,1);transform:translateY(10px)}.site-nav-drawer__list.is-in li{opacity:1;transform:none}.site-nav-drawer__link{text-align:start;--tw-text-opacity:1;width:100%;color:rgb(31 41 55/var(--tw-text-opacity,1));justify-content:space-between;align-items:center;gap:.75rem;padding-top:.875rem;padding-bottom:.875rem;font-size:1rem;font-weight:500;line-height:1.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.site-nav-drawer__link:where([dir=ltr],[dir=ltr] *){text-align:left}.site-nav-drawer__link:where([dir=rtl],[dir=rtl] *){text-align:right}.site-nav-drawer__link:hover{color:var(--color-primary)}.site-nav-drawer__link.is-active{color:var(--color-primary);text-underline-offset:4px;font-weight:600;text-decoration-line:underline;text-decoration-thickness:1px}.site-nav-drawer__link.is-active .site-nav-drawer__chevron{color:var(--color-primary)}.site-nav-drawer__label{align-items:center;gap:.75rem;min-width:0;display:flex}.site-nav-drawer__link-img{-o-object-fit:cover;object-fit:cover;border-radius:9999px;flex-shrink:0;width:2.5rem;max-width:none;height:2.5rem;display:block}.site-nav-drawer__link-img-placeholder{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;width:2.5rem;max-width:none;height:2.5rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;display:flex}.site-nav-drawer__link-img-icon{width:1.25rem;height:1.25rem}.site-nav-drawer__chevron{--tw-text-opacity:1;width:1rem;height:1rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}[dir=rtl] .site-nav-drawer__chevron{transform:scaleX(-1)}.site-nav-drawer__back{--tw-text-opacity:1;height:2.25rem;color:rgb(107 114 128/var(--tw-text-opacity,1));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;margin-inline-start:-.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex;overflow:hidden}.site-nav-drawer__back:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.site-nav-drawer__back{opacity:0;pointer-events:none;width:0;margin-inline-end:0;transition:width .28s cubic-bezier(.4,0,.2,1),margin .28s cubic-bezier(.4,0,.2,1),opacity .2s,background-color .2s,color .2s}.site-nav-drawer__back.is-visible{opacity:1;pointer-events:auto;width:2.25rem;margin-inline-end:.5rem}.site-nav-drawer__back svg{flex-shrink:0;width:1.25rem;height:1.25rem}[dir=rtl] .site-nav-drawer__back svg{transform:scaleX(-1)}.site-nav-drawer__browse-all{color:var(--color-primary);padding-top:.75rem;padding-bottom:.75rem;font-size:.875rem;font-weight:600;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:block}.site-nav-drawer__browse-all:hover{opacity:.8}.site-nav-drawer__foot{-moz-column-gap:.75rem;opacity:0;flex-wrap:wrap;flex-shrink:0;justify-content:center;align-items:center;gap:.25rem .75rem;padding:.875rem 1rem;transition:opacity .3s,transform .3s cubic-bezier(.4,0,.2,1);display:flex;transform:translateY(10px)}.site-nav-drawer__foot.is-in{opacity:1;transition-delay:.42s;transform:none}.site-nav-drawer__loc{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));align-items:center;gap:.375rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-nav-drawer__loc:hover{color:var(--color-primary)}.site-nav-drawer__loc-icon{--tw-text-opacity:1;width:18px;height:18px;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}.site-nav-drawer__loc-caret{--tw-text-opacity:1;width:1rem;height:1rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}.site-nav-drawer__foot-sep{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));flex-shrink:0;width:1px;height:1rem}.s-cart-summary-total{display:none}.s-cart-summary-count{--tw-translate-x:-50%;width:1rem;height:1rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(185 28 28/var(--tw-bg-opacity,1));padding:0;font-size:10px;line-height:1;bottom:-.375rem;left:50%;right:auto;top:auto!important}.site-header__sticky-sentinel{height:0}.site-header__topnav{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));font-size:.75rem;line-height:1rem;display:none}.main-content>div.site-header__topnav,.main-content>section.site-header__topnav{border-radius:0;padding:0}@media (width>=1024px){.site-header__topnav{display:block}}.site-header__topnav-inner{justify-content:space-between;align-items:center;gap:1.5rem;min-height:40px;display:flex}.site-header__topnav-menu{min-width:0}.site-header__topnav-menu .s-menu-topnav-list{flex-wrap:wrap;align-items:center;row-gap:.25rem;display:flex}.site-header__topnav-menu a{white-space:nowrap;--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.site-header__topnav-menu a:hover{color:var(--color-primary)}.site-header__topnav-menu .s-menu-topnav-item{padding-left:.75rem;padding-right:.75rem}.site-header__topnav-menu .s-menu-topnav-item:first-child{padding-inline-start:0}.site-header__topnav-menu .s-menu-topnav-item:last-child{padding-inline-end:0}.site-header__topnav-inner .s-skeleton-menu-columns{align-items:center;display:flex}.site-header__topnav-inner .s-skeleton-menu-columns .s-skeleton-wrapper{width:16rem!important;height:.75rem!important}.site-header__topnav-inner .s-skeleton-menu-columns .s-skeleton-wrapper:not(:first-child){display:none}.site-header__topnav-actions{flex-shrink:0;align-items:center;gap:.25rem;display:flex}.site-header__topnav-action{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1));border-radius:9999px;align-items:center;gap:.375rem;padding:.25rem .5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-header__topnav-action:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));color:var(--color-primary)}.site-header__topnav-action+.site-header__topnav-action{position:relative}.site-header__topnav-action+.site-header__topnav-action:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));width:1px;position:absolute;top:.375rem;bottom:.375rem}input[type=radio].sr-only div.site-header__topnav-action+.site-header__topnav-action:before{transition:all .3s}input[type=radio].sr-only:checked~div.site-header__topnav-action+.site-header__topnav-action:before{border-color:var(--color-main)}.site-header__topnav-action+.site-header__topnav-action:before{inset-inline-start:-2px}.site-header__topnav-contacts{align-items:center;gap:.25rem;padding-inline-start:.25rem;display:flex;position:relative}.site-header__topnav-action+.site-header__topnav-contacts:before{content:\"\";--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));width:1px;position:absolute;top:.375rem;bottom:.375rem}input[type=radio].sr-only div.site-header__topnav-action+.site-header__topnav-contacts:before{transition:all .3s}input[type=radio].sr-only:checked~div.site-header__topnav-action+.site-header__topnav-contacts:before{border-color:var(--color-main)}.site-header__topnav-action+.site-header__topnav-contacts:before{inset-inline-start:-2px}.site-header__topnav-contact{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1));border-radius:9999px;align-items:center;gap:.375rem;padding:.25rem .5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-header__topnav-contact:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));color:var(--color-primary)}.site-header__topnav-action-label{text-overflow:ellipsis;white-space:nowrap;max-width:10rem;font-weight:500;overflow:hidden}.site-header__topnav-icon{--tw-text-opacity:1;width:1rem;height:1rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}.site-header__topnav-caret{--tw-text-opacity:1;width:.75rem;height:.75rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0}body.topnav-is-dark .site-header__topnav{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1));border-color:#d1d5db1a}body.topnav-is-dark .site-header__topnav .site-header__topnav-menu a,body.topnav-is-dark .site-header__topnav .site-header__topnav-action,body.topnav-is-dark .site-header__topnav .site-header__topnav-contact,body.topnav-is-dark .site-header__topnav .site-header__topnav-icon,body.topnav-is-dark .site-header__topnav .site-header__topnav-caret{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}body.topnav-is-dark .site-header__topnav .site-header__topnav-menu a:hover,body.topnav-is-dark .site-header__topnav .site-header__topnav-action:hover,body.topnav-is-dark .site-header__topnav .site-header__topnav-contact:hover{opacity:.8}body.topnav-is-dark .site-header__topnav .site-header__topnav-action:hover,body.topnav-is-dark .site-header__topnav .site-header__topnav-contact:hover{background-color:#f3f4f626}body.topnav-is-dark .site-header__topnav .site-header__topnav-action+.site-header__topnav-action:before,body.topnav-is-dark .site-header__topnav .site-header__topnav-action+.site-header__topnav-contacts:before{background-color:#d1d5db1a}body.topnav-is-dark .site-header--lite .site-header__bar{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1))}body.topnav-is-dark .site-header--lite .site-header__bar.is-scrolled{--tw-bg-opacity:1;background-color:rgb(29 31 31/var(--tw-bg-opacity,1));border-color:#d1d5db1a}body.topnav-is-dark .site-header--lite .site-header__bar .header-action,body.topnav-is-dark .site-header--lite .site-header__bar .s-cart-summary-wrapper{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}body.topnav-is-dark .site-header--lite .site-header__bar .header-action:hover,body.topnav-is-dark .site-header--lite .site-header__bar .s-cart-summary-wrapper:hover{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1));opacity:.8;background-color:#f3f4f626}@media (width>=1024px){.site-header--default .site-header__nav-toggle{display:none}.site-header--default .site-header__bar-inner{grid-template-columns:auto minmax(0,1fr) auto;gap:2rem;position:relative}.site-header--default .site-header__brand{justify-self:start}.site-header--default .site-header__intro{display:none}.site-header--default .site-header__mainmenu{align-self:stretch;align-items:stretch;min-width:0;display:flex}.site-header--default .site-header__mainmenu .main-menu{-moz-column-gap:.125rem;flex-wrap:wrap;justify-content:center;align-items:stretch;column-gap:.125rem;width:100%;min-width:0;display:flex;margin:0!important;padding:0!important}.site-header--default .site-header__mainmenu .s-menu-root-level{align-items:center;margin-top:0;margin-bottom:0;position:relative;display:flex!important}.site-header--default .site-header__mainmenu .s-menu-root-level>a{white-space:nowrap;--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:16px;align-items:center;gap:.25rem;padding:.5rem .75rem;font-size:.875rem;font-weight:500;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-flex}.site-header--default .site-header__mainmenu .s-menu-root-level>a:hover{color:var(--color-primary)}.site-header--default .site-header__mainmenu .s-menu-non-root-level{margin-top:0;margin-bottom:0;display:block;position:relative}.site-header--default .site-header__mainmenu .s-menu-sub-menu ul{margin:0;padding:0;list-style-type:none}.site-header--default .site-header__mainmenu .s-menu-sub-menu a{white-space:nowrap;--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));border-radius:16px;justify-content:space-between;align-items:center;gap:.5rem;padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.site-header--default .site-header__mainmenu .s-menu-sub-menu a:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1));color:var(--color-primary)}.site-header--default .site-header__mainmenu .s-menu-sub-menu{visibility:hidden;z-index:40;--tw-border-opacity:1;border-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));opacity:0;--tw-shadow:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);max-width:90vw;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:16px;padding:.375rem;position:absolute}input[type=radio].sr-only div.site-header--default .site-header__mainmenu .s-menu-sub-menu{transition:all .3s}input[type=radio].sr-only:checked~div.site-header--default .site-header__mainmenu .s-menu-sub-menu{border-color:var(--color-main)}.main-content>div.site-header--default .site-header__mainmenu .s-menu-sub-menu,.main-content>section.site-header--default .site-header__mainmenu .s-menu-sub-menu{border-radius:0;padding:0}.site-header--default .site-header__mainmenu .s-menu-sub-menu{top:100%;min-width:14rem;max-height:none;transition:opacity .18s,transform .18s,visibility .18s;inset-inline-start:0;overflow:visible;transform:translateY(4px)}.site-header--default .site-header__mainmenu .s-menu-root-level>.s-menu-sub-menu{translate:var(--panel-shift,0) 0;border-top-left-radius:0;border-top-right-radius:0}.site-header--default .site-header__mainmenu .s-menu-sub-menu>ul.s-menu-columns{grid-template-columns:repeat(var(--menu-columns), minmax(12rem, 1fr));-moz-column-gap:.25rem;column-gap:.25rem;display:grid}.site-header--default .site-header__mainmenu .s-menu-sub-menu .s-menu-sub-menu{top:-.375rem;inset-inline:100% auto;transform:translateY(0)}.site-header--default .site-header__mainmenu .s-menu-opens-start>.s-menu-sub-menu{inset-inline:auto 100%}.site-header--default .site-header__mainmenu .s-menu-has-children>.s-menu-sub-menu[data-capped]{min-width:0;max-width:var(--panel-max)}.site-header--default .site-header__mainmenu .s-menu-has-children:hover>.s-menu-sub-menu,.site-header--default .site-header__mainmenu .s-menu-has-children:focus-within>.s-menu-sub-menu{visibility:visible;opacity:1;transform:translateY(0)}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-mega-menu{position:static}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu{gap:1rem;min-width:min(48rem,90vw);display:flex}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-mega-menu>.s-menu-sub-menu{top:100%;width:auto;min-width:0;max-width:none;inset-inline:0}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu>ul{flex-shrink:0;width:14rem}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu>ul.s-menu-columns{width:auto}.site-header--default .site-header__mainmenu .s-menu-products-wrapper{overscroll-behavior:contain;flex:1;min-width:0;overflow-y:auto}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu.is-stacked{flex-direction:column}.site-header--default .site-header__mainmenu .s-menu-mega-menu>.s-menu-sub-menu.is-stacked>ul.s-menu-columns{width:100%}.site-header--default .site-header__mainmenu .s-menu-products-wrapper .s-products-list-vertical-cards{grid-template-columns:repeat(4,minmax(0,1fr))}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-mega-menu>.s-menu-sub-menu{gap:1.5rem;padding:1.5rem}.site-header--default .site-header__mainmenu .site-header__oneline-menu{justify-content:center;align-items:stretch;width:100%;min-width:0;display:flex}.site-header--default .site-header__mainmenu .site-header__oneline-menu .main-menu{flex-wrap:nowrap}.site-header--default .site-header__mainmenu .site-header__oneline-menu .s-menu-root-level,.site-header--default .site-header__mainmenu .site-header__oneline-menu .s-menu-root-level>a{white-space:nowrap;flex-shrink:0}.site-header--default .site-header__mainmenu .site-header__oneline-menu.is-measuring{overflow:hidden}.site-header--default .site-header__mainmenu .site-header__more-probe{pointer-events:none;visibility:hidden;position:absolute;top:0}input[type=radio].sr-only div.site-header--default .site-header__mainmenu .site-header__more-probe{transition:all .3s}input[type=radio].sr-only:checked~div.site-header--default .site-header__mainmenu .site-header__more-probe{border-color:var(--color-main)}.site-header--default .site-header__mainmenu .site-header__more-probe{inset-inline-start:0}.site-header--default .site-header__mainmenu [data-more-menu]>.s-menu-sub-menu{inset-inline:auto 0}.site-header--default .site-header__mainmenu .s-menu-has-children>a:after{content:\"\";opacity:.5;margin-inline-start:.25rem;font-family:sallaicons;font-size:1rem;line-height:1;transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block}.site-header--default .site-header__mainmenu .s-menu-non-root-level.s-menu-has-children>a:where([dir=ltr] *):after{transform:scaleX(-1)}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-has-children>a:after{content:\"\"}.site-header--default .site-header__mainmenu .s-menu-root-level.s-menu-has-children:hover>a:after{opacity:1;transform:scaleY(-1)}}.site-header__mainmenu,salla-social a[title=snapchat] svg{display:none}salla-social a[title=snapchat] .s-social-icon{width:1.25rem;height:1.25rem;display:inline-block;-webkit-mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27><path d=%27M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118m-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118%27/></svg>\");mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27><path d=%27M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118m-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118%27/></svg>\");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;background-color:currentColor!important}.mobile-bottom-bar{--mbb-badge-bg:#b3261e;--mbb-badge-text:#fff;--mbb-muted:color-mix(in srgb, var(--color-text,#7c8082) 55%, #000 45%);z-index:220;justify-content:center;display:flex;position:fixed;bottom:0;left:0;right:0}@media (width>=768px){.mobile-bottom-bar{display:none}}.mobile-bottom-bar{padding:0 16px calc(12px + var(--safe-bottom));pointer-events:none}.mobile-bottom-bar-scrim{z-index:219;position:fixed;bottom:0;left:0;right:0}@media (width>=768px){.mobile-bottom-bar-scrim{display:none}}.mobile-bottom-bar-scrim{height:calc(72px + var(--safe-bottom));pointer-events:none;-webkit-backdrop-filter:blur(22px)saturate(180%)brightness(1.06);background:linear-gradient(#fff0 0%,#ffffff85 58%,#ffffffb8 100%);-webkit-mask-image:linear-gradient(#0000 0%,#000 68%);mask-image:linear-gradient(#0000 0%,#000 68%)}.mobile-bottom-bar__inner{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));justify-content:space-between;align-items:center;gap:.25rem;width:100%;max-width:28rem;display:flex}.main-content>div.mobile-bottom-bar__inner,.main-content>section.mobile-bottom-bar__inner{border-radius:0;padding:0}.mobile-bottom-bar__inner{pointer-events:auto;border-radius:9999px;height:52px;padding:0 8px;box-shadow:0 8px 30px #0000001f}.mobile-bottom-bar__item{min-width:40px;height:36px;color:var(--mbb-muted);font:inherit;cursor:pointer;background:0 0;border:0;border-radius:9999px;flex:none;justify-content:center;align-items:center;gap:0;padding:0 6px;text-decoration-line:none;transition:color .32s cubic-bezier(.22,1,.36,1),background-color .32s cubic-bezier(.22,1,.36,1),padding .32s cubic-bezier(.22,1,.36,1);display:inline-flex;position:relative}.mobile-bottom-bar__item.is-active{background:var(--color-primary,#9ca3af);color:var(--color-primary-reverse,#fff);padding:0 10px}.mobile-bottom-bar__icon{flex:none;justify-content:center;align-items:center;width:24px;height:24px;display:flex;position:relative}.mobile-bottom-bar svg{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px}.mobile-bottom-bar__icon .sicon-ellipsis{font-size:22px;line-height:1}.mobile-bottom-bar__label{white-space:nowrap;opacity:0;max-width:0;margin-inline-start:0;font-size:14px;font-weight:600;line-height:1;transition:max-width .6s cubic-bezier(.22,1,.36,1),margin-inline-start .6s cubic-bezier(.22,1,.36,1),opacity .14s,transform .6s;display:block;overflow:hidden;transform:translate(4px)}.mobile-bottom-bar__item.is-active .mobile-bottom-bar__label{opacity:1;max-width:6.5rem;margin-inline-start:8px;transition:max-width .6s cubic-bezier(.22,1,.36,1),margin-inline-start .6s cubic-bezier(.22,1,.36,1),opacity .22s .1s,transform .22s cubic-bezier(.22,1,.36,1) .1s;transform:none}.mobile-bottom-bar__badge{border-radius:9999px;justify-content:center;align-items:center;font-weight:700;display:flex;position:absolute}input[type=radio].sr-only div.mobile-bottom-bar__badge{transition:all .3s}input[type=radio].sr-only:checked~div.mobile-bottom-bar__badge{border-color:var(--color-main)}.mobile-bottom-bar__badge{background:var(--mbb-badge-bg);min-width:16px;height:16px;color:var(--mbb-badge-text);border:2px solid #fff;padding:0 3px;font-size:10px;line-height:1;animation:.28s mbb-badge-pop;bottom:-6px;left:50%;transform:translate(-50%)}.mobile-bottom-bar__item.is-active .mobile-bottom-bar__badge{border-color:var(--color-primary,#9ca3af)}@keyframes mbb-badge-pop{0%{opacity:0;transform:translate(-50%)scale(.4)}to{opacity:1;transform:translate(-50%)scale(1)}}@media (prefers-reduced-motion:reduce){.mobile-bottom-bar__item,.mobile-bottom-bar__label{transition:none}.mobile-bottom-bar__label{transform:none}.mobile-bottom-bar__badge{animation:none}}@media (width<=767px){.app-inner{padding-bottom:calc(76px + var(--flow-safe-bottom))}body.product-single.is-sticky-product-bar{padding-bottom:calc(188px + var(--safe-bottom))!important}body.product-single .sticky-product-bar{bottom:calc(76px + var(--safe-bottom))!important}}.mobile-page-title{z-index:30;--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));align-items:center;gap:.25rem;height:3rem;padding-left:.5rem;padding-right:.5rem;display:flex;position:sticky}.main-content>div.mobile-page-title,.main-content>section.mobile-page-title{border-radius:0;padding:0}@media (width>=768px){.mobile-page-title{display:none}}.mobile-page-title{top:var(--app-safe-area-top,0px)}.mobile-page-title__back{--tw-text-opacity:1;width:2.25rem;height:2.25rem;color:rgb(55 65 81/var(--tw-text-opacity,1)) ;border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;margin-inline-start:-.25rem;display:inline-flex}.mobile-page-title__back svg{width:1.25rem;height:1.25rem}.mobile-page-title__back svg:where([dir=ltr],[dir=ltr] *){--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mobile-page-title__text{text-overflow:ellipsis;white-space:nowrap;--tw-text-opacity:1;min-width:0;color:rgb(17 24 39/var(--tw-text-opacity,1));margin:0;font-size:1rem;font-weight:700;line-height:1.5rem;overflow:hidden}body.product-single .mobile-page-title{display:none}@media (width<=767px){#page-main-title{display:none}body:has(.profile-header) .main-content>h1{display:none}}.breadcrumbs{margin-inline:calc(50% - 50vw);background:color-mix(in srgb, var(--color-primary) 5%, transparent);width:100vw;max-width:100vw;margin-bottom:1.25rem;padding-top:.25rem;padding-bottom:.25rem}@media (width>=640px){.breadcrumbs{padding-top:1.25rem;padding-bottom:1.25rem}}.breadcrumbs .s-breadcrumb-wrapper{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.breadcrumbs .s-breadcrumb-wrapper{max-width:1280px}}.breadcrumbs .s-breadcrumb-wrapper{flex-wrap:wrap;align-items:center;row-gap:.25rem;display:flex}.s-block--testimonials.breadcrumbs .s-breadcrumb-wrapper{padding:0}@media (width>=1024px){.s-block--testimonials.breadcrumbs .s-breadcrumb-wrapper{padding-left:.625rem;padding-right:.625rem}}@media (width>=768px){.product-single .breadcrumbs .s-breadcrumb-wrapper:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}@media (width<=767px){.breadcrumbs{display:none}}.profile-header .breadcrumbs{margin-inline:0;background:0 0;width:auto;max-width:none;margin-bottom:0;padding-block:1.25rem}.profile-header .breadcrumbs .s-breadcrumb-wrapper{max-width:none;margin:0;padding:0;display:block}.s-breadcrumb-item{align-items:center;display:inline-flex}salla-slider{display:block}salla-slider.details-slider{margin-bottom:.625rem}@media (width>=768px){salla-slider.details-slider{margin-bottom:0}}salla-slider.details-slider:not(.hydrated) .swiper-slide:not(:first-child){display:none}salla-slider.details-slider .s-slider-container{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-width:1px;border-radius:16px}.main-content>divsalla-slider.details-slider .s-slider-container,.main-content>sectionsalla-slider.details-slider .s-slider-container{border-radius:0;padding:0}salla-slider.details-slider .swiper-slide{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000);--tw-ring-inset:inset;--tw-ring-opacity:1;--tw-ring-color:rgb(243 244 246/var(--tw-ring-opacity,1));border-radius:16px;position:relative}.main-content>divsalla-slider.details-slider .swiper-slide,.main-content>sectionsalla-slider.details-slider .swiper-slide{border-radius:0;padding:0}salla-slider.details-slider .s-slider-thumbs .s-slider-thumbs-container .swiper-slide{flex:0 0 80px;max-width:80px;width:80px!important;height:80px!important}salla-slider.details-slider .s-slider-thumbs .slide--one-fourth{width:100%;max-width:none;height:100%}salla-slider.details-slider salla-button.btn--wishlist{z-index:2;position:absolute;bottom:1rem}input[type=radio].sr-only divsalla-slider.details-slider salla-button.btn--wishlist{transition:all .3s}input[type=radio].sr-only:checked~divsalla-slider.details-slider salla-button.btn--wishlist{border-color:var(--color-main)}@media (width>=640px){salla-slider.details-slider salla-button.btn--wishlist{display:none}}salla-slider.details-slider salla-button.btn--wishlist:where([dir=ltr],[dir=ltr] *){left:1rem}salla-slider.details-slider salla-button.btn--wishlist:where([dir=rtl],[dir=rtl] *){right:1rem}salla-slider.details-slider .s-slider-block__title-nav{display:none}@media (width>=640px){salla-slider.details-slider .s-slider-block__title-nav{display:flex}}salla-slider.details-slider .swiper-pagination{display:none}@media (width<=767px){salla-slider.details-slider .s-slider-thumbs{display:none}salla-slider.details-slider .s-slider-container,salla-slider.details-slider .swiper-slide,salla-slider.details-slider .swiper-slide img,salla-slider.details-slider .swiper-slide picture{border-radius:0}salla-slider.details-slider .swiper-slide{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000)}salla-slider.details-slider .swiper-pagination.swiper-pagination-bullets{z-index:3;justify-content:center;align-items:center;gap:.375rem;width:max-content;margin-left:auto;margin-right:auto;display:flex;position:absolute;bottom:1rem;left:0;right:0}input[type=radio].sr-only divsalla-slider.details-slider .swiper-pagination.swiper-pagination-bullets{transition:all .3s}input[type=radio].sr-only:checked~divsalla-slider.details-slider .swiper-pagination.swiper-pagination-bullets{border-color:var(--color-main)}salla-slider.details-slider .swiper-pagination.swiper-pagination-bullets{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:#fff9;border-radius:9999px;padding:5px 12px}salla-slider.details-slider .swiper-pagination-bullet{opacity:1;background:#00000040;border-radius:9999px;width:.375rem;height:.375rem;transition:width .25s,background-color .25s;display:block;margin:0!important}salla-slider.details-slider .swiper-pagination-bullet-active{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1));width:1.25rem}}salla-slider .slide--one-fourth{width:100%;max-width:250px;height:auto}@media (width>=640px){salla-slider .slide--one-fourth{width:50%;max-width:320px}}@media (width>=768px){salla-slider .slide--one-fourth{width:33.3333%}}@media (width>=1024px){salla-slider .slide--one-fourth{width:25%}}salla-slider .slide--one-sixth{width:50%}@media (width>=640px){salla-slider .slide--one-sixth{width:33.3333%}}@media (width>=768px){salla-slider .slide--one-sixth{width:25%}}@media (width>=1024px){salla-slider .slide--one-sixth{width:16.6667%}}salla-slider .slide--one-eighth{width:50%}@media (width>=640px){salla-slider .slide--one-eighth{width:33.3333%}}@media (width>=768px){salla-slider .slide--one-eighth{width:25%}}@media (width>=1024px){salla-slider .slide--one-eighth{width:12.5%}}salla-slider .swiper-slide{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0)}.promotion-title{z-index:10;--tw-bg-opacity:1;background-color:rgb(153 27 27/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));font-size:.875rem;font-weight:700;line-height:1.25rem;position:absolute;top:1rem}input[type=radio].sr-only div.promotion-title{transition:all .3s}input[type=radio].sr-only:checked~div.promotion-title{border-color:var(--color-main)}.promotion-title:where([dir=ltr],[dir=ltr] *){border-top-right-radius:16px;border-bottom-right-radius:16px;left:0}.promotion-title:where([dir=rtl],[dir=rtl] *){border-top-left-radius:16px;border-bottom-left-radius:16px;right:0}.promotion-title{width:auto!important;margin:0!important;padding:.5rem .75rem!important}.home-slider__slide{background-position:50%;background-repeat:no-repeat;background-size:cover}.home-slider__slide:not(.loaded) .overlay,.swiper:not(.swiper-initialized) .swiper-button{opacity:0}.s-block--testimonials.container{padding:0}@media (width>=1024px){.s-block--testimonials.container{padding-left:.625rem;padding-right:.625rem}}.s-block--testimonials .s-slider-block__title{padding-left:.625rem;padding-right:.625rem}@media (width>=1024px){.s-block--testimonials .s-slider-block__title{padding-left:0;padding-right:0}}.s-block--testimonials .s-slider-block__title-nav{max-width:88%!important;display:none!important;top:65%!important}@media (width>=1024px){.s-block--testimonials .s-slider-block__title-nav{display:flex!important}}.s-block--testimonials .s-slider-block__title-nav button{--tw-border-opacity:1!important;border-color:rgb(243 244 246/var(--tw-border-opacity,1))!important;--tw-shadow-color:#d1d5db!important;--tw-shadow:var(--tw-shadow-colored)!important}@media screen and (width>=768px){.best-products-slider .swiper-wrapper{height:510px}.best-products-slider .swiper-wrapper .swiper-slide{height:calc(50% - 15px)}}.swiper-button-disabled{opacity:.5}salla-slider .swiper-pagination-bullet{opacity:.3;background:#fff;border-radius:16px;width:20px}salla-slider .swiper-pagination-bullet-active{opacity:1;background-color:var(--color-primary)}salla-slider .swiper-pagination-bullets.swiper-pagination-horizontal{bottom:.75rem}@media (width>=640px){salla-slider .swiper-pagination-bullets.swiper-pagination-horizontal{bottom:1.5rem}}.offer-slider .s-slider-block__title{margin-bottom:1.25rem;position:relative}.offer-slider .s-slider-block__title:before{--tw-text-opacity:1;color:rgb(254 242 242/var(--tw-text-opacity,1));font-size:3rem;font-weight:400;line-height:1;position:absolute;top:1rem}input[type=radio].sr-only div.offer-slider .s-slider-block__title:before{transition:all .3s}input[type=radio].sr-only:checked~div.offer-slider .s-slider-block__title:before{border-color:var(--color-main)}.offer-slider .s-slider-block__title:where([dir=ltr],[dir=ltr] *):before{left:0}.offer-slider .s-slider-block__title:where([dir=rtl],[dir=rtl] *):before{right:0}.offer-slider .s-slider-block__title:before{content:\"\";font-family:sallaicons}.offer-slider .s-slider-block__title h2{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1));font-size:1.125rem;line-height:1.75rem}.offer-slider .s-slider-block__title p{-webkit-line-clamp:none;-webkit-box-orient:horizontal;margin-top:.25rem;line-height:1.5rem;display:block;overflow:visible}.bank-offer .s-slider-block__title,model-viewer[style*=width]:before{display:none}.blog-slider .swiper-slide img{min-height:380px;max-height:480px}@media (width>=768px){.blog-slider .swiper-slide img{max-height:680px}}.product-entry{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px;justify-content:space-between;height:100%;transition-property:box-shadow;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative}.main-content>div.product-entry,.main-content>section.product-entry{border-radius:0;padding:0}.product-entry:hover{--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.product-entry--wishlist{flex-direction:column;justify-content:space-between;padding:1rem}@media (width>=640px){.product-entry--wishlist{flex-direction:row}}.product-entry--wishlist .product-entry__image{border-radius:16px;width:4rem;height:3rem;overflow:hidden}@media (width>=768px){.product-entry--wishlist .product-entry__image{width:5rem;height:4rem}}.product-entry--wishlist salla-button{display:flex}.s-comments-page{padding-top:4rem}.s-comments-product{--tw-border-opacity:1;border-top-width:1px;border-bottom-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));padding-top:1rem;padding-bottom:1rem}@media (width>=768px){.s-comments-product{padding-top:3.5rem;padding-bottom:3.5rem}}.s-comments-product .s-comments-container{width:100%;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}@media (width>=1280px){.s-comments-product .s-comments-container{max-width:1280px}}.s-block--testimonials.s-comments-product .s-comments-container{padding:0}@media (width>=1024px){.s-block--testimonials.s-comments-product .s-comments-container{padding-left:.625rem;padding-right:.625rem}}@media (width>=768px){.product-single .s-comments-product .s-comments-container:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}.share-btns-list{z-index:10;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));opacity:0;--tw-shadow:0px 3px 6px #00000029;--tw-shadow-colored:0px 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:16px;flex-direction:column;align-items:center;display:flex;position:absolute;top:3rem;overflow:hidden}input[type=radio].sr-only div.share-btns-list{transition:all .3s}input[type=radio].sr-only:checked~div.share-btns-list{border-color:var(--color-main)}.main-content>div.share-btns-list,.main-content>section.share-btns-list{border-radius:0;padding:0}.share-btns-list a{padding:.75rem;display:block}.share-btns-list a:hover{color:var(--color-primary)}.cart-item salla-conditional-fields>section{padding-top:0;padding-left:0;padding-right:0}.cart-item salla-conditional-fields>section:last-child{margin-bottom:0;padding-bottom:0}@media (width>=768px){.product-single .container:not(:has(>.breadcrumbs))>[id^=product-]{padding-top:2rem}}.s-product-card-content-pie-svg-base{stroke:#e8edf2;stroke-width:2px;stroke-linecap:round;fill:none;transition:stroke-dashoffset 1s linear}.s-product-card-content-pie-svg-bar{fill:none;stroke:var(--color-primary);stroke-dasharray:100 100;stroke-dashoffset:100px}.s-product-card-content-footer>div,.s-product-card-content-footer salla-button.s-button-wrap{width:100%}.s-product-card-content-sub{justify-content:flex-start;gap:.75rem}.s-product-card-starting-price{width:auto}.s-product-card-image{aspect-ratio:1}.s-product-card-image img{width:100%;height:100%}.pie-wrapper{width:72px;height:72px;color:var(--color-primary);justify-content:center;align-items:center;display:flex;position:absolute;top:.625rem}input[type=radio].sr-only div.pie-wrapper{transition:all .3s}input[type=radio].sr-only:checked~div.pie-wrapper{border-color:var(--color-main)}.pie-wrapper:where([dir=ltr],[dir=ltr] *){right:1.25rem}.pie-wrapper:where([dir=rtl],[dir=rtl] *){left:1.25rem}.pie-wrapper .pie-svg circle{stroke:#e8edf2;stroke-width:2px;stroke-linecap:round;fill:none;transition:stroke-dashoffset 1s linear}.pie-wrapper .pie-svg circle.circle_bar{stroke:var(--color-primary);stroke-dasharray:100 100;stroke-dashoffset:100px}.pie-wrapper span{color:var(--color-text);text-align:center;line-height:1;font-size:var(--font-xsm);display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pie-wrapper span b{color:var(--color-primary);margin-bottom:3px;font-size:var(--font-md)!important}.s-product-card .s-product-card-vertical .s-product-card-image>.s-product-card-wishlist-btn{display:none}.s-product-card .s-product-card-content-footer{align-items:center;gap:.375rem;display:flex}.s-product-card .s-product-card-content-footer>div,.s-product-card .s-product-card-content-footer>salla-add-product-button{flex:1;width:100%;min-width:0}.s-product-card .s-product-card-content-footer>.s-product-card-wishlist-btn,.s-product-card .s-product-card-content-footer>.s-button-wrap{flex:none;width:2.25rem}.s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn{opacity:1;flex-shrink:0;width:2.25rem;height:2.25rem;margin:0;position:static;inset:auto}.s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn button,.s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn .s-button-btn,.s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn .s-button-element{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:9999px;flex:none;justify-content:center;align-items:center;width:2.25rem;min-width:0;height:2.25rem;margin:0;padding:0;display:inline-flex}.main-content>div.s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn button,.main-content>section.s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn button,.main-content>div .s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn .s-button-btn,.main-content>section .s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn .s-button-btn,.main-content>div .s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn .s-button-element,.main-content>section .s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn .s-button-element{border-radius:0;padding:0}.s-product-card .s-product-card-content-footer .s-product-card-wishlist-btn svg{width:1rem;height:1rem}.s-product-card .s-product-card-content-footer>.s-button-wrap .s-button-icon{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:9999px;justify-content:center;align-items:center;width:2.25rem;min-width:0;height:2.25rem;margin:0;padding:0;display:inline-flex}.main-content>div.s-product-card .s-product-card-content-footer>.s-button-wrap .s-button-icon,.main-content>section.s-product-card .s-product-card-content-footer>.s-button-wrap .s-button-icon{border-radius:0;padding:0}.s-product-card .s-product-card-content-footer>.s-button-wrap .s-button-icon svg{width:1rem;height:1rem}.s-product-card .s-product-card-content-footer .s-button-btn{border-color:var(--color-primary);background-color:var(--color-primary);height:2.25rem;color:var(--color-primary-reverse);border-radius:9999px}.s-product-card .s-product-card-content-footer .s-button-btn:hover{border-color:var(--color-primary-dark);background-color:var(--color-primary-dark);color:var(--color-primary-reverse);opacity:1}.s-product-card .s-product-card-content-footer .s-button-btn svg{fill:currentColor}.s-product-card .s-product-card-content-main{flex-direction:column;display:flex}.s-product-card .s-product-card-content-subtitle{margin-bottom:.25rem;font-size:.75rem;line-height:1rem}@media (width>=640px){.s-product-card .s-product-card-content-subtitle{font-size:.875rem;line-height:1.25rem}}.s-product-card .s-product-card-content-title{margin-bottom:.25rem;font-size:1rem;line-height:1.5rem}[class*=product-card-img--] .s-product-card-vertical .s-product-card-image{aspect-ratio:auto;flex:none;height:0;position:relative;overflow:hidden}[class*=product-card-img--] .s-product-card-vertical .s-product-card-image>a{display:block;position:absolute;inset:0}[class*=product-card-img--] .s-product-card-vertical .s-product-card-image [style*=aspect-ratio]{width:100%;height:100%;position:absolute;inset:0;aspect-ratio:auto!important}[class*=product-card-img--] .s-product-card-vertical .s-product-card-image picture{display:block}[class*=product-card-img--] .s-product-card-vertical .s-product-card-image picture,[class*=product-card-img--] .s-product-card-vertical .s-product-card-image img{width:100%;height:100%}.product-card-img--square .s-product-card-vertical .s-product-card-image{padding-bottom:100%}.product-card-img--landscape .s-product-card-vertical .s-product-card-image{padding-bottom:75%}.product-card-img--portrait .s-product-card-vertical .s-product-card-image{padding-bottom:133.333%}.main-content>h1{margin-bottom:.625rem}.main-content>div.bg-white,.main-content>section.bg-white{border-radius:0;padding:0}salla-gifting{margin-top:0!important}.s-product-options-option-container:last-child{margin-bottom:0}.s-metadata-box,.product-single .s-gifting-widget .s-list-tile-item{padding:0}.product-form{flex-direction:column;gap:1.25rem;margin-top:1.5rem;display:flex}.product-form>salla-hook:empty{display:none}.product-form>section,.product-form .s-product-options-wrapper{border-radius:0;margin-bottom:0;padding:0}.s-product-options-option-content{overflow:visible}.s-product-card-promotion-title{top:.75rem;--tw-bg-opacity:1;background-color:rgb(153 27 27/var(--tw-bg-opacity,1));--tw-text-opacity:1;max-width:calc(100% - 1.5rem);color:rgb(255 255 255/var(--tw-text-opacity,1));--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);border-radius:9999px;padding:.375rem .75rem;font-size:11px;font-weight:600;line-height:1;inset-inline:.75rem auto}@media (width<=640px){.is-sticky-product-bar.product-single .app-inner{padding-bottom:calc(190px + var(--flow-safe-bottom))}.is-sticky-product-bar .sticky-product-bar{z-index:2;--tw-translate-y:28rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;--tw-shadow:-1px -2px 9px 0 #0000000d;--tw-shadow-colored:-1px -2px 9px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);flex-flow:column wrap;justify-content:space-between;align-items:center;gap:.625rem;padding:.75rem;transition:color .7s cubic-bezier(.55,0,.1,1) .5s,background-color .7s cubic-bezier(.55,0,.1,1) .5s,border-color .7s cubic-bezier(.55,0,.1,1) .5s,text-decoration-color .7s cubic-bezier(.55,0,.1,1) .5s,fill .7s cubic-bezier(.55,0,.1,1) .5s,stroke .7s cubic-bezier(.55,0,.1,1) .5s,opacity .7s cubic-bezier(.55,0,.1,1) .5s,box-shadow .7s cubic-bezier(.55,0,.1,1) .5s,transform .7s cubic-bezier(.55,0,.1,1) .5s,filter .7s cubic-bezier(.55,0,.1,1) .5s,-webkit-backdrop-filter .7s cubic-bezier(.55,0,.1,1) .5s,backdrop-filter .7s cubic-bezier(.55,0,.1,1) .5s;display:flex;position:fixed;bottom:0}@media (width>=640px){.is-sticky-product-bar .sticky-product-bar{gap:1rem}}.is-sticky-product-bar .sticky-product-bar{width:auto;left:16px;right:16px;bottom:calc(70px + var(--safe-bottom));border-radius:16px}.is-sticky-product-bar .sticky-product-bar__quantity,.is-sticky-product-bar .sticky-product-bar salla-add-product-button{--tw-translate-y:1.25rem;width:100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.7s;transition-timing-function:cubic-bezier(.55,0,.1,1)}.is-sticky-product-bar .sticky-product-bar__price,.is-sticky-product-bar .sticky-product-bar .form-label{display:none}.is-sticky-product-bar .sticky-product-bar__quantity salla-quantity-input,.is-sticky-product-bar .sticky-product-bar__quantity salla-quantity-input .s-quantity-input-container{width:100%}.is-sticky-product-bar .sticky-product-bar__quantity salla-quantity-input .s-quantity-input-input{width:80%}.is-sticky-product-bar .sticky-product-bar__quantity{margin:0;transition-delay:.9s}.is-sticky-product-bar .sticky-product-bar salla-add-product-button{flex:1;width:auto;margin:0;transition-delay:1s}.hydrated .is-sticky-product-bar .sticky-product-bar,.hydrated .is-sticky-product-bar .sticky-product-bar__quantity,.hydrated .is-sticky-product-bar .sticky-product-bar salla-add-product-button{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.is-sticky-product-bar .sticky-product-bar--sold-out>:not(.sticky-product-bar__quantity),.is-sticky-product-bar .sticky-product-bar--sold-out .sticky-product-bar__quantity>:not(.out-of-stock){display:none}.is-sticky-product-bar .sticky-product-bar--sold-out .sticky-product-bar__quantity{justify-content:center}.is-sticky-product-bar.product-single:has(.sticky-product-bar--sold-out) .app-inner{padding-bottom:calc(126px + var(--flow-safe-bottom))}}.s-tabs-header *{pointer-events:auto!important}.product__description ul,.product__description li{list-style:inherit!important}.product__description ul,.product__description ol{padding-left:1.5rem;padding-right:1.5rem}.product__description ol{list-style:auto!important}.product__description a{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity,1))}.model-viewer-wrapper{width:100%;margin-bottom:1rem;position:relative}@media (width>=768px){.model-viewer-wrapper{margin-bottom:0}}.switcher-3d-view{position:absolute;top:1.25rem}input[type=radio].sr-only div.switcher-3d-view{transition:all .3s}input[type=radio].sr-only:checked~div.switcher-3d-view{border-color:var(--color-main)}.switcher-3d-view:where([dir=ltr],[dir=ltr] *){right:1rem}.switcher-3d-view:where([dir=rtl],[dir=rtl] *){left:1rem}.model-viewer{width:100%;height:100%}.model-viewer__poster{background-position:50%;background-repeat:no-repeat;background-size:contain;position:absolute;inset:0}input[type=radio].sr-only div.model-viewer__poster{transition:all .3s}input[type=radio].sr-only:checked~div.model-viewer__poster{border-color:var(--color-main)}.s-toggle .s-toggle-switcher-has-text:before{text-align:center;--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));--tw-content:attr(data-switcher-text);content:var(--tw-content);font-family:arial,serif;font-size:.75rem;font-weight:700;line-height:22px}.s-toggle .s-toggle-input:checked+div.s-toggle-switcher-bg-white:before{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.main-content>div.s-toggle .s-toggle-input:checked+div.s-toggle-switcher-bg-white:before,.main-content>section.s-toggle .s-toggle-input:checked+div.s-toggle-switcher-bg-white:before{border-radius:0;padding:0}.product-option-uploader .s-file-upload-wrapper{min-height:120px}.product-option-uploader .s-file-upload-wrapper .filepond--list-scroller{overflow-y:inherit!important}.product-option-uploader .s-file-upload-wrapper .filepond--drop-label{cursor:pointer;--tw-border-opacity:1;border-style:dashed;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px;min-height:120px!important}.product-option-uploader .s-file-upload-wrapper .filepond--drop-label *{pointer-events:none}.main-content>div.product-option-uploader .s-file-upload-wrapper .filepond--drop-label,.main-content>section.product-option-uploader .s-file-upload-wrapper .filepond--drop-label{border-radius:0;padding:0}.product-option-uploader .s-file-upload-wrapper .product-option-uploader-placholder{flex-direction:column;justify-content:center;align-items:center;display:flex}.product-option-uploader .s-file-upload-wrapper .product-option-uploader-placholder-icon{margin-bottom:.25rem}.product-option-uploader .s-file-upload-wrapper .product-option-uploader-placholder-icon i{color:#7c8082;font-size:1.25rem;line-height:1.75rem}@media (width<=640px){.s-offer-modal-slider-centered .s-offer-modal-slider-item{max-width:46%!important}}.s-product-card-full-image salla-add-product-button{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px}.main-content>div.s-product-card-full-image salla-add-product-button,.main-content>section.s-product-card-full-image salla-add-product-button{border-radius:0;padding:0}.s-product-card-wishlist-added i{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.s-product-card-fit-height.s-product-card-vertical .s-product-card-image{flex:none}@media (width>=640px){.s-product-card-fit-height.s-product-card-vertical .s-product-card-image{flex:1}}.s-product-options-colors-wrapper{flex-wrap:wrap;gap:1rem;display:flex}.s-product-options-colors-wrapper .s-product-options-colors-item{width:auto;margin:0}.s-product-options-colors-wrapper .s-product-options-colors-item:where([dir=ltr],[dir=ltr] *),.s-product-options-colors-wrapper .s-product-options-colors-item:where([dir=rtl],[dir=rtl] *){margin:0}.s-product-card-minimal .s-product-card-image:where([dir=ltr],[dir=ltr] *){border-top-left-radius:16px;border-bottom-left-radius:16px}.s-product-card-minimal .s-product-card-image:where([dir=rtl],[dir=rtl] *){border-top-right-radius:16px;border-bottom-right-radius:16px}.s-product-card-sale-price h4,.s-product-card-starting-price h4,.s-product-card-price{font-size:1.125rem;line-height:1.75rem}.s-product-card-sale-price span{opacity:.5}.s-product-card-starting-price{justify-content:flex-start;gap:.625rem}.s-product-card-starting-price h4{--tw-text-opacity:1;color:rgb(153 27 27/var(--tw-text-opacity,1))}.s-product-card-minimal salla-button.s-product-card-wishlist-btn{top:.625rem}.s-product-card-minimal salla-button.s-product-card-wishlist-btn:where([dir=ltr],[dir=ltr] *){right:.625rem}.s-product-card-minimal salla-button.s-product-card-wishlist-btn:where([dir=rtl],[dir=rtl] *){left:.625rem}@media (width<=767px){.sidebar{width:calc(100% + 20px);max-width:none;margin-inline:-10px;padding-bottom:0;top:-1px}.breadcrumbs:has(~[id^=product-]){display:none}.product-gallery .details-slider .s-slider-container{border:0;border-radius:0}.product-gallery .details-slider .promotion-title{font-size:.725rem;top:auto;bottom:3rem;padding:.25rem .5rem!important}.product-gallery .s-skeleton-thumbs-centered,.product-details__title-actions{display:none}.product-gallery__bar{inset-inline:0;z-index:3;padding:calc(var(--flow-safe-top) + .75rem) 1rem 0;pointer-events:none;visibility:hidden;opacity:0;justify-content:space-between;align-items:center;transition:transform .5s cubic-bezier(.22,1,.36,1),opacity .35s;display:flex;position:absolute;top:0;transform:translateY(-100%)}.product-gallery__bar.is-visible{visibility:visible;opacity:1;transform:translateY(0)}}@media (width<=767px) and (prefers-reduced-motion:reduce){.product-gallery__bar{transition:none}}@media (width<=767px){.product-gallery__bar-actions{pointer-events:none;visibility:hidden;opacity:0;gap:.5rem;transition:transform .5s cubic-bezier(.22,1,.36,1),opacity .35s;display:inline-flex;transform:translateY(-100%)}.product-gallery__bar-actions.is-visible{pointer-events:auto;visibility:visible;opacity:1;transform:translateY(0)}}@media (width<=767px) and (prefers-reduced-motion:reduce){.product-gallery__bar-actions{transition:none}}@media (width<=767px){.product-gallery__bar-btn{--tw-text-opacity:1;width:2.5rem;height:2.5rem;color:rgb(31 41 55/var(--tw-text-opacity,1));pointer-events:auto;border-radius:16px;justify-content:center;align-items:center;display:inline-flex;position:relative;box-shadow:0 4px 14px #0000000d,0 1px 3px #00000008;background-color:#fff!important}.product-gallery__bar-btn svg{width:1.25rem;height:1.25rem}.product-gallery__bar>.product-gallery__bar-btn svg:where([dir=ltr],[dir=ltr] *){--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.product-gallery__bar-btn i{font-size:1.15rem}.product-gallery__bar-btn .s-social-share-wrapper{background-color:#0000;justify-content:center;align-items:center;width:100%;height:100%;display:flex}.product-gallery__bar-btn .s-social-share-btn,.product-gallery__bar-btn button{width:100%;height:100%;color:inherit;background-color:#0000;border-width:0;justify-content:center;align-items:center;padding:0;display:flex}.product-gallery__bar-btn .s-social-share-list{inset-block-start:calc(100% + .4rem);inset-inline:0 auto;left:0;right:auto}}.magnify-wrapper .img-magnifier-glass{display:none}@media (width>=640px){.magnify-wrapper .img-magnifier-glass{display:block}}.magnify-wrapper .img-magnifier-glass{z-index:3;cursor:none;opacity:0;pointer-events:none;border-radius:50%;width:300px;height:300px;transition:transform .5s;position:absolute;transform:scale(0);box-shadow:inset 0 0 30px #949494}.magnify-wrapper:hover .img-magnifier-glass{opacity:1;pointer-events:initial;transition-delay:.3s;transform:scale(1)}.s-product-card-content{flex-grow:1;padding:1.25rem 0 0}.s-product-card-horizontal .s-product-card-content{margin-bottom:0}@media (width<=480px){.s-product-card-horizontal salla-button.s-product-card-wishlist-btn{position:absolute;bottom:.625rem}input[type=radio].sr-only div.s-product-card-horizontal salla-button.s-product-card-wishlist-btn{transition:all .3s}input[type=radio].sr-only:checked~div.s-product-card-horizontal salla-button.s-product-card-wishlist-btn{border-color:var(--color-main)}.s-product-card-horizontal salla-button.s-product-card-wishlist-btn:where([dir=ltr],[dir=ltr] *){left:-3rem}.s-product-card-horizontal salla-button.s-product-card-wishlist-btn:where([dir=rtl],[dir=rtl] *){right:-3rem}}.s-product-card-horizontal salla-progress-bar{flex-direction:column;flex-grow:1;display:flex}.s-rating-stars-reviews{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}@media (width<=767px){.product-single .main-content salla-rating-stars{justify-content:flex-start!important}}.product-single .main-content salla-rating-stars .s-rating-stars-wrapper{gap:1px}.product-single .main-content salla-rating-stars .s-rating-stars-btn-star{padding-inline:0}.product-single .main-content salla-rating-stars .s-rating-stars-btn-star svg{width:15px;height:16px}.product-single .main-content salla-rating-stars .s-rating-stars-reviews{margin-inline-start:6px;font-size:.75rem;line-height:1rem}#main-content salla-rating-stars,#main-content salla-rating-stars .s-rating-stars-wrapper{justify-content:flex-start!important;width:auto!important;display:inline-flex!important}#main-content salla-rating-stars .s-rating-stars-reviews{margin-inline:6px 0!important}.s-product-card-sale-price h4{--tw-text-opacity:1!important;color:rgb(153 27 27/var(--tw-text-opacity,1))!important}.s-product-card-sale-price span{color:inherit}@media (width<=1024px){salla-filters,salla-filters>*{padding-left:1.25rem!important;padding-right:1.25rem!important}}#offer-corner-badge{z-index:1;float:left;width:auto;height:auto;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity,1));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));border-width:0;margin:0;padding:.25rem 3rem;position:absolute}input[type=radio].sr-only div#offer-corner-badge{transition:all .3s}input[type=radio].sr-only:checked~div#offer-corner-badge{border-color:var(--color-main)}#offer-corner-badge:where([dir=ltr],[dir=ltr] *){--tw-rotate:45deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));top:1.25rem;right:-3.5rem}#offer-corner-badge:where([dir=rtl],[dir=rtl] *){--tw-rotate:-45deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));top:.75rem;left:-3rem}.cart-options{--tw-border-opacity:1;border-style:dashed;border-width:1px;border-color:rgb(156 163 175/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:16px}.main-content>div.cart-options,.main-content>section.cart-options{border-radius:0;padding:0}.cart-options salla-product-options{margin-bottom:0;padding-top:0}.cart-options salla-product-options .s-product-options-option:not(div.s-product-options-option-booking){display:block!important}.cart-options salla-product-options-label{margin-bottom:.75rem}.cart-options salla-product-options .s-form-control,.cart-options salla-product-options .s-datetime-picker-input{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1));border-radius:16px}.cart-options salla-product-options .s-product-options-multiple-options-wrapper{display:block!important}.sticky-product-bar__quantity .s-quantity-input-container{width:100%;max-width:120px}.sticky-product-bar__btn .s-button-btn,.sticky-product-bar__btn .s-button-element{border-radius:9999px}.s-add-product-button-main .s-add-product-button-mini-checkout{--salla-fast-checkout-button-border-radius:9999px}.sticky-product-bar>div:has(>.sticky-product-bar__btn){width:100%}.sticky-product-bar salla-quantity-input:not(.hydrated){min-height:40px}.sticky-product-bar salla-add-product-button:not(.hydrated){min-height:40px;display:block}.sticky-product-bar .s-skeleton-input,.sticky-product-bar .s-skeleton-button,.sticky-product-bar .s-skeleton-input .s-skeleton-pulse,.sticky-product-bar .s-skeleton-button .s-skeleton-pulse{height:40px!important}@keyframes price-bump{0%{transform:scale(1)}30%{transform:scale(1.09)}55%{transform:scale(.98)}to{transform:scale(1)}}.price-bump .price-bump__now{transform-origin:50%;animation:.42s cubic-bezier(.22,1,.36,1) price-bump;display:inline-block}@media (prefers-reduced-motion:reduce){.price-bump .price-bump__now{animation:none}}.product-gallery .s-skeleton-slider{margin-bottom:.625rem}@media (width>=768px){.product-gallery .s-skeleton-slider{margin-bottom:0}}.product-gallery .s-skeleton-slider-image{aspect-ratio:1;height:auto!important}.product-gallery--model .s-skeleton-slider-image{aspect-ratio:auto;height:500px!important}.product-details__rating .s-skeleton-card{height:30px;overflow:hidden}.product-gallery__poster{inset-inline:0;z-index:2;position:absolute;top:0}.product-metadata .s-metadata-wrapper{display:block}.product-metadata .s-metadata-box{margin-bottom:0}.product-metadata .s-metadata-box-header{cursor:pointer;-webkit-user-select:none;user-select:none;justify-content:space-between;align-items:center;gap:.75rem;margin-bottom:0;padding-top:1rem;padding-bottom:1rem;font-size:1rem;font-weight:700;line-height:1.5rem;display:flex}.product-metadata .s-metadata-box-header *{pointer-events:none}.product-metadata .s-metadata-box-header{color:#1f2937}.product-metadata .s-metadata-box-header i{display:none}.product-metadata .s-metadata-box-header:after{content:\"+\";--tw-text-opacity:1;width:1.25rem;height:1.25rem;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0;place-items:center;font-size:1.125rem;font-weight:400;line-height:1;display:grid}.product-metadata .s-metadata-box.is-open>.s-metadata-box-header{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.product-metadata .s-metadata-box.is-open>.s-metadata-box-header:after{content:\"−\"}.product-metadata .s-metadata-row{margin-bottom:0}.product-metadata .s-metadata-box-header~.s-metadata-row{display:none}.product-metadata .s-metadata-box.is-open>.s-metadata-row{justify-content:space-between;align-items:center;gap:1rem;padding:.75rem .5rem;font-size:.875rem;line-height:1.25rem;display:flex}.product-metadata .s-metadata-box.is-open>.s-metadata-row:nth-child(2n){background:#fafafa}.product-metadata .s-metadata-row-name{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1));flex-shrink:0;margin:0}.product-metadata .s-metadata-row-value{text-align:end;--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1));margin:0}.product-metadata .s-metadata-row-value a{color:var(--color-primary);text-decoration-line:underline}.s-quantity-input{display:inline-flex}.s-quantity-input .s-quantity-input-container{--tw-border-opacity:1;border-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1));border-radius:9999px;justify-content:space-between;align-items:center;gap:.25rem;height:2.5rem;padding:.25rem}.main-content>div.s-quantity-input .s-quantity-input-container,.main-content>section.s-quantity-input .s-quantity-input-container{border-radius:0;padding:0}.s-quantity-input .s-quantity-input-button{border-width:0;border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;width:2rem;height:2rem;padding:0;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex}.s-quantity-input .s-quantity-input-button svg{width:1rem;height:1rem;margin-left:auto;margin-right:auto}.s-quantity-input .s-quantity-input-button:disabled{opacity:.4}.s-quantity-input .s-quantity-input-increase-button{background-color:var(--color-primary);fill:#fff;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.s-quantity-input .s-quantity-input-increase-button:hover:not(:disabled){background-color:var(--color-primary-dark);fill:#fff;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.s-quantity-input .s-quantity-input-decrease-button{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1));fill:#6b7280;--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.s-quantity-input .s-quantity-input-decrease-button:hover:not(:disabled){--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));fill:#374151;--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.s-quantity-input .s-quantity-input-input{text-align:center;--tw-text-opacity:1;width:2.5rem;color:rgb(17 24 39/var(--tw-text-opacity,1));--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);background-color:#0000;border-width:0;padding-left:.25rem;padding-right:.25rem;font-size:1rem;font-weight:700;line-height:1.5rem}.s-quantity-input .s-quantity-input-input:focus{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow,0 0 #0000);border-width:0}.s-quantity-input[max=\"1\"] input{pointer-events:none;opacity:.5}.s-quantity-input[max=\"1\"] .s-quantity-input-button{cursor:not-allowed}body.font-dinnextltarabic-regular .btn--add-to-cart{padding-top:0!important;padding-bottom:0!important}[dir=rtl]{--font-main:var(--font-ar)}body{font-family:var(--font-main)}html{scrollbar-gutter:stable}.last\\:mb-0:last-child{margin-bottom:0}.only\\:px-0:only-child{padding-left:0;padding-right:0}.only\\:px-1:only-child{padding-left:.25rem;padding-right:.25rem}.even\\:border-gray-200:nth-child(2n){--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.hover\\:text-primary:hover{color:var(--color-primary)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-75:hover{opacity:.75}.hover\\:opacity-80:hover{opacity:.8}.group:hover .group-hover\\:-translate-x-1{--tw-translate-x:-.25rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (width>=640px){.sm\\:col-span-2{grid-column:span 2/span 2}.sm\\:mt-0{margin-top:0}.sm\\:mt-16{margin-top:4rem}.sm\\:inline-flex{display:inline-flex}.sm\\:grid{display:grid}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:items-start{align-items:flex-start}.sm\\:gap-4{gap:1rem}.sm\\:p-1{padding:.25rem}.sm\\:pb-0{padding-bottom:0}}@media (width>=768px){.md\\:sticky{position:sticky}.md\\:top-24{top:6rem}.md\\:-mb-2{margin-bottom:-.5rem}.md\\:mb-9{margin-bottom:2.25rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:h-24{height:6rem}.md\\:\\!w-2\\/4{width:50%!important}.md\\:w-2\\/4{width:50%}.md\\:w-24{width:6rem}.md\\:flex-row{flex-direction:row}.md\\:overflow-hidden{overflow:hidden}.md\\:pb-16{padding-bottom:4rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (width>=1024px){.lg\\:sticky{position:sticky}.lg\\:-mt-28{margin-top:-7rem}.lg\\:mb-24{margin-bottom:6rem}.lg\\:mb-5{margin-bottom:1.25rem}.lg\\:block{display:block}.lg\\:hidden{display:none}.lg\\:w-72{width:18rem}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:gap-16{gap:4rem}.lg\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.lg\\:py-16{padding-top:4rem;padding-bottom:4rem}.lg\\:py-7{padding-top:1.75rem;padding-bottom:1.75rem}.lg\\:pb-11{padding-bottom:2.75rem}.lg\\:pt-10{padding-top:2.5rem}.lg\\:pt-8{padding-top:2rem}.lg\\:shadow-default{--tw-shadow:5px 10px 30px #2b2d340d;--tw-shadow-colored:5px 10px 30px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}}.ltr\\:right-4:where([dir=ltr],[dir=ltr] *){right:1rem}.ltr\\:mr-1:where([dir=ltr],[dir=ltr] *){margin-right:.25rem}.ltr\\:mr-1\\.5:where([dir=ltr],[dir=ltr] *){margin-right:.375rem}.ltr\\:mr-2:where([dir=ltr],[dir=ltr] *){margin-right:.5rem}.ltr\\:mr-4:where([dir=ltr],[dir=ltr] *){margin-right:1rem}.ltr\\:mr-8:where([dir=ltr],[dir=ltr] *){margin-right:2rem}.ltr\\:even\\:border-l:nth-child(2n):where([dir=ltr],[dir=ltr] *){border-left-width:1px}@media (width>=640px){.sm\\:ltr\\:text-left:where([dir=ltr],[dir=ltr] *){text-align:left}}@media (width>=1024px){.ltr\\:lg\\:mr-8:where([dir=ltr],[dir=ltr] *){margin-right:2rem}.ltr\\:lg\\:pr-16:where([dir=ltr],[dir=ltr] *){padding-right:4rem}}.rtl\\:left-4:where([dir=rtl],[dir=rtl] *){left:1rem}.rtl\\:ml-1:where([dir=rtl],[dir=rtl] *){margin-left:.25rem}.rtl\\:ml-1\\.5:where([dir=rtl],[dir=rtl] *){margin-left:.375rem}.rtl\\:ml-2:where([dir=rtl],[dir=rtl] *){margin-left:.5rem}.rtl\\:ml-4:where([dir=rtl],[dir=rtl] *){margin-left:1rem}.rtl\\:ml-8:where([dir=rtl],[dir=rtl] *){margin-left:2rem}.rtl\\:ml-\\[unset\\]:where([dir=rtl],[dir=rtl] *){margin-left:unset}.rtl\\:mr-4:where([dir=rtl],[dir=rtl] *){margin-right:1rem}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}.rtl\\:even\\:border-r:nth-child(2n):where([dir=rtl],[dir=rtl] *){border-right-width:1px}@media (width>=640px){.sm\\:rtl\\:text-right:where([dir=rtl],[dir=rtl] *){text-align:right}}@media (width>=1024px){.rtl\\:lg\\:ml-8:where([dir=rtl],[dir=rtl] *){margin-left:2rem}.rtl\\:lg\\:pl-16:where([dir=rtl],[dir=rtl] *){padding-left:4rem}}";
// app/routes/__root.tsx
var DevSettingsWidget = null;
var Route$44 = createTwilightRootRoute()({ shellComponent: RootComponent });
var CRITICAL_CSS = {
	[HOME_ROUTE_ID]: critical_default,
	[PRODUCT_ROUTE_ID]: critical_product_default
};
function RootComponent() {
	const ctx = getTwilightContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: ctx.locale,
		dir: ctx.dir,
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", { charSet: "UTF-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
				httpEquiv: "X-UA-Compatible",
				content: "IE=edge"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeStylesheet, {
				href: app_default,
				critical: CRITICAL_CSS
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeHeadContent, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("noscript", { children: [
					"To get full functionality of this site you need to enable JavaScript.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.enable-javascript.com/",
						rel: "noreferrer",
						target: "_blank",
						children: "To enable JavaScript on webpage"
					}),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwilightProvider, {
					translations: theme_translations_default,
					layout: ThemeLayout,
					toastMobilePosition: "top-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TanStackRouterDevtools, { position: "bottom-right" }),
				DevSettingsWidget,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-DEIABJV4.js
async function slugBrandRedirectLoader(ctx) {
	const locale = ctx.params.locale || "ar";
	throw redirect(`/${locale}/brands/${ctx.params.id}`);
}
async function pendingOrdersRedirectLoader(ctx = { params: {} }) {
	const locale = ctx.params.locale || "ar";
	throw redirect(`/${locale}/account/orders?status=pending`);
}
async function ratingRedirectLoader(ctx = { params: {} }) {
	const locale = ctx.params.locale || "ar";
	throw redirect(`/${locale}/account/orders`);
}
async function accountRedirectLoader(ctx) {
	const prefix = ctx.params.locale ? `/${ctx.params.locale}` : "";
	throw redirect(`${prefix}/account/${ctx.page}${ctx.search ?? ""}`, { statusCode: 301 });
}
async function productsSourceRedirectLoader(ctx) {
	const prefix = ctx.params.locale ? `/${ctx.params.locale}` : "";
	const query = new URLSearchParams(ctx.search);
	query.delete("source");
	const rest = query.toString();
	throw redirect(`${prefix}/products?source=${ctx.source}${rest ? `&${rest}` : ""}`, { statusCode: 301 });
}
function LogoutRedirect() {
	(0, import_react.useEffect)(() => {
		clearAuthTokenCookie();
		window.location.replace(window.location.href.replace(/\/logout\/?(\?[^#]*)?(#.*)?$/, ""));
	}, []);
	return null;
}
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/$locale.tsx
var $$splitComponentImporter$30 = () => import("./_locale-Cq7ukIEa.js");
var Route$43 = createFileRoute("/{-$locale}")({
	beforeLoad: ({ params, location }) => {
		const { locale } = params;
		if (!locale) return;
		if (!isLocale(locale)) throw redirect$1({
			to: `/ar${location.pathname}`,
			search: location.search,
			replace: true
		});
	},
	loader: async ({ params, context, location }) => {
		if (context.storeBaseFollowsLocale) return;
		const settings = await context.queryClient.ensureQueryData(store.queries.settings());
		const listed = settings?.languages;
		const soleEntry = listed?.length === 1 ? listed[0] : void 0;
		const soleLang = soleEntry ? (soleEntry.iso_code ?? soleEntry.code)?.toLowerCase() : void 0;
		const single = settings?.store?.settings?.is_multilingual === false || listed != null && listed.length < 2;
		const segment = single && isLocale(soleLang) && soleLang !== "ar" ? soleLang : null;
		const isMultilingual = !single;
		const pathWithoutLocale = params.locale ? location.pathname.slice(params.locale.length + 1) || "/" : location.pathname;
		if (!isMultilingual && !segment && params.locale) throw redirect$1({
			to: pathWithoutLocale,
			search: location.search,
			replace: true
		});
		if (!isMultilingual && segment && params.locale !== segment) throw redirect$1({
			to: `/${segment}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`,
			search: location.search,
			replace: true
		});
		if (!isMultilingual && segment && !params.locale) throw redirect$1({
			to: `/${segment}${location.pathname === "/" ? "" : location.pathname}`,
			search: location.search,
			replace: true
		});
		if (isMultilingual && !params.locale) {
			if (isLocale(location.pathname.split("/")[1])) throw notFound();
			throw redirect$1({
				to: `/ar${location.pathname}`,
				search: location.search,
				replace: true
			});
		}
		const { lang, ...search } = location.search;
		const offered = settings?.languages?.some((language) => (language.iso_code ?? language.code)?.toLowerCase() === lang);
		if (params.locale && lang !== params.locale && isLocale(lang) && offered) throw redirect$1({
			to: `/${lang}${location.pathname.slice(params.locale.length + 1)}`,
			search,
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
// app/routes/index.tsx
var $$splitComponentImporter$29 = () => import("./routes-NLpQIBDz.js");
/**
* Home (index) route configuration.
* Loads page data via loader and renders the Home component.
*/
var Route$42 = createFileRoute("/{-$locale}/")({
	loader: ({ params }) => Home.loader({ locale: params.locale }),
	head: withHead(Home),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
/**
* Home page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/account.tsx
var $$splitComponentImporter$28 = () => import("./account-Dy0ParZc.js");
var ACCOUNT_LAYOUT_PENDING_KEY = "account:layout-pending";
function AccountLayoutPendingComponent() {
	const AccountLayoutPending = useComponent(ACCOUNT_LAYOUT_PENDING_KEY);
	return AccountLayoutPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountLayoutPending, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerLayoutSkeleton, {});
}
var Route$41 = createFileRoute("/{-$locale}/account")({
	component: lazyRouteComponent($$splitComponentImporter$28, "component"),
	pendingComponent: AccountLayoutPendingComponent
});
// app/routes/blog.tsx
var $$splitComponentImporter$27 = () => import("./blog-Cd7dgw5b.js");
/**
* Blog route configuration.
* Loads page data via loader and renders the Blog component.
*/
var Route$40 = createFileRoute("/{-$locale}/blog")({
	loader: ({ params }) => Blog$1.loader({ locale: params.locale }),
	head: withHead(Blog$1),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
/**
* Blog page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/routes/brands.js
async function brandsLoader() {
	const { items, next } = await brand.list();
	const i18n = getTwilightContext().i18n;
	return {
		page: {
			slug: RouteId.BRANDS_INDEX,
			title: i18n.t("common.titles.brands") || "Brands"
		},
		brands: items,
		pagination: { next }
	};
}
var LazyBrandsPage = (0, import_react.lazy)(() => import("./BrandsPage-IC26RKIG-B50V1mmW.js").then((m) => ({ default: m.BrandsPage })));
async function brandsLoaderWithExtend(_ctx, extend) {
	const data = await brandsLoader();
	if (extend) {
		const extra = await extend(data, { params: {} });
		return {
			...data,
			...extra
		};
	}
	return data;
}
function brandsHead(ctx, data) {
	return {
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	};
}
var Brands = {
	id: RouteId.BRANDS_INDEX,
	loader: brandsLoaderWithExtend,
	head: brandsHead,
	Component: LazyBrandsPage
};
// app/routes/brands.tsx
var $$splitComponentImporter$26 = () => import("./brands-UFliW2L2.js");
/**
* Brands route configuration.
* Loads page data via loader and renders the Brands component.
*/
var Route$39 = createFileRoute("/{-$locale}/brands")({
	loader: ({ params }) => Brands.loader({ locale: params.locale }),
	head: withHead(Brands),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
/**
* Brands page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-PQNLRRWJ.js
function normalizeCartResponse(data) {
	if (!data.cart) return null;
	return {
		...data.cart,
		loyalty: data.loyalty ?? null,
		gift: data.gift ?? data.cart.gift ?? null
	};
}
var cart = {
	get: async (cartId) => {
		const { data } = await api.get(`cart/${cartId}`).json();
		return normalizeCartResponse(data);
	},
	getOrThrow: (cartId) => orThrow(cart.get(cartId)),
	/** The visitor's cart id, which only the Salla SDK knows; `null` outside the browser. */
	getCurrentId: async () => {
		const salla = getSallaSDK();
		if (!salla) return null;
		await salla.onReady().catch(() => void 0);
		return salla.cart.api.getCurrentCartId();
	},
	queries: {
		detail: (cartId) => queryOptions({
			queryKey: ["cart", cartId],
			queryFn: () => cart.get(cartId),
			staleTime: 0,
			gcTime: 0
		}),
		currentId: () => queryOptions({
			queryKey: ["cart", "current-id"],
			queryFn: () => cart.getCurrentId(),
			staleTime: 0,
			gcTime: 0
		})
	}
};
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-3IBJ5QUW.js
var LazyCartItem = (0, import_react.lazy)(() => import("./CartItem-HTEPMUDS-ADpJhXjf.js").then((m) => ({ default: m.CartItem })));
var LazyCartSummary = (0, import_react.lazy)(() => import("./CartSummary-OKLYOGJ3-DcdtKKvT.js").then((m) => ({ default: m.CartSummary })));
var LazySeoCartWidget = (0, import_react.lazy)(() => import("./SeoCartWidget-XU5LKBMF-D-vW3aKg.js").then((m) => ({ default: m.SeoCartWidget })));
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/routes/cart.js
function CartPageContent$1({ page }) {
	const { store } = useTwilight();
	const { t } = useTranslation();
	const { data: loyaltyPoints } = useQuery(loyalty.queries.points());
	const { data: cartId } = useQuery(cart.queries.currentId());
	const { data: cartData } = useQuery({
		...cart.queries.detail(cartId),
		enabled: !!cartId
	});
	if (cartId == null || cartData === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSkeleton, {});
	if (!cartData || cartData.items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyBreadcrumb, { page }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyNoContent, {
			icon: "sicon-shopping-bag",
			message: t("pages.cart.empty_cart", "Your cart is empty"),
			actionLabel: t("common.elements.back_home", "Back to Home"),
			actionUrl: "/"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazySeoCartWidget, { cart: cartData }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyBreadcrumb, { page }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "sr-only",
				children: t("common.titles.cart", "Cart")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaConditionalOffer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "cart:start" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-5 flex flex-col items-start lg:flex-row pb-6 lg:pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "main-content w-full lg:w-[calc(100%-384px)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, {
							name: "cart:items.start",
							context: { cartItems: cartData.items }
						}),
						cartData.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyCartItem, {
							item,
							isFirst: index === 0
						}, item.id)),
						cartData.options?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cart-options",
							children: cartData.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "first:pt-5 relative",
								onChange: (e) => window.salla?.form.onChange("cart.updateItem", e),
								id: `item-${option.id}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "id",
										value: option.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "quantity",
										value: option.quantity
									}),
									option.options && option.options.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaProductOptions, {
										options: JSON.stringify(option.options),
										productId: option.id
									})
								]
							}, option.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaOffer, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "cart:items.end" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyCartSummary, {
					cart: cartData,
					applyCouponEnabled: store.settings?.cart?.apply_coupon_enabled,
					taxAmount: cartData.tax_amount,
					loyalty: cartData.loyalty,
					gift: cartData.gift,
					loyaltyPoints: loyaltyPoints ?? void 0
				}, cartData.id)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "cart:end" })
		]
	});
}
function CartPage$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartPageContent$1, { ...props });
}
function cartLoader() {
	const i18n = getTwilightContext().i18n;
	return { page: {
		slug: RouteId.CART,
		title: i18n.t("common.titles.cart") || "Cart"
	} };
}
async function loader$3(_ctx, extend) {
	const data = cartLoader();
	if (extend) {
		const extra = extend(data, { params: {} });
		return {
			...data,
			...extra instanceof Promise ? {} : extra
		};
	}
	return data;
}
function head$3(ctx, data) {
	return {
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	};
}
var Cart = {
	id: RouteId.CART,
	loader: loader$3,
	head: head$3,
	Component: CartPage$1
};
// app/routes/cart.tsx
var $$splitComponentImporter$25 = () => import("./cart-CaYsCAEO.js");
var Route$38 = createFileRoute("/{-$locale}/cart")({
	loader: ({ params }) => Cart.loader({ locale: params.locale }),
	head: withHead(Cart),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/latest-products.tsx
var Route$37 = createFileRoute("/{-$locale}/latest-products")({ loader: ({ params, location }) => productsSourceRedirectLoader({
	params: { locale: params.locale },
	source: "latest",
	search: location.searchStr
}) });
// app/routes/logout.tsx
var $$splitComponentImporter$24 = () => import("./logout-rvV3hcv1.js");
var Route$36 = createFileRoute("/{-$locale}/logout")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
// app/routes/loyalty.tsx
var $$splitComponentImporter$23 = () => import("./loyalty-DNoBQzci.js");
/**
* Loyalty route configuration.
* Loads page data via loader and renders the Loyalty component.
*/
var Route$35 = createFileRoute("/{-$locale}/loyalty")({
	loader: ({ params }) => Loyalty.loader({ locale: params.locale }),
	head: withHead(Loyalty),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
/**
* Loyalty page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/loyalty_points.tsx
var $$splitComponentImporter$22 = () => import("./loyalty_points-CMRzoJLS.js");
/**
* LoyaltyPoints route configuration.
* Loads page data via loader and renders the LoyaltyPoints component.
*/
var Route$34 = createFileRoute("/{-$locale}/loyalty_points")({
	loader: ({ params }) => LoyaltyPoints.loader({ locale: params.locale }),
	head: withHead(LoyaltyPoints),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerLayoutSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
/**
* LoyaltyPoints page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/most-sales-products.tsx
var Route$33 = createFileRoute("/{-$locale}/most-sales-products")({ loader: ({ params, location }) => productsSourceRedirectLoader({
	params: { locale: params.locale },
	source: "sales",
	search: location.searchStr
}) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/notifications.tsx
var Route$32 = createFileRoute("/{-$locale}/notifications")({ loader: ({ params, location }) => accountRedirectLoader({
	params: { locale: params.locale },
	page: "notifications",
	search: location.searchStr
}) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/offers.tsx
var Route$31 = createFileRoute("/{-$locale}/offers")({ loader: ({ params, location }) => productsSourceRedirectLoader({
	params: { locale: params.locale },
	source: "offers",
	search: location.searchStr
}) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/orders.tsx
var Route$30 = createFileRoute("/{-$locale}/orders")({ loader: ({ params, location }) => accountRedirectLoader({
	params: { locale: params.locale },
	page: "orders",
	search: location.searchStr
}) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/pending-orders.tsx
var Route$29 = createFileRoute("/{-$locale}/pending-orders")({ loader: ({ params }) => pendingOrdersRedirectLoader({ params: { locale: params.locale } }) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/products.tsx
var $$splitComponentImporter$21 = () => import("./products-RZfzUV2w.js");
var SOURCES = [
	"latest",
	"sales",
	"offers",
	"reorder"
];
/**
* Products route configuration: `?source=` picks the list, the latest products by default.
*/
var Route$28 = createFileRoute("/{-$locale}/products")({
	validateSearch: (search) => {
		const page = Number(search.page) || 1;
		const sort = search.sort || void 0;
		return {
			source: SOURCES.find((s) => s === search.source) ?? "latest",
			...page > 1 ? { page } : {},
			...sort ? { sort } : {}
		};
	},
	loaderDeps: ({ search }) => ({
		source: search.source,
		page: search.page,
		sort: search.sort
	}),
	loader: ({ deps, params }) => ProductListing.loader({
		params: { source: deps.source },
		search: {
			page: deps.page,
			sort: deps.sort
		},
		locale: params.locale
	}),
	head: withHead(ProductListing),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductListing.Pending, { hideFilters: true }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
/**
* Products page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/profile.tsx
var Route$27 = createFileRoute("/{-$locale}/profile")({ loader: ({ params, location }) => accountRedirectLoader({
	params: { locale: params.locale },
	page: "profile",
	search: location.searchStr
}) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/reviews.tsx
var $$splitComponentImporter$20 = () => import("./reviews-DO1RttCb.js");
/**
* Reviews route configuration.
* Loads page data via loader and renders the Reviews component.
*/
var Route$26 = createFileRoute("/{-$locale}/reviews")({
	loader: ({ params }) => Reviews.loader({ locale: params.locale }),
	head: withHead(Reviews),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
/**
* Reviews page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/search.tsx
var $$splitComponentImporter$19 = () => import("./search-BkVGOTiQ.js");
/**
* Search route configuration: `searchListingSearch` keeps ?q=, ?page= and ?sort=
* and forwards them to the loader.
*/
var Route$25 = createFileRoute("/{-$locale}/search")({
	...searchListingSearch,
	loader: ({ deps, params }) => ProductListing.loader({
		params: { source: "search" },
		search: deps,
		locale: params.locale
	}),
	head: withHead(ProductListing),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductListing.Pending, {}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
/**
* Search page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/testimonials.tsx
var $$splitComponentImporter$18 = () => import("./testimonials-Cojtnhvy.js");
/**
* Testimonials route configuration.
* Loads page data via loader and renders the Testimonials component.
*/
var Route$24 = createFileRoute("/{-$locale}/testimonials")({
	loader: ({ params }) => Testimonials.loader({ locale: params.locale }),
	head: withHead(Testimonials),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
/**
* Testimonials page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/wallet.tsx
var Route$23 = createFileRoute("/{-$locale}/wallet")({ loader: ({ params, location }) => accountRedirectLoader({
	params: { locale: params.locale },
	page: "wallet",
	search: location.searchStr
}) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/wishlist.tsx
var Route$22 = createFileRoute("/{-$locale}/wishlist")({ loader: ({ params, location }) => accountRedirectLoader({
	params: { locale: params.locale },
	page: "wishlist",
	search: location.searchStr
}) });
// app/routes/$slug.brand-$id.tsx
var Route$21 = createFileRoute("/{-$locale}/$slug/brand-{$id}")({ loader: ({ params }) => slugBrandRedirectLoader({ params: {
	slug: params.slug,
	id: params.id,
	locale: params.locale
} }) });
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/$slug.c$id.tsx
var $$splitComponentImporter$17 = () => import("./_slug.c_id-CqQfBQaU.js");
/**
* ProductListing route configuration.
* Loads page data via loader and renders the ProductListing component.
*/
var Route$20 = createFileRoute("/{-$locale}/$slug/c{$id}")({
	...listingSearch,
	loader: ({ deps, params }) => ProductListing.loader({
		params: { id: params.id },
		search: deps,
		locale: params.locale
	}),
	head: withHead(ProductListing),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductListing.Pending, {}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
/**
* ProductListing page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/chunk-6F6VACX5.js
var page = {
	find: async (slug) => {
		const { data } = await api.get(`pages/${slug}`).json();
		return data;
	},
	findOrThrow: (slug) => orThrow(page.find(slug)),
	queries: { detail: (slug) => queryOptions({
		queryKey: [
			"pages",
			"detail",
			slug
		],
		queryFn: () => page.find(slug)
	}) }
};
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/routes/page.js
async function pageSingleLoader({ params }) {
	const data = await page.findOrThrow(params.id);
	return { page: {
		slug: RouteId.PAGE_SINGLE,
		id: data.id,
		title: data.name,
		url: data.url,
		content: data.content,
		metadata: data.metadata,
		created_at: data.created_at
	} };
}
var LazyPageSingle = (0, import_react.lazy)(() => import("./PageSingle-BOZFETZ5-CIZgSBgl.js").then((m) => ({ default: m.PageSingle })));
async function loader$2(ctx, extend) {
	const data = await pageSingleLoader({ params: ctx.params });
	if (extend) {
		const extra = await extend(data, ctx);
		return {
			...data,
			...extra
		};
	}
	return data;
}
function head$2(ctx, data) {
	const title = data.page.title;
	const description = data.page.content?.replace(/<[^>]+>/g, "");
	return {
		title,
		description,
		canonical: data.page.url,
		openGraph: {
			type: "article",
			title,
			description,
			url: data.page.url,
			publishedTime: data.page.created_at?.published_time,
			modifiedTime: data.page.created_at?.modified_time
		},
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	};
}
var PageSingle = {
	id: RouteId.PAGE_SINGLE,
	loader: loader$2,
	head: head$2,
	Component: LazyPageSingle
};
// app/routes/$slug.page-$id.tsx
var $$splitComponentImporter$16 = () => import("./_slug.page-_id-BQMdkHil.js");
var Route$19 = createFileRoute("/{-$locale}/$slug/page-{$id}")({
	loader: async ({ params }) => {
		const data = await page.findOrThrow(params.id);
		return { page: {
			slug: "page-single",
			id: data.id,
			title: data.name,
			url: data.url,
			content: data.content,
			metadata: data.metadata,
			created_at: data.created_at,
			type: data.type
		} };
	},
	head: withHead(PageSingle),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/routes/product.js
async function productLoader({ params }) {
	const data = await product.findOrThrow(params.id);
	const breadcrumbs = [{
		name: getTwilightContext().i18n.t("common.titles.home"),
		url: "/"
	}];
	if (data.category) breadcrumbs.push({
		name: data.category.name,
		url: data.category.url
	});
	breadcrumbs.push({
		name: data.name,
		url: data.url
	});
	return {
		page: {
			slug: RouteId.PRODUCT_SINGLE,
			id: data.id,
			title: data.name,
			url: data.url,
			parent: data.category && data.category.id ? {
				id: data.category.id,
				name: data.category.name,
				url: data.category.url
			} : null,
			breadcrumbs
		},
		product: data
	};
}
function ProductPage({ product: initialProduct, page }) {
	const { theme, store } = useTwilight();
	const { t } = useTranslation();
	const { product: product2 } = useProduct(initialProduct);
	const { commentsKey } = useComments();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				theme?.settings?.product_show_breadcrumbs !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyBreadcrumb, { page }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:start" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start md:flex-row",
					id: `product-${product2.id}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGallery, { product: product2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "main-content md:sticky md:overflow-hidden top-24 w-full md:w-2/4 md:pb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:details.start" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyProductDetails, {
								product: product2,
								showTags: theme.settings.show_tags
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:details.end" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:single.form.start" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyAddToCartForm, {
								product: product2,
								stickyAddToCart: theme.settings.sticky_add_to_cart
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:single.form.end" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, {
								name: "product:single.description.end",
								context: { product: product2 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaQuickOrder, { className: "mt-5 md:-mb-2 block" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaOffer, {})
			]
		}),
		store.settings?.rating?.show_on_product && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyRenderWhenVisible, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaComments, {
			itemId: Number(product2.id),
			type: "product"
		}, commentsKey) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:related.start" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyRenderWhenVisible, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsSlider, { data: {
				products: {
					source: "related",
					source_value: Number(product2.id)
				},
				title: t("pages.products.similar_products"),
				display_all_url: ""
			} })
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:related.end" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyRenderWhenVisible, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyTestimonials, { data: {} })
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "product:end" })
	] }, product2.id);
}
async function loader$1(ctx, extend) {
	const data = await productLoader({ params: ctx.params });
	if (extend) {
		const extra = await extend(data, ctx);
		return {
			...data,
			...extra
		};
	}
	return data;
}
function head$1(ctx, data) {
	if (!data?.product) return {
		title: "Products",
		description: "Browse our products"
	};
	const product2 = data.product;
	const storeName = ctx.settings?.store?.name ?? "";
	const description = product2.description?.replace(/<[^>]*>/g, "").slice(0, 160) ?? "";
	const priceValidUntil = /* @__PURE__ */ new Date();
	priceValidUntil.setMonth(priceValidUntil.getMonth() + 1);
	const images = product2.images?.map((img) => img.url).filter(Boolean) ?? [];
	if (product2.image?.url && !images.includes(product2.image.url)) images.unshift(product2.image.url);
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product2.name,
		description,
		sku: product2.sku,
		image: images.length > 0 ? images : void 0,
		offers: {
			"@type": "Offer",
			url: product2.url,
			availability: product2.is_available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
			price: product2.sale_price,
			priceCurrency: getActiveCurrency(product2.currency),
			priceValidUntil: priceValidUntil.toISOString().split("T")[0],
			seller: storeName ? {
				"@type": "Organization",
				name: storeName
			} : void 0
		}
	};
	if (product2.brand) jsonLd.brand = {
		"@type": "Brand",
		name: product2.brand.name,
		description: product2.brand.description,
		logo: product2.brand.logo
	};
	if (product2.rating && product2.rating.count > 0) {
		const ratingValue = product2.rating.stars;
		jsonLd.aggregateRating = {
			"@type": "AggregateRating",
			ratingCount: product2.rating.count,
			ratingValue
		};
		jsonLd.review = {
			"@type": "Review",
			author: storeName ? {
				"@type": "Organization",
				name: storeName
			} : void 0,
			reviewRating: {
				"@type": "Rating",
				bestRating: 5,
				ratingValue
			}
		};
	}
	if (product2.gtin && product2.gtin.length === 8) jsonLd.gtin8 = product2.gtin;
	if (product2.mpn) jsonLd.mpn = product2.mpn;
	const title = storeName ? `${product2.name} | ${storeName}` : product2.name;
	return {
		title,
		appendStoreTitle: false,
		description,
		canonical: product2.url,
		openGraph: {
			type: "product",
			title,
			description,
			images: product2.image?.url,
			url: product2.url
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: product2.image?.url
		},
		jsonLd,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname),
		scripts: ctx.settings?.store?.settings?.buy_now ? [fastCheckoutScript()] : []
	};
}
var Product = {
	id: RouteId.PRODUCT_SINGLE,
	loader: loader$1,
	head: head$1,
	Component: ProductPage
};
// app/routes/$slug.p$id.tsx
var $$splitComponentImporter$15 = () => import("./_slug.p_id-D6a0N1Jv.js");
var Route$18 = createFileRoute("/{-$locale}/$slug/p{$id}")({
	loader: ({ params }) => {
		try {
			if (typeof window !== "undefined") window.sessionStorage?.removeItem("breadcrumb-referrer");
		} catch {}
		return Product.loader({
			params: { id: params.id },
			locale: params.locale
		});
	},
	head: withHead(Product),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetailSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/$slug.tag-$id.tsx
var $$splitComponentImporter$14 = () => import("./_slug.tag-_id-5AoyGGez.js");
/**
* ProductListing route configuration.
* Loads page data via loader and renders the ProductListing component.
*/
var Route$17 = createFileRoute("/{-$locale}/$slug/tag-{$id}")({
	...listingSearch,
	loader: ({ deps, params }) => ProductListing.loader({
		params: {
			source: "tags",
			id: params.id
		},
		search: deps,
		locale: params.locale
	}),
	head: withHead(ProductListing),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductListing.Pending, { hideFilters: true }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
/**
* ProductListing page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/account.notifications.tsx
var $$splitComponentImporter$13 = () => import("./account.notifications-BuTI_OOG.js");
/**
* Notifications route configuration.
* Loads page data via loader and renders the Notifications component.
*/
var Route$16 = createFileRoute("/{-$locale}/account/notifications")({
	loader: ({ params }) => Notifications.loader({ locale: params.locale }),
	head: withHead(Notifications),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerPageSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
/**
* Notifications page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/account.orders.tsx
var $$splitComponentImporter$12 = () => import("./account.orders-C7IVhgng.js");
/**
* Orders route configuration.
* Loads page data via loader and renders the Orders component.
*/
var Route$15 = createFileRoute("/{-$locale}/account/orders")({
	validateSearch: (search) => {
		const status = search.status || void 0;
		return status ? { status } : {};
	},
	loaderDeps: ({ search }) => ({ status: search.status }),
	loader: ({ deps, params }) => Orders.loader({
		search: { status: deps.status },
		locale: params.locale
	}),
	head: withHead(Orders),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerPageSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
/**
* Orders page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/account.pending_orders.tsx
var Route$14 = createFileRoute("/{-$locale}/account/pending_orders")({ loader: ({ params }) => pendingOrdersRedirectLoader({ params: { locale: params.locale } }) });
// app/routes/account.profile.tsx
var $$splitComponentImporter$11 = () => import("./account.profile-0CLb_qVC.js");
/**
* Profile route configuration.
* Loads page data via loader and renders the Profile component.
*/
var Route$13 = createFileRoute("/{-$locale}/account/profile")({
	loader: ({ params }) => Profile.loader({ locale: params.locale }),
	head: withHead(Profile),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerPageSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
/**
* Profile page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/account.rating.tsx
var Route$12 = createFileRoute("/{-$locale}/account/rating")({ loader: ({ params }) => ratingRedirectLoader({ params: { locale: params.locale } }) });
// app/routes/account.settings.tsx
var $$splitComponentImporter$10 = () => import("./account.settings-Bcvpz2_i.js");
/**
* Settings route configuration.
* Loads page data via loader and renders the Settings component.
*/
var Route$11 = createFileRoute("/{-$locale}/account/settings")({
	loader: ({ params }) => Settings.loader({ locale: params.locale }),
	head: withHead(Settings),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerPageSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
/**
* Settings page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/account.wallet.tsx
var $$splitComponentImporter$9 = () => import("./account.wallet-D8c6ScEl.js");
/**
* Wallet route configuration.
* Loads page data via loader and renders the Wallet component.
*/
var Route$10 = createFileRoute("/{-$locale}/account/wallet")({
	validateSearch: (search) => {
		const page = Number(search.page) || 1;
		return page > 1 ? { page } : {};
	},
	loaderDeps: ({ search }) => ({ page: search.page }),
	loader: ({ deps }) => Wallet.loader({ search: { page: deps.page ?? 1 } }),
	head: withHead(Wallet),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerPageSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
/**
* Wallet page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/account.wishlist.tsx
var $$splitComponentImporter$8 = () => import("./account.wishlist-CEBNi4_p.js");
/**
* Wishlist route configuration.
* Loads page data via loader and renders the Wishlist component.
*/
var Route$9 = createFileRoute("/{-$locale}/account/wishlist")({
	validateSearch: (search) => {
		const page = Number(search.page) || 1;
		return page > 1 ? { page } : {};
	},
	loaderDeps: ({ search }) => ({ page: search.page }),
	loader: ({ deps, params }) => Wishlist.loader({
		search: { page: deps.page ?? 1 },
		locale: params.locale
	}),
	head: withHead(Wishlist),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerPageSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
/**
* Wishlist page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/brands.$id.tsx
var $$splitComponentImporter$7 = () => import("./brands._id-DuYFNd6P.js");
/**
* ProductListing route configuration.
* Loads page data via loader and renders the ProductListing component.
*/
var Route$8 = createFileRoute("/{-$locale}/brands/$id")({
	...listingSearch,
	loader: ({ deps, params }) => ProductListing.loader({
		params: {
			source: "brands",
			id: params.id
		},
		search: deps,
		locale: params.locale
	}),
	head: withHead(ProductListing),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductListing.Pending, { hideFilters: true }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
/**
* ProductListing page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/tags.$id.tsx
var $$splitComponentImporter$6 = () => import("./tags._id-q3dNZzaR.js");
/**
* ProductListing route configuration.
* Loads page data via loader and renders the ProductListing component.
*/
var Route$7 = createFileRoute("/{-$locale}/tags/$id")({
	...listingSearch,
	loader: ({ deps, params }) => ProductListing.loader({
		params: {
			source: "tags",
			id: params.id
		},
		search: deps,
		locale: params.locale
	}),
	head: withHead(ProductListing),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductListing.Pending, { hideFilters: true }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
/**
* ProductListing page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/dist/routes/thank-you.js
async function thankYouLoader({ params }) {
	const orderId = params.orderId;
	const [orderResult, thankYouResult] = await Promise.allSettled([order.find(orderId), order.thankYou(orderId)]);
	const orderData = orderResult.status === "fulfilled" ? orderResult.value.order : void 0;
	const thankYouData = thankYouResult.status === "fulfilled" ? thankYouResult.value : void 0;
	const i18n = getTwilightContext().i18n;
	return {
		page: {
			slug: RouteId.THANK_YOU,
			id: orderData ? String(orderData.id) : orderId,
			title: i18n.t("common.titles.thank_you") || "Thank You"
		},
		order: orderData,
		thank_you_title: thankYouData?.thank_you_title,
		messages: thankYouData?.messages ?? [],
		share_message: thankYouData?.share_message,
		short_share_message: thankYouData?.short_share_message
	};
}
var LazyThankYouPage = (0, import_react.lazy)(() => import("./ThankYouPage-RZFWZZXI-C8ozTTDB.js").then((m) => ({ default: m.ThankYouPage })));
async function loader(ctx, extend) {
	const data = await thankYouLoader({ params: ctx.params });
	if (extend) {
		const extra = await extend(data, ctx);
		return {
			...data,
			...extra
		};
	}
	return data;
}
function head(ctx, data) {
	return {
		title: data.page.title,
		description: data.page.description,
		alternateLanguages: buildHreflangAlternates(ctx.settings, ctx.location.pathname)
	};
}
var ThankYou = {
	id: RouteId.THANK_YOU,
	loader,
	head,
	Component: LazyThankYouPage
};
// app/routes/thankyou.$orderId.tsx
var $$splitComponentImporter$5 = () => import("./thankyou._orderId-Xyk0xCA9.js");
/**
* ThankYou route configuration.
* Loads page data via loader and renders the ThankYou component.
*/
var Route$6 = createFileRoute("/{-$locale}/thankyou/$orderId")({
	loader: ({ params }) => ThankYou.loader({
		params: { orderId: params.orderId },
		locale: params.locale
	}),
	head: withHead(ThankYou),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
/**
* ThankYou page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/account.orders.$id.tsx
var $$splitComponentImporter$4 = () => import("./account.orders._id-Cm6qv101.js");
/**
* OrderSingle route configuration.
* Loads page data via loader and renders the OrderSingle component.
*/
var Route$5 = createFileRoute("/{-$locale}/account/orders/$id")({
	loader: ({ params }) => OrderSingle.loader({
		params: { id: params.id },
		locale: params.locale
	}),
	head: withHead(OrderSingle),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerPageSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
/**
* OrderSingle page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/blog_.$slug.a-$id.tsx
var $$splitComponentImporter$3 = () => import("./blog_._slug.a-_id-CL8wsXUV.js");
/**
* BlogSingle route configuration.
* Loads page data via loader and renders the BlogSingle component.
*/
var Route$4 = createFileRoute("/{-$locale}/blog/$slug/a-{$id}")({
	loader: ({ params }) => BlogSingle.loader({
		params: {
			slug: params.slug,
			id: params.id
		},
		locale: params.locale
	}),
	head: withHead(BlogSingle),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
/**
* BlogSingle page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/blog_.$slug.c-$id.tsx
var $$splitComponentImporter$2 = () => import("./blog_._slug.c-_id-u-IzSST9.js");
/**
* BlogCategoryRoute route configuration.
* Loads page data via loader and renders the BlogCategoryRoute component.
*/
var Route$3 = createFileRoute("/{-$locale}/blog/$slug/c-{$id}")({
	loader: ({ params }) => BlogCategoryRoute.loader({
		params: {
			slug: params.slug,
			id: params.id
		},
		locale: params.locale
	}),
	head: withHead(BlogCategoryRoute),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
/**
* BlogCategoryRoute page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/blog_.$slug.tag-$id.tsx
var $$splitComponentImporter$1 = () => import("./blog_._slug.tag-_id-clxpUy3s.js");
/**
* BlogTagRoute route configuration.
* Loads page data via loader and renders the BlogTagRoute component.
*/
var Route$2 = createFileRoute("/{-$locale}/blog/$slug/tag-{$id}")({
	loader: ({ params }) => BlogTagRoute.loader({
		params: {
			slug: params.slug,
			id: params.id
		},
		locale: params.locale
	}),
	head: withHead(BlogTagRoute),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
/**
* BlogTagRoute page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// app/routes/blog_.author.$id.tsx
var $$splitComponentImporter = () => import("./blog_.author._id-nV-I7bii.js");
/**
* BlogAuthorRoute route configuration.
* Loads page data via loader and renders the BlogAuthorRoute component.
*/
var Route$1 = createFileRoute("/{-$locale}/blog/author/$id")({
	loader: ({ params }) => BlogAuthorRoute.loader({
		params: { id: params.id },
		locale: params.locale
	}),
	head: withHead(BlogAuthorRoute),
	pendingComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSkeleton, {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/**
* BlogAuthorRoute page component.
* Uses Route.useLoaderData() to access the data loaded by the route loader,
* following React best practices for data fetching in route components.
*/
// node_modules/.pnpm/@salla.sa+twilight-theme-engine@1.0.122_d6dfabf210baa4583b6841d8e1fd79ff/node_modules/@salla.sa/twilight-theme-engine/.twilight/redirect.$type.$id.tsx
var Route = createFileRoute("/{-$locale}/redirect/$type/$id")({ loader: async ({ params }) => {
	const { type, id } = params;
	const locale = params.locale || "ar";
	let redirectPath;
	const slug = "-";
	switch (type) {
		case "products":
			redirectPath = `/${locale}/${slug}/p${id}`;
			break;
		case "categories":
			redirectPath = `/${locale}/${slug}/c${id}`;
			break;
		case "brands":
			redirectPath = `/${locale}/brands/${id}`;
			break;
		case "pages":
			redirectPath = `/${locale}/${slug}/page-${id}`;
			break;
		case "blog_articles":
			redirectPath = `/${locale}/blog/${slug}/a-${id}`;
			break;
		case "blog_categories":
			redirectPath = `/${locale}/blog/${slug}/c-${id}`;
			break;
		case "products_tags":
			redirectPath = `/${locale}/${slug}/tag-${id}`;
			break;
		case "book_now":
			redirectPath = `/${locale}/landing/${id}`;
			break;
		default: redirectPath = `/${locale}`;
	}
	throw redirect$1({ to: redirectPath });
} });
// app/routeTree.gen.ts
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute = Route$43.update({
	id: "/{-$locale}",
	path: "/{-$locale}",
	getParentRoute: () => Route$44
});
var indexRoute = Route$42.update({
	id: "/",
	path: "/",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute = Route$41.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var blogRoute = Route$40.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var brandsRoute = Route$39.update({
	id: "/brands",
	path: "/brands",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var cartRoute = Route$38.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLatestProductsRoute = Route$37.update({
	id: "/latest-products",
	path: "/latest-products",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var logoutRoute = Route$36.update({
	id: "/logout",
	path: "/logout",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var loyaltyRoute = Route$35.update({
	id: "/loyalty",
	path: "/loyalty",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var loyalty_pointsRoute = Route$34.update({
	id: "/loyalty_points",
	path: "/loyalty_points",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightMostSalesProductsRoute = Route$33.update({
	id: "/most-sales-products",
	path: "/most-sales-products",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightNotificationsRoute = Route$32.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightOffersRoute = Route$31.update({
	id: "/offers",
	path: "/offers",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightOrdersRoute = Route$30.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightPendingOrdersRoute = Route$29.update({
	id: "/pending-orders",
	path: "/pending-orders",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightProductsRoute = Route$28.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightProfileRoute = Route$27.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightReviewsRoute = Route$26.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightSearchRoute = Route$25.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var testimonialsRoute = Route$24.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightWalletRoute = Route$23.update({
	id: "/wallet",
	path: "/wallet",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightWishlistRoute = Route$22.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var slugDotbrandIdRoute = Route$21.update({
	id: "/$slug/brand-{$id}",
	path: "/$slug/brand-{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightSlugDotcidRoute = Route$20.update({
	id: "/$slug/c{$id}",
	path: "/$slug/c{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var slugDotpageIdRoute = Route$19.update({
	id: "/$slug/page-{$id}",
	path: "/$slug/page-{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var slugDotpidRoute = Route$18.update({
	id: "/$slug/p{$id}",
	path: "/$slug/p{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightSlugDottagIdRoute = Route$17.update({
	id: "/$slug/tag-{$id}",
	path: "/$slug/tag-{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var accountDotnotificationsRoute = Route$16.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var accountDotordersRoute = Route$15.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountDotpending_ordersRoute = Route$14.update({
	id: "/pending_orders",
	path: "/pending_orders",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var accountDotprofileRoute = Route$13.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountDotratingRoute = Route$12.update({
	id: "/rating",
	path: "/rating",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var accountDotsettingsRoute = Route$11.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var accountDotwalletRoute = Route$10.update({
	id: "/wallet",
	path: "/wallet",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var accountDotwishlistRoute = Route$9.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightBrandsDotidRoute = Route$8.update({
	id: "/brands/$id",
	path: "/brands/$id",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightTagsDotidRoute = Route$7.update({
	id: "/tags/$id",
	path: "/tags/$id",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var thankyouDotorderIdRoute = Route$6.update({
	id: "/thankyou/$orderId",
	path: "/thankyou/$orderId",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var accountDotordersDotidRoute = Route$5.update({
	id: "/orders/$id",
	path: "/orders/$id",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute
});
var blog_DotslugDotaIdRoute = Route$4.update({
	id: "/blog/$slug/a-{$id}",
	path: "/blog/$slug/a-{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var blog_DotslugDotcIdRoute = Route$3.update({
	id: "/blog/$slug/c-{$id}",
	path: "/blog/$slug/c-{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var blog_DotslugDottagIdRoute = Route$2.update({
	id: "/blog/$slug/tag-{$id}",
	path: "/blog/$slug/tag-{$id}",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var blog_DotauthorDotidRoute = Route$1.update({
	id: "/blog/author/$id",
	path: "/blog/author/$id",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightRedirectDottypeDotidRoute = Route.update({
	id: "/redirect/$type/$id",
	path: "/redirect/$type/$id",
	getParentRoute: () => DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute
});
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRouteChildren = {
	accountDotnotificationsRoute,
	accountDotordersRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountDotpending_ordersRoute,
	accountDotprofileRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountDotratingRoute,
	accountDotsettingsRoute,
	accountDotwalletRoute,
	accountDotwishlistRoute,
	accountDotordersDotidRoute
};
var DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRouteChildren = {
	indexRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute: DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRoute._addFileChildren(DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightAccountRouteChildren),
	blogRoute,
	brandsRoute,
	cartRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLatestProductsRoute,
	logoutRoute,
	loyaltyRoute,
	loyalty_pointsRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightMostSalesProductsRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightNotificationsRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightOffersRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightOrdersRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightPendingOrdersRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightProductsRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightProfileRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightReviewsRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightSearchRoute,
	testimonialsRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightWalletRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightWishlistRoute,
	slugDotbrandIdRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightSlugDotcidRoute,
	slugDotpageIdRoute,
	slugDotpidRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightSlugDottagIdRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightBrandsDotidRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightTagsDotidRoute,
	thankyouDotorderIdRoute,
	blog_DotslugDotaIdRoute,
	blog_DotslugDotcIdRoute,
	blog_DotslugDottagIdRoute,
	blog_DotauthorDotidRoute,
	DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightRedirectDottypeDotidRoute
};
var rootRouteChildren = { DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute: DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRoute._addFileChildren(DotDotDotDotNode_modulesDotpnpmAtsallaDotsaChar43twilightThemeEngineAt1Dot0Dot122_d6dfabf210baa4583b6841d8e1fd79ffNode_modulesAtsallaDotsaTwilightThemeEngineDottwilightLocaleRouteChildren) };
var routeTree = Route$44._addFileChildren(rootRouteChildren)._addFileTypes();
// app/lib/blogArticle.ts
/**
* The id `blog/articles/<id>` answers to: the number at the end of the id
* (`-/a-1673272609` → `1673272609`), or the id as is when it has none.
*/
function blogArticleId(item) {
	const raw = item && typeof item === "object" ? item.id : item;
	if (typeof raw === "number") return Number.isFinite(raw) ? String(raw) : void 0;
	if (typeof raw !== "string" || !raw.trim()) return void 0;
	return raw.match(/(\d+)\s*$/)?.[1] ?? raw.trim();
}
var ENTITIES = {
	amp: "&",
	lt: "<",
	gt: ">",
	quot: "\"",
	apos: "'",
	nbsp: " "
};
/** HTML as plain text: tags dropped, common entities decoded, spaces collapsed. */
function plainText(html) {
	return html.replace(/<[^>]*>/g, " ").replace(/&(#\d+|#x[\da-f]+|[a-z]+);/gi, (entity, code) => {
		if (code[0] !== "#") return ENTITIES[code.toLowerCase()] ?? entity;
		const point = code[1] === "x" || code[1] === "X" ? parseInt(code.slice(2), 16) : Number(code.slice(1));
		return point >= 0 && point <= 1114111 ? String.fromCodePoint(point) : entity;
	}).replace(/\s+/g, " ").trim();
}
/** The short text under an article's title: its summary, or the start of its body. */
function blogArticleExcerpt(article) {
	const summary = article.promotion_title?.trim() || article.summary?.trim();
	if (summary) return summary;
	return article.description ? plainText(article.description) : "";
}
/** The author's name, whether the API sends a name or an author object. */
function blogArticleAuthor(article) {
	const { author } = article;
	return (typeof author === "string" ? author : author?.name)?.trim() ?? "";
}
// app/components/home/Blog.tsx
var IMAGE_LINK_PROPS = {
	tabIndex: -1,
	"aria-hidden": true
};
function ArticleCard({ article }) {
	const { format } = useDate();
	const author = blogArticleAuthor(article);
	const excerpt = blogArticleExcerpt(article);
	const { created_at: createdAt } = article;
	const date = typeof createdAt === "string" && Number.isNaN(Date.parse(createdAt)) ? createdAt : createdAt && format(createdAt);
	const url = article.url || "#";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "s-blog-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: url,
				className: "s-blog-card__image",
				...IMAGE_LINK_PROPS,
				children: article.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					src: article.image,
					alt: "",
					className: "w-full h-full object-cover",
					width: 640,
					height: 290
				})
			}),
			(date || author) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "s-blog-card__meta",
				children: [date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarIcon, { "aria-hidden": "true" }), date] }), author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserIcon, { "aria-hidden": "true" }), author] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "s-blog-card__title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: url,
					children: article.name
				})
			}),
			excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "s-blog-card__excerpt",
				children: excerpt
			})
		]
	});
}
/**
* `blog` home block: the articles the merchant picked, as cards in the theme's
* {@link ScrollCarousel}. The block only saves which articles were picked, so
* each one's image, summary, author and date come from `blog/articles/<id>`.
* Styling: `04-components/home-blocks.scss`.
*/
var Blog = (0, import_react.memo)(function Blog({ data }) {
	const { t } = useTranslation();
	const picked = (data.posts ?? []).map((item) => ({
		item,
		id: blogArticleId(item)
	})).filter((entry) => Boolean(entry.id));
	const results = useQueries({ queries: picked.map(({ id }) => ({
		...blog.queries.article(id),
		retry: false
	})) });
	const slots = picked.map(({ item, id }, index) => {
		const result = results[index];
		if (result?.isLoading) return {
			id,
			article: null
		};
		const saved = item && typeof item === "object" ? item : void 0;
		const article = result?.data ?? saved;
		return article?.name ? {
			id,
			article
		} : void 0;
	}).filter((slot) => Boolean(slot));
	if (!slots.length) return null;
	const title = (data.title ?? t("blocks.home.blog", "Blog")).trim();
	const description = data.description?.trim();
	const background = data.background_color?.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "s-blog",
		style: background ? { backgroundColor: background } : void 0,
		children: [(title || description) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container s-blog__head",
			children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "s-blog__title",
				children: title
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "s-blog__desc",
				children: description
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollCarousel, {
			prevLabel: t("blocks.home.reviews_prev", "Previous"),
			nextLabel: t("blocks.home.reviews_next", "Next"),
			children: slots.map(({ id, article }, index) => article ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article }, `${id}:${index}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "s-blog-card is-loading" }, `${id}:${index}`))
		})]
	});
});
// app/components/home/PhotosSliderWithText.tsx
function SlideCard({ slide, index, motionAllowed }) {
	const button = slide.btnname?.trim();
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
			src: slide.image,
			className: "absolute inset-0 w-full h-full object-cover",
			alt: slide.title || `photos-slider-${index}`,
			width: 1200,
			height: 800,
			priority: index === 0
		}),
		motionAllowed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideVideo, {
			url: slide.video,
			poster: slide.image
		}),
		!slide.without_overlay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "s-text-photos-slider__overlay" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "s-text-photos-slider__content",
			children: [
				slide.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "s-text-photos-slider__title",
					children: slide.title
				}),
				slide.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "s-text-photos-slider__description",
					children: slide.description
				}),
				button && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: slide.url || "#",
					className: "home-slider__cta",
					children: button
				})
			]
		})
	] });
	if (!button && slide.url) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: slide.url,
		className: "s-text-photos-slider__slide",
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "s-text-photos-slider__slide",
		children: content
	});
}
/**
* `photos-slider-with-text` home block: the photos slider's two-per-row cards
* ({@link ScrollCarousel}) with the enhanced slider's per-slide title, text,
* button and background video. Styling: `04-components/home-blocks.scss`.
*/
var PhotosSliderWithText = (0, import_react.memo)(function PhotosSliderWithText({ data }) {
	const { t } = useTranslation();
	const slides = data.slides || [];
	const root = (0, import_react.useRef)(null);
	const motionAllowed = useMotionAllowed();
	useSlideVideos(root, motionAllowed && slides.some((slide) => parseSlideVideo(slide.video)));
	if (!slides.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: root,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollCarousel, {
			prevLabel: t("blocks.home.reviews_prev", "Previous"),
			nextLabel: t("blocks.home.reviews_next", "Next"),
			autoPlay: slides.length > 1 && data.auto_play !== false,
			children: slides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideCard, {
				slide,
				index,
				motionAllowed
			}, index))
		})
	});
});
// app/components/cart/AddProductToast.tsx
var TOAST_DURATION = 5e3;
var UPDATE_INTERVAL = 50;
var EMPTY_OPTIONS = [];
function extractOptions(options) {
	if (!options?.length) return EMPTY_OPTIONS;
	return options.reduce((result, option) => {
		if (option.type === "splitter") return result;
		if (option.details?.length) {
			const selected = option.details.filter((d) => d.is_selected);
			if (selected.length > 0) result.push({
				name: option.name,
				value: selected.map((d) => d.name).join(", ")
			});
		} else if (option.value) {
			const hideValue = [
				"image",
				"file",
				"map"
			].includes(option.type);
			result.push({
				name: option.name,
				value: option.value,
				hideValue
			});
		}
		return result;
	}, []);
}
function AddProductToast() {
	const { t, isRTL } = useTranslation();
	const { format } = useMoney();
	const [product, setProduct] = (0, import_react.useState)(null);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const [progressPercent, setProgressPercent] = (0, import_react.useState)(100);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const progressIntervalRef = (0, import_react.useRef)(null);
	const remainingTimeRef = (0, import_react.useRef)(TOAST_DURATION);
	const clearTimers = (0, import_react.useCallback)(() => {
		if (progressIntervalRef.current) {
			clearInterval(progressIntervalRef.current);
			progressIntervalRef.current = null;
		}
	}, []);
	const close = (0, import_react.useCallback)(() => {
		clearTimers();
		setIsVisible(false);
		setTimeout(() => setProduct(null), 300);
	}, [clearTimers]);
	const startAutoHideTimer = (0, import_react.useCallback)(() => {
		clearTimers();
		setIsPaused(false);
		remainingTimeRef.current = TOAST_DURATION;
		setProgressPercent(100);
		progressIntervalRef.current = setInterval(() => {
			if (isPaused) return;
			remainingTimeRef.current = Math.max(0, remainingTimeRef.current - UPDATE_INTERVAL);
			const newProgress = remainingTimeRef.current / TOAST_DURATION * 100;
			setProgressPercent(newProgress);
			if (remainingTimeRef.current <= 0) close();
		}, UPDATE_INTERVAL);
	}, [
		isPaused,
		clearTimers,
		close
	]);
	const handleProductAdded = (0, import_react.useCallback)(async (cartItemId, productId) => {
		try {
			const cartResponse = await window.salla?.cart?.api?.details?.(null, ["options"]);
			const cartItem = cartItemId ? cartResponse?.data?.cart?.items?.find((item) => String(item.id) === String(cartItemId)) : cartResponse?.data?.cart?.items?.filter((item) => String(item.product_id) === productId).at(-1);
			if (!cartItem) return;
			const toastProduct = {
				id: cartItem.product_id,
				name: cartItem.product_name,
				image: cartItem.product_image,
				price: cartItem.total,
				originalPrice: cartItem.original_price ? typeof cartItem.original_price === "number" ? cartItem.original_price * cartItem.quantity : cartItem.original_price : void 0,
				hasDiscount: cartItem.has_discount,
				isOnSale: cartItem.is_on_sale,
				quantity: cartItem.quantity,
				url: cartItem.url,
				options: extractOptions(cartItem.options)
			};
			setProduct(toastProduct);
			setIsVisible(true);
			startAutoHideTimer();
		} catch (error) {
			window.salla?.log?.("Error processing product added event:", error);
		}
	}, [startAutoHideTimer]);
	const handlerRef = (0, import_react.useRef)(handleProductAdded);
	(0, import_react.useEffect)(() => {
		handlerRef.current = handleProductAdded;
	}, [handleProductAdded]);
	(0, import_react.useEffect)(() => {
		let boundTo;
		let cancelled = false;
		const onItemAdded = (...args) => {
			const [response, addedId] = args;
			if (addedId == null) return;
			const productId = String(addedId);
			const entry = response?.data?.events?.["twilight::api"]?.events?.["Product Added"]?.filter((item) => String(item.id) === productId).at(-1);
			const line = response?.data?.cart?.items?.filter((item) => String(item.product_id) === productId).at(-1);
			handlerRef.current(entry?.cart_item_id ?? line?.id, productId);
		};
		const bus = () => window.salla?.event;
		const bind = () => {
			if (boundTo || cancelled) return;
			const event = bus();
			if (!event?.on) return;
			boundTo = event;
			boundTo.on?.("cart::item.added", onItemAdded);
		};
		bind();
		document.addEventListener("theme::ready", bind);
		window.salla?.onReady?.().then(bind);
		return () => {
			cancelled = true;
			document.removeEventListener("theme::ready", bind);
			boundTo?.off?.("cart::item.added", onItemAdded);
			clearTimers();
		};
	}, [clearTimers]);
	(0, import_react.useEffect)(() => {
		if (isPaused && progressIntervalRef.current) {
			clearInterval(progressIntervalRef.current);
			progressIntervalRef.current = null;
		} else if (!isPaused && isVisible && !progressIntervalRef.current) progressIntervalRef.current = setInterval(() => {
			remainingTimeRef.current = Math.max(0, remainingTimeRef.current - UPDATE_INTERVAL);
			const newProgress = remainingTimeRef.current / TOAST_DURATION * 100;
			setProgressPercent(newProgress);
			if (remainingTimeRef.current <= 0) close();
		}, UPDATE_INTERVAL);
		return () => {
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
				progressIntervalRef.current = null;
			}
		};
	}, [
		isPaused,
		isVisible,
		close
	]);
	const handleCheckout = (0, import_react.useCallback)(() => {
		window.salla?.cart?.submit?.();
		close();
	}, [close]);
	const handleMouseEnter = (0, import_react.useCallback)(() => setIsPaused(true), []);
	const handleMouseLeave = (0, import_react.useCallback)(() => setIsPaused(false), []);
	if (!isVisible || !product) return null;
	const visibleOptions = product.options.slice(0, 3);
	const showMoreButton = product.options.length > 3;
	const cartUrl = window.salla?.url?.get?.("cart") || "/cart";
	const formatMoney = (value) => {
		return typeof value === "object" && value.formatted ? value.formatted : format(typeof value === "object" ? value.amount : value);
	};
	const priceDisplay = formatMoney(product.price);
	const originalPriceDisplay = product.originalPrice ? formatMoney(product.originalPrice) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `s-add-product-toast ${isVisible ? "s-add-product-toast--visible" : ""}`,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		dir: isRTL ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "s-add-product-toast__progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "s-add-product-toast__progress-bar",
					style: { width: `${progressPercent}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "s-add-product-toast__header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "s-add-product-toast__header-content",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCircleIcon, {
						className: "s-add-product-toast__icon",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "s-add-product-toast__title",
						children: t("pages.cart.added_to_cart", "Added to Cart")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "s-add-product-toast__close",
					"aria-label": "Close",
					onClick: close,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "sicon-cancel" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "s-add-product-toast__divider" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "s-add-product-toast__body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: product.url,
						className: "s-add-product-toast__image",
						onClick: close,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							width: 80,
							height: 80,
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "s-add-product-toast__details",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: product.url,
							className: "s-add-product-toast__name",
							onClick: close,
							children: product.name
						}), visibleOptions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "s-add-product-toast__options",
							children: [visibleOptions.map((opt, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt.hideValue ? opt.name : `${opt.name}: ${opt.value}` }, idx)), showMoreButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: cartUrl,
								className: "s-add-product-toast__show-more",
								onClick: close,
								children: t("pages.checkout.show_more", "Show more")
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "s-add-product-toast__price",
						children: (product.hasDiscount || product.isOnSale) && originalPriceDisplay ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "s-add-product-toast__price-sale",
							children: priceDisplay
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "s-add-product-toast__price-original",
							children: originalPriceDisplay
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: priceDisplay })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "s-add-product-toast__actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "s-add-product-toast__button s-add-product-toast__button--primary",
					onClick: handleCheckout,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("pages.cart.complete_order", "Complete Order") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M10 16H11.5",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeMiterlimit: "10",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M14.5 16L18 16",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeMiterlimit: "10",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M2 9H22",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinejoin: "round"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: cartUrl,
					className: "s-add-product-toast__button s-add-product-toast__button--outline",
					onClick: close,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("pages.cart.view_cart", "View Cart") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M3.06164 14.4413L3.42688 12.2985C3.85856 9.76583 4.0744 8.49951 4.92914 7.74975C5.78389 7 7.01171 7 9.46734 7H14.5327C16.9883 7 18.2161 7 19.0709 7.74975C19.9256 8.49951 20.1414 9.76583 20.5731 12.2985L20.9384 14.4413C21.5357 17.946 21.8344 19.6983 20.9147 20.8491C19.995 22 18.2959 22 14.8979 22H9.1021C5.70406 22 4.00504 22 3.08533 20.8491C2.16562 19.6983 2.4643 17.946 3.06164 14.4413Z",
							stroke: "currentColor",
							strokeWidth: "1.5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M7.5 9L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round"
						})]
					})]
				})]
			})
		]
	});
}
// app/components/cart/CartItem.tsx
/**
* Theme fork of the engine `CartItem`.
*
* Differences from upstream:
*  - flat row (border-separated) instead of a padded `bg-white` card;
*  - the "Total:" label is dropped (the cart-page column heading covers it);
*  - the delete control is a plain trash icon at the row end, not a red icon
*    button in the corner.
* Upgrade notes: `FORKS.md`.
*/
function toNumber(value) {
	if (value === void 0) return void 0;
	if (typeof value === "number") return value;
	return value.amount;
}
function moneyCurrency(value) {
	if (typeof value !== "object") return void 0;
	return value.currency;
}
/**
* Plain-React quantity stepper — the `<salla-quantity-input suppressHydrationWarning>` web component
* (deferred or Core) either stuck on its skeleton or never wired its buttons
* here, so the pill (`.s-quantity-input-*`, styled in `quantity-stepper.scss`)
* is rebuilt in React and the change is pushed straight to `salla.cart`.
*/
function CartQuantity({ value, max, label, disabled = false, onChange }) {
	const [qty, setQty] = (0, import_react.useState)(value);
	const pending = (0, import_react.useRef)(false);
	const timer = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		if (!pending.current) setQty(value);
	}, [value]);
	(0, import_react.useEffect)(() => {
		if (disabled) {
			clearTimeout(timer.current);
			pending.current = false;
		}
	}, [disabled]);
	(0, import_react.useEffect)(() => () => clearTimeout(timer.current), []);
	const commit = (0, import_react.useCallback)((next) => {
		const clamped = Math.max(1, max ? Math.min(next, max) : next);
		setQty(clamped);
		pending.current = true;
		clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			pending.current = false;
			onChange(clamped).catch(() => setQty(value));
		}, 350);
	}, [
		max,
		onChange,
		value
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "s-quantity-input",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "s-quantity-input-container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "s-quantity-input-increase-button s-quantity-input-button",
					"aria-label": `${label} +`,
					disabled: disabled || !!max && qty >= max,
					onClick: () => commit(qty + 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, { "aria-hidden": "true" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "s-quantity-input-input",
					name: "quantity",
					inputMode: "numeric",
					"aria-label": label,
					value: qty,
					disabled,
					onChange: (e) => {
						const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
						commit(Number.isFinite(n) ? n : 1);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "s-quantity-input-decrease-button s-quantity-input-button",
					"aria-label": `${label} -`,
					disabled: disabled || qty <= 1,
					onClick: () => commit(qty - 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinusIcon, { "aria-hidden": "true" })
				})
			]
		})
	});
}
/** Name + price/offer badges + weight — the left column's text block. */
function CartItemInfo({ item }) {
	const { t } = useTranslation();
	const { format } = useMoney();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-gray-900 leading-6 text-lg font-bold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.url,
					className: "text-base",
					children: item.product_name
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 flex-wrap",
				children: [
					item.offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-gray-500 line-through item-regular-price",
						children: format(toNumber(item.product_price), { currency: moneyCurrency(item.product_price) })
					}),
					item.is_on_sale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex gap-1 leading-4 text-sm text-gray-500 line-through item-original-price",
						children: format(toNumber(item.original_price), { currency: moneyCurrency(item.original_price) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `inline-flex gap-1 leading-4 item-price ${item.has_discount ? "text-red-800" : "text-sm text-gray-500"}`,
						children: format(toNumber(item.price), { currency: moneyCurrency(item.price) })
					})
				]
			}),
			item.weight_label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-gray-500",
				children: [
					t("pages.products.weight"),
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.weight_label })
				]
			}),
			item.offer && !item.detailed_offers?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "old-offers flex items-center gap-1 mx-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "sicon-discount-calculator text-gray-500 offer-icon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-gray-500 offer-name",
					children: item.offer.names
				})]
			}),
			item.detailed_offers && item.detailed_offers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaCartItemOffers, {
				quantity: item.quantity,
				itemId: String(item.id),
				productPrice: toNumber(item.product_price) ?? 0,
				offers: JSON.stringify(item.detailed_offers)
			})
		]
	});
}
/** Donating rows have no control; hidden-quantity rows show a static number;
* everything else gets the stepper. */
function CartItemQuantity({ item, disabled, onChange }) {
	const { t } = useTranslation();
	if (item.type === "donating") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {});
	if (item.is_hidden_quantity) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "hidden",
		value: item.quantity,
		name: "quantity",
		"aria-label": t("pages.products.quantity", "Quantity")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "w-10 text-center",
		children: item.quantity
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartQuantity, {
		value: item.quantity,
		max: item.max_quantity ?? void 0,
		label: t("pages.products.quantity", "Quantity"),
		disabled,
		onChange
	});
}
/** Out of stock beats any price; offers use their own special total. */
function cartItemTotalLabel(item, format, t) {
	if (!item.is_available) return t("pages.products.out_of_stock", "Out of Stock");
	return item.detailed_offers?.length ? format(toNumber(item.total_special_price), { currency: moneyCurrency(item.total_special_price) }) : format(toNumber(item.total), { currency: moneyCurrency(item.total) });
}
function CartItem({ item, isFirst = false, onMutated }) {
	const { t } = useTranslation();
	const { format } = useMoney();
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	const [removed, setRemoved] = (0, import_react.useState)(false);
	const deletingRef = (0, import_react.useRef)(false);
	const formRef = (0, import_react.useRef)(null);
	const changeQuantity = (0, import_react.useCallback)(async (quantity) => {
		if (deletingRef.current) return;
		const form = formRef.current;
		if (form && !form.reportValidity()) throw new Error("Required options are missing");
		const payload = form ? new FormData(form) : void 0;
		payload?.set("quantity", String(quantity));
		await window.salla?.cart.updateItem(payload ?? {
			id: item.id,
			quantity
		});
		onMutated?.();
	}, [item.id, onMutated]);
	const handleChange = (e) => {
		if (!e.target?.closest?.("salla-product-options")) return;
		window.salla?.form.onChange("cart.updateItem", e);
		window.setTimeout(() => onMutated?.(), 800);
	};
	const handleDelete = async () => {
		if (deleting) return;
		deletingRef.current = true;
		setDeleting(true);
		try {
			await window.salla?.cart.deleteItem(item.id);
			if (onMutated) onMutated();
			else setRemoved(true);
		} catch {
			deletingRef.current = false;
			setDeleting(false);
		}
	};
	if (removed) return null;
	const isFreeProduct = toNumber(item.price) === 0 && item.has_discount;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		ref: formRef,
		onChange: handleChange,
		id: `item-${item.id}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "cart-item relative border-b border-gray-200 pb-6 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "hidden",
					name: "id",
					value: item.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:flex rtl:space-x-reverse md:space-x-12 items-start justify-between mb-4 last:mb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 rtl:space-x-reverse space-x-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.url,
							className: "relative overflow-hidden shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: item.product_image,
								alt: item.product_name,
								className: "flex-none w-24 h-20 object-center object-cover",
								aspectRatio: "6/5",
								priority: isFirst
							}), isFreeProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "free-ribbon absolute top-[11px] right-[-38px] w-32 bg-red-600 text-white text-xs font-bold text-center py-1 rotate-45 shadow-md",
								children: t("pages.loyalty_program.free_product", "Free")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartItemInfo, { item })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cart-item__controls mt-5 md:mt-0 flex gap-6 md:gap-8 justify-between items-center md:items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartItemQuantity, {
								item,
								disabled: deleting,
								onChange: changeQuantity
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex-none font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "md:hidden",
									children: [t("blocks.cart.item_total", "Total"), ": "]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block item-total",
									children: cartItemTotalLabel(item, format, t)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "cart-item__delete shrink-0 text-gray-400 transition-colors hover:text-red-600",
								"aria-label": t("common.elements.remove", "Remove from the cart"),
								"aria-busy": deleting,
								disabled: deleting,
								onClick: handleDelete,
								children: deleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "cart-item__delete-spinner",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete01Icon, {
									"aria-hidden": "true",
									className: "h-5 w-5"
								})
							})
						]
					})]
				}),
				item.options && item.options.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("salla-product-options", {
					options: JSON.stringify(item.options),
					"product-id": item.product_id,
					suppressHydrationWarning: true
				}, JSON.stringify(item.options))
			]
		})
	});
}
// app/components/cart/CartPage.tsx
/**
* Theme fork of the engine `CartPage`.
*
* Same data flow as upstream, plus a column-heading row above the items
* (Products (N) · Quantity · Total) so the flat {@link CartItem} rows read as a
* table, and an error state with a retry when the cart can't be loaded
* (upstream keeps its skeleton up for good). Upgrade notes: `FORKS.md`.
*/
function CartPageContent({ page }) {
	const { store } = useTwilight();
	const { t } = useTranslation();
	const queryClient = useQueryClient();
	usePageConfig(page);
	const { data: loyaltyPoints } = useQuery(loyalty.queries.points());
	const cartIdQuery = useQuery(cart.queries.currentId());
	const cartId = cartIdQuery.data;
	const cartQuery = useQuery({
		...cart.queries.detail(cartId),
		enabled: !!cartId
	});
	const cartData = cartQuery.data;
	const refetchCart = (0, import_react.useCallback)(() => {
		if (cartId != null) queryClient.invalidateQueries({ queryKey: cart.queries.detail(cartId).queryKey });
	}, [cartId, queryClient]);
	(0, import_react.useEffect)(() => {
		window.salla?.event?.on?.("cart::updated", refetchCart);
		return () => {
			window.salla?.event?.off?.("cart::updated", refetchCart);
		};
	}, [refetchCart]);
	const failed = cartIdQuery.isError || cartQuery.isError;
	const noCart = cartIdQuery.isSuccess && cartId == null;
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyBreadcrumb, { page }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-content-placeholder",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "sicon-shopping-bag icon" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("common.errors.error_occurred", "Something went wrong") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn--outline-primary btn--rounded-full",
					onClick: () => {
						if (cartIdQuery.isError) cartIdQuery.refetch();
						else cartQuery.refetch();
					},
					children: t("common.elements.try_again", "Try again")
				})
			]
		})]
	});
	if (!noCart && (cartId == null || cartData === void 0)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSkeleton, {});
	if (noCart || !cartData || cartData.items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyBreadcrumb, { page }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyNoContent, {
			icon: "sicon-shopping-bag",
			message: t("pages.cart.empty_cart", "Your cart is empty"),
			actionLabel: t("common.elements.back_home", "Back to Home"),
			actionUrl: "/"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazySeoCartWidget, { cart: cartData }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyBreadcrumb, { page }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "sr-only",
				children: t("common.titles.cart", "Cart")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaConditionalOffer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "cart:start" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-5 flex flex-col items-start lg:flex-row pb-6 lg:pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "main-content w-full lg:w-[calc(100%-384px)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, {
							name: "cart:items.start",
							context: { cartItems: cartData.items }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cart-titles hidden md:flex rtl:space-x-reverse md:space-x-12 items-center border-b border-gray-200 pb-4 text-sm font-bold text-gray-900 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex-1",
								children: [
									t("blocks.cart.products", "Products"),
									" (",
									cartData.items.length,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex gap-6 md:gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-[120px] text-center",
										children: t("pages.products.quantity", "Quantity")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("blocks.cart.item_total", "Total") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-5",
										"aria-hidden": "true"
									})
								]
							})]
						}),
						cartData.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartItem, {
							item,
							isFirst: index === 0,
							onMutated: refetchCart
						}, item.id)),
						cartData.options?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cart-options",
							children: cartData.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "first:pt-5 relative",
								onChange: (e) => window.salla?.form.onChange("cart.updateItem", e),
								id: `item-${option.id}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "id",
										value: option.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "quantity",
										value: option.quantity
									}),
									option.options && option.options.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("salla-product-options", {
										options: JSON.stringify(option.options),
										"product-id": option.id,
										suppressHydrationWarning: true
									}, JSON.stringify(option.options))
								]
							}, option.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SallaOffer, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "cart:items.end" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyCartSummary, {
					cart: cartData,
					applyCouponEnabled: store.settings?.cart?.apply_coupon_enabled,
					taxAmount: cartData.tax_amount,
					loyalty: cartData.loyalty,
					gift: cartData.gift,
					loyaltyPoints: loyaltyPoints ?? void 0
				}, cartData.id)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlot, { name: "cart:end" })
		]
	});
}
function CartPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartPageContent, { ...props });
}
// app/hooks/index.tsx
function registerThemeHooks() {
	hookRegistry.register(HookName.BODY_END, (context) => {
		const { twilight } = context;
		if (twilight?.theme?.settings?.enable_add_product_toast === false) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddProductToast, {});
	}, 50);
	hookRegistry.register(HookName.PRODUCT_DESCRIPTION, (context) => {
		const { product } = context;
		if (!product?.digital_files_settings) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalFilesSettings, { ...product.digital_files_settings });
	}, 50);
}
// app/components/product/ProductListSkeleton.tsx
/**
* `pendingComponent` for the product-listing / offers routes.
*
* Without one, TanStack Router blanks the whole route match on every
* search-param-driven reload — a sort change, a page change, a filter apply —
* since a route with no `pendingComponent` renders `null` while its loader
* re-runs (`Match.js` → `renderPending`). That took `.s-catalog-toolbar` down
* with it.
*
* Every element above the toolbar is built from the *exact* production
* markup/classes, with a `Pulse` standing in only for the text/content, so
* each one reserves the same box it does in the real page and nothing
* shifts once the real content arrives:
*  - the breadcrumb uses `.breadcrumbs` / `.s-breadcrumb-wrapper`
*    (`04-components/breadcrumb.scss`) — a full-bleed tinted bar the vendor's
*    generic `BreadcrumbSkeleton` doesn't match at all (wrong width, wrong
*    padding, no background), which was the actual source of the jump;
*  - the title uses `font-bold text-xl mb-4`, matching its line-height.
* The toolbar itself is rendered plain — same classes as production, no
* pulsing content inside — since `.s-catalog-toolbar`'s own `min-h-[3.25rem]`
* already fixes its height.
*/
function ProductListSkeleton({ hideFilters = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container px-2.5 mb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "breadcrumbs w-full py-5",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "s-breadcrumb-wrapper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-4 w-64" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-xl mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, { className: "h-5 w-56" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "s-catalog-toolbar",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: hideFilters ? "" : "md:grid md:grid-cols-[288px_1fr] gap-8",
				children: [!hideFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiltersSkeleton, { className: "hidden md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsListSkeleton, {
					count: hideFilters ? 10 : 12,
					columns: hideFilters ? 5 : 3
				})]
			})
		]
	});
}
// app/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var ProductListPage = (0, import_react.lazy)(() => import("./ProductListPage-18-cCba1.js").then((m) => ({ default: m.ProductListPage })));
registerThemeHooks();
registry.register("product:list-page", ProductListPage);
registry.register("product:list-skeleton", ProductListSkeleton);
registerHomeComponents({
	...DefaultHomeComponents,
	brands: Brands$1,
	"enhanced-slider": EnhancedSlider,
	"custom-testimonials": CustomTestimonials,
	"main-links": MainLinks,
	"square-links": MainLinks,
	"products-slider": ProductsSlider$1,
	"photos-slider": PhotosSlider,
	"photos-slider-with-text": PhotosSliderWithText,
	"featured-products": FeaturedProducts,
	"featured-products:style1": FeaturedProducts,
	"featured-products:style2": FeaturedProducts,
	"featured-products:style3": FeaturedProducts,
	"featured-products-special-offer": FeaturedProductsSpecialOffer,
	"featured-products-special-product": FeaturedProductsWithSpecialProduct,
	"fixed-products": FixedProducts,
	"slider-products-with-header": SliderProductsWithHeader,
	"enhanced-square-banners": EnhancedSquareBanners,
	blog: Blog
});
registerHomeComponentConfig({
	"featured-products": featuredProductsConfig,
	"featured-products-special-offer": featuredProductsConfig,
	"featured-products-special-product": featuredProductsConfig,
	blog: {
		className: "s-block s-block--blog s-block--full-bg",
		height: "clamp(480px, 45vw, 660px)"
	},
	"custom-testimonials": { className: "s-block s-block--custom-testimonials s-block--full-bg" },
	"enhanced-slider": {
		height: "calc(100vw / 2.4)",
		placeholder: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderSkeleton, {}),
		className: (data) => `s-block s-block--enhanced-slider${data.in_container ? " s-block--enhanced-slider-boxed" : ""}`
	},
	"main-links": {
		height: "112px",
		placeholder: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderSkeleton, {}),
		className: (data) => {
			const mergeWithTop = data.merge_links_with_top_component;
			return [
				"s-block",
				"s-block--main-links",
				mergeWithTop && data.position ? "merge-with-top-component" : "",
				!data.title && mergeWithTop ? "merged-has-no-title" : ""
			].filter(Boolean).join(" ");
		}
	},
	"square-links": {
		height: "144px",
		placeholder: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderSkeleton, {})
	},
	"photos-slider": {
		height: "clamp(210px, 32vw, 420px)",
		placeholder: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderSkeleton, {}),
		className: (data) => `s-block s-block--photos-slider${data.is_repeated ? " repeated-block" : ""}`
	},
	"photos-slider-with-text": {
		height: "clamp(300px, 36vw, 470px)",
		placeholder: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderSkeleton, {}),
		className: (data) => `s-block s-block--photos-slider-with-text${data.in_container ? " s-block--photos-slider-with-text-boxed" : ""}`
	}
});
var clientRouter = null;
function getRouter() {
	if (typeof window !== "undefined" && clientRouter) return clientRouter;
	const router = createRouter(routeTree);
	if (typeof window !== "undefined") clientRouter = router;
	return router;
}
export { Brands as A, Route$25 as C, Route$35 as D, Route$34 as E, Route$42 as M, LogoutRedirect as N, Route$38 as O, useAppSafeAreaTop as P, Route$24 as S, Route$28 as T, Route$16 as _, Route$3 as a, Route$19 as b, Route$6 as c, Route$8 as d, Route$9 as f, Route$15 as g, getRouter, Route$13 as h, Route$2 as i, Route$40 as j, Route$39 as k, ThankYou as l, Route$11 as m, CartPage as n, Route$4 as o, Route$10 as p, Route$1 as r, Route$5 as s, router_exports as t, Route$7 as u, Route$17 as v, Route$26 as w, Route$20 as x, Route$18 as y };
