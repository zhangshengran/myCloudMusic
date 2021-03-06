import http from './index'
//获取音乐url
export function getMusicUrl(musicId) {
  return http.get("/song/url", { id: musicId }).then(({ data }) => {
    let url = data.data[0].url;
    if (!url) {
      alert('暂无版权')
    } else {
      console.log("调用获取歌曲地址接口", url);
      return url;
    }


  });
}
//获取歌词
export function getLyr(id) {
  return http.get('/lyric', { id });
}
//歌曲评论
export function commentMusic(id, limit) {
  return http.get('/comment/music', { id, limit });

}
//相似歌单
export function simiPlaylist(id) {

  return http.get(' /simi/playlist', { id });

}

//相似音乐

export function simiSong(id) {
  return http.get('/simi/song', { id });

}
//喜欢音乐
export function like(id) {

  return http.get('/like', { id });

}
//收藏音乐     t : 类型,1:收藏,2:取消收藏 id : 歌单 id
export function subscribe(t, id) {

  return http.get('/playlist/subscribe', { t, id });

}

//FM

export function fm() {

  return http.get('personal_fm');

}

export function banner() {
  return http.get('banner?type=0');
}


export function personalized() {
  return http.get('personalized');
}
export function playlistDetail(listId){
  return http.get('playlist/detail',{id:listId});

}
  // id为音乐ID，cid为评论ID，t : 是否点赞 ,1 为点赞 ,0 为取消点赞，tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
export function commentZan(id,cid,t=1,type=0){//默认点赞，给音乐单曲点赞
  var params = {id:id,cid:cid,t:t,type:type};
  return http.get('comment/like',params);

}

export function login(phone,password){
  return http.get('/login/cellphone',{phone,password});

}
