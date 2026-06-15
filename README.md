# Goguma — Web (Astro + Tailwind)

Landing page PR cho thương hiệu snack khoai lang **Goguma** (고구마).
Thiết kế theo `src/design/DESIGN.md` — thủy mặc Đông Á + wabi-sabi.

## Chạy thử

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build production

```bash
npm run build      # xuất ra ./dist
npm run preview    # xem thử bản build
```

## 🌟 Nguyên lý: token → mọi nơi

**Nguồn sự thật duy nhất** là `src/design/tokens.json`.
`tailwind.config.mjs` đọc thẳng file này để sinh theme:

```js
const tokens = JSON.parse(readFileSync(".../tokens.json"));
colors: { paper: tokens.color.paper, ink: ..., accent: tokens.color.accent }
```

Đổi **một** dòng trong `tokens.json`:

```diff
- "accent": "#9C3B2E"
+ "accent": "#2E4A6B"
```

→ mọi nút, gạch chân, con dấu, Hangul, sóng seigaiha đổi theo. **Nhanh mà chính xác.**

> Lưu ý: `src/styles/global.css` có các biến `:root` mirror token (cho hiệu ứng seigaiha). Khi đổi token nhớ sync 4 dòng này.

## Cấu trúc

```
src/
  design/   tokens.json (canon) + DESIGN.md (luật)
  styles/   global.css
  layouts/  Base.astro
  components/ Header Hero Why Story Products CTA Footer
  pages/    index.astro
public/
  img/      hero.png, story.png   <- thêm 2 ảnh này trước khi deploy
```

## ⚠️ Thêm 2 ảnh banner

Kho này chưa có `public/img/hero.png` và `public/img/story.png` (file nhị phân). Tải 2 ảnh được gửi kèm, rồi **Add file → Upload files** trên GitHub để thả vào thư mục `public/img/`.

## Deploy lên Cloudflare Pages

1. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Chọn repo `goguma-web`.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Save & Deploy → mỗi branch có preview URL, merge vào `main` là production.

Fonts dùng Google Fonts (Noto Serif/Sans CJK) qua `<link>` trong `Base.astro`.
