import http from '../api/index'
var actions = {
  getSongList({ commit, state }, searchSongName) {
    http.get('/search', { keywords: searchSongName }).then(({ data }) => {
      // state.songList = data.result.songs;
      commit('setSonglist', data.result.songs);

      // console.log('设置songList',state.songList)
    })
  },
  getMusicURL({ commit, state }, musicId) {
    http.get("/song/url", { id: musicId }).then(({ data }) => {
      console.log(data);
      this.url = data.data[0].url;
      console.log("拿到的url为", this.url);
      commit('setSongUrl', this.url)
    });
  },
  getNextMusic({ commit, state }) {
    commit('nextMusicIndex','next');
   
    let musicId = state.songList[state.musicIndex].id
    http.get("/song/url", { id: musicId }).then(({ data }) => {
      console.log('iddddddddddd',state.musicIndex);
      this.url = data.data[0].url;
      console.log("拿到的url为", this.url);
      commit('setSongUrl', this.url)
    });
  },

  getPreMusic({ commit, state }){
    commit('nextMusicIndex','pre');
    let musicId = state.songList[state.musicIndex].id
    http.get("/song/url", { id: musicId }).then(({ data }) => {
      console.log('iddddddddddd',state.musicIndex);
      this.url = data.data[0].url;
      console.log("拿到的url为", this.url);
      commit('setSongUrl', this.url)
    });
  }
}

export default actions;