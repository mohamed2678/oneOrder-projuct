import axios from "axios";

export const state = {
  // The cart will hold all products added by the user
  cart: [],

  // The products array will store all the products fetched from the API
  products: [],
};

export const getters = {
  // Returns all items in the cart
  cartItems: (state) => state.cart,

  // Calculates the total price of the cart by multiplying price by quantity for each item
  cartTotal: (state) =>
    state.cart.reduce((total, item) => total + item.price * item.quantity, 0),

  // Returns all the products fetched from the API
  allProducts: (state) => state.products,

  // Find and return a product from the products array based on its ID
  getProductById: (state) => (id) =>
    state.products.find((product) => product.id === id),
};

export const actions = {
  // Fetches products from the API and commits the data to the products state
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      commit("setProducts", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  // Adds a product to the cart
  addToCart({ commit }, product) {
    commit("addToCart", product);
  },

  // Increments the quantity of a product in the cart by 1
  increment({ commit }, productId) {
    commit("incrementQuantity", productId);
  },

  // Decrements the quantity of a product in the cart by 1
  decrement({ commit }, productId) {
    commit("decrementQuantity", productId);
  },

  // Clears the entire cart
  clearCart({ commit }) {
    commit("CLEAR_CART");
  },
};

export const mutations = {
  // Sets the products state with the products fetched from the API
  setProducts(state, products) {
    state.products = products;
  },

  // Adds a product to the cart. If it already exists, increments its quantity.
  addToCart(state, product) {
    const item = state.cart.find((item) => item.id === product.id);
    if (item) {
      // If the product already exists in the cart, increment its quantity
      item.quantity++;
    } else {
      // If it doesn't exist in the cart, add it with a quantity of 1
      state.cart.push({ ...product, quantity: 1 });
    }
  },

  // Increases the quantity of a specific product in the cart
  incrementQuantity(state, productId) {
    const item = state.cart.find((item) => item.id === productId);
    if (item) {
      item.quantity++;
    }
  },

  // Decreases the quantity of a specific product in the cart, but keeps it above 1
  decrementQuantity(state, productId) {
    const item = state.cart.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      state.cart = state.cart.filter((item) => item.id !== productId);
    }
  },

  // Clears the entire cart
  CLEAR_CART(state) {
    state.cart = [];
  },
};
