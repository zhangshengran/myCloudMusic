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
    setSongUrl(state,SongUrl) {
        state.songUrl = SongUrl;
    },
    getLyc(state,Lyc){
        state.songLyr = Lyc
    },
    getCommit(state,songCommit){
        state.songCommit=songCommit;
    },
    nextMusicIndex(state, preNext) {
        if (preNext == 'next') {
            if (state.musicIndex < 29) {
                state.musicIndex++;
            }
        } else {
            if (state.musicIndex > 0) {
                state.musicIndex--;
            }
        }

    },
    addSearchHistory(state, item) {
        var hasitem = state.searchHistory.includes(item);
        if (!hasitem) {
            state.searchHistory.push(item);
            state.searchHistory.splice(9)
        }

    },
    removeSearchHistory(state, index) {
        state.searchHistory.splice(index, 1)
    }
}

export default mutations;