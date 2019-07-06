<template>
  <div class="middle">
    <leftBar></leftBar>
    <keep-alive>
      <router-view style="margin-left:250px;width:100%"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import leftBar from "../components/leftBar";
import searchMain from "../components/searchMain";
export default {
  components: { leftBar, searchMain }
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.middle {
  display: flex;
}
</style>
 

