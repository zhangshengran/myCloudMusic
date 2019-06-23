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
  }
}
// function getSongDetail({ commit, state },musicId){
//   return  http.get("/song/detail", { ids: musicId }).then(({data})=>{
//     let songName = data.songs[0].name;
//     let songImg = data.songs[0].al.picUrl;
//     commit('setSong',{musicId,songName,songImg})
//   })
// }

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