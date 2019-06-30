<template>
  <div class="middle-container custom-scrollbar">
    <div class="middle-header">找到{{this.songList.length}}首单曲</div>
    <div class="table">
      <table border="1">
        <tr>
          <th style="min-width:30px"></th>
          <th style="min-width:60px">操作</th>
          <th style="min-width:150px">音乐标题</th>
          <th style="min-width:120px">歌手</th>
          <th style="min-width:150px">专辑</th>
          <th style="min-width:65px">时长</th>
          <!-- <th>热度</th> -->
        </tr>
        <tr
          v-for="(item, index) in songList"
          :key="index"
          :index="index"
          class="songlist"
          ref="songlist"
        >
          <td>{{index}}</td>
          <td class="heartDown">
            <i class="iconfont iconxin"></i>
            <i class="iconfont iconxiazai"></i>
          </td>
          <td
            style="color:#0c73c2"
            :index="index"
            @dblclick="chooseMusic($event,index)"
          >{{item.name}}</td>
          <td>{{item.artists[0].name}}</td>
          <td>{{item.album.name}}</td>
          <td>{{item.duration}}</td>
          <td>
            <!-- {{item.fee}} -->
            <!-- <el-progress :percentage="50" color="gray"></el-progress><-->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { constants } from "fs";

export default {
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    setChooseItemStyle() {
      var songList = this.$refs.songlist;
      // songList[this.musicIndex];
      songList.forEach(value => {
        if (value.getAttribute("index") == this.musicIndex) {
          value.style.background = "#e6e7ea";
        } else {
          value.style.background = "";
        }
      });
    },
    ...mapMutations(["setMusicIndex"]),
    chooseMusic(e, Index) {
      this.setMusicIndex(Index);
      this.setChooseItemStyle();

      //设置表格选择播放的背景变色
    }
  },
  watch: {
    musicIndex() {
      this.setChooseItemStyle();
    }
  },
  computed: {
    ...mapState(["songList", "musicIndex"]) //拿到vuex中的搜索结果列表
  }
};
</script>
 <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.middle-container {
  // min-width: 830px;
  // font-family: 仿宋;
  // font-size: 1.2em;
  .active {
    background: $gray;
  }
  .iconxiazai {
    font-size: 14px;
  }
  .iconxiazai:hover {
    color: $red;
  }
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
  box-shadow: inset 0 0 6px #757474;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px #757474;
}

.songlist:hover {
  background: $gray;
  cursor: pointer;
}
</style>
 

