---

# CoolKart E-commerce Website

## Project Overview

CoolKart is a fully functional e-commerce website built to simulate an online shopping experience. It includes various product pages, a shopping cart, and a checkout system. Users can browse products, add items to their cart, view their cart summary, proceed to checkout, and place orders. The project uses local storage to manage the shopping cart and order history for a seamless user experience.

### Features
- **Product Listing**: Users can browse a variety of products on the shop page, each with detailed information such as name, price, description, and images.
- **Shopping Cart**: A dynamic cart that allows users to add products, change quantity, and remove items.
- **Responsive Navigation**: A burger menu for mobile devices and a navigation bar for easy access to other pages.
- **Checkout Process**: The checkout page allows users to enter their delivery address and review their order before placing it.
- **Order Management**: Once an order is placed, it is saved in local storage under "previous orders" and the cart is cleared.
- **Local Storage**: The cart and order history are managed using local storage, ensuring that user data persists across sessions.
- **Responsive Design**: The entire site is fully responsive, ensuring usability on both desktop and mobile devices.



## Pages
### 1. **Home Page** (`index.html`)
   The home page welcomes users with the shop’s logo and quick links to various sections such as "Shop," "Blog," "About," and "Contact."

### 2. **Shop Page** (`allProduct.html`)
   Displays a list of all available products with filtering options by category and price. Users can add products to the cart directly from this page.

### 3. **Cart Page** (`cart.html`)
   Users can review items they’ve added to the cart, update quantities, and remove unwanted products. The total cost of the cart is displayed, and users can proceed to the checkout from here.

### 4. **Checkout Page** (`checkout.html`)
   Collects user delivery details and provides a summary of the products in the cart. After placing an order, the cart is cleared, and the order details are saved in local storage.

### 5. **Order History Page** (`orderhistory.html`)
   Displays a list of previous orders saved in local storage. Users can see their past purchases and the respective details.
   
### 6. **Product Page** (`product.html`)
   Displays individual product details, including images, descriptions, and price, with an option to add the product to the cart.

## Technologies Used
- **HTML5**: For the structure of the pages.
- **CSS3**: For styling and layout, including advanced responsive design features like grid and flexbox for optimal user interface on different screen sizes.
- **JavaScript**: For interactivity, including cart management, form validation, and local storage functionality.
- **LocalStorage API**: To store the user's cart and order history in their browser.
- **Font Awesome**: Used for icons on buttons and navigation items.
  
## File Structure

```
root/
├── css
│   ├── allproduct.css
│   ├── cart.css
│   ├── checkout.css
│   ├── orderhistory.css
│   ├── product.css
│   └── style.css
├── js
│   ├── allproduct.js
│   ├── cart.js
│   ├── checkout.js
│   ├── orderhistory.js
│   ├── product.js
│   └── index.js
├── pages
│   ├── index.html
│   ├── allproduct.html
│   ├── cart.html
│   ├── checkout.html
│   ├── orderhistory.html
│   └── product.html
├── assets
│   └── images
```

## How to Run the Project
1. **Clone the repository**:
   ```
   git clone https://github.com/username/CoolKart.git
   ```
2. **Open the project folder**:
   Navigate to the folder and open `index.html` in any modern browser.

## Local Storage Management

- **Cart**: The cart is stored in local storage as an array of products. Each product has attributes such as `productId`, `name`, `price`, `quantity`, and `images`.
- **Previous Orders**: After a user places an order, the order details are stored in local storage under the key `"previous order"`, and the cart is reset.

## Features to Implement (Future Scope)
- **Payment Integration**: Connect to a payment gateway to enable real transactions.
- **User Authentication**: Implement a login system where users can save carts between sessions.
- **Wishlist Feature**: Allow users to save products for later purchases.
- **Search and Filters**: Implement a product search and advance filter options like price range, size, brand,rating.
---

