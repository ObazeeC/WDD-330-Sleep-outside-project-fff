import ProductData from './ProductData.mjs'
import ProductList from './ProductList.mjs'
import { getParam } from './utils.mjs'

const category = getParam('category') || 'tents'
const dataSource = new ProductData()
const listElement = document.querySelector('.product-list')
const list = new ProductList(category, dataSource, listElement)
await list.init()

const titleEl = document.querySelector('#list-title')
if (titleEl) titleEl.textContent = `Top Products: ${category.replace('-', ' ')}`
