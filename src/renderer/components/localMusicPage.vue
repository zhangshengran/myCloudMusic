<template>
  <div>
    <button @click="seLoDir">请选择本地文件夹</button>
    <div @click="seLoDirMic(item)" v-for="(item, index) in localSongList" :key="index">{{item}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
const { ipcRenderer: ipc } = require("electron");
export default {
  data() {
    return {
      ...mapState(["localSongList", "localDirPath"])
    };
  },
  mounted() {},
  watch: {
      localSongList(val){
          console.log('数据更新')
      }
  },
  methods: {
    ...mapMutations(["setLocalSongList", "setSongUrl", "setlocalDirPath"]),
    seLoDir() {
      ipc.send("open-directory-dialog", "openDirectory");
      ipc.on("select-dir-reply", (event, { dirPath, filesList }) => {
        this.setlocalDirPath(dirPath);
        // console.log(filesList)
        this.setLocalSongList(filesList);
      });
    },
    seLoDirMic(item) {
        
      this.setSongUrl(item);
      console.log(this.localDirPath + "\\" + item);
      //  ipc.send("open-directory-dialog", "openDirectory");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
</style>
 

