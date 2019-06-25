<template>
<div>
          <audio autoplay='true' ref="audio"  controls :src="this.songUrl" style="width:710px;"></audio>

</div>
</template>

<script>
export default {
    props:['songUrl','isPlay'],
    mounted() {
        setInterval(()=>{
          console.log( this.$refs.audio.currentTime) 
        },1000)
    },
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
 

