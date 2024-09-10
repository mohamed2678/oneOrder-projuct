<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo section -->
      <div class="logo">Shop</div>
      <!-- Cart icon that toggles the cart visibility -->
      <div class="cart" @click="$emit('toggleCart')">
        <i class="fa fa-shopping-cart"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar", // Component name
};
</script>
