<template>
    <div class="carousel">
        <slot>
        </slot>
        <button @click="next" class="next"><fa icon="chevron-right" /></button>
        <button @click="prev" class="prev"><fa icon="chevron-left" /></button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    mounted(){
        setInterval(()=>{
            this.next()   
        },4000)
    },
    methods:{
        next(){
            this.$emit("next")
        },
        prev(){
            this.$emit("prev")
        }
    }
})
</script>
<style lang="scss">
    .carousel{
        margin: auto;
        position: relative;
        width: 100%;
        height: 75vh;
        overflow: hidden;
        button{
            position: absolute;
            height: 40px;
            width: 45px;
            top: calc(50% - 20px);
            color: white;
            background-color: rgba(0,0,0,0.8);
            border: none;
        }
        button:active,button:hover{
            outline: none;
            cursor: pointer;
        }
        .next{
            right: 0;
        }
        .pref{
            left:0;
        }
    }
    
</style>
