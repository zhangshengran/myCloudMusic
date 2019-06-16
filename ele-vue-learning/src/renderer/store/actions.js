import http from '../api/index'
var actions = {
    getSongList({ commit, state },searchSongName){
        http.get('/search',{keywords:searchSongName}).then(({data})=>{
            // state.songList = data.result.songs;
           commit('setSonglist',data.result.songs)
            // console.log('设置songList',state.songList)
        })
    }
}

export default actions;