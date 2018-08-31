import config from './http.config'
import axios from 'axios'
import store from '../store/index'
axios.defaults.baseURL=config.baseUrl

const HTTPREQUEST={
  timeout:100000,
}


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let _csrf =  store.state._csrf
    config.headers={
      'x-csrf-token':_csrf
    }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

function get(url,params){
  return axios({
    url,
    ...HTTPREQUEST,
    method: 'GET',
    params: {
      ...params
    }
  }).then(res=>{
    return res
  }).catch(error=>{
    return error
  })
}

function post(url,params){
  let _csrf =  store.state._csrf
  return axios({
    url,
    ...HTTPREQUEST,
    method:'POST',
    data:{...params}
  }).then((res)=>{
    return res
  }).catch(error=>{
    return error
  })
}

function all (arr,fn) {
  return axios.all(arr)
    .then(axios.spread(fn))
}

function uploadSm(url,formData){
  return axios({
    url,
    method:"POST",
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    data:formData
  }).then((res)=>{
    return res
  }).catch(error=>{
    return error
  })
}

export default {
  get,
  post,
  all,
  uploadSm
}
