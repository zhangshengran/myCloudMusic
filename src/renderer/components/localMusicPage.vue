<template>
  <div>
    <button @click="seLoDir">请选择本地文件夹</button>
    <div class="table">
      <table border="1">
        <tr>
          <th style="min-width:30px"></th>
          <th style="min-width:150px">音乐标题</th>
        </tr>
        <tr
          v-for="(item, index) in localSongList"
          :key="index"
          :index="index"
          class="songlist"
          ref="songlist"
        >
          <td>{{index}}</td>

          <td
            style="color:#0c73c2"
            :index="index"
            @dblclick="seLoDirMic(index)"
          >{{item}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
const { ipcRenderer: ipc } = require("electron");
export default {
  data() {
    return {
      localSongList: [],
      ...mapState(["localSongList", "localDirPath"])
    };
  },
  mounted() {},
  watch: {
   
  },
  //   state.playType = 1;
  methods: {
    ...mapMutations(["setLocalSongList", "setlocalDirPath", "setMusicIndex",]),
    seLoDir() {
      ipc.send("open-directory-dialog", "openDirectory");
      ipc.on("select-dir-reply", (event, { dirPath, filesList }) => {
        this.setlocalDirPath(dirPath);
        this.localSongList = filesList;
        // console.log(filesList)
        this.setLocalSongList(filesList);
      });
    },
    seLoDirMic(index) {
       this.setMusicIndex({musicIndex:index,type:1});//type是让player组件识别，应该获取本地音乐的资源路径还是网络url
      this.setChooseItemStyle(index); //设置表格选择播放的背景变色
    },

    setChooseItemStyle(index) {
      var songList = this.$refs.songlist;
      
      songList.forEach(value => {
        if (value.getAttribute("index") == index) {
          value.style.background = "#e6e7ea";
        } else {
          value.style.background = "";
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
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
.songlist:hover {
  background: $gray;
  cursor: pointer;
}
</style>
 

