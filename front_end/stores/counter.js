import { defineStore } from "pinia";

export const useCounterStore = defineStore("Counter", {
    state: ()=>({
        count: 0
    }),
    getter:{
    },
    action:{},
})
