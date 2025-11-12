import ProductData from './ProductData.mjs';

import "../css/style.css";

import ProductList from './ProductList.mjs';

import { loadHeaderFooter } from './utils.mjs';

const dataSource = new ProductData('tents');

const listElement = document.querySelector('.product-list');

const productList = new ProductList('tents', dataSource, listElement);

productList.init();

loadHeaderFooter();
