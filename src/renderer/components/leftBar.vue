<template>
  <div class="recommend">
    <div class="reco item">
      <p style="margin-left:5px">推荐</p>
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
      <p style="margin-left:5px">我的音乐</p>

      <div class="line">
        <div class="line-flex">
          <i class="iconfont iconyinyue"></i>
          <div class="mar-left">本地音乐</div>
        </div>
      </div>
      <!-- <div>下载管理</div> -->
    </div>
    <div class="myMusicList item">
      <p style="margin-left:5px">创建的歌单</p>

      <div class="line">
        <div class="line-flex">
          <i class="iconfont iconheart"></i>
          <div class="mar-left">我喜欢的音乐</div>
        </div>
      </div>
    </div>
    <div class="detailMusic" v-if="this.SongDetail" @click="goPlayPage">
      <div class="left">
        <!-- <i class="iconfont iconwebicon311"></i> -->

        <img src="../assets/static/hotsong.jpg" alt>
      </div>
      <div class="right">
        <div
          class="-webkit-line-clamp:;white-space:nowrap;text-overflow:ellipsis;"
        >{{this.SongDetail.name}}</div>
        <div>{{this.SongDetail.artists[0].name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["SongDetail"])
  },
  methods: {
    goPlayPage(){
           this.$router.push('/playPage')


    },
    goFM() {
      this.$router.push("/selectPage/fm");
    },
    goFoundSong() {
      this.$router.push("/selectPage/foundsong");
    }
  }
};
</script>
<style <style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.recommend {
  position: absolute;
  // top: 0;
 
  min-width: 250px;
  background-color: $back;
  height: calc(100vh - 100px);
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
  .detailMusic:hover {
    cursor: pointer;
    background: #cac9c9;
  }
  .detailMusic {
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0px;
    background: #f3f1f1;
    box-sizing: border-box;
    padding: 5px;
    .left {
      width: 50px;

      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .right {
      width: 150px;
      margin-left: 10px;
      div {
        padding: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    // height: 100px;
    // background: red;
  }
}
</style>
 

