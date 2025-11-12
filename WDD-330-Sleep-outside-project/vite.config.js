import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // The src folder is your working directory
  root: "src/",

  // Makes all paths relative so it works on Netlify and local preview
  base: "./",

  // Everything inside /src/public will automatically copy to dist
  publicDir: "public",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        // Main pages your site needs to build
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),

        // ✅ Shared product page replaces multiple old ones
        product: resolve(__dirname, "src/product_pages/index.html"),
      },
    },
  },
});
