<template>
    <div class="movie-detail">
        <router-link :to="setUrlQuery()" class="back-link">
            <fa icon="arrow-circle-left" />
        </router-link>
        <div class="description-item" >
            <h2 >{{movieTitle}}</h2>
           
        </div>
        <div class="player-item">
            <div v-show="!showPlayer" class="imagePlayer"  >
                <img  :src="'https://statics.ocs.fr'+movie.fullscreenimageurl" alt="Movie Poster" width="800" >
                <a class="playButton"  @click="togglePlay"><fa  icon="play-circle" /></a>
          
            </div>
            <VideoPlayer
                v-if="showPlayer"
                :license-server="licenseServer"
                :manifest-url="manifestUrl"
                :poster-url="'https://statics.ocs.fr'+movie.fullscreenimageurl"
            />
        </div>
         <div class="description-item" >
         <p>{{movie.summary}}</p>
          </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref, onBeforeMount } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute} from 'vue-router';
import VideoPlayer from '@/components/VideoPlayer.vue';
import {getMovieDetails} from '@/api';
import MovieDetail from '@/types/movieDetail';
import Serie from '@/types/serie'
export default defineComponent({
    components: { VideoPlayer },
    data(){
        return{
            showPlayer:false,
            licenseServer: 'https://widevine-proxy.appspot.com/proxy',
            manifestUrl:
                'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        }
    },
     methods:{
        togglePlay(){
            this.showPlayer=!this.showPlayer;
        },
        setUrlQuery(){
            if(this.$route.query.search){
                return ('/?search='+this.$route.query.search)
            }else{
                return('/')
            }
        }
    },
    setup() {
        const movie= ref({});
        const movieTitle =ref<string>("")
        const route:RouteLocationNormalizedLoaded =useRoute();
        onBeforeMount(async()=>{
             try{
                const data:(MovieDetail|Serie) = await getMovieDetails(route.params.type,route.params.id);
                movie.value= data.contents;
                if(data.contents.title){
                    movieTitle.value= data.contents.title[0].value
                }
            }catch(err){
                console.log(err);
                return false
            }
        })
        return{
            movie,
            movieTitle
        }
    }
})
</script>

<style lang="scss">

    .movie-detail{
        padding:16px;
        .back-link{
            font-size: 25px;
            color: #ff9800;
            float: left;
            margin-right: 5px;
        }
        .player-item{
            padding:16px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h2{
            color:#FFF;
            font-size:28px;
            font-weight:600;
            margin-bottom: 16px;
        }
        .featured-img{
            display:block;
            max-width:100%;
            margin-bottom:16px;
        }
        p{
            color: #FFF;
            font-size:18px;
            line-height:1.4;
        }
    }
    .imagePlayer{
    svg{
        font-size: 100px;
        position: relative;
        bottom: 200px;
        opacity: 0.9;
        cursor: pointer;
        color: #ff9800;
        right: 50%;
    }
    svg:hover{
        border-radius: 50%;
        box-shadow: 0px 5px 19px 12px rgba(255, 255, 255,0.5);
        padding: 0px;
        margin: 0;
        opacity: 1 !important;
    }
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.max-w-full {
  max-width: 100%;
}
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
</style>