<template>
  <div
    class="relative top-[20px] w-full h-[310px] flex gap-1 rounded-lg mt-2 overflow-hidden border-2"
  >
    <img :src="image" :alt="image" class="absolute scale-50 right-0 bottom-0" />
    <h2 class="absolute top-20 left-10 text-3xl w-[270px]">
      {{ title }}
    </h2>
    <div class="absolute bottom-10 left-10">
      <Button @click="shopNow(promotion)" :class="buttonColor">Shop Now</Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Promotion",
  props: {
    title: String,
    buttonColor: String,
    image: String,
    color: String,
  },
  components: { Button },
  methods: {
    shopNow(promotion) {
      alert("Let's shop: " + this.title);
    },
  },
};
</script>
