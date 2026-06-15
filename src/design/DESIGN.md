# Goguma — Design System (DESIGN.md)

> Nguồn sự thật thẩm mỹ duy nhất cho brand **Goguma** (고구마).
> Mọi banner, trang web, asset đều bám file này. Đổi ở đây → đổi mọi nơi.
> Giá trị token canon nằm trong `tokens.json`; file này giải thích *tại sao* và *dùng thế nào*.

---

## 1. Tinh thần thương hiệu

- **Sản phẩm:** snack khoai lang (goguma) — mộc mạc, ấm, ngọt tự nhiên.
- **Thẩm mỹ:** thủy mặc Đông Á (水墨) + wabi-sabi (侘寂) Nhật Bản.
- **Cảm giác:** tĩnh, nhiều khoảng trống (余白), tinh tế, như tranh treo phòng trà.
- **Tránh:** màu lòe loẹt, gradient sặc sỡ, stock ảnh "doanh nghiệp" giả tạo, shadow nặng.

---

## 2. Design tokens — màu

| Token | Hex | Vai trò |
|-------|-----|---------|
| `color.paper`    | `#F2ECE0` | Nền — giấy washi kem |
| `color.ink`      | `#2B2B28` | Mực sumi — chữ chính, nét vẽ |
| `color.ink_soft` | `#6B645B` | Mực nhạt — phụ đề, caption, divider phụ |
| `color.accent`   | `#9C3B2E` | Đỏ chu sa (朱砂) — con dấu, điểm nhấn, sóng seigaiha |

> ⚠️ Chỉ **một** màu accent. Đổi `accent` là toàn bộ điểm nhấn đổi theo.

---

## 3. Typography

| Vai trò | Font | Size token |
|---------|------|-----------|
| Display Latin (GOGUMA) | Serif (Noto Serif) | `type.display_size` = 140 |
| Hangul (고구마) | Noto Serif KR | `type.hangul_size` = 78 |
| Tagline / CJK | Noto Sans JP | `type.tag_size` = 30 |
| Con dấu (甘) | Noto Serif | 64 |

---

## 4. Spacing & layout

- `space.margin` = 96px (lề thở rộng — linh hồn wabi-sabi).
- `space.gap` = 30px.
- **Hero:** ảnh dồn về **phải**, trống **1/3 trái** cho chữ.

---

## 5. Imagery / Art Direction

- Phong cách: **ink-wash / sumi-e (水墨)**, vài nét bút dứt khoát.
- Palette: nền `#F2ECE0`, mực `#2B2B28`, đúng **một** điểm nhấn `#9C3B2E`.
- Bố cục: chủ thể bên **phải**, trống bên **trái**.
- Nhiều khoảng trống, sương, tối giản. Con dấu đỏ nhỏ ở góc.
- **Không** chữ/logo/watermark trong ảnh. Tỉ lệ 16:9 (desktop), 4:5 (mobile).

**Prompt mẫu (AI gen):**
```
Minimalist East-Asian ink-wash (sumi-e / 水墨) hero banner.
Scene: <chủ đề>. A few confident calligraphic ink brushstrokes, loose and poetic.
Small vermilion red seal mark accent. Cream washi paper background (#F2ECE0),
sumi black ink (#2B2B28), one vermilion accent (#9C3B2E). Extreme negative space (余白),
wabi-sabi. Weighted RIGHT, leave LEFT third empty for text. No text/logo/watermark. 16:9.
```

---

## 6. Pattern

- **Seigaiha (青海波)** — sóng cung tròn xếp lớp, sinh bằng code/CSS.
- Màu sóng = `color.accent` (đổi token → pattern đổi).

---

## 7. Voice & nội dung

- Tên: **GOGUMA** (Latin) · **고구마** (Hangul).
- Tagline (JP): `素朴な甘さ、ひと口の余白。` — "Vị ngọt mộc mạc, một khoảng lặng trong từng miếng."
- Giọng: điềm đạm, ấm, ít chữ, nhiều khoảng lặng.

---

## 8. Quy trình đổi thiết kế (nhanh mà chính xác)

```
1. Mô tả thay đổi bằng lời
2. Sửa 1 token trong tokens.json (KHÔNG sửa rải rác)
3. Build lại → before/after
4. Review git diff (đúng 1 dòng)
5. Merge → Cloudflare Pages auto-deploy
```

_Khi build web thật: token map sang CSS variables / `tailwind.config` → mọi component._
