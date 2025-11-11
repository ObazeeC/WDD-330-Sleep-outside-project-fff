import ProductData from './ProductData.mjs'
import { getParam } from './utils.mjs'

const id = getParam('product')
const category = getParam('category') || 'tents'
const dataSource = new ProductData()
const product = await dataSource.findProductById(id)

const nameEl = document.getElementById('product-name')
const imgEl = document.getElementById('product-img')
const priceEl = document.getElementById('product-price')
const descEl = document.getElementById('product-description')
const backLink = document.getElementById('back-to-category')

nameEl.textContent = product?.Name ?? 'Product'
imgEl.src = product?.Images?.PrimaryLarge || product?.Images?.PrimaryMedium || ''
imgEl.alt = product?.Name ?? 'Product image'
priceEl.textContent = product?.FinalPrice ? `$${Number(product.FinalPrice).toFixed(2)}` : ''
descEl.textContent = product?.Description ?? ''

if (backLink) backLink.href = `/product_listing/index.html?category=${encodeURIComponent(category)}`
