import Vue from 'vue'
import Router from 'vue-router'
import searchMain from '../components/searchMain'
import fm from '../components/fm'
import foundSong from '../components/foundSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      redirect: '/foundsong'
     
    },
    
    {
      path: '/foundsong',
      name: 'foundsong',
      component: foundSong
    },
     {
      path: '/fm',
      name: 'fm-page',
      component: fm
    },

    {
      path: '*',
      redirect: '/'
    }
  ]
})
