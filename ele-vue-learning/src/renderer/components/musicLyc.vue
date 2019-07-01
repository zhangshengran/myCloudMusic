<template >
  <div class="lycontainer">
    <div class="lyc custom-scrollbar" ref="lycscroll" v-if="this.lycArr.length!=0">
      <div
        ref="lyc"
        class="lycitem"
        :hand="index"
        :time="timeArr[index]"
        v-for="(item, index) in lycArr"
        :key="index"
      >{{item}}</div>
    </div>
    <div v-else class="lyc2">暂无歌词</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Vue from "vue";
import { lycAnalysis } from "../utils/utils";
import { getLyr } from "../api/api";
export default {
  data() {
    return {
      timeArr: [],
      lycArr: [],
      hand: 0,
      hand2: 0
    };
  },
  computed: {
    ...mapGetters(["musicId"])
  },
  mounted() {
    getLyr(this.musicId).then(({ data }) => {
      var datalrc = data.lrc.lyric;
      console.log(data);
      var { timeArr, lycArr } = lycAnalysis(String(datalrc));
      this.timeArr = timeArr;
      this.lycArr = lycArr;

      let hand = 0;
      var that = this;
      if (isNaN(that.timeArr[hand]) && isNaN(that.timeArr[hand++])) {
        hand++;
      }
      // var lycDivList = that.$refs.lyc;

      setInterval(() => {
        var lycDivList = that.$refs.lyc;
        var lycscroll = that.$refs.lycscroll;
        if (Vue.currentPlayTime - this.timeArr[hand] >= 0) {
          // console.log(this.lycArr[hand]);

          if (hand > 0) {
            lycDivList[hand - 1].style.color = "";
            lycDivList[hand - 1].style.background = "";
          }
          lycDivList[hand].style.color = "#c62f2f";
          lycDivList[hand].style.background = " #fafafa";
          hand++;
          // console.log(lycscroll);
          if (hand > 5) {
            //歌词唱到第五句以后自动滚动下一句
            lycscroll.scrollTo(0, (hand - 5) * 42);
          }
        }
      }, 200);
    });
  },
  created() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.lyc2 {
  font-family: 仿宋;
  font-size: 1.2em;
  width: 500px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lyc {
  font-family: 仿宋;
  font-size: 1.2em;
  width: 500px;
  height: 450px;
  overflow-y:scroll;
  .lycitem {
    padding: 10px;
  }
}
</style>
 

