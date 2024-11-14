import axios from 'axios';
import { defineStore } from 'pinia';

export interface TypeCategory {
  id: number;
  name: string;
  group: string;
  productCount: number;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  group: string;
  countSold: number;
  price: number;
  image: string;
}

export interface Promotion {
  id: number;
  title: string;
  color: string;
  buttonColor: string;
  image: string;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedGroupName: '', // Initially, no group is selected
    groups: [] as string[],
    promotions: [] as Promotion[],
    categories: [] as TypeCategory[],
    products: [] as Product[],
  }),

  getters: {
    // Getter to fetch filtered categories based on the selected group
    filteredCategories(state): TypeCategory[] {
      if (state.selectedGroupName === '') {
        return state.categories; // If no group is selected, show all categories
      }
      return state.categories.filter((category: TypeCategory) => category.group === state.selectedGroupName);
    },
    // Getter to fetch categories by group
    getCategoriesByGroup: (state) => (groupName: string): TypeCategory[] => {
      return state.categories.filter((category: TypeCategory) => category.group === groupName);
    },

    // Getter to fetch products by group
    getProductsByGroup: (state) => (groupName: string): Product[] => {
      return state.products.filter((product: Product) => product.group === groupName);
    },

    // Getter to fetch popular products
    getPopularProducts: (state): Product[] => {
      return state.products.filter((product: Product) => product.countSold > 10);
    },
  },


  actions: {
    // Setter for selected group
    setSelectedGroup(group: string) {
      this.selectedGroupName = group;
    },

    async fetchCategories() {
      try {
        const response = await axios.get<TypeCategory[]>("http://localhost:3000/api/categories");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async fetchPromotions() {
      try {
        const response = await axios.get<Promotion[]>("http://localhost:3000/api/promotions");
        this.promotions = response.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },

    async fetchProducts() {
      try {
        const response = await axios.get<Product[]>("http://localhost:3000/api/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async fetchGroups() {
      try {
        const response = await axios.get<string[]>("http://localhost:3000/api/groups");
        this.groups = response.data;
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    },
  },
});
