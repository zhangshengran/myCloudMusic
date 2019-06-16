const mutations = {
    setChooseSong(state,chooseSong){
        state.chooseSong = chooseSong;
    },
    setSonglist(state,songList){
        state.songList = songList;
    },
    setMusicIndex(state,musicIndex){
        state.musicIndex = musicIndex;
    }
}

export default mutations;