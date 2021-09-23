<template>
    <div class="collapse">
    <div class="collapseHeader" v-on:click="isOpen=!isOpen" >
         <slot  name="headerCollapse">
        </slot>
    </div>
    <div class="collapseBody" :class="isOpen ?'collapse-open':'collapse-close'">
        <slot  name="bodyCollapse">
        </slot>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data:()=>{
        return{
            isOpen: false
        }
    },
    props:{
        title:String,
    }
})
</script>

<style lang="scss">
    .collapse {
        border: 2px solid #2e4053;
        border-radius: 5px;
    }
    .collapseBody{
        padding: 1%;
        background-color:#2e4053;
    }
    .collapse-open{
     display: block !important;  
    }
    .collapse-close{
     display: none !important;   
    }
</style>
