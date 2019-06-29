import http from '../api/index'
import {getMusicUrl,getLyr} from '../api/api'

var actions = {
  getSongList({ commit, state }, searchSongName) {
    commit('addSearchHistory', searchSongName);
    http.get('/search', { keywords: searchSongName }).then(({ data }) => {
      // state.songList = data.result.songs;
      commit('setSonglist', data.result.songs);

      // console.log('设置songList',state.songList)
    })
  },
  async getMusicURL({ commit, state }, musicId) {  
    let url = await getMusicUrl(musicId);
    commit('setSongUrl',url)
  },
  async getNextMusic({ commit, state }) {
    let musicId = state.songList[state.musicIndex].id;
    commit('nextMusicIndex', 'next');
    let url = await getMusicUrl(musicId);
    commit('setSongUrl',url)
  },

 async getPreMusic({ commit, state }) {
   let musicId = state.songList[state.musicIndex].id;
    commit('nextMusicIndex', 'pre');
    let url = await getMusicUrl(musicId);
    commit('setSongUrl',url)
  },
  async getLyc({ commit, state }){
    let Lyc = await getLyr(musicId);
    console.log(Lyc)
    commit('getLyc',Lyc);
  }
}





export default actions;