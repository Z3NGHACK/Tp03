<!-- <script>
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';


export default {
  components: {
    Category,
    Promotion
  },
  data() {
    return {
      categories: [
        { image: '/image/cakeandmilk.png', name: 'Cake & Milk', itemCount: 14 , backgroundColor: '#F2FCE4'},
        { image: '/image/peach.png', name: 'Peach', itemCount: 17 , backgroundColor: '#FFFCEB'},
        { image: '/image/kiwi.png', name: 'Oganic Kiwi', itemCount: 21 , backgroundColor: '#ECFFEC'},
        { image: '/image/apple.png', name: 'Red Apple', itemCount: 68 , backgroundColor: '#FEEFEA'},
        { image: '/image/snake.png', name: 'Snake', itemCount: 34 , backgroundColor: '#FFF3EB'},
        { image: '/image/plum.png', name: 'Black Plum', itemCount: 25 , backgroundColor: '#FFF3FF'},
        { image: '/image/cabbage.png', name: 'Vegetables', itemCount: 65 , backgroundColor: '#F2FCE4'},
        { image: '/image/headphone.png', name: 'Headphone', itemCount: 34 , backgroundColor: '#FFFCEB'},
        { image: '/image/milk&cake.png', name: 'Milk & Cake', itemCount: 53, backgroundColor: '#F2FCE4'},
        { image: '/image/orange.png', name: 'Orange', itemCount: 63, backgroundColor: '#FFF3FF' },
      ],
      promotions: [
        { title: 'Everyday Fresh & Clean with Our Products', 
        image: '/image/onion.png', width: 200,backgroundColor: '#F0E8D5'},
        { title: 'Make your Breakfast Healthy and Easy', 
        image: '/image/milk.png', width: 150, backgroundColor: '#F3E8E8'},
        { title: 'The best Organic Products Online', 
        image: '/image/vegetables.png', width: 240, backgroundColor: '#E7EAF3'}
      ]
    }
  }
}
</script>

<template>
  <div id="app">
    <div class="category-card">
      <Category
        v-for="(category, index) in categories"
        :key="index"
        :image="category.image"
        :name="category.name"
        :itemCount="category.itemCount"
        :backgroundColor="category.backgroundColor"
      />
    </div>

    <div class="promotion-section">
      <Promotion
        v-for="(promotion, index) in promotions"
        :key="index"
        :title="promotion.title"
        :description="promotion.description"
        :image="promotion.image"
        :backgroundColor="promotion.backgroundColor"
        :width="promotion.width"
      />
    </div>
  </div>
</template>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
}
.category-card {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.promotion-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
}
</style>

<!-- <script>
  import Increase from './components/Increase.vue';
  import Decrease from './components/Decrease.vue';
  export default{
    components:{Increase, Decrease}
  }
 
</script>
<template>
  <div>
    Increase and Decrease function
    <Increase/>
    <Decrease/>
    <h2></h2>
  </div>
</template> --> 

<template>
  <div>
    <h1>Welcome to E-commerce App</h1>
    <Menu/>
    <Product/>
  </div>
</template>

<script>
import {useProductStore} from '../stores/productStore.js'
import Menu from './components/Menu.vue';
import Product from './components/Product.vue';



import { onMounted } from 'vue';

export default {
  setup() {
    const store = useProductStore();

    onMounted(async () => {
      await store.fetchGroups();
      await store.fetchPromotions();
      await store.fetchCategories();
      await store.fetchProducts();
    });
  },
  components: {
    Menu,
    Product,
  },
};
</script>
