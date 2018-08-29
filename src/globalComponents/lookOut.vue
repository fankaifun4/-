<style lang="scss" scoped>
.look-out{
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  display: flex;
  z-index: 9999;
  overflow: hidden;
}
  .look-wrap{
    position: relative;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    padding:10px;
    overflow-y: scroll;
  }
  .look-body{
    background: #fff;
    border-radius: 8px;
    max-width: 80%;
    padding:15px;
    margin:0 auto;
    >img{
      width:100%;
    }
  }
</style>
<template>
<div class="look-out" v-if="open">
    <div class="look-wrap" @click.stop="closeShap">
      <div class="look-body">
        <slot></slot>
      </div>
    </div>
</div>
</template>
<script>
  export default {
    name:"lookout",
    props:{
      open:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{}
    },
    mounted(){

    },
    methods:{
      closeShap(){
        this.$emit('closeShap')
      }
    }
  }
</script>
