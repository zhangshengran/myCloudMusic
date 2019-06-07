<template>
  <div class="header">
    <div class="header-left">
      <img src alt class="logo">
      <p class="header-left-p">网易云音乐</p>
    </div>
    <div class="header-middle">
      <div class="left">
        <i class="iconfont iconzuojiantou"></i>
        <i class="iconfont iconarrow-right"></i>
      </div>
      <div class="right">
        <input type="text" placeholder="搜索音乐，视频，歌词，电台">
        <i class="iconfont iconsearch"></i>
      </div>
    </div>
    <div class="header-right">
      <div class="login">
        <i class="iconfont iconwo"></i>
        <p>未登录</p>
      </div>
      <div class="vip margin-left">开通VIP</div>
      <i class="iconfont iconhuanfu margin-left"></i>
      <i class="iconfont icontubiao209 margin-left"></i>

      <i class="iconfont iconshezhi margin-left"></i>
    </div>
    <div class="header-control">
      <i class="iconfont iconzuixiaohua"></i>
      <i class="iconfont iconzuidahua"></i>
      <i class="iconfont iconguanbi"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style <style lang='scss'>
@import "../../assets/common/common.scss";
$red: #c62f2f;
.header {
  color: #eec1c1;
  position: relative;
  height: 60px;
  background-color: $red;
  display: flex;
  .header-left {
    margin-left: 15px;
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
      font-size: 20px;
      color: white;
      font-weight: bold;

      text-align: center;
    }
    .logo {
      display: block;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: url("../../assets/static/logo.jpg");
      background-size: 22px 22px;
      // margin-left: 15px;
    }
  }
  .header-middle {
    margin-left: 80px;
    display: flex;
    align-items: center;
    .iconzuojiantou,
    .iconarrow-right {
      padding: 3px;
      background-color: $red;
      border: 1px solid #a82828;
      border-radius: 3px;
      color: #d15858;
    }
    input::-webkit-input-placeholder {
      color: #c77373;
      padding-left: 30px;
      line-height: 27px;
    }
    input:active {
      border: 0;
    }
    input {
      border: 0;
      border-radius: 15px;
      width: 273px;
      height: 27px;

      background-color: #a82828;
    }
    .right {
      display: flex;
      align-items: center;
      position: relative;
      .iconsearch {
        position: absolute;
        right: 10px;
        color: #c77373;
        line-height: 27px;
      }
    }
  }
  .header-right {
    margin-left: 40px;
    .margin-left {
      margin-left: 20px;
    }
    // color: white;
    display: flex;
    align-items: center;
    .login {
      display: flex;
      .iconwo::before {
        // color: white;
        padding: 3px;
        border-radius: 10px;
      }
      p {
        line-height: 27px;
        // color: white;
      }
    }
  }
  .header-control {
    height: 60px;
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    i {
      padding: 5px;
    
    }
  }
}
</style>
 

