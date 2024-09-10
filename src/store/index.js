// Importing the createStore function from Vuex to create a centralized store
import { createStore } from "vuex";
// Importing the cart module which handles cart-related actions and state
import * as cart from "./cart";

// Creating the Vuex store and registering the cart module under 'cart'
const store = createStore({
  modules: {
    cart, // All cart state, getters, actions, and mutations are handled here
  },
});

// Exporting the store so it can be used throughout the application
export default store;
