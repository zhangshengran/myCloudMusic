<template>
<div class="recommend">
     <div class="reco item">
         <p>推荐</p>
         <div>发现音乐</div>
     </div>
     <div class="myMusic item">
          <p>我的音乐</p>
         <div class="line-flex">
             <i class="iconfont iconyinyue"></i>
             <div class="mar-left"> 本地音乐</div>
            </div>
          <!-- <div>下载管理</div> -->
     </div>
     <div class="myMusicList item">
           <p>创建的歌单</p>
         <div class="line-flex">
             <i class="iconfont iconheart"></i>
             <div class="mar-left">我喜欢的音乐</div>
             </div>
         
     </div>
</div>
   

</template>

<script>
export default {};
</script>
<style <style lang='scss'>
@import "../../assets/common/common.scss";
@import "../../assets/common/icon.css";


   .recommend{
       width: 250px;
       background-color: $back;
       height:calc(100vh - 60px);
       p{
           line-height: 40px;
           color: #7d7d7d;
        
       }
       .item{
             line-height: 40px;
             color: #5c5c5c;
             margin-left: 20px;
               margin-left: 15px;
             
       }
       .line-flex{
                    margin-left: 15px;
                    display: flex;
             }
             .mar-left{
                    margin-left: 10px;
             }
   }

  
</style>
 

