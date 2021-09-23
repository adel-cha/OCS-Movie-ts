<template>
    <form @submit.prevent="setValueSearch()" class="search-box">
      <input type="search" placeholder="Que voulez-vous regarder ?" v-model="search">
      <input type="submit" value="Rechercher">
    </form>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import {getSearchMovies} from '@/api'

export default defineComponent({
    props:{
        setMovies:{
            type:Function,
            default:()=>true,
        }
    },
    data(){
      return({
        search:this.$route.query.search,
      })
    },
    methods:{
      setValueSearch(){
        this.$router.push({query:{search:this.search}})
        this.SearchMovies();
      },
      async SearchMovies(){
        if(this.search!==""){
          try{
            const data = await getSearchMovies((this.search as string));  
            this.$props.setMovies(data.contents);
            
            setTimeout(()=>{
              window.scrollTo(50, 400);
            },1000)
          }catch(err){
            console.log(err);
            return false
          }
        }
      }
    },
    mounted(){
      const searchValue= this.$route.query.search 
      if(searchValue!==""){
        this.SearchMovies()
      }
    }
})
</script>

<style lang="scss">
.search-box{
       display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 16px;

      input{
        display: block;
        appearance: none;
        border:none;
        outline:none;
        background:none;
        &[type="search"]{
            flex: 1 1 80%;
          max-width:79%;
          margin-right: 1%;
          color:#FFF;
          background-color:#496583;
          font-size:20px;
          padding:10px 16px;
          border-radius:8px;
          transition:0.4s;
          &::placeholder{
            color:#f3f3f3;
          }
          &:focus{
            box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
          }
        }
        &[type="submit"]{
          flex: 1 1 20%;
          cursor: pointer;
          max-width:20%;
          background-color:#ff9800;
          padding:16px;
          border-radius:8px;
          color:#FFF;
          text-transform: uppercase;
          transition:0.4s;

          &:active{
            background-color:#3B8070;
          }
        }
      }
    }
</style>