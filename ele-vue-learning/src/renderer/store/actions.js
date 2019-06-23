import http from '../api/index'
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
    commit('nextMusicIndex', 'next');

    let musicId = state.songList[state.musicIndex].id
    let url = await getMusicUrl(musicId);

    commit('setSongUrl',url)
  },

 async getPreMusic({ commit, state }) {
    commit('nextMusicIndex', 'pre');
    let musicId = state.songList[state.musicIndex].id;
    let url = await getMusicUrl(musicId);

    commit('setSongUrl', url)
  }
}


function getMusicUrl(musicId) {
  return http.get("/song/url", { id: musicId }).then(({ data }) => {
   
    let url = data.data[0].url;
    if(!url){
      alert('暂无版权')
    }else{
      console.log("调用获取歌曲地址接口", url);
      return url;
    }
   

  });
}
export default actions;