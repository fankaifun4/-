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
  .login{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-wrap{
      width:500px;
      height: 200px;
    }
  }
</style>
<template>
<div class="wrap-index">
  <div class="login" v-if="!login">
    <div class="login-wrap">
        <div class="form-group">
          <label for="">账号</label>
          <input type="email" class="form-control"  placeholder="账号" v-model="username">
        </div>
        <div class="form-group">
          <label for="">密码</label>
          <input type="password" class="form-control"  placeholder="密码" v-model="pswd">
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" @click="loginUp">登录</button>
        </div>
    </div>
  </div>
  <div v-else>
    <div class="top-header">
      <div class="logo">逆水寒管理</div>
    </div>
    <div class="cont-body">
      <div class="left-body">
        <ul>
          <li :class="{active:this.active=='fbgl'}"  @click="$router.push({name:'fbgl'})">副本攻略</li>
          <li :class="{active:this.active=='qygl'}"  @click="$router.push({name:'qygl'})">奇遇攻略</li>
          <li :class="{active:this.active=='flkx'}"  @click="$router.push({name:'flkx'})">八卦客栈</li>
          <li :class="{active:this.active=='xwzx'}"  @click="$router.push({name:'xwzx'})">新闻资讯</li>
        </ul>
      </div>
      <div class="right-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <shapload :ldtext="lxText" v-if="lxLoading"></shapload>
</div>
</template>
<script>
  import {login} from '../../servier/index'
  export  default {
    data(){
      return{
        active:"fbgl",
        username:"",
        pswd:"",
        cookie:{},
        login:false
      }
    },
    computed:{
      lxText(){
        return this.$store.state.lxText
      },
      lxLoading(){
        return this.$store.state.lxLoading
      }
    },
    mounted(){
      this.getCookie()
      this.active = this.$route.name
    },
    methods:{
      async loginUp(){
        if(this.username=='') return
        if(this.pswd=='') return
        let res = await login(this.username,this.pswd)
        if(res.data.code){
          this.setCookie('admin','true')
          this.getCookie()
          this.login=true
          alert('登录成功')
        }else{
          alert('登录失败')
        }
      },
      getCookie(){
        let cookie = document.cookie
        let cookieList = cookie.split('; ')
        let reCookie = {}
        cookieList.forEach(item=>{
          let list = item.split('=')
          let key  = list[0]
          let value= list[1]
          reCookie[key]=value
        })
        this.cookie = reCookie
        if(this.cookie.admin =='true'){
          this.login=true
        }
        let csrfToken = this.cookie.csrfToken
        this.$store.dispatch('setHeader',csrfToken)
      },
      setCookie(name,value){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString();
      }
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
