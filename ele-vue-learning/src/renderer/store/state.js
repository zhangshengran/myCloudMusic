// export default state = {
//     chooseSong:''
// }


const state = {
    songList:[],//搜索出來的列表
    musicIndex:'',//播放的是列表的第几个,通过songList和musicIndex就能确定当前播放的所有信息
    isPlay:false,
    songUrl:'',
    searchHistory:[],
    // songId:'',
    // songName:'',
    // artistsName:'',
    // songImg:'',
 
    // songUrl:"http://m10.music.126.net/20190622170629/f2d93a6628505ac733c64d50abc48ccc/ymusic/5259/0f58/025a/e3180777498250ab35e8508f7963a893.mp3",
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