<template>
  <div class="header" style="-webkit-app-region: drag">
    <login v-show="showLoginControl" @LoginControl="LoginControl" v-if="!hasLogin"></login>

    <div class="header-left">
      <img src alt class="logo" />

      <p class="header-left-p no-drag" @click="goSelectPage()">网易云音乐</p>
    </div>

    <div class="header-middle">
      <div class="left no-drag">
        <i class="iconfont iconzuojiantou" style="color:white" @click="goPrePage"></i>

        <i class="iconfont iconarrow-right" style="color:white" @click="goNextPage"></i>
      </div>

      <!-- @blur="isShowModel=false" -->

      <div class="right no-drag">
        <!-- <el-input v-model="input" placeholder="搜索音乐，视频，歌词，电台"   @click="isShowModel=true"></el-input> -->

        <input
          type="text"
          @keyup.enter="searchClick"
          v-model="input"
          placeholder="搜索音乐，视频，歌词，电台"
          @click="getHot"
          @blur="isShowModel=false"
          @focus="isShowModel=true"
        />

        <i class="iconfont iconsearch" @click="searchClick"></i>

        <headerSearch v-show="isShowModel" :searchSong="this.input" @chooseMusic="getSongName"></headerSearch>
      </div>
    </div>
    <div class="header-right">
      <hasLogin v-show="hasLoginShow" @isShowHasLogin = 'hasLoginShow = false;hasLogin = false'></hasLogin>
      <div class="login no-drag">
        <img
          v-if="userInfoImg"
          :src="userInfoImg"
          alt
          style="width: 24px; height: 24px;border-radius: 50%;"
        />
        <img
          v-else
          src="../../assets/static/user.png"
          alt
          style="width: 24px; height: 24px;border-radius: 50%;"
        />

        <p @click="login" >{{userInfo?userInfo:'未登录'}}</p>
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
import { mapState, mapMutations, mapActions } from "vuex";
import login from "../../pages/login";
import hasLogin from "../../pages/hasLogin";
export default {
  components: {
    headerSearch,
    login,
    hasLogin
  },
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      "chooseSong"
    ])
  },
  mounted() {
    //一上来先判断用户是否登录，若已经登录过，则直接从本地存储拉取用户信息
    var userData = localStorage.getItem("userData");
    if (userData) {
       this.hasLogin = true;
      let userData = JSON.parse(localStorage.getItem("userData"));
      this.userInfo = userData.profile.nickname;
      this.userInfoImg = userData.profile.avatarUrl;
    }
  },
  data() {
    return {
      input: "",
      isShowModel: false, //控制搜索模态框是否显示,
      showLoginControl: false,//控制登录页面是否显示
      userInfoImg: "",
      userInfo: "",
      hasLogin: false, //是否已经登录
      hasLoginShow: false//控制登录信息页面是否显示
    };
  },
  watch: {},
  methods: {
    LoginControl(control, isLoginOK) {
      this.showLoginControl = control;
      console.log("父组件接受", control, isLoginOK);
      if (isLoginOK) {
        this.hasLogin = true;
        let userData = JSON.parse(localStorage.getItem("userData"));
        this.userInfo = userData.profile.nickname;
        this.userInfoImg = userData.profile.avatarUrl;
      }
    },
    login() {
       //如果已经登录则显示信息页，未登录则显示登录页
       console.log(1111)
      if (this.hasLogin) {
         this.hasLoginShow = true;//
         
           console.log(222222)
      } else {
          console.log(3333)
        this.showLoginControl = true;
      }
    },
    goPrePage() {
      // console.log(this.$router.options.routes.length)

      this.$router.go(-1);
    },
    goNextPage() {
      // console.log(this.$router.options.routes.length)
      this.$router.go(1);
      // console.log(this.$router);
    },
    goSelectPage() {
      this.$router.push("/selectPage");
      // this.$router.push('/playPage')
    },
    ...mapActions(["getSongList"]),
    // ...mapMutations(['setChooseSong']),
    searchClick() {
      this.getSongList(this.input);
      this.$router.push("/selectPage/searchmain");
      this.isShowModel = false;
    },
    test(e) {},
    getSongName(e) {
      this.input = e;
      this.isShowModel = false;
      this.getSongList(this.input);
      this.$router.push("/selectPage/searchmain");
    },
    getHot() {
      http.get("/search/hot").then(({ data }) => {
        this.hotList = data.result.hots;
      });
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

.header {
  width: 100%;
  color: #eec1c1;
  position: fixed;
  top: 0;
  height: 50px;
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
      background-size: 22px 22px; // margin-left: 15px;
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
      .iconsearch:hover {
        color: white;
      }
    }
  }
  .header-right {
    position: relative;
    margin-left: 40px;
    .margin-left {
      margin-left: 20px;
    } // color: white;
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
        line-height: 27px; // color: white;
      }
    }
  }
  .header-control {
    height: 52px;
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
  .header-left-p {
    cursor: pointer;
  }
}
</style>
 

