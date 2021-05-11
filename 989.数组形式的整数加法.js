/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let sum = 0 //每次对应位相加的和
  let flag = false // 当最高位相加>=10且index ==== 0时设为true
  let arrK = k.toString().split('') //将k转换成数组
  // 判断num的位数和k的位数,如果num位数小于k的位数,两者互换
  if (num.length < arrK.length) {
      let tem = num
      var arr = []
      arrK.map(item => arr.push(parseInt(item)));
      num = arr
      k = parseInt(tem.join(''))
  }   
  let index = num.length - 1 //当前操作num的索引
  while (index >= 0 || k > 0) {
      sum = num[index] + (k % 10)
      if (sum >= 10) {
          k += 10 //这里把进位加到了k上,更加方便操作
          if(index === 0) flag = true
      }
      num[index] = sum % 10
      k = Math.floor(k / 10)
      index--
  }
  if (flag) num.unshift(1)
  return num
};
// @lc code=end

