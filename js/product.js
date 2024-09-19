const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

let products = [];
fetch("../data/product.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    products = data;
    const product = products.find((p) => p.productId == productId);
    console.log(products);
    if (product) {
      displayProductDetails(product);
    } else {
      console.error("Product not found:", productId);
    }
  })
  .catch((error) => console.error("Error loading the product data:", error));

function displayProductDetails(product, products) {
  const container = document.getElementById("product-details");
  container.innerHTML = `
        <div class="images">
            <img src="${product.images[0]}" id="mainImage" alt="${product.name}">
            <div class="smallImageGroup">
                <img src="${product.images[0]}" class="smallImage" alt="${product.name}" onclick="mainImageToggle('${product.images[0]}')">
                <img src="${product.images[1]}" class="smallImage" alt="${product.name}" onclick="mainImageToggle('${product.images[1]}')">
                <img src="${product.images[2]}" class="smallImage" alt="${product.name}" onclick="mainImageToggle('${product.images[2]}')">
                <img src="${product.images[3]}" class="smallImage" alt="${product.name}" onclick="mainImageToggle('${product.images[3]}')">
            </div>
        </div>
        <div class="details">
            <h2>${product.name}</h2>
            <h5>${product.desc}</h5>
            <h4>Price: ₹${product.price}</h4>
            <input type="number" value="1" min="1">
            <button onclick="addToCart(${product.productId})">Add to Cart</button>
            <h3>Description:</h3>
            <p>${product.desc2}<p>
        </div>
    `;
}

function mainImageToggle(imageUrl) {
  let mainImg = document.getElementById("mainImage");
  mainImg.src = imageUrl;
}

function addToCart(productId) {
  const product = products.find((p) => p.productId === productId);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find(
    (item) => item.productId === product.productId,
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navbarContainer = document.getElementById("navbar-container");

  burgerMenu.addEventListener("click", () => {
    navbarContainer.classList.toggle("active");
  });
});
