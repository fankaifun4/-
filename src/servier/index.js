import http from '../config/service'
//上传到图片sm.ms
export const uploadSM = formData=>http.uploadSm('https://sm.ms/api/upload',formData)

//上传图片管理路径
export const mannageImg = (url,hash,deleteurl,storename)=>http.post('/api/uploadImg',{url,hash,deleteurl,storename})
