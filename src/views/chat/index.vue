<template>
  <div class="chat">
    <div class="left">
      <div class="top">
        <span>元</span>
      </div>
      <div class="mesList">
        <div class="item"></div>
      </div>
    </div>
    <div class="right">
      <div class="content"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>
  <script lang='ts' setup>
</script>
  <style lang="less" scoped>
.chat {
  display: flex;
  height: 100vh;
  width: 100vw;

  .left {
    width: 300px;
    background-color: antiquewhite;
    .top {
      text-align: center;
      margin-top:20px ;
      span {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
        background-color: burlywood;
        text-align: center;
        line-height: 50px;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
    }
    .bottom {
      height: 200px;
      background-color: aqua;
    }
  }
}
</style>