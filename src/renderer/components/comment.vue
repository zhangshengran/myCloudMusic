<template>
  <div class="comment">
    <header>听友评论</header>
    <section>
      <div style="padding:5px 0">精彩评论</div>
      <hr style="color:#f0f0f0" />
      <div
        class="containerItem"
        v-for="(item, index) in hotComments"
        :key="index"
        style="margin: 20px 0;"
      >
        <div class="commentItem">
          <div class="left">
            <img :src="item.user.avatarUrl" alt />
          </div>
          <div class="right" style="flex-grow: 1;">
            <div class="top">
              <span style="color:#0c73c2">{{item.user.nickname}}:</span>
              <span style="padding-left:7px;">{{item.content}}</span>
            </div>
            <div class="bottom">
              <div class="left-time">{{item.time}}</div>
              <div class="right">
                <span style="margin-right:8px;">
                  <i class="iconfont iconz-like"></i>
                  <span class="like">({{item.likedCount}})</span>
                </span>
                <span style="margin-right:8px;">分享</span>
                <span>回复</span>
              </div>
            </div>
          </div>
        </div>
        <hr style="color:#f0f0f0" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { commentMusic } from "../api/api";
export default {
  computed: {
    ...mapGetters(["SongDetail"])
  },
  data() {
    return {
      hotComments: []
    };
  },
  mounted() {
    if (this.SongDetail) {
      commentMusic(this.SongDetail.id).then(({ data }) => {
        this.hotComments = data.hotComments;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.comment {
  width: 500px;
  header {
    font-size: 15px;
    padding: 10px 0;
  }
  .commentItem {
    display: flex;
    .left {
      padding: 10px;
      img {
        width: 35px;
        border-radius: 50%;
      }
    }
    .right {
      .bottom {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        color: $grayBtn;
      }
    }
  }
}
</style>
 

