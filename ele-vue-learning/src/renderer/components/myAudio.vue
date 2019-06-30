<template>
<div>
          <audio autoplay='true' ref="audio"  controls :src="this.songUrl" style="width:710px;"></audio>

</div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
    props:['songUrl','isPlay'],
    mounted() {
        setInterval(()=>{
        //   console.log( this.$refs.audio.currentTime) 
          var currentTime = this.$refs.audio.currentTime;
          this.setPlayTime(currentTime)
        },500)
    },methods: {
           ...mapMutations(['setPlayTime'])
    },
    // playTime
    watch: {
        songUrl(val){
            // this.$refs.audio.play();
        },
        isPlay(val){
            // console.log( this.$refs.audio)
            if(val==true){
                 this.$refs.audio.pause();
            }else{
                  this.$refs.audio.play();
            }
        }
    },
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

</style>
 

