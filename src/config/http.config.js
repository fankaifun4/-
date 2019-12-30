let baseUrl=''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:7001/999lp'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://www.999lp.cn/fkx'
}
export default {
  baseUrl
}
