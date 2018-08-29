export const isKong=(val)=>{
  let isN=/(^\s*)|(\s*$)/g
  return val.replace(isN,'').length==0? true: false
}
