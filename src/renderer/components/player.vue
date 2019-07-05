<template>
  <div class="play">
    <div class="left">
      <div>
        <i class="iconfont test iconshangyiqu" style="font-size:20px" @click="this.getPreMusic"></i>
      </div>
      <div>
        <i class="iconfont " :class="{iconplay1:this.isPlay,iconzanting:!this.isPlay}" style="font-size:30px" @click="playMusic"></i>
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
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import myAudio from './myAudio'
import http from "../api";
export default {
  components:{myAudio},
  data() {
    return {
      // isPlay:false
    };
  },methods: {
 
  },
  computed: {
    ...mapState(["songList", "musicIndex",'songUrl','isPlay'])
  },
  mounted() {
  },
  watch: {
    musicIndex(musicIndex) {
    
      let musicId = this.songList[this.musicIndex].id;
      this.getMusicURL(musicId);
    }
  },
  methods: {
    ...mapMutations(['toggleIsPlay']),
    ...mapActions(['getMusicURL','getNextMusic','getPreMusic']),
    playMusic(){
      //  this.isPlay = !this.isPlay;
       this.toggleIsPlay();
     
    },
  
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
 

