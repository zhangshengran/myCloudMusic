<template>
  <div class="middle-container custom-scrollbar">
    <div class="middle-header">搜索我，找到1500首单曲</div>
    <div class="table">
      <table border="1">
        <tr>
          <th style="min-width:30px"></th>
          <th style="min-width:60px">操作</th>
          <th style="min-width:150px">音乐标题</th>
          <th style="min-width:120px">歌手</th>
          <th style="min-width:150px">专辑</th>
          <th style="min-width:65px">时长</th>
          <th>热度</th>
        </tr>
        <tr v-for="(item, index) in songList" :key="index" @click="chooseMusic(index)">
          <td>{{index}}</td>
          <td class="heartDown">
            <i class="iconfont iconxin"></i>
            <i class="iconfont iconxiazai"></i>
          </td>
          <td >{{item.name}}</td>
          <td>{{item.artists[0].name}}</td>
          <td>{{item.album.name}}</td>
          <td>{{item.duration}}</td>
          <td>
            {{item.fee}}
            <!-- <el-progress :percentage="50" color="gray"></el-progress><-->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(['setMusicIndex']),
    chooseMusic(musicIndex){
      console.log(musicIndex)
        this.setMusicIndex(musicIndex)
    }
  },
  computed: {
    ...mapState(["songList"]) //拿到vuex中的搜索结果列表
  }
};
</script>
 <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.middle-container {
 
  //    background-color: aqua;
  //   min-width: 800px;

  .middle-header {
    padding: 30px;
  }
  .table {
    table {
      .el-progress__text {
        display: none;
      }
      th {
        line-height: 2.5;
      }
      td,
      th {
        text-align: center;
      }
      width: 100%;
    }
  }
}


.custom-scrollbar {
  height: 70px;
   width: 100%;
  height: calc(100vh - 60px);
  overflow: scroll;
}
/* To style the document scrollbar, remove `.custom-scrollbar` */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
 

