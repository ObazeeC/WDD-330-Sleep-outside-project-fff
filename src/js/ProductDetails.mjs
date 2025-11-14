import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {

  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // use the datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // the product details are needed before rendering the HTML
    this.renderProductDetails();
    // once the HTML is rendered, add a listener to the Add to Cart button
    // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}

function productDetailsTemplate(product) {
  document.querySelector('h2').textContent = product.Brand.Name;
  document.querySelector('h3').textContent = product.NameWithoutBrand;

  const productImage = document.getElementById('productImage');
  productImage.src = product.Image;
  productImage.alt = product.NameWithoutBrand;

  document.getElementById('productPrice').textContent = product.FinalPrice;
  document.getElementById('productColor').textContent = product.Colors[0].ColorName;
  document.getElementById('productDesc').innerHTML = product.DescriptionHtmlSimple;

  document.getElementById('addToCart').dataset.id = product.Id;
}

// ************* Alternative Display Product Details Method *******************
// function productDetailsTemplate(product) {
//   return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div></section>`;
// }
/*



export default class productDetails{
   constructor(productId, dataSource){
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
   }

   async init(){
    //fetch product details using the data source for current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // the product details are needed before rendering the HTML
    this.renderProductDetails();
    // Once the HTML is rendered, add a listener to the Add to Cart button
    // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings...
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
   }

   addProductToCart(product) {
  //  setLocalStorage("so-cart", product); this was just overwriting new items added
  //correct code below to add multiple items

  // Get existing cart or empty array
  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];


  // add new item to it
  cart.push(this.product);

  // save updated cart
  localStorage.setItem('so-cart', JSON.stringify(cart));
    renderCartItems(cart);
}


  renderProductDetails(){
   productDetailsTemplate(this.product);
  }
}


function renderCartItems(cartItems){
   const container = document.getElementById('cartContainer');
   container.innerHTML = '';

   cartItems.forEach((item) =>{
      const itemHTML = `<div class = 'cart-item'>
                <img src ='${item.Image}' alt = '${item.NameWithoutBrand}'/>
                <div class = 'cart-item-details'>
                <h3>${item.Brand.name} ${item.NameWithoutBrand}</h3>
                <p> ${item.FinalPrice}</p>
                </div>
                <span class = 'remove-item' data-id = '${item.id}'>❌</span>
                </div>
                `;
                
                container.insertAdjacentHTML('beforeend',itemHTML);
                
   }) ;

   // Add listeners to all X button
   document.querySelectorAll('.remove-item').forEach(button =>{
      button.addEventListener('click', removeItemFromCart);
   });
}

function removeItemFromCart(event){
   const productId = event.target.dataset.id; // the ID of the product to remove

   //Get the cart from localStorage
   let cart = JSON.parse(localStorage.getItem('so-cart')) || [];

   // filter our the product to be removed
   cart = cart.filter((item) =>item.id != productId);

   // save updated cart back to localStorage
   localStorage.setItem('so-cart', JSON.stringify(cart));

   //Re -render the cart list
   renderCartItems(cart);
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
};

*/