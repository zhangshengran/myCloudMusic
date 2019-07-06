import Vue from 'vue';

const mutations = {
    toggleIsPlay(state) { state.isPlay = !state.isPlay },
    setChooseSong(state, chooseSong) {
        state.chooseSong = chooseSong;
    },
    setSonglist(state, songList) {
        state.songList = songList;
    },
    setLocalSongList(state, localSongList) {
        localSongList.forEach((element,index) => {
            // Vue.set(state.TestArr,2,3) //正确演示
            // console.log(element,index)
            // Vue.set(state.localSongList, 0, 123)
            Vue.set(state.localSongList, index, element)//正确演示
        });

        state.localSongList = localSongList;
    },
    setMusicIndex(state, musicIndex) {
        state.musicIndex = musicIndex;
    },
    setlocalDirPath(state, localDirPath) {
        state.localDirPath = localDirPath;
    },

    setSongUrl(state, SongUrl) {
        state.songUrl = SongUrl;
    },
    getLyc(state, Lyc) {
        state.songLyr = Lyc
    },
    getCommit(state, songCommit) {
        state.songCommit = songCommit;
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
    },

}

export default mutations;