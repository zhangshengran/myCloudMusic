// export default state = {
//     chooseSong:''
// }


const state = {
    chooseSong:'',
    songList:[2,3,4],
    userInfo:{
        userName:'',
        userId:'',
        nickName:'',
        password:'',
        avatarUrl:'',
        collectSongList:[],
        collectSong:[],
        collectSinger:[],
        collectAlbum:[]
    },
    songs:{
        singer: {},
        playing: false,
        fullScreen: false,
        playList: [],
        sequenceList: [],
        playHistoryList: [],
        mode: 'sequence',
        currentIndex: -1,
        audio:{}
    },
    loading: true
}
export default state