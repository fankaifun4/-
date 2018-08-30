<style scoped lang="scss">
  .wrap-index{
    height: 100%;
    overflow: hidden;
    position: relative;
    padding: 0;
    margin: 0;
  }
  .top-header{
    height: 80px;
    background: #55a532;
    color: #fff;
    position: relative;
    .logo{
      height: 100%;
      float:left;
      text-align: left;
      line-height: 80px;
      font-size: 30px;
      font-weight: 700;
      padding-left:15px;
    }
  }

  .cont-body{
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
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
      &.active{
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
    overflow-y: scroll;
  }

</style>
<template>
<div class="wrap-index">
  <div class="top-header">
    <div class="logo">逆水寒管理</div>
  </div>
  <div class="cont-body">
    <div class="left-body">
      <ul>
        <li :class="{active:this.active=='fbgl'}"  @click="$router.push({name:'fbgl'})">副本攻略</li>
        <li :class="{active:this.active=='qygl'}"  @click="$router.push({name:'qygl'})">奇遇攻略</li>
        <li :class="{active:this.active=='flkx'}"  @click="$router.push({name:'flkx'})">福利快线</li>
        <li :class="{active:this.active=='xwzx'}"  @click="$router.push({name:'xwzx'})">新闻资讯</li>
      </ul>
    </div>
    <div class="right-body">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>
<script>
  export  default {
    data(){
      return{
        active:"fbgl"
      }
    },
    mounted(){

    },
    watch:{
      $route(to,from){
        if(to.name){
          let name =to.name
          this.active = name
        }
      }
    }
  }
</script>
