let products = [];

fetch('../data/product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
        populateFilters();  //to get all options of clothType
    })
    .catch(error => console.error('Error loading the product data:', error));


function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'product-box';

        productBox.innerHTML = `
            <a href="product.html?productId=${product.productId}">
                <img src="${product.images[0]}" alt="${product.name}">
                <h5>${product.name}</h5>
                <p>${product.desc}</p>
                <div>
                    <h4>Price: ₹${product.price}</h4>
                    <button onclick="addToCart(event, ${product.productId})">Add to Cart</button>
                </div>
            </a>
            
        `;
        
        container.appendChild(productBox);
    });
}


function addToCart(event, productId) {

    event.preventDefault();

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

function populateFilters(){
    const clothTypeFilter = document.getElementById('clothTypeFilter');
    const clothType = new Set(products.map(p => p.clothType));

    clothType.forEach(type => {
        clothTypeFilter.appendChild(new Option(type, type));
    })
    // 'option' has 2 parameter
    // option.value = type;
    // option.textContent = type;

}

document.getElementById('clothTypeFilter').addEventListener('change',filterAndSortProducts);
document.getElementById('priceSort').addEventListener('change',filterAndSortProducts);

function filterAndSortProducts(){

    const clothTypeFilter = document.getElementById('clothTypeFilter').value;
    const priceSort = document.getElementById('priceSort').value;

    // value of All Type is ""(empty string) ie !clothTypeFilter
    let filteredProducts = products.filter(p => !clothTypeFilter || p.clothType === clothTypeFilter);

    if(priceSort === "asc"){
        filteredProducts.sort((a,b) => a.price - b.price);
    }
    else if(priceSort === 'desc'){
        filteredProducts.sort((a,b) => b.price - a.price);
    }

    displayProducts(filteredProducts);

}


document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbarContainer = document.getElementById('navbar-container');

    burgerMenu.addEventListener('click', () => {
        navbarContainer.classList.toggle('active');
    });
});