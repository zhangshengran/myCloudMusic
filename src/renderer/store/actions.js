import http from '../api/index'
import { getMusicUrl, getLyr, playlistDetail } from '../api/api'


var actions = {
  getSongList({ commit, state }, searchSongName) {
    commit('addSearchHistory', searchSongName);
    localStorage.setItem(searchSongName, searchSongName);

    http.get('/search', { keywords: searchSongName }).then(({ data }) => {

      commit('setSonglist', data.result.songs);

      // console.log('设置songList',state.songList)
    })
  },
  getplaylistDetail({ commit, state }, listId) {

    playlistDetail(listId).then(({ data }) => {
      // console.log('ttttttttttttttttttttttt',data.playlist.tracks)
     
      var ownPlayList = [];
      data.playlist.tracks.forEach(element => {
        ownPlayList.push({name:element.name,artists:element.ar,id:element.id,album:element.al,duration:element.dt})
      });
   
      // console.log(ownPlayList)
      commit('setSonglist', ownPlayList);

    })


  },
  async getMusicURL({ commit, state }, musicId) {
    let url = await getMusicUrl(musicId);
    commit('setSongUrl', url)
  },
  async getNextMusic({ commit, state }) {
    let musicId = state.songList[state.musicIndex].id;
    commit('nextMusicIndex', 'next');
    let url = await getMusicUrl(musicId);
    commit('setSongUrl', url)
  },

  async getPreMusic({ commit, state }) {
    let musicId = state.songList[state.musicIndex].id;
    commit('nextMusicIndex', 'pre');
    let url = await getMusicUrl(musicId);
    commit('setSongUrl', url)
  },
  async getLyc({ commit, state }) {
    let Lyc = await getLyr(musicId);
    commit('getLyc', Lyc);
  }
}





export default actions;