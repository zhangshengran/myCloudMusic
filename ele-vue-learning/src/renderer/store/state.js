// export default state = {
//     chooseSong:''
// }


const state = {
    songList:[],//搜索出來的列表
    musicIndex:'',//播放的是列表的第几個
    isPlay:false,
    songUrl:'http://m10.music.126.net/20190618002542/3691d1261be3549b46fd90e68277178e/ymusic/6946/6458/714f/fd281f506ef177ed2ba00a207a14e2cb.mp3',
    // userInfo:{
    //     userName:'',
    //     userId:'',
    //     nickName:'',
    //     password:'',
    //     avatarUrl:'',
    //     collectSongList:[],
    //     collectSong:[],
    //     collectSinger:[],
    //     collectAlbum:[]
    // },
    // songs:{
    //     singer: {},
    //     playing: false,
    //     fullScreen: false,
    //     playList: [],
    //     sequenceList: [],
    //     playHistoryList: [],
    //     mode: 'sequence',
    //     currentIndex: -1,
    //     audio:{}
    // },
    loading: true
}
export default state