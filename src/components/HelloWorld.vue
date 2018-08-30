<style scoped lang="scss">
 .loading-shap{
  position:fixed;
  z-index:1000000;
  left:0;
  top:0;
  right:0;
  bottom:0;
  .shap{
    position:absolute;
    z-index:10;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:rga(0,0,0,.5)
  }
  .container{
    position:absolute;
    z-index:10;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:rga(0,0,0,.5)
  }
 }
</style>
<template>
  <div class="loading-shap">
    <div class="shap"></div>
    <div class="container">{{loadText}}</div>
  </div>
</template>

<script>
export default {
  props:{
    loadText:{
      type:String,
      default:"正在加载...."
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

