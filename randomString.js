/** 随机生成固定位数或者一定范围内的字符串数字组合
 * @param {Number} min 范围最小值
 * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
 * @param {String} charStr指定的字符串中生成组合
 * @returns {String} 返回字符串结果
 * */
function randomRange(min, max, charStr) {
 let returnStr = ""
 let range
 let autoGetStr = function() {
  let charFun = function() {
   let n = Math.floor(Math.random() * 62)
   if(n < 10) {
    return n; //1-10
   } else if (n < 36){
    return String.fromCharCode(n + 55) //A-Z
   } else {
    return String.fromCharCode(n + 61) //a-z
   }
  }
  while(returnStr.length < range){
   returnStr += charFun()
  }
 };
 //根据指定的字符串中生成组合
 let accordCharStrGet = function() {
   for(let i  = 0; i < range; i++) {
    let index = Math.round(Math.random() * (charStr.length - 1))
    returnStr += charStr.substring(index,index+1)
   }
 }
 if(typeof min == 'undefined') {
  min = 10
 }
 if(typeof max == 'string') {
  charStr = max
 }
 range = ((max && typeof max == 'number') ? Math.round(Math.random() * (max - min)) + min : min)
 if(charStr) {
  accordCharStrGet()
 } else {
  autoGetStr()
 }
 return returnStr
}
