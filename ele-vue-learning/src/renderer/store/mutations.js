const mutations = {
    setChooseSong(state, chooseSong) {
        state.chooseSong = chooseSong;
    },
    setSonglist(state, songList) {
        state.songList = songList;
    },
    setMusicIndex(state, musicIndex) {
        state.musicIndex = musicIndex;
    },
    alterPlayState(state) {
        state.isPlay = !state.isPlay;
    },
    setSongUrl(state, SongUrl) {
        state.songUrl = SongUrl
    },
    nextMusicIndex(state,preNext) {
        if(preNext =='next'){
            if (state.musicIndex < 29) {
                state.musicIndex++;
            }
        }else{
            if (state.musicIndex >0) {
                state.musicIndex--;
            }
        }
       
    }
}

export default mutations;