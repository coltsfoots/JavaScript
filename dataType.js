/**
 * typeof 不能判断出引用数据类型，instanceof 不能判断出基本数据类型， 所以综合一下
 * @param {*} data 需要被判断类型的数据
 */
 
 function isQuote(data) {
   if(data && (typeof data === 'object' || typeof data === 'function')){
      return true
   }
   return false
 }
