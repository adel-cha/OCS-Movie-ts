import { mount } from '@vue/test-utils'
import MovieItem from '@/components/MovieItem';
import { createRouter, createWebHistory } from 'vue-router'

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

describe('MovieItem',()=>{
    const wrapper =mount(MovieItem,{
        global: {
            plugins: [router]
          },
        propsData:{
            movie:{
                title: [
                    {
                        color: null,
                        type: "text",
                        value: "GAME OF THRONES"
                    }
                ],
                subtitle: "saisons 1 à 8",
                subtitlefocus: null,
                highlefticon: null,
                highrighticon: null,
                lowrightinfo: null,
                imageurl: "/data_plateforme/saison/1691/origin_gameofthr08w0149292_ni72q.jpg?size=small",
                fullscreenimageurl: "/data_plateforme/saison/1691/origin_gameofthr08w0149292_ni72q.jpg?size=large",
                id: "GAMEOFT0806W0149298",
                detaillink: "/apps/v2/details/serie/PSGAMEOFTHRW0058624",
                duration: "PT1H15M25S",
                playinfoid: {
                hd: "BDB58119-646A-147C-E5E5-5F10C891FC50",
                sd: "BDB58119-646A-147C-E5E5-5F10C891FC50",
                uhd: null
                }
            }
        }
    });
    it("displays short detail for movie ", async ()=>{  
        router.push('/') 
        await router.isReady()
        expect(wrapper.find("img").attributes("src")).toBe('https://statics.ocs.fr/data_plateforme/saison/1691/origin_gameofthr08w0149292_ni72q.jpg?size=small')
        expect(wrapper.find(".type").text()).toBe("serie");
        expect(wrapper.find("h3").text()).toBe("GAME OF THRONES");
        expect(wrapper.find("p").text()).toBe("saisons 1 à 8");
    })
})