import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import SerieDetail from '../views/SerieDetail.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/movie/:type/:id',
    name:"Movie Detail",
    component:MovieDetail
  },
  {
    path:'/detail/:type/:id',
    name:"Serie Detail",
    component:SerieDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
