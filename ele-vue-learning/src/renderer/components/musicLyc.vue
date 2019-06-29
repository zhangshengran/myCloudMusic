<template >
  <div class="lyc" v-if="this.lycArr.length!=0">
    <div  v-for="(item, index) in lycArr" :key="index">{{item}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import { lycAnalysis } from "../utils/utils";
import { getLyr } from "../api/api";
export default {
  props: ["musicId"],
  data() {
    return {
      timeArr: [],
      lycArr: []
    };
  },
  created() {
    getLyr(this.musicId).then(({ data }) => {
     
      var datalrc = data.lrc.lyric;
       console.log(data);
      var { timeArr, lycArr } = lycAnalysis(String(datalrc));
      this.timeArr = timeArr;
      this.lycArr = lycArr;
   
    });
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.lyc {
}
</style>
 

