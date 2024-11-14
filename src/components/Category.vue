<template>
  <div
    class="flex border-2 flex-col w-full h-[177px] rounded-lg justify-center items-center transition-transform duration-300 hover:scale-95 cursor-pointer"
  >
    <img class="w-full h-[120px] object-cover" :src="image" :alt="name" />
    <h3 class="text-lg sm:text-xl md:text-lg">{{ name }}</h3>
    <h4 class="opacity-50 mb-5 text-sm sm:text-base">{{ productCount }}</h4>
  </div>
</template>
<script>
export default {
  name: "Category",
  props: {
    name: String,
    productCount: String,
    image: String,
    color: String,
  },
};
</script>
