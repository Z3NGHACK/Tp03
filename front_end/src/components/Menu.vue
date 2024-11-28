<template>
  <nav>
    <h2>Categories</h2>
    <ul>
      <li v-if="categories.length === 0">Loading categories...</li>
      <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
    </ul>
  </nav>
</template>

  
<script>
import { useProductStore } from '../../stores/productStore';
import { computed } from 'vue';

export default {
  setup() {
    const store = useProductStore();

    const categories = computed(() => store.categories);

    return { categories };
  },
};
</script>
  
<style scoped>
  nav {
    margin: 20px;
    padding: 10px;
  }
  ul {
    list-style-type: none;
  }
  li {
    cursor: pointer;
  }
</style>
  