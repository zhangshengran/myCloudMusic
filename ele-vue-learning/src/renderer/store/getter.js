export default {
    SongDetail(state){
        console.log(state.songList[state.musicIndex])
        return state.songList[state.musicIndex];
    },
    musicId(state){
        if(state.musicIndex){
            return state.songList[state.musicIndex].id;
        }
       
    }
};