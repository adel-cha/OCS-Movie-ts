import { shallowMount } from '@vue/test-utils';
import SerieDetail from "@/views/SerieDetail";
import MovieItem from '@/components/MovieItem';
import data from "./mock/serie.json"
import { createRouter, createWebHistory } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {getMovieDetails} from "@/api";
import VideoPlayer from '@/components/VideoPlayer.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: MovieItem
          },
        {
            path:'/movie/:type/:id',
            name:"Movie Detail",
            component:MovieItem
        },
        {
            path:'/detail/:type/:id',
            name:"Serie Detail",
            component:MovieItem
        }
    ]
  })

jest.mock("@/api",()=>({getMovieDetails:jest.fn()}))

describe('SerieDetail',()=>{
    getMovieDetails.mockResolvedValue(data)
    const wrapper =shallowMount(SerieDetail,{
        global: {
            plugins: [router],
            components: {
                'fa': FontAwesomeIcon,
                'VideoPlayer':VideoPlayer,
            }
        },
    });

    it("validate the component",async()=>{  
        router.push('/');
        await router.isReady();
        expect(wrapper.findComponent(SerieDetail));
    })
    it("display saisons detail",async()=>{  
        router.push('/');
        await router.isReady();
        expect(wrapper.find("h2").text()).toBe("THE WALKING DEAD");
        expect(wrapper.vm.serie.seasons.length).toBe(2)
    })
});