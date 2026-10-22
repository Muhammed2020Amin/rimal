# دهناء (Dahna)

ثيم واجهات متاجر **سلة** مبني على محرك **Twilight React** الرسمي —
TanStack Start + workerd SSR + محرر ثيمات مدمج على `/__twilight/editor`.

> انطلق من قالب `@salla.sa/theme-raed` الرسمي، بهوية وأهداف مستقلة.

## التشغيل السريع

```bash
pnpm install
pnpm dev
```

- المنفذ الافتراضي: `5173` — جذر الخادم يفتح **المحرر المدمج** تلقائياً.
- المتجر المستهدف يُضبط عبر `VITE_STORE_DOMAIN` في `.env` (غير مُودَع في Git).

## البرامج النصية

| Script | الوصف |
| --- | --- |
| `pnpm dev` | خادم التطوير (workerd SSR) |
| `pnpm build` | بناء إنتاجي |
| `pnpm preview` | معاينة البناء الإنتاجي |
| `pnpm typecheck` | فحص TypeScript |
| `pnpm test` | الاختبارات (Vitest) |
| `pnpm check:manifest` | التحقق من صحة `twilight.json` |

## النشر

ادفع إلى هذا المستودع (`git push`) وسلة تبني الثيم وتنشره على بنيتها —
ثم طلب النشر للسوق عبر [Salla Partners Portal](https://salla.partners).

## الهيكل

```
app/            مكوّنات ومسارات الثيم (React 19 + TanStack Start)
locales/        ملفات التعريب (ar / en)
public/         أصول ثابتة
twilight.json   بيان الثيم: الإعدادات والمكونات (يولّد نماذج المحرر)
vite.config.ts  إ twilightReact() — لا يحتاج الثيم خادماً من عنده
```

MIT © Dahna
