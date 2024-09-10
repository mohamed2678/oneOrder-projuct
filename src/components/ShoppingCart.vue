<template>
  <!-- Transition for cart visibility with fade effect -->
  <transition name="fade">
    <div v-if="isCartVisible" class="shopping-cart" ref="cart" @click.stop>
      <div class="container">
        <!-- Cart header with title and 'Clear' button -->
        <div class="head-cart">
          <h2>Items</h2>
          <!-- Button to clear the cart by calling clearCart method -->
          <button @click="clearCart">clear</button>
        </div>

        <!-- List of items in the cart -->
        <div class="pay">
          <ul>
            <!-- Loop through cartItems and display each item -->
            <li v-for="item in cartItems" :key="item.id">
              <div class="content">
                <!-- Display product image -->
                <div class="image">
                  <img :src="item.image" alt="Product Image" />
                </div>

                <!-- Display product details: ID and price -->
                <div class="info">
                  <span>Product - {{ item.id }}</span>
                  <span>{{ item.price }} EGP</span>
                </div>

                <!-- Buttons to increment/decrement product quantity -->
                <div class="btns">
                  <button @click="increment(item.id)">+</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="decrement(item.id)">-</button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Total price and pay button -->
        <div class="total">
          <button>pay {{ cartTotal.toFixed(1) }} EGP</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ShoppingCart",
  props: {
    // Controls whether the cart is visible
    isCartVisible: Boolean,
  },
  computed: {
    // Mapping Vuex getters to access cart items, total price, and products
    ...mapGetters(["cartItems", "cartTotal", "allProducts"]),
  },
  methods: {
    // Mapping Vuex actions to modify the cart (increment, decrement, remove, clear)
    ...mapActions([
      "increment",
      "decrement",
      "removeFromCart",
      "clearCart",
      "fetchProducts",
    ]),
    // Handles clicks outside of the cart to close it
    handleClickOutside(event) {
      const cart = this.$refs.cart;
      const nav = document.querySelector(".navbar .cart");
      // If click is outside the cart and the navbar, emit event to close the cart
      if (cart && !cart.contains(event.target) && !nav.contains(event.target)) {
        this.$emit("toggleCart");
      }
    },
  },
  created() {
    // Fetch products when the component is created
    this.fetchProducts();
    // Add an event listener to detect clicks outside the cart
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    // Remove the click event listener before the component is destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
