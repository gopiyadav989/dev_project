

// Get the productId from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

fetch('../data/product.json')
    .then(response => response.json())
    .then(products => {
        const product = products.find(p => p.productId == productId);
        if (product) {
            displayProductDetails(product);
        }
    })
    .catch(error => console.error('Error loading the product data:', error));

function displayProductDetails(product) {
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
    // get the entire object in product by matching it with productId;
    const product = products.find(p => p.productId === productId);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.productId === product.productId);

    if(existingProduct){
        existingProduct.quantity += 1;
    }
    else{
        cart.push({...product, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}
