<template>
  <div class="modal">
    <i class="iconfont iconshangjiantou" style="position:absolute;top:-15px;left:30px;color:white"></i>
    <i class="iconfont"></i>
    <div class="modal-left">
      <header style="border-bottom:1px solid #e6e7ea">
        <i class="iconfont iconfenxiang"></i>
        <div>热门搜索</div>
      </header>
      <div v-if="searchSong">
        <div v-for="(item,index) in  songList.albums" :key="index" class="ltem">
          <div @mousedown="emitSong(item.name)" v-if="item.name">{{item.name}}</div>
        </div>
      </div>
      <div v-if="!searchSong">
        <div v-for="(item,index) in  hotList" :key="index" class="ltem">
          <div @mousedown="emitSong(item.first)">{{item.first}}</div>
        </div>
      </div>
    </div>

    <div class="modal-right" v-if="this.searchHistory.length">
      <header style="border-bottom:1px solid #e6e7ea">
        <i class="iconfont icondaojishi"></i>
        <div>搜索历史</div>
      </header>

      <div class="searchHisIndex" v-for="(item, index) in this.searchHistory" :key="index">
        <div @mousedown="emitSong(item)">{{item}}</div>
        <i class="iconfont iconguanbi" @mousedown="removeSearchItem(index)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from "fs";
import { connect } from "tls";
import debounce from "../utils/utils";
import http from "../api";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: ["searchSong"],
  mounted() {
    http.get("/search/hot").then(({ data }) => {
      this.hotList = data.result.hots;
     
    });
  },
  data() {
    return {
      songList: {},
      hotList: [],
      ownSearchName: ""
    };
  },
  computed: {
    ...mapState(["searchHistory"])
  },
  watch: {
    searchSong(val) {
      //searchSong为父组件发来的props
      //搜索建议还没有加入MV和其他的数据，目前只显示从此接口拿到的音乐单曲建议
      debounce(() => {
        this.ownSearchName = val;
        http.get("/search/suggest", { keywords: val }).then(({ data }) => {
          this.songList = data.result;
        });
      
      }, 300)(val);
    }
  },
  methods: {
    ...mapMutations(["removeSearchHistory"]),
    removeSearchItem(index) {
      localStorage.removeItem(Object.keys(localStorage)[index]);
      this.removeSearchHistory(index);
    },
    emitSong(songName) {
  

      this.$emit("chooseMusic", songName);
    }
  }
};
</script> 
<style <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.modal {
  
  border-radius: 5px;
  box-shadow: 2px 2px 3px $gray;
  position: absolute;
  top: 34px;
  left: 60px;
  // z-index: 99;
  // width: 440px;
  // height: 300px;
  overflow: hidden;
  background-color: #fafafa;
  display: flex;
  .modal-left {
    border-right: 1px solid $gray;
    width: 220px;
    header {
      display: flex;
      align-items: center;
      line-height: 26px;
    }
  }
  .modal-right {
    width: 220px;
    header {
      display: flex;
      line-height: 26px;
    }
  }
}
.ltem {
  div {
    font-size: 12px;
    line-height: 12px;
    color: black;
    padding: 10px;
    cursor: pointer;
  }
  div:hover {
    background-color: $gray;
  }
}
.searchHisIndex {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 12px;
  color: black;
  padding: 10px;
  cursor: pointer;
  .iconguanbi {
    font-size: 13px;
  }
  .iconguanbi:hover{
    color: $red;
  }
}
.searchHisIndex:hover {
  background-color: $gray;
}
</style>
 

