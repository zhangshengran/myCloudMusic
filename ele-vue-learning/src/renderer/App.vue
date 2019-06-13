<template>
  <div id="app">
    <Header></Header>
    <div class="middle">
      <recommend class="recommend"></recommend>
      <searchMain class="searchMain"></searchMain>
          <!-- <router-view></router-view> -->

    </div>
    <player></player>
  </div>
</template>

<script>
import Header from "./components/header/header";
import recommend from "./components/recommend/recommend";
import searchMain from "./components/searchMain";
import player from "./components/player";

export default {
  name: "ele-vue-learning",
  components: { Header, recommend, searchMain ,player}
};
</script>

 <style lang='scss'>
// @import "../assets/common/common.scss";
// @import "../assets/common/icon.css";
#app {
  min-width: 1080px;
  min-height: 670px;
  overflow: hidden;
}
.middle {
  display: flex;
  // .recommend{width: 250px;}
  .searchMain {
    flex: 1;
  }
}
</style>