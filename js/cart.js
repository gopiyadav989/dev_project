let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
    const cartContainer = document.getElementById('cartContainer');
    const cartTotal = document.getElementById('cartTotal');
    let totalPrice = 0;
    let total = 0;

    cartContainer.innerHTML = "";

    cart.forEach(product => {
        totalPrice += (product.price * product.quantity);
        total = (product.price * product.quantity);

        cartContainer.innerHTML += `
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
                    <div class ="quantityControl">
                        <div>
                            <button onclick="updateQuantity(${product.productId}, -1)">-</button>
                            <span>${product.quantity}</span>
                            <button onclick="updateQuantity(${product.productId}, +1)">+</button>
                        </div>
                        <button class="removeBtn" onClick="removeFromCart(${product.productId})"><i class="fa-sharp fa-solid fa-trash"></i></button>
                    </div>
                    
                    <div>
                        <h4>Total Price</h4>
                        <p class="totalItemPrice">₹${total}</p>
                    </div>
                </div>
            </div>
        `
    })
    cartTotal.textContent = `Grand Total: ₹${totalPrice}`;

}

function updateQuantity(productId, action) {

    const product = cart.find(p => p.productId === productId);

    product.quantity += action;
    if(product.quantity <= 0) removeFromCart(product.productId);
    else {
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

}


function removeFromCart(productId) {
    cart = cart.filter(p => p.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

document.addEventListener('DOMContentLoaded', displayCartItems);

document.getElementById('burger-menu').addEventListener('click', () => {
    document.getElementById('navbar-container').classList.toggle('active');
});