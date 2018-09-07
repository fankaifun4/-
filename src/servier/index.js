import http from '../config/service'
//上传到图片sm.ms
export const uploadSM = formData=>http.uploadSm('https://sm.ms/api/upload',formData)

//上传图片管理路径
export const mannageImg = (url,hash,deleteurl,storename)=>http.post('/api/mannage/uploadImg',{url,hash,deleteurl,storename})

//添加副本攻略
export const addGonglue = (title,nickname,content,imgs)=> http.post('/api/mannage/addGonglue',{title,nickname,content,imgs})

//添加奇遇
export const addQiyu = (title,_type,content)=> http.post('/api/mannage/addQiyu',{title,_type,content})

//添加八卦客栈
export const addInformation = (title,nickname,content,imgs)=> http.post('/api/mannage/addInformation',{title,nickname,content,imgs})

//添加新闻资讯
export const addNews = (title,createdtime,content)=> http.post('/api/mannage/addNews',{title,createdtime,content})

//login
export const login = (username,pswd)=>http.post('/api/mannage/admin',{username,pswd})


//
//添加御剑情缘咖啡屋
export const addCoffeHouse = (title,method,content,imgs)=> http.post('/api/mannage/addYjqyComm',{title,method,content,imgs})
