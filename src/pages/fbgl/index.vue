<style scoped lang="scss">
  .upload-img{
    overflow: hidden;
    position: relative;
    .upload-input{
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .form-horizontal{
    padding-top:20px;
  }
  .editor-wrap{
    padding-top:20px;
    padding-right: 20px;
  }
  .img-prev{
    width:100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
    .img-src{
      width:100px;
      word-wrap: break-word;
      word-break: normal;
      text-align: left;
    }
    .img-items{
      width:100px;
      height:100px;
      border:1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      margin-bottom:10px;
      overflow: hidden;
      >img{
        width:100%;
      }
    }
  }
</style>
<template>
  <div class="container-fluid">
    <div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-horizontal">
            <div class="form-group">
              <label for="" class="col-sm-4 control-label">攻略名称</label>
              <div class="col-sm-8">
                <input type="text" class="form-control"  placeholder="攻略名称">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-4 control-label">作者</label>
              <div class="col-sm-8">
                <input type="text" class="form-control"  placeholder="作者">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-4 control-label">上传图片</label>
              <div class="col-sm-8">
                <div class="upload-img btn btn-info">上传图片
                  <input type="file" class="upload-input form-control" multiple accept="*.gif,*.png,*.jpeg,*.jpg" @change="chaneUploadSM">
                </div>
                <div class=" btn btn-info" @click="uploadToSM">上传</div>
              </div>
            </div>
          </div>
          <div class="img-prev">
            <div v-for="img in prevImgs" :key>
              <div class="img-items" >
                <img :src="img" alt="">
              </div>
              <div class="img-src" v-if="!(/blob/.test(img))" >{{img}}</div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="editor-wrap"><div ref="wangEditor"> </div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {wangEditor} from '../../assets/lib/wangEditor/wangEditor'
  import {uploadSM} from '../../servier/index'
  export  default {
    data(){
      return{
        prevImgs:[],
        title:"",

      }
    },
    mounted(){
      let editor = new wangEditor(this.$refs.wangEditor)
      editor.create()
    },
    methods:{
      uploadImg(){
        this.uploadToSM( this.prevImgs[0], res=>{
          console.log(res)
        } )
      },
      chaneUploadSM(e){
        const files = e.currentTarget.files
        this.prevImgs=[]
        if(files.length){
          for( let i=0;i<files.length;i++ ){
            let item =files[i]
            this.prevImgs.push(URL.createObjectURL(item));
          }
        }
      },
      async uploadToSM(file,cb){
        let formData= new FormData
        formData.append('smfile',file)
        let res = await uploadSM(file)
        if(res.code=='success'){
          cb(res)
        }
      }
    }

  }
</script>
