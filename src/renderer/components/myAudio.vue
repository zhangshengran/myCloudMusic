<template>
  <div>
    <audio autoplay="true" ref="audio" controls :src="this.songUrl" style="width:710px;"></audio>
    <!-- <audio autoplay="true" ref="audio" controls src="E:\音乐\My_Love(单曲)-Westlife.mp3" style="width:710px;"></audio> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Vue from "vue";
export default {
  props: ["songUrl", "isPlay"],
  mounted() {
    setInterval(() => {
      var currentTime = this.$refs.audio.currentTime;
      Vue.currentPlayTime = currentTime;
    }, 500);
  },
  methods: {},
  // playTime
  watch: {
    songUrl(val) {
      // this.$refs.audio.play();
    },
    isPlay(val) {
      if (val == true) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
</style>
 

