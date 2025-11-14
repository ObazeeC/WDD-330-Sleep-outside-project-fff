import { getLocalStorage } from "./utils.mjs";

import { loadHeaderFooter } from "./utils.mjs";

import ProductsBought from "./ShoppingCart.mjs";

const dataSource = getLocalStorage("so-cart");

const cartListElement = document.querySelector(".product-list");

const productsCartList = new ProductsBought(dataSource, cartListElement);

productsCartList.init();

loadHeaderFooter();
