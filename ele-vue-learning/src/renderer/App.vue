<template>
  <div id="app">
    <Header></Header>
    <!-- class="custom-scrollbar " -->
      <router-view  style="margin:50px 0; height: calc(100vh - 100px);" class="custom-scrollbar" ></router-view>
    <player></player>
  </div>
</template>

<script>
import Header from "./components/header/header";
// import leftBar from "./components/leftBar";
// import searchMain from "./components/searchMain";
import player from "./components/player";
import playPage from "./pages/playPage";
import selectPage from "./pages/selectPage";
export default {
  name: "ele-vue-learning",
  components: { Header, playPage, selectPage, player }
};
</script>

 <style lang='scss'>
@import "./assets/common/common.scss";
@import "./assets/common/icon.css";
// #app {
//   // width: 1080px;
//   // height: 670px;
//   // overflow: hidden;

// }

div {
  user-select: none;
}
</style>