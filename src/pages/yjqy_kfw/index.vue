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
          max-width:300px;
          word-break: break-all;
          word-wrap:break-word;
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
  .mt-t-20{
    margin-top:20px;
  }
</style>
<template>
  <div class="container-fluid">
    <h1>御剑情缘咖啡屋</h1>
    <div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-horizontal">
            <div class="form-group">
              <label for="" class="col-sm-4 control-label">八卦名称</label>
              <div class="col-sm-8">
                <input type="text" class="form-control"  placeholder="八卦名称" v-model="title">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-4 control-label">作者</label>
              <div class="col-sm-8">
                <input type="text" class="form-control"  placeholder="作者" v-model="nickname">
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
            <div class="form-group">
              <label  class="col-sm-4 control-label">网络图片</label>
            </div>
            <div class="form-group">
              <div class="col-sm-10">
                <input type="text"  class="upload-input form-control" v-model="interImg">
              </div>
              <div class="col-sm-2">
                <button class="btn btn-success" @click="addInterImg">+</button>
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
          <div class="mt-t-20">
            <button class="btn btn-primary btn-block" @click="getText"> 确认提交 </button>
          </div>
        </div>
      </div>
      <div class="table-wrap">
        <table border="1">
          <thead>
          <tr>
            <th>序号</th>
            <th>图片路径</th>
            <th>预览</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(img,index) in uploadImgs" :key="index" >
            <td>{{index+1}}</td>
            <td>{{img}}</td>
            <td><div class="table-prev"><img :src="img" alt=""></div></td>
            <td>
              <button class="btn btn-danger" @click="deleteImgs(index)">删除</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import wangEditor from '../../assets/lib/wangEditor/wangEditor'
  import {uploadSM,mannageImg,addCoffeHouse} from '../../servier/index'
  export  default {
    data(){
      return{
        prevImgs:[],
        title:"",
        imgIndex:0,
        uploadImgs:[],
        editor:null,
        nickname:"",
        interImg:""
      }
    },
    mounted(){
      this.editor = new wangEditor(this.$refs.wangEditor)
      this.editor.customConfig.zIndex = 100
      this.editor.create()
    },
    methods:{
      async getText(){
        if( this.title.replace(/^\s+|\s+$/ig,'') == '' ){
          alert('名称不能为空')
          return
        }
        if( this.nickname.replace(/^\s+|\s+$/ig,'') == '' ){
          alert('作者不能为空')
          return
        }
        if( this.uploadImgs.length<1 ){
          alert('至少需要上传一张图片')
          return
        }
        const html =  this.editor.txt.html()
        if(html.replace(/^\s+|\s+$/ig,'').length<50){
          alert('内容太少')
          return
        }
        this.$store.dispatch('openShap',true)
        let res = await addCoffeHouse(  this.title,this.nickname, html ,this.uploadImgs )
        this.$store.dispatch('openShap',false)
        if(res.data.code ===1){
          alert('操作成功')
        }else{
          alert('操作失败')
        }
      },
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
        this.uploadToSM( uploadFiles[this.imgIndex], async (err,res)=>{
          if(err){
            alert(err.err)
            this.$store.dispatch('openShap',false)
            return;
          }
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
        if(res.data.code=='success'){
          cb(null,res.data)
        }else{
          cb({err:res.data.msg},res.data)
        }
      },
      addInterImg(){
        let indexImg =  this.uploadImgs.indexOf( this.interImg )
        if(this.interImg == '' || indexImg >=0 ) return
        this.uploadImgs.push( this.interImg )
      },
      deleteImgs(index){
        if(this.uploadImgs.length){
          this.uploadImgs.splice(index,1)
        }
      }
    }

  }
</script>
