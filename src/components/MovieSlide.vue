<template>
    <div class="feature-card">
        <carousel
            @next="next"
            @prev="prev"
        >
            <carousel-slide v-for="(slide,index) in slides" 
            :key="slide" 
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
            :id="'slide-'+index"
            >
             <router-link to="/movie/programme/BOTEATWDS11W0179262">
                <img :src="getImgUrl(slide.image)" :alt="slide.title" class="featured-img" />
            </router-link >    
            </carousel-slide>
        </carousel>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide.vue';

export default defineComponent({
    components:{
        Carousel,
        CarouselSlide
    },
    data(){
      return{
            slides:[
                {
                    id:"tt0409591",
                    title:'Invasion',
                    description:"Trois ans après le crash du vaisseaux alien à Moscou, Yulya a développé d'étranges pouvoirs et devient un cobaye pour le Ministère de la Défense. Enfermée dans un laboratoire secret, les scientifiques et les militaires décortiquent ses sentiments.", 
                    image:"cover.jpg"
                },
                 {
                    id:"tt0409592",
                    title:'Film club',
                    description:"Trois ans après le crash du vaisseaux alien à Moscou, Yulya a développé d'étranges pouvoirs et devient un cobaye pour le Ministère de la Défense. Enfermée dans un laboratoire secret, les scientifiques et les militaires décortiquent ses sentiments.", 
                    image:"cover2.jpg"
                },
                {
                    id:"tt0409593",
                    title:'The swordsman Code',
                    description:"Trois ans après le crash du vaisseaux alien à Moscou, Yulya a développé d'étranges pouvoirs et devient un cobaye pour le Ministère de la Défense. Enfermée dans un laboratoire secret, les scientifiques et les militaires décortiquent ses sentiments.", 
                    image:"cover3.jpg"
                },
                {
                    id:"tt0409594",
                    title:'The dark element',
                    description:"Trois ans après le crash du vaisseaux alien à Moscou, Yulya a développé d'étranges pouvoirs et devient un cobaye pour le Ministère de la Défense. Enfermée dans un laboratoire secret, les scientifiques et les militaires décortiquent ses sentiments.", 
                    image:"cover4.jpg"
                },
            ],
            visibleSlide:0,
            direction:"left"
        }
  },
 
   methods:{
    getImgUrl(pic:string) {
        return require('../assets/images/'+pic)
    },
    next(){
        if(this.visibleSlide>=this.slides.length - 1){
            this.visibleSlide=0;
        }else{
            this.visibleSlide++;
        }
        this.direction="left"
    },
    prev(){
        if(this.visibleSlide<=0){
            this.visibleSlide=this.slides.length - 1;
        }else{
            this.visibleSlide--;
        }
        this.direction="right"
    }
  }
})
</script>
