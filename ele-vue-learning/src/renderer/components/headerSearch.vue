<template>
  <div class="modal">
    <i class="iconfont iconshangjiantou" style="position:absolute;top:-15px;left:30px;color:white"></i>
    <i class="iconfont "></i>
    <div class="modal-left">
      <header>
        <i class="iconfont iconfenxiang"></i>
        <div>热门搜索</div>
      </header>
      <div v-if="songList2.length!=0">
        <div v-for="(item,index) in  songList2" :key="index" class="ltem">
          <div @mousedown="emitSong(item.name)">{{item.name}}</div>
          <div v-if="item.artists.name">{{item.artists.name}}</div>
        </div>
      </div>
      <div v-if="songList2.length==0">
        <div v-for="(item,index) in  hotList2" :key="index" class="ltem">
          <div @mousedown="emitSong(item.first)">{{item.first}}</div>
        </div>
      </div>
    </div>

    <div class="modal-right">
      <header>
        <i class="iconfont icondaojishi"></i>
        <div>搜索历史</div>
      </header>
    </div>
  </div>
</template>

<script>
import { constants } from "fs";
import { connect } from "tls";
export default {
  props: {
    songList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hotList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },

  data() {
    return {
      songList2: [],
      hotList2: []
    };
  },
  watch: {
    songList(val) {
      console.log(val);
      if (val.length != 0) {
        this.songList2 = val.slice(0, 13);
      } else {
        this.songList2 = val;
      }
    },
    hotList(val) {
      console.log(val);
      if (val.length != 0) {
        this.hotList2 = val.slice(0);
      } else {
        this.hotList2 = val;
      }
    }
  },methods: {
    emitSong(songName){
      console.log('子组件发送')
    
      this.$emit('songName',songName)
    }
  },
};
</script> 
<style <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.modal {
  position: absolute;
  top: 34px;
  left: 60px;
  width: 440px;
  height: 300px;
  overflow: hidden;
  background-color: #fafafa;
  display: flex;
  .modal-left {
    width: 50%;
    header {
      display: flex;
      align-items: center;
      line-height: 26px;
      // .iconsearch{
      //   position: static;
      //   width: 16px;
      //   height: 17.6px;
      // }
    }
  }
  .modal-right {
    width: 50%;
    header {
      display: flex;
      line-height: 26px;
    }
  }
}
.ltem {
  div {
    font-size: 14px;
    line-height: 14px;
    color: black;
    padding: 10px;
    cursor: pointer;
  }
  div:hover {
    background-color: #929292;
  }
}
</style>
 

