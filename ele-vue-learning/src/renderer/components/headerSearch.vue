<template>
  <div class="modal">
    <i class="iconfont iconshangjiantou" style="position:absolute;top:-15px;left:30px;color:white"></i>
    <i class="iconfont "></i>
    <div class="modal-left">
      <header>
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
import debounce from "../utils/utils";
import http from '../api'
export default {
  props: ['searchSong'],
    mounted() {
       http.get("/search/hot").then(({ data }) => {
                this.hotList = data.result.hots;
              console.log(this.hotList)

            });
    },
  data() {
    return {
      songList:{},
      hotList: [],
      ownSearchName:''
    };
  },
  watch: {
      searchSong(val){//searchSong为父组件发来的props
      
         debounce(()=>{this.ownSearchName=val; 
          http.get("/search/suggest", { keywords: val }).then(({ data }) => {
                    this.songList = data.result;
                });
          console.log(this.ownSearchName)}, 300)(val)
      },
        
    
  },methods: {
    emitSong(songName){
      console.log('子组件发送')
    
      this.$emit('chooseMusic',songName)
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
 

