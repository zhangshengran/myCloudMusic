<template>
  <div>
    <div class="hasLogin">
      <i class="iconfont iconguanbi" @click="close"></i>
      <header>
        <img
          v-if="userInfoImg"
          :src="userInfoImg"
          alt
          style="width: 40px; height: 40px;border-radius: 50%;"
        />
        <img
          v-else
          src="../assets/static/user.png"
          alt
          style="width: 40px; height: 40px;border-radius: 50%;"
        />
        <span>{{userInfo}}</span>
      </header>
      <section>
        <div>
          <i class="iconfont iconshezhi1"></i>
          <span>个人信息设置</span>
        </div>
        <div @click="quit">
          <i class="iconfont iconguanji"></i>
          <span>退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      userInfo: "",
      userInfoImg: ""
    };
  },
  methods: {
    close() {
      this.$emit("isShowHasLogin");
      console.log("子组件已发送");
    },
    quit() {
      localStorage.removeItem("userData");
      this.$emit("isShowHasLogin");
      location.reload(false)  
    }
  },
  mounted() {
    var userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      console.log();
      this.userInfo = userData.profile.nickname;
      this.userInfoImg = userData.profile.avatarUrl;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.hasLogin {
  .iconguanbi {
    color: gray;
    position: absolute;
    top: 7px;
    right: 10px;
  }
  .iconguanbi:hover {
    color: $red;
  }
  color: black;
  position: absolute;
  width: 250px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 2px 2px 3px $gray;
  top: 50px;
  left: 45px;
  background-color: #fafafa;
  header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    span {
      margin-left: 10px;
    }
  }
  section div {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  section div:hover {
    background: $gray;

    cursor: pointer;
  }
}
</style>
 

