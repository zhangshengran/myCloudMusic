import http from '../api/index'
var actions = {
    getSongList({ commit, state },searchSongName){
        http.get('/search',{keywords:searchSongName}).then(({data})=>{
            // state.songList = data.result.songs;
           commit('setSonglist',data.result.songs)
            // console.log('设置songList',state.songList)
        })
    },
    getMusicURL({ commit, state },musicIndex) {
        http.get("/song/url", { id: musicIndex }).then(({ data }) => {
          console.log(data);
          this.url = data.data[0].url;
          console.log("拿到的url为", this.url);
          commit('setSongUrl',this.url)
        });
      }
}

export default actions;