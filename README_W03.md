# Sleep Outside — W03 Expand Inventory (Submission-Ready)

## What I changed (and why)
1. **New Product Listing page** (`src/product_listing/index.html`)  
   - Shows products for a **category** chosen from the Home page. Required for W03.
2. **Vite multi-page setup** (`vite.config.js`)  
   - Added `product_listing` and `product_pages` to `rollupOptions.input` so builds don't break.
3. **Environment variable** (`src/.env` and `.env.sample`)  
   - `VITE_SERVER_URL=https://wdd330-backend.onrender.com/` used by the API.
4. **Switched to API** (`src/js/ProductData.mjs`)  
   - Uses `import.meta.env.VITE_SERVER_URL` to fetch categories and single product by id.
5. **Dynamic category routing** (`src/js/product-listing.js`)  
   - Reads `?category=...` and renders correct list; updates page title.
6. **Listing template + correct image keys** (`src/js/ProductList.mjs`)  
   - Uses `Images.PrimaryMedium` for list cards (per instructions).
7. **Product detail by id** (`src/product_pages/index.html` + `src/js/product.js`)  
   - Fetches a single product by id and uses `Images.PrimaryLarge`.
8. **Home page category tiles** (`src/index.html`)  
   - Four links to listing page with category params (tents, backpacks, sleeping-bags, hammocks).
9. **Basic styles** (`src/css/style.css`)  
   - Clean grid, responsive layout to meet rubric visual clarity.
10. **Icons** (`src/images/icons/*.svg`)  
   - Simple SVGs for the four categories.

## How to run locally
```bash
# in project root
pnpm install   # or npm install
pnpm run dev   # starts Vite (prints a local URL)
```

## Quick tests (confirm it works)
1. Open the printed local URL.  
2. Click **Backpacks** → URL becomes `/product_listing/index.html?category=backpacks` and products appear.  
3. Click a product card → URL `/product_pages/index.html?product=<id>&category=backpacks`, detail shows large image and price.  
4. Use **Tents / Sleeping-bags / Hammocks**—each should filter correctly.

## Build (for Netlify)
```bash
pnpm run build
pnpm run preview
```
On Netlify, set an environment variable:
- **Key**: `VITE_SERVER_URL`
- **Value**: `https://wdd330-backend.onrender.com/`

## File map (important pieces)
- `vite.config.js`
- `src/.env` (+ `.env.sample`)
- `src/index.html` (category tiles)
- `src/product_listing/index.html`
- `src/product_pages/index.html`
- `src/js/product-listing.js`
- `src/js/ProductData.mjs`
- `src/js/ProductList.mjs`
- `src/js/product.js`
- `src/js/utils.mjs`, `src/js/utils_net.mjs`
- `src/css/style.css`
- `src/images/icons/*.svg`
