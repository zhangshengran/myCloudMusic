<template>
  <div class="play">
    <div class="left">
      <div>
        <i class="iconfont test iconshangyiqu" style="font-size:20px"></i>
      </div>
      <div>
        <i class="iconfont iconplay1" style="font-size:30px" @click="playMusic"></i>
      </div>
      <div>
        <i class="iconfont iconxiayiqu" style="font-size:20px"></i>
      </div>
    </div>
    <div class="middle">
      <!-- <audio controls>
        <source :src="this.url" type="audio/mpeg">
        <source
          src="http://m10.music.126.net/20190617000748/41365e6c66a6db1e1931df6c6411fa88/ymusic/035e/030e/075b/44dac57aa74d83feae0201e1b7b7243e.mp3"
          type="audio/mpeg"
        >
      </audio> -->
      <vueAudio 
      :isPlay='this.isPlay'
      :theUrl='this.songUrl'
      ></vueAudio>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import vueAudio from './vueAudio'
import http from "../api";
export default {
  components:{vueAudio},
  data() {
    return {
      url: ""
    };
  },
  computed: {
    ...mapState(["songList", "musicIndex",'isPlay','songUrl'])
  },
  mounted() {
    console.log("player", this.songList);
  },
  watch: {
    musicIndex(musicIndex) {
      console.log("拿到的index为", musicIndex);
      console.log(this.songList[this.musicIndex].id);
      this.getMusicURL(this.songList[this.musicIndex].id);
    }
  },
  methods: {
    ...mapMutations(['alterPlayState']),
    ...mapActions(['getMusicURL']),
    playMusic(){
      this.alterPlayState();
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
 

