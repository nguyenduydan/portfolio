# Project Detail

## Build Detail

```
build: {
  outDir: "dist",
  assetsDir: "assets",
  sourcemap: false,
  minify: "terser",
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: []
      }
    }
  }
}

```

🧩 Giải thích từng thuộc tính
| Thuộc tính | Ý nghĩa | Gợi ý dùng |
| --------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `outDir: "dist"` | Thư mục **đầu ra** khi build | Mặc định là `dist/`. Bạn có thể đổi nếu muốn. |
| `assetsDir: "assets"` | Nơi chứa **file tĩnh** (ảnh, CSS, JS nhỏ…) trong thư mục build | Ví dụ khi build xong, file sẽ nằm ở `dist/assets/`. |
| `sourcemap: false` | Có tạo file **sourcemap** hay không. Sourcemap giúp debug code sau khi build. | `false` để build nhẹ hơn (dùng cho production). Nếu bạn cần debug → đặt `true`. |
| `minify: "terser"` | Chọn **trình nén code** (minifier). `terser` giúp giảm kích thước file JS. | Có thể đổi thành `"esbuild"` để build nhanh hơn, nhưng `terser` nén tốt hơn. |
| `rollupOptions` | Cho phép bạn tùy chỉnh chi tiết quá trình build, vì **Vite sử dụng Rollup** bên trong. | Dùng khi bạn muốn chia nhỏ bundle, đổi tên file, hoặc thêm cấu hình nâng cao. |

```
rollupOptions: {
  output: {
    manualChunks: {
      vendor: []
    }
  }
}
```

`manualChunks` là cách chia nhỏ bundle JS (code-splitting).

Mục đích: Tách code “thư viện ngoài” (vendor) ra khỏi code chính, để:

Cache tốt hơn.

Tăng tốc load.

Giảm kích thước file main.js.
