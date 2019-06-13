<template>
  <div class="play">
    <div class="left">
      <div>
        <i class="iconfont test iconshangyiqu" style="font-size:20px"></i>
      </div>
      <div>
        <i class="iconfont iconplay1" style="font-size:30px"></i>
      </div>
      <div>
        <i class="iconfont iconxiayiqu" style="font-size:20px"></i>
      </div>
    </div>
    <div class="middle">
      <audio>
       
        <source src="horse.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>
 

