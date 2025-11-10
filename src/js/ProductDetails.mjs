
export default class productDetails{
   constructor(productId, dataSource){
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
   }

   async init(){
    //fetch product details using the data source for current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.dataSource.findProductById(this.productId);
    // the product details are needed before rendering the HTML
    this.renderProductDetails();
    // Once the HTML is rendered, add a listener to the Add to Cart button
    // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings...
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this));
   }

   addProductToCart(product) {
  //  setLocalStorage("so-cart", product); this was just overwriting new items added
  //correct code below to add multiple items

  // Get existing cart or empty array
  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];

  // add new item to it
  cart.push(product);

  // save updated cart
  localStorage.setItem('so-cart', JSON.stringify(cart));
}

  renderProductDetails(){
   productDetailsTemplate(this.product);
  }
}

function productDetailsTemplate(product){
   document.querySelector('h2').textContent = product.Brand.name;
   document.querySelector('h3').textContent = product.NameWithoutBrand;

   const productImage = document.getElementById('productImage');
   productImage.src = product.Image;
   productImage.alt = product.NameWithoutBrand;

   document.getElementById('productPrice').textContent = product.FinalPrice;
   document.getElementById('productColor').textContent = product.Colors[0].ColorName;
   document.getElementById('productDesc').innerHTML = product.DescriptionHtmlSimple;

   document.getElementById('addToCart').dataset.id = product.id;
}