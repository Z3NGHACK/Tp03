<template>
    <div class="container">
        {{ store.count }}
        <button @click="increaseBtn">
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
            increaseBtn(){
                this.store.count++;
            }
        }
    }
</script>
<style>
    .container{
        border: 1px solid #000;
        padding: 10px;
        display: flex;
    }

</style>