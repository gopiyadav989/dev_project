let orderHistory = JSON.parse(localStorage.getItem("previousOrder")) || [];

const orderList = document.getElementById("orderList");

orderHistory.forEach(order => {
    const products = order.products.map(product => `
        <div class="cartItem">
            <div class="imgAndName">
                    <a href="product.html?productId=${product.productId}"><img src="${product.images[0]}" alt="${product.name}" class="itemImg"></a>
                    <div>
                        <h4>${product.name}</h4>
                        <p>${product.desc}</p>
                    </div>
                </div>
                
                <div class="itemDetails">
                    
                    <div>
                        <h4>Price</h4>
                        <p class="totalItemPrice">₹${product.price}</p>
                    </div>
                    
                    <div>
                        <h4>Total Price</h4>
                        <p class="totalItemPrice">₹${product.price}</p>
                    </div>
                </div>
        </div>
    `).join('');

    orderList.innerHTML += `
        <div class="order">
            <div class="orderDetails">
            <h3>Customer: ${order.customer.name}</h3>
            <p>Address: ${order.customer.address}, ${order.customer.city}, ${order.customer.postalCode}</p>
            <p>Date: ${new Date(order.date).toLocaleString()}</p>
            </div>
            ${products}
            <h4>Total: ₹${order.total}</h4>
        </div>
    `;
});




const burgerMenu = document.getElementById('burger-menu');
const navbarContainer = document.getElementById('navbar-container');

burgerMenu.addEventListener('click', () => {
    navbarContainer.classList.toggle('active'); // Toggle visibility of navbar
    burgerMenu.classList.toggle('open'); // Toggle burger icon state
});
