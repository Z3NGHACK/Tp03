<template>
  <button class="shop-btn" @click="$emit('click')">
    Shop Now →
  </button>
</template>

<script>
export default {
  name: "ShopButton"
};
</script>

<style scoped>
.shop-btn {
  background-color: #00C851;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  left: 35px;
  bottom: 50px;
}
</style>
