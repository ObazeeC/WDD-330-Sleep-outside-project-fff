//import { setLocalStorage } from "./utils.mjs";
import ProductData from './ProductData.mjs';
import getParam from './utils.mjs';
import productDetails from './ProductDetails.mjs';

const dataSource = new ProductData('tents');
const productId = getParam('product');

const product = new productDetails(productId, dataSource);
product.init();

export function renderListWithTemplate(template, parentElement, list, position  = 'afterbegin', clear = false){
  const htmlStrings = list.map(template);
  //if clear is true we need to clear out the contents of the parent.
  if(clear){
    parentElement.innerHTML = '';
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

/* MOVED TO PRODUCT DETAILS 


function addProductToCart(product) {
  //  setLocalStorage("so-cart", product); this was just overwriting new items added
  //correct code below to add multiple items

  // Get existing cart or empty array
  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];

  // add new item to it
  cart.push(product);

  // save updated cart
  localStorage.setItem("so-cart", JSON.stringify(cart));
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
*/

