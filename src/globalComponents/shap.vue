<style scoped lang="scss">
  .shap{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99999999;
    .shap-bg{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      background: rgba(0,0,0,.5);
    }
    .shap-body{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color:#fff;
    }
  }
</style>
<template>
  <div class="shap">
    <div class="shap-bg"></div>
    <div class="shap-body">{{ ldtext }}</div>
  </div>
</template>
<script>
  export default {
      name:"shapload",
      props:{
        ldtext:{
          type:String,
          default:"正在加载...."
        }
      },
      data(){
        return{}
      },
      mounted(){

      }
  }
</script>
