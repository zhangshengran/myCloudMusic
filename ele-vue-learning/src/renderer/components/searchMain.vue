<template>
  <div class="middle-container">
    <div class="middle-header">搜索我，找到1500首单曲</div>
    <div class="table">
      <table border="1">
        <tr>
          <th style="min-width:30px"></th>
          <th style="min-width:60px">操作</th>
          <th style="min-width:150px">音乐标题</th>
          <th style="min-width:120px">歌手</th>
          <th style="min-width:150px">专辑</th>
          <th style="min-width:65px">时长</th>
          <th >热度</th>
        </tr>
        <tr>
          <td>01</td>
          <td class="heartDown">
            <i class="iconfont iconxin"></i>
            <i class="iconfont iconxiazai"></i>
          </td>
          <td>我曾</td>
          <td>隔壁老樊</td>
          <td>我曾</td>
          <td>04:45</td>
          <td>
            <el-progress :percentage="50" color="gray"></el-progress>
          </td>
        </tr>

        <tr>
          <td>01</td>
          <td>
            <i class="iconfont iconxin"></i>
            <i class="iconfont iconxiazai"></i>
          </td>
          <td>我曾</td>
          <td>隔壁老樊</td>
          <td>我曾</td>
          <td>04:45</td>
          <td></td>
        </tr>

        <tr>
          <td>01</td>
          <td>
            <i class="iconfont iconxin"></i>
            <i class="iconfont iconxiazai"></i>
          </td>
          <td>我曾</td>
          <td>隔壁老樊</td>
          <td>我曾</td>
          <td>04:45</td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>
 <style lang='scss'>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";
.middle-container {
  width: 100%;
  height: calc(100vh - 60px);
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
</style>
 

