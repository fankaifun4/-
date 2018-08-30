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
  .table-wrap{
    width:100%;
    margin-top:20px;
    table{
      width:100%;
      thead{
        background:#c6c8ca;
        tr>th{
          padding-left:35px;
          padding-top:10px;
          padding-bottom:10px;
        }
      }
      tbody{
        tr>td{
          text-align: left;
          padding-left:35px;
        }
      }
    }
    .table-prev{
      width:100px;
      height:100px;
      overflow: hidden;
      display: flex;
      justify-items: center;
      align-items: center;
      img{
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
                  <input type="file" ref="uploadFiles" class="upload-input form-control" multiple accept="image/png,image/gif,image/jpeg" @change="chaneUploadSM">
                </div>
                <div class=" btn btn-info" @click="uploadImg">上传</div>
              </div>
            </div>
          </div>
          <div class="img-prev">
            <div v-for="(img,index) in prevImgs" :key="index">
              <div class="img-items" >
                <img :src="img" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="editor-wrap"><div ref="wangEditor"> </div></div>
        </div>
      </div>
      <div class="table-wrap">
        <table border="1">
          <thead>
            <tr>
              <th>序号</th>
              <th>图片路径</th>
              <th>预览</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(img,index) in uploadImgs" :key="index" >
              <td>{{index+1}}</td>
              <td>{{img}}</td>
              <td><div class="table-prev"><img :src="img" alt=""></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import {wangEditor} from '../../assets/lib/wangEditor/wangEditor'
  import {uploadSM,mannageImg} from '../../servier/index'
  export  default {
    data(){
      return{
        prevImgs:[],
        title:"",
        imgIndex:0,
        uploadImgs:[]
      }
    },
    mounted(){
      let editor = new wangEditor(this.$refs.wangEditor)
      editor.create()
    },
    methods:{
      uploadImg(){
        if( this.imgIndex == this.prevImgs.length ) {
          this.$store.dispatch('openShap',false)
          return
        }
        let imgIndex= this.imgIndex+1
        this.$store.dispatch('openShap',true)
        this.$store.dispatch('openText',`正在上传${imgIndex}图片....`)
        const uploadFiles = this.$refs.uploadFiles.files
        if( !uploadFiles.length ) return
        this.uploadToSM( uploadFiles[this.imgIndex], async res=>{
          if(res.code=='success'){
            this.imgIndex+=1
            this.uploadImgs.push(res.data.url)
            let result = await mannageImg( res.data.url,res.data.hash,res.data.delete,res.data.storename )
            setTimeout(()=>{
              this.uploadImg()
            },1000)
          }
        })
      },
      chaneUploadSM(e){
        const files = e.currentTarget.files
        this.prevImgs=[]
        this.imgIndex=0
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
        let res = await uploadSM(formData)
        console.log(res)
        if(res.data.code=='success'){
          cb(res.data)
        }else{
          alert('上传失败')
        }
      }
    }

  }
</script>
