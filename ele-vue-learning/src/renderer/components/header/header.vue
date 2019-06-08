<template>
  <div class="header" style="-webkit-app-region: drag">
    <div class="header-left">
      <img src alt class="logo">
      <p class="header-left-p">网易云音乐</p>
    </div>
    <div class="header-middle">
      <div class="left no-drag">
        <i class="iconfont iconzuojiantou"></i>
        <i class="iconfont iconarrow-right"></i>
      </div>
      <div class="right no-drag">
        <input type="text" v-model="input" placeholder="搜索音乐，视频，歌词，电台" @click="getHot">
        <!-- <el-input v-model="input" placeholder="搜索音乐，视频，歌词，电台" @click="isShowModel=true"></el-input> -->
        <i class="iconfont iconsearch" @click="handleChange"></i>
        <headerSearch v-if="isShowModel" :songList="songList" :hotList="hotList"></headerSearch>
      </div>
    </div>
    <div class="header-right">
      <div class="login no-drag">
        <i class="iconfont iconwo"></i>
        <p>未登录</p>
      </div>
      <div class="vip margin-left no-drag">开通VIP</div>
      <i class="iconfont iconhuanfu margin-left no-drag"></i>
      <i class="iconfont icontubiao209 margin-left no-drag"></i>

      <i class="iconfont iconshezhi margin-left no-drag"></i>
    </div>
    <div class="header-control">
      <i class="iconfont iconzuixiaohua no-drag" @click="min"></i>
      <i class="iconfont iconzuidahua no-drag" @click="max"></i>
      <i class="iconfont iconguanbi no-drag" @click="close"></i>
    </div>
  </div>
</template>

<script>
const { ipcRenderer: ipc } = require("electron");
import headerSearch from "../headerSearch";
import http from "../../api";
import { constants } from "fs";
import debounce from "../../utils/utils";
export default {
  components: {
    headerSearch
  },

  data() {
    return {
      input: "",
      isShowModel: false, //控制搜索模态框是否显示
      hotList: [],
      songList: []
    };
  },
  watch: {
    input: function(val) {
      debounce(this.handleChange, 500)(val);
    }
  },
  methods: {
    getHot() {
      this.isShowModel = !this.isShowModel;
      http.get("/search/hot").then(({ data }) => {
        console.log(data);
        this.hotList = data.result.hots;
      });
    },
    handleChange(val) {
      if (val) {
        console.log("123", val);
        http.get("/search", { keywords: val }).then(({ data }) => {
          this.songList = data.result.songs;
        })
      }else{
         this.songList = [];
      }
    },
    closeModel() {
      isShowModel = false;
    },
    min() {
      ipc.send("min");
    },
    max() {
      ipc.send("max");
    },
    close() {
      ipc.send("close");
    }
  }
};
</script>

<style <style lang='scss'>
@import "../../assets/common/common.scss";
@import "../../assets/common/icon.css";
.no-drag {
  //用来控制禁止拖放的地方
  -webkit-app-region: no-drag;
}
$red: #c62f2f;
.header {
  color: #eec1c1;
  position: relative;
  height: 60px;
  background-color: $red;
  display: flex;
  .header-left {
    margin-left: 15px;
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
      font-size: 20px;
      color: white;
      font-weight: bold;

      text-align: center;
    }
    .logo {
      display: block;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: url("../../assets/static/logo.jpg");
      background-size: 22px 22px;
      // margin-left: 15px;
    }
  }
  .header-middle {
    margin-left: 80px;
    display: flex;
    align-items: center;
    .iconzuojiantou,
    .iconarrow-right {
      padding: 3px;
      background-color: $red;
      border: 1px solid #a82828;
      border-radius: 3px;
      color: #d15858;
    }
    input::-webkit-input-placeholder {
      color: #c77373;
      padding-left: 30px;
      line-height: 27px;
    }
    input:focus {
      outline: 0;
    }
    input {
      border: 0;
      border-radius: 15px;
      width: 273px;
      height: 27px;
      color: white;
      background-color: #a82828;
    }

    .right {
      display: flex;
      align-items: center;
      position: relative;
      .iconsearch {
        position: absolute;
        right: 10px;
        color: #c77373;
        line-height: 27px;
      }
    }
  }
  .header-right {
    margin-left: 40px;
    .margin-left {
      margin-left: 20px;
    }
    // color: white;
    display: flex;
    align-items: center;
    .login {
      display: flex;
      .iconwo::before {
        // color: white;
        padding: 3px;
        border-radius: 10px;
      }
      p {
        line-height: 27px;
        // color: white;
      }
    }
  }
  .header-control {
    height: 60px;
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    i {
      padding: 5px;
    }

    i:hover {
      // background-color: aqua;

      color: white;
    }
  }
}
</style>
 

