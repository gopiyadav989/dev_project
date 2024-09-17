// Fetch product data from the JSON file
let products = [];

// Fetch product data from the JSON file and store it in memory
fetch('../data/product.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        products = data;
        displayProducts(products);
    })
    .catch(error => console.error('Error loading the product data:', error));


function displayProducts(products) {
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'product-box';

        productBox.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.productId})">Add to Cart</button>
        `;
        
        container.appendChild(productBox);
    });
}


function addToCart(productId) {
    // get the entire object in product by matching it wiht productId;
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
