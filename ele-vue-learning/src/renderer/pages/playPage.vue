<template>
  <div class="container ">
    <div class="main">
      <div class="top">
        <div class="img">
          <img src="../assets/static/center.jpg" alt style="border-radius:50%;" />
          <div class="btn">
            <el-button>默认按钮</el-button>
            <el-button>默认按钮</el-button>
            <el-button>默认按钮</el-button>
            <el-button>默认按钮</el-button>
          </div>
        </div>
        <div class="lyc">
          <lyc></lyc>
        </div>
      </div>
        <comment></comment>
      <!-- <div class="comlike">
        <div class="comment">
        
        </div>

        <div class="right">
          <div class="gedan">
            <header>
              获取相似音乐
              <hr />
            </header>
            <div class="gedanitem">
              <img src="" alt="">
              <div class="item-right" >

              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import comment from "../components/comment";

import lyc from "../components/musicLyc";
export default {
  components: { lyc, comment },
  computed: {
    ...mapGetters(["musicId"]),
    ...mapState(["playTime"])
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.container {
  .main {
    margin: 30px 100px;
  }
  width: 100%;
  margin: 0 auto;
  // overflow: hidden;
  .top {
    display: flex;
    align-items: center;
    .btn {
      text-align: center;
      button {
        padding: 3px 5px;
      }
    }
    img{
      margin-bottom: 30px;
    }
    .img {
          margin: 50px 85px 30px 0;
      // margin-bottom: 30px;
    }
  }
  .comlike {
    display: flex;
    .right {
      width: 310px;
      header {
        font-size: 15px;
      }
    }
  }
}
</style>
 

