<style lang="scss" scoped>
.loading-wrap{
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader1 {
  display: block;
  font-size: 0px;
  padding: 0px;
}
.loader1 span:nth-child(1) {
  animation-delay: -1s;
  background: rgba(245, 103, 115,0.6);
}
.loader1 span:nth-child(2) {
  animation-delay: -0.8s;
  background: rgba(245, 103, 115,0.8);
}
.loader1 span:nth-child(3) {
  animation-delay: -0.26666s;
  background: rgba(245, 103, 115,1);
}
.loader1 span:nth-child(4) {
  animation-delay: -0.8s;
  background: rgba(245, 103, 115,0.8);
}
.loader1 span:nth-child(5) {
  animation-delay: -1s;
  background: rgba(245, 103, 115,0.4);
}
.loader1 span {
  vertical-align: middle;
  border-radius: 100%;
  display: inline-block;
  margin: 3px 2px;
  animation: loader1 0.8s linear infinite alternate;
}
@keyframes loader1 {
  from {transform: scale(0, 0);}
  to {transform: scale(1, 1);}
}
@-webkit-keyframes loader1 {
  from {-webkit-transform: scale(0, 0);}
  to {-webkit-transform: scale(1, 1);}
}
</style>
<template>
  <div class="loading-wrap">
    <div class="loader1">
      <span :style="{width:roundSize,height:roundSize}"></span>
      <span :style="{width:roundSize,height:roundSize}"></span>
      <span :style="{width:roundSize,height:roundSize}"></span>
      <span :style="{width:roundSize,height:roundSize}"></span>
      <span :style="{width:roundSize,height:roundSize}"></span>
    </div>
  </div>
</template>
<script>
  export default{
    name:'loading',
    props:{
      size:{
        type:Number,
        default:15
      },

    },
    data(){
      return {

      }
    },
    computed:{
      roundSize(){
        return this.size+'px'
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
