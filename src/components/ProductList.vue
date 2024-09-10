<template>
  <div class="product-list">
    <div class="container">
      <!-- Loop through products and display each product -->
      <div v-for="product in products" :key="product.id" class="product-item">
        <!-- Display product image -->
        <div class="image">
          <img :src="product.image" alt="Product Image" />
        </div>

        <!-- Display product details and add-to-cart button -->
        <div class="details">
          <p class="price">{{ product.price.toFixed(1) }} EGP</p>
          <div class="info">
            <p>Product {{ product.id }}</p>
            <!-- Button to add the product to the cart -->
            <button class="btn-add" @click="addToCart(product)">Add +</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  computed: {
    // Mapping Vuex getters to get all products
    ...mapGetters(["allProducts"]),
    products() {
      return this.allProducts;
    },
  },
  methods: {
    // Mapping Vuex actions to fetch products and add to cart
    ...mapActions(["fetchProducts", "addToCart"]),
  },
  created() {
    // Fetch products when the component is created
    this.fetchProducts();
  },
};
</script>
