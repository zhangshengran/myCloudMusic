<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in bannerList"
          :key="index"
          :style="{backgroundImage: 'url(' + item + ')'}"
          style=" background-size:700px;"
         
        ></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import { banner } from "../../api/api";

import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    banner().then(({ data }) => {
      data.banners.forEach(element => {
        this.bannerList.push(element.imageUrl);
      });
    });
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      observer: true,
      observeParents: true,
      grabCursor: true
    });
  }
};
</script>
</script>

<style lang='scss'>
.swiper-container {
  position: relative;
//   z-index: auto;
 height: 260px;
  width: 700px;
//   height: 250px;
  margin: 0 auto;
}
</style>