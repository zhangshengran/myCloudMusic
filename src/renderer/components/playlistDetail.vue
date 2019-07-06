<template>
  <div class="list">
    <header v-if="item.coverImgUrl">
      <div class="left">
        <img style="width:170px" :src="item.coverImgUrl" alt />
      </div>
      <div class="right">
        <div style="font-size: 1.3rem;">{{listTitle}}</div>
        <div class="info">
          <img style="width: 30px;    border-radius: 50%;" :src="item.creator.avatarUrl" alt />
          <span style="    font-size: 0.9rem;">{{item.creator.nickname}}</span>
        </div>
        <div style="    font-size: 0.9rem;margin: 25px 0;">
          <el-button>播放全部</el-button>
          <el-button>收藏</el-button>
          <el-button>分享</el-button>
          <el-button>下载全部</el-button>
        </div>
        <div style="margin-top:8px;">
          标签：
          <span
            style="margin-right: 5px;"
            v-for="(item, index) in item.tags"
            :key="index"
          >{{item}}</span>
        </div>
        <div style="margin-top:8px;">{{item.description}}</div>
      </div>
    </header>
    <section>
      <tableList></tableList>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import tableList from "./base/tableList";
import { playlistDetail } from "../api/api";
export default {
  components: { tableList },
  data() {
    return {
      item: {},
      listTitle: ""
    };
  },
  mounted() {
    var listId = this.$route.query.item.id;
    this.listTitle = this.$route.query.item.name;
    playlistDetail(listId).then(({ data }) => {
      this.item = data.playlist;
   
    });
  },
  activated() {//如果点击了新的歌单，则刷新组件，如果是点击了返回到此组件，则listid为空，则不刷新组件，显示缓存的数据
    var listId = this.$route.query.item.id;
    this.listTitle = this.$route.query.item.name;
    if (listId) {
      playlistDetail(listId).then(({ data }) => {
        this.item = data.playlist;
        console.log("用户点击了新的歌单，从新获取数据");
      });
    }else{
      console.log('简单返回，不刷新数据')
    }
  },

  beforeUpdate() {}
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.list {
  header {
    margin: 30px 0;
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
 

