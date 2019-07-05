<template>
  <div class="fongSong">
    <header class="nav">
      <router-link to="/selectPage/foundsong/gexingtuijian">个性推荐</router-link>
      <router-link to="路由地址">歌单</router-link>
      <router-link to="路由地址">主播电台</router-link>
      <router-link to="路由地址">排行榜</router-link>
      <router-link to="路由地址">歌手</router-link>
      <router-link to="路由地址">最新音乐</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  computed: {},
  mounted() {
  
  }
};
</script>
<style <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.fongSong {
  padding: 0 30px;
  width: 960px;
  margin: 0 auto;
  .nav {
    text-align: center;
    margin: 10px 0;
    font-size: 0.9rem;
    a {
      padding: 10px 15px;
      color: black;
      font-weight: bolder;

      text-decoration: none;
    }
    a:hover {
      color: $red;
    }
  }
}
</style>
 

