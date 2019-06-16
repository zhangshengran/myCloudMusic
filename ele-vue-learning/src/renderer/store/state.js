// export default state = {
//     chooseSong:''
// }


const state = {
    songList:[],//搜索出來的列表
    musicIndex:'',//播放的是列表的第几個
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