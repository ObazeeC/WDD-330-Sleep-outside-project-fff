// src/js/main.js

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// create an instance of the ProductData class, pointing to the JSON in public folder
const dataSource = new ProductData("/json/tents.json");

// select the HTML element where the products will be rendered
const listElement = document.querySelector("#product-list");

// create an instance of ProductList for the "tents" category
const tentList = new ProductList("tents", dataSource, listElement);

// initialize and render the product list
tentList.init();
