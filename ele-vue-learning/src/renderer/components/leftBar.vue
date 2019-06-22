<template>
  <div class="recommend">
    <div class="reco item">
      <p>推荐</p>
      <div></div>
      <div class="line">
        <div class="line-flex" @click="goFoundSong">
          <i class="iconfont iconyinyue"></i>
          <div class="mar-left">发现音乐</div>
        </div>
      </div>

      <div class="line">
        <div class="line-flex" @click="goFM">
          <i class="iconfont iconxinhao"></i>
          <div class="mar-left">私人FM</div>
        </div>
      </div>
    </div>

    <div class="myMusic item">
      <p>我的音乐</p>

      <div class="line">
        <div class="line-flex">
          <i class="iconfont iconyinyue"></i>
          <div class="mar-left">本地音乐</div>
        </div>
      </div>
      <!-- <div>下载管理</div> -->
    </div>
    <div class="myMusicList item">
      <p>创建的歌单</p>
      <div class="line-flex">
        <i class="iconfont iconheart"></i>
        <div class="mar-left">我喜欢的音乐</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goFM() {
      console.log("fm");
      this.$router.push("/fm");
    },
    goFoundSong() {
      this.$router.push("/foundsong");
    }
  }
};
</script>
<style <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.recommend {
  min-width: 250px;
  background-color: $back;
  height: calc(100vh - 60px);
  p {
    line-height: 40px;
    color: #7d7d7d;
  }
  .item {
    line-height: 40px;
    color: #5c5c5c;
    
  }
  .line:hover {
    background-color: $gray;
    cursor: pointer;
  }
  .line-flex {
    margin-left: 15px;
    display: flex;
  }

  .mar-left {
    margin-left: 10px;
  }
}
</style>
 

