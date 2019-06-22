<template>
  <div class="play">
    <div class="left">
      <div>
        <i class="iconfont test iconshangyiqu" style="font-size:20px" @click="this.getPreMusic"></i>
      </div>
      <div>
        <i class="iconfont iconplay1" style="font-size:30px" @click="playMusic"></i>
      </div>
      <div>
        <i class="iconfont iconxiayiqu" style="font-size:20px" @click="this.getNextMusic"></i>
      </div>
    </div>
    <div class="middle">
      <myAudio 
      :songUrl='this.songUrl'
      :isPlay='this.isPlay'
       ></myAudio>
   
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import myAudio from './myAudio'
import http from "../api";
export default {
  components:{myAudio},
  data() {
    return {
      isPlay:false
    };
  },
  computed: {
    ...mapState(["songList", "musicIndex",'songUrl'])
  },
  mounted() {
    console.log("player", this.songList);
  },
  watch: {
    songUrl(url){
      this.isPlay = true;//url一更新，则自动设置播放
    },
    musicIndex(musicIndex) {
      console.log("拿到的index为", musicIndex);
      console.log(this.songList[this.musicIndex].id);
      let musicId = this.songList[this.musicIndex].id;
      this.getMusicURL(musicId);
    }
  },
  methods: {
    ...mapMutations(['alterPlayState']),
    ...mapActions(['getMusicURL','getNextMusic','getPreMusic']),
    playMusic(){
       this.isPlay = !this.isPlay;
      // this.alterPlayState();
      // this.isPlay = true;
    },
    // getMusicURL(musicIndex) {
    //   http.get("/song/url", { id: musicIndex }).then(({ data }) => {
    //     console.log(data);
    //     this.url = data.data[0].url;
    //     console.log("拿到的url为", this.url);
    //   });
    // }
  }
};
</script>
<style <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.play {
  border-top: 1px solid rgb(185, 184, 184);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: $back;
  display: flex;
  align-items: center;
  .left {
    div {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        line-height: 1;
        background-color: rgb(226, 48, 48);
        color: white;
        border-radius: 50%;
        padding: 5px;
      }
    }

    width: 250px;
    display: flex;
    justify-content: space-around;
  }
  .middle{
    display: flex;
    align-items: center;
  }
}
</style>
 

