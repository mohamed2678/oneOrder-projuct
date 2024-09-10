# OneOrder Shopping Cart Project
# https://oneorder2729.netlify.app/

## Overview

This project is a fully responsive shopping cart application built with Vue.js and Vuex. It showcases the core functionalities of an e-commerce shopping cart, such as adding products, incrementing and decrementing item quantities, removing items, and clearing the cart. The project fetches product data from the [FakeStoreAPI](https://fakestoreapi.com/) and displays it in a user-friendly interface.

## Key Features

- **Product Listing:** Displays a list of products fetched from an external API.
- **Shopping Cart:** Users can add products to the cart, adjust quantities, or remove items altogether.
- **Responsive Design:** The layout adjusts to different screen sizes for optimal usability on both desktop and mobile devices.
- **Cart Management:** The cart is managed using Vuex, allowing for easy state management and data persistence throughout the application.
- **Clear Cart:** Users can clear the entire shopping cart with one click.
- **Smooth UI/UX:** Transitions and UI elements provide a smooth and simple shopping experience.
- **Modular Architecture:** The project follows a component-based structure for better code organization and scalability.

## Technical Details

- **Frontend Framework:** Vue.js (Version 3.x)
- **State Management:** Vuex (for handling the cart and products)
- **HTTP Client:** Axios (for API requests to fetch product data)
- **Styling:** Vanilla CSS for a clean and simple interface

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
