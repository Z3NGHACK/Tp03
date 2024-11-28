<template>
    <div class="container">
        {{ store.count }}
        <button @click="decreasBtn">
            Increase
        </button>
    </div>

</template>
<script>
import { useCounterStore } from '../../stores/counter';
    export default{
        setup(){
            const store = useCounterStore();
            return{
                store,
            }
        },
        data(){
            return{
                count: 0
            }
        },
        methods:{
            decreasBtn(){
                this.store.count--;
            }
        }
    }
</script>
<style>

</style>