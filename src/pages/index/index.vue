<style scoped lang="scss">
  .container-fluid{
    height: 100%;
    overflow: hidden;
    position: relative;
    padding: 0;
    margin: 0;
  }
  .top-header{
    height: 100px;
    background: #55a532;
    color: #fff;
    position: relative;
    .logo{
      height: 100%;
      float:left;
      text-align: left;
      line-height: 100px;
      font-size: 40px;
      font-weight: 700;
      padding-left:15px;
    }
  }

  .cont-body{
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;

  }
  .left-body{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width:150px;
    border-right: 1px solid #0b2e13;
    color: #fff;
    ul,li{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    li{
      padding:15px;
      background:#007bff;
      border-bottom:1px solid #fff;
      cursor: pointer;
      &:hover{
        background: #ffeeba;
        color: #333;
      }
    }
  }
  .right-body{
    position: absolute;
    left: 150px;
    top: 0;
    bottom: 0;
    right: 0;
    background: #f6f6f2;
  }
</style>
<template>
<div class="container-fluid">
  <div class="top-header">
    <div class="logo">逆水寒管理</div>
  </div>
  <div class="cont-body">
    <div class="left-body">
      <ul>
        <li>副本攻略</li>
        <li>奇遇攻略</li>
        <li>福利快线</li>
        <li>新闻资讯</li>
      </ul>
    </div>
    <div class="right-body"></div>
  </div>
</div>
</template>
<script>

</script>
