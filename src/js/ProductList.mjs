export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category
    this.dataSource = dataSource
    this.listElement = listElement
  }

  async init() {
    const products = await this.dataSource.getData(this.category)
    this.renderList(products)
  }

  renderList(products) {
    if (!Array.isArray(products)) {
      this.listElement.innerHTML = '<li>Nothing found.</li>'
      return
    }
    this.listElement.innerHTML = products.map(p => this.itemTemplate(p)).join('')
  }

  itemTemplate(product) {
    const img = product.Images?.PrimaryMedium || product.Images?.PrimaryLarge || ''
    const name = product.Name || 'Product'
    const id = product.Id
    const price = Number(product.FinalPrice ?? product.SuggestedRetailPrice ?? 0).toFixed(2)
    return `
      <li class="product-card">
        <a href="/product_pages/index.html?product=${encodeURIComponent(id)}&category=${encodeURIComponent(this.category)}" aria-label="${name}">
          <img src="${img}" alt="${name}" loading="lazy">
          <h3>${name}</h3>
          <p class="price">$${price}</p>
        </a>
      </li>
    `
  }
}
