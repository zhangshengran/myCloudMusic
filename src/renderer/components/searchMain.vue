<template>
  <div class="middle-container">
    <div class="middle-header">找到{{30}}首单曲</div>

      <tableList></tableList>
      <songTableList :songList='songList' :setMusicIndex='setMusicIndex'></songTableList>
  </div> 
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { constants } from "fs";
import tableList from './base/tableList'
import songTableList from './base/songTableList'
export default {
  components:{tableList,songTableList},
  data() {
    return {
      isActive: true
    };
  },
  computed: {
    ...mapState(["songList", "musicIndex"]) //拿到vuex中的搜索结果列表
  },
  
  methods: {
     ...mapMutations(["setMusicIndex"]),
  },
  watch: {

  },
  computed: {
  }
};
</script>
 <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.middle-container {
 width: 100%;
  // font-family: 仿宋;
  // font-size: 1.2em;
  .active {
    background: $gray;
  }
  .iconxiazai {
    font-size: 14px;
  }
  .iconxiazai:hover {
    color: $red;
  }
  //    background-color: aqua;
  //   min-width: 800px;

  .middle-header {
    padding: 30px;
  }
  .table {
    table {
      .el-progress__text {
        display: none;
      }
      th {
        line-height: 2.5;
      }
      td,
      th {
        text-align: center;
      }
      width: 100%;
    }
  }
}

.songlist:hover {
  background: $gray;
  cursor: pointer;
}
</style>
 

