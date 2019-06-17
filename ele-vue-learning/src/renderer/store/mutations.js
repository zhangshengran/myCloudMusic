const mutations = {
    setChooseSong(state,chooseSong){
        state.chooseSong = chooseSong;
    },
    setSonglist(state,songList){
        state.songList = songList;
    },
    setMusicIndex(state,musicIndex){
        state.musicIndex = musicIndex;
    },
    alterPlayState(state){
        state.isPlay = !state.isPlay;
    },
    setSongUrl(state,SongUrl){
        state.songUrl=SongUrl
    }
}

export default mutations;