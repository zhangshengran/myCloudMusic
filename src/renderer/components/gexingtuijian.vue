<template>
  <div class="gexingtuijian">
    <div>
      <div class="swiper">
        <swiper></swiper>
      </div>
      <section class="tuijiangedan">
        <header>
          <span style="font-size:1rem;font-weight:bolder;height:40px">推荐歌单</span>
          <span>更多</span>
        </header>
        <div class="remd">
          <div
            class="remditem"
            v-for="(item, index) in personalized"
            :key="index"
            @click="goplayListDetail(item)"
          >
            <div>
              <img :src="item.picUrl" alt />
            </div>
            <div>{{item.name}}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { personalized } from "../api/api";
import { mapState, mapMutations, mapActions } from "vuex";

import swiper from "./base/Swiper";
export default {
  components: { swiper },
  data() {
    return {
      banners: [],
      personalized: []
    };
  },
  methods: {
    ...mapActions(["getplaylistDetail"]),
    goplayListDetail(item) {
      this.getplaylistDetail(item.id);
      this.$router.push({path:'/selectPage/playlistdetail',query: { item: item }})
    }
  },
  computed: {},
  mounted() {
    personalized().then(({ data }) => {
      this.personalized = data.result.slice(0, 10);
    });
  },
  beforeDestroy() {
  console.log('组件已销毁')
  },
};
</script>
<style <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.gexingtuijian {
  .swiper {
    margin-bottom: 15px;
    position: relative;
    z-index: -1;
  }
  .tuijiangedan {
    margin: 0 auto;
    width: 750px;
    header {
      display: flex;
      justify-content: space-between;
    }
    .remd {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .remditem {
        width: 130px;
        margin: 5px;
        text-align: center;
        img {
          width: 130px;
        }
      }
       .remditem:hover{
         cursor: pointer;
       }
    }
  }
}
</style>
 

