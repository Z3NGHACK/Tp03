<template>
  <div class="products">
    <h2>Popular Products</h2>
    <div v-if="popularProducts && popularProducts.length === 0">
      Loading products...
    </div>
    <div v-if="popularProducts && popularProducts.length > 0">
      <div class="product" v-for="product in popularProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} $</p>
        <p>Sold: {{ product.countSold }}</p>
      </div>
    </div>
    <div v-else>
      No popular products found.
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../../stores/productStore';

export default {
  computed: {
    popularProducts() {
      const store = useProductStore();
      // Ensure 'products' is an array and handle if it's undefined
      return store.products ? store.getPopularProducts : [];
    },
  },
};
</script>
