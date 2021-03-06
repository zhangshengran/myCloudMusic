import Vue from 'vue'
import Router from 'vue-router'
import searchMain from '../components/searchMain'
import fm from '../components/fm'
import foundSong from '../components/foundSong'
import playPage from '../pages/playPage'
import selectPage from '../pages/selectPage'
import gexingtuijian from '../components/gexingtuijian'
import playlistdetail from '../components/playlistdetail'
import localMusicPage from '../components/localMusicPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'selectPage',
      redirect: '/selectPage/foundsong/gexingtuijian'

    },
    {
      path: '/selectPage',
      name: 'selectPage',
      component: selectPage,
      redirect: '/selectPage/foundsong',
      children: [{
        path: '/selectPage/searchmain',
        name: 'searchMain',
        component: searchMain
      },
      {
        path: '/selectPage/playlistdetail',
        name: 'playlistdetail',
        component: playlistdetail
      },
      {
        path: '/selectPage/foundsong',
        name: 'foundsong',
        component: foundSong,
        redirect: '/selectPage/foundsong/gexingtuijian',
        children: [{
          path: '/selectPage/foundsong/gexingtuijian',
          name: 'gexingtuijian',
          component: gexingtuijian,
          meta: { keepAlive: true }
        }]
      },
      {
        path: '/selectPage/fm',
        name: 'fm-page',
        component: fm
      },
      {
        path: '/selectPage/localmusic',
        name: 'localmusic',
        component: localMusicPage
      },
    ]
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
