import Vue from 'vue'
import Router from 'vue-router'
import searchHome from '@/views/searchHome'
import pokeList from '@/views/pokeList'
import about from '@/views/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: searchHome
    },
    {
      path: '/list',
      name: 'list',
      component: pokeList
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  ]
})
