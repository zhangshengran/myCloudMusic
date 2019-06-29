<template>
<div class="middle">
<leftBar></leftBar>
<router-view></router-view>
</div></template>
<script>
import leftBar from "../components/leftBar";
import searchMain from "../components/searchMain";
export default {
  components: {  leftBar, searchMain }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.middle {
  display: flex;
}
</style>
 

