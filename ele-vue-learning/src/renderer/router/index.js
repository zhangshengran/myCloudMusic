import Vue from 'vue'
import Router from 'vue-router'
import searchMain from '../components/searchMain'
import fm from '../components/fm'
import foundSong from '../components/foundSong'
import playPage from '../pages/playPage'
import selectPage from '../pages/selectPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'selectPage',
      redirect: '/selectPage'

    },
    {
      path: '/selectPage',
      name: 'selectPage',
      component: selectPage,
      children: [{
        path: '/selectPage/searchmain',
        name: 'searchMain',
        component: searchMain
      },
      {
        path: '/selectPage/foundsong',
        name: 'foundsong',
        component: foundSong
      },
      {
        path: '/selectPage/fm',
        name: 'fm-page',
        component: fm
      },]
    },
    {
      path: '/playPage',
      name: 'playPage',
      component: playPage
    },


    {
      path: '*',
      redirect: '/'
    }
  ]
})
