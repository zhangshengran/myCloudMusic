<template>
  <div>
    <div class="login">
      <div class="main">
        <header>
          <i class="iconfont iconguanbi" @click="close"></i>

          <img src="../assets/static/login_03.jpg" alt />
        </header>
        <section class="sec1">
          <el-input v-model="phone" placeholder="请输入手机号"></el-input>
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          <div class="gologin" @click="gologin">登录</div>
        </section>
      </div>
    </div>
   
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { login } from "../api/api";
import { constants } from "fs";
export default {
  data() {
    return {
      phone: "",
      password: "",
      isLogin: false,
      userInfoImg: "",
      userInfo: ""
    };
  },
  mounted() {
    var userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      this.isLogin = true;
      this.userInfo = userData.profile.nickname;
      this.userInfoImg = userData.profile.avatarUrl;
    }
  },
  methods: {
    gologin() {
      console.log(123);
      login(this.phone, this.password).then(({ data }) => {
        if (data.code == 200) {
          localStorage.setItem("userData", JSON.stringify(data));
          alert("登录成功");
          this.$emit("LoginControl", false, true);//俩个参数，第一个为告诉父组件是否显示登录框，第二个是告诉父组件是否登录成功
        } else if (data.code == 502) {
          alert("密码错误");
        } else {
          alert("登录失败");
        }
      });
    },
    close() {
      this.$emit("LoginControl", false, false);
      console.log("子组件已发送");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.login {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    position: relative;
    .iconguanbi {
      color: gray;
      position: absolute;
      top: 7px;
      right: 10px;
    }
    .iconguanbi:hover {
      color: $red;
    }
    width: 340px;
    height: 400px;
    background: #fafafa;
    .sec1 {
      box-sizing: border-box;
      margin: 0 50px;
    }
    .gologin {
      padding: 8px;
      text-align: center;
      background: #ea4848;
      margin-top: 15px;
    }
    .gologin:hover {
      background: $red;
      cursor: pointer;
    }
  }
}
</style>
 

