import { shallowMount } from '@vue/test-utils';
import MovieDetail from "@/views/MovieDetail";
import MovieItem from '@/components/MovieItem';
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

describe('MovieDetail',()=>{
    getMovieDetails.mockResolvedValue({
        contents:{
            title: [{
                type: "text",
                value: "ZACK SNYDER'S JUSTICE LEAGUE",
                color: null
                }
            ],
            summary: "Pour rentrer dans les bonnes grâces de son maître Darkseid, Steppenwolf est déterminé à prendre le contrôle de toute l'humanité. Hippolyta prévient sa fille Diana Prince du danger qu'encourt la planète où elle vit désormais. Wonder Woman informe à son tour Bruce Wayne afin de trouver un moyen de faire face à cette terrible menace. Ne voulant pas que Superman se soit sacrifié pour rien, ils décident de former une ligue d'autodéfense composée de justiciers pour protéger la Terre. Wonder Woman et Batman sollicitent l'aide d'Aquaman, Cyborg et Flash. Une version sombre et intense de plus de 4 heures du film tel que Zack Snyder l'avait imaginé avant d'être remplacé par Joss Whedon.",
            fullscreenimageurl: "/data_plateforme/program/44533/origin_abovesuspicw0154439_pxyi9.jpg?size=large",
            detaillink: "/apps/v2/details/programme/ABOVESUSPICW0154439",
            id: "ZACKSNYDERSW0176303"
        }
           
    
    })
    const wrapper =shallowMount(MovieDetail,{
        global: {
            plugins: [router],
            components: {
                'fa': FontAwesomeIcon,
                'VideoPlayer':VideoPlayer
            }
        },
    });

    it("validate the component",async()=>{  
        router.push('/');
        await router.isReady();
        expect(wrapper.findComponent(MovieDetail));
    })
    
    it("Display full detail of the movie",async()=>{  
        router.push('/');
        await router.isReady();
        expect(wrapper.find("h2").text()).toBe("ZACK SNYDER'S JUSTICE LEAGUE")
        expect(wrapper.find("img").attributes("src")).toBe('https://statics.ocs.fr/data_plateforme/program/44533/origin_abovesuspicw0154439_pxyi9.jpg?size=large')
        expect(wrapper.find("p").text()).toBe("Pour rentrer dans les bonnes grâces de son maître Darkseid, Steppenwolf est déterminé à prendre le contrôle de toute l'humanité. Hippolyta prévient sa fille Diana Prince du danger qu'encourt la planète où elle vit désormais. Wonder Woman informe à son tour Bruce Wayne afin de trouver un moyen de faire face à cette terrible menace. Ne voulant pas que Superman se soit sacrifié pour rien, ils décident de former une ligue d'autodéfense composée de justiciers pour protéger la Terre. Wonder Woman et Batman sollicitent l'aide d'Aquaman, Cyborg et Flash. Une version sombre et intense de plus de 4 heures du film tel que Zack Snyder l'avait imaginé avant d'être remplacé par Joss Whedon.");
    })

    it("handle show shaka player",async()=>{  
        router.push('/');
        await router.isReady();
        expect(wrapper.vm.showPlayer).toBe(false);
        expect(wrapper.findComponent(VideoPlayer).exists()).toBe(false);
        await wrapper.find(".playButton").trigger('click');
        expect(wrapper.vm.showPlayer).toBe(true);
        expect(wrapper.findComponent(VideoPlayer).exists()).toBe(true);
    })
});