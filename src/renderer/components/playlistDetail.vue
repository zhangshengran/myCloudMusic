<template>
  <div class="list">
    <header>
      <div class="left">
        <img
          style="width:200px"
          src="http://p1.music.126.net/MyD3C3Mkm07YMjshex6xgA==/109951164165022384.jpg"
          alt
        />
      </div>
      <div class="right">
        <div style="font-size: 1.3rem;">怀旧青春之华语乐坛组合&乐队</div>
        <div class="info">
          <img
            style="width: 30px;    border-radius: 50%;"
            src="http://p1.music.126.net/NMf_ToFuRaCZsdfGAWpfBA==/109951163238739860.jpg"
            alt
          />
          <span style="    font-size: 0.9rem;">昵称</span>
        </div>
        <div style="    font-size: 0.9rem;margin: 25px 0;">
          <el-button>播放全部</el-button>
          <el-button>收藏</el-button>
          <el-button>分享</el-button>
          <el-button>下载全部</el-button>
        </div>
        <div style="margin-top:8px;">标签：华语、流行</div>
        <div style="margin-top:8px;">
          简介：有些歌，一响起就是青春。
          有些人，印刻着青春回忆。
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.list {
  header {
    margin-top: 30px;
    display: flex;
    padding: 0 30px;
    .left {
      margin-right: 30px;
    }
    .right {
      .info {
        display: flex;
        align-items: center;
        margin: 10px 0;
      }
    }
  }
}
</style>
 

