<template>
  <div id="app">
    <!-- The NavBar component, which emits an event to toggle the shopping cart visibility -->
    <NavBar @toggleCart="toggleCart" />

    <!-- A transition effect for fading in and out the shopping cart -->
    <transition name="fade">
      <!-- The ShoppingCart component is conditionally rendered based on isCartVisible -->
      <ShoppingCart
        v-if="isCartVisible"
        :isCartVisible="isCartVisible"
        @toggleCart="toggleCart"
      />
    </transition>

    <!-- The ProductList component that displays all available products -->
    <ProductList />
  </div>
</template>

<script>
// Importing the required components
import NavBar from "@/components/NavBar.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    NavBar, // Navigation bar at the top of the app
    ShoppingCart, // The cart to show items added by the user
    ProductList, // The list of all products fetched from the API
  },
  data() {
    return {
      // Variable to manage the visibility of the shopping cart
      isCartVisible: false,
    };
  },
  methods: {
    // Toggles the visibility of the shopping cart
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
    // Closes the cart when needed
    closeCart() {
      this.isCartVisible = false;
    },
  },
};
</script>
