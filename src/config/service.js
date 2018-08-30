import config from './http.config'
import axios from 'axios'

axios.defaults.baseURL=config.baseUrl

const HTTPREQUEST={
  timeout:100000,
}

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
  console.log(params)
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
