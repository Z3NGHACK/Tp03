<template>
  <div class="p-2 bg-slate-50 rounded-lg hover:scale-95 cursor-pointer">
    <h3 class="text-lg sm:text-xl md:text-lg">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any specific styling here */
</style>
