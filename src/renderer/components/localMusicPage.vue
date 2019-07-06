<template>
  <div>
    <button @click="seLoDir">请选择本地文件夹</button>
    <div @click="seLoDirMic(index)" v-for="(item, index) in localSongList" :key="index">{{item}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
const { ipcRenderer: ipc } = require("electron");
export default {
  data() {
    return {
        localSongList:[],
      ...mapState(["localSongList", "localDirPath",'musicIndex'])
    };
  },
  mounted() {},
  watch: {
    
  },
    //   state.playType = 1;
  methods: {
    ...mapMutations(["setLocalSongList", "setlocalDirPath",'setMusicIndex']),
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
        this.setMusicIndex(index,1);
   
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
</style>
 

