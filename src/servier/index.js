import http from '../config/service'
export const uploadSM = formData=>http.uploadSm('https://sm.ms/api/upload',formData)
