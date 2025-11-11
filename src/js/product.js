import ProductData from "./ProductData.mjs";
import { getParam } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

console.log("Product details initialized:", product);

loadHeaderFooter();

//async function addToCartHandler(e) {
// e?.preventDefault?.();
// const id = e?.target?.dataset?.id;
// if (!id) return console.warn('Missing data-id on Add to Cart button');

// cart.push(item);
//setLocalStorage("so-cart", cart);
//}

//async function addToCartHandler(e) {
// console.log("Add to Cart button clicked", e);
// e?.preventDefault?.();
// const id = e?.target?.dataset?.id;
// console.log("Product ID to add to cart:", id);
// if (!id) return console.warn("Missing data-id on Add to Cart button");

// document
//  .getElementById('addToCart')
//  ?.addEventListener('click', addToCartHandler);
