const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');


let products = [];
fetch('../data/product.json')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        products = data;
        const product = products.find(p => p.productId == productId);
        console.log(products);
        if (product) {
            displayProductDetails(product,products);
        }
        else{
            console.error('Product not found:', productId);
        }
    })
    .catch(error => console.error('Error loading the product data:', error));

function displayProductDetails(product,products) {
    const container = document.getElementById('product-details');
    container.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p>${product.desc}</p>
        <h4>Price: ₹${product.price}</h4>
        <button onclick="addToCart(${product.productId})">Add to Cart</button>
    `;
}

function addToCart(productId) {

    const product = products.find(p => p.productId === productId);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.productId === product.productId);

    if(existingProduct){
        existingProduct.quantity += 1;
    }
    else{
        cart.push({...product,quantity:1});
    }

    localStorage.setItem('cart',JSON.stringify(cart));
    alert('Product added to cart!');
    
}

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbarContainer = document.getElementById('navbar-container');

    burgerMenu.addEventListener('click', () => {
        navbarContainer.classList.toggle('active');
    });
});