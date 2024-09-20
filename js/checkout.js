let cart = JSON.parse(localStorage.getItem("cart")) || [];
let previousOrder = JSON.parse(localStorage.getItem("previousOrder")) || [];

const productList = document.getElementById("productList");
const grandTotal = document.getElementById("grandTotal");
let totalPrice = 0;

productList.innerHTML = "";

cart.forEach((product) => {
  const totalItemPrice = product.price * product.quantity;
  totalPrice += totalItemPrice;

  productList.innerHTML += `
            <div class="orderItem">
                <p><b>${product.name}</b> (x${product.quantity})</p>
                <p>₹${totalItemPrice}</p>
            </div>
        `;
});

grandTotal.innerHTML = `<b>Grand Total: ₹${totalPrice}</b>`;

function placeOrder(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postalCode").value;

  const orderDetails = {
    products: cart,
    customer: {
      name,
      address,
      city,
      postalCode,
    },
    total: cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
    date: new Date().toISOString(),
  };

  previousOrder.push({ ...orderDetails });
  localStorage.setItem("previousOrder", JSON.stringify(previousOrder));

  localStorage.removeItem("cart");

  alert("Order placed successfully!");
  window.location.href = "index.html";
}

document.getElementById("checkoutForm").addEventListener("submit", placeOrder);

document.getElementById("burger-menu").addEventListener("click", () => {
  document.getElementById("navbar-container").classList.toggle("active");
});
