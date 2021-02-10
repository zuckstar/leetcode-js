### 算法名称

基数排序

### 算法介绍

基数排序也叫桶排序或者箱排序，他是桶排序的一种扩展算法，基数排序的数字是有范围的，均由 0 - 9 这10个数字组成，相继按个、十、百...进行排序

### 实现思路

基本思想： 多次桶排序（分配 + 收集 ）
1. 根据每个数的位数，按个位数、十位数、百位数逐个进行桶排序
2. 需要借助数组 bucketElementCounts 来记录当前每个桶的数量个数，且进行下轮桶排序前需要清零该数组

### 算法分析

时间复杂度: O(k*(n+m)) 
  k: 关键字个数
  m: 关键字取值范围为 m 个值（桶的个数)

空间复杂度: O(n+m)

稳定性: 稳定

### 算法实现

```javascript
function getDigitOfElement(element, digit) {
  if(!element) {
    return NaN
  }
  let res =  Math.floor(element / Math.pow(10, digit - 1)) % 10
  return res
}
function radixSort(arr) {
  let length = arr.length

  // 初始化 10 个桶和每个桶的空间
  let buckets =  new Array(10)
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = new Array(arr.length);
  }
  // 得到数组中位数最大的数
  let max = arr[0]
  arr.forEach((item)=>{
    if(item > max) {
      max = item
    }
  })

  // 得到最大位数的长度
  let maxLength = (max + '').length

  // 记录每个桶中放入的个数
  let bucketElementCounts = new Array(10).fill(0)

  // 第一层：对各个位数进行处理
  for(let i = 0; i < maxLength; i++) {
    // 第二层：对每个数进行处理
    for(let j = 0; j < length; j++) {

      // 取出每个元素的各位的值
      let digitOfElement = getDigitOfElement(arr[j], i + 1)
      // 放到对应位数的桶中
      buckets[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j]
      bucketElementCounts[digitOfElement]++
    }

    // 把桶里面的元素放回数组
    let index = 0
    for(let j = 0; j < buckets.length; j++) {
      for(let k = 0; k < bucketElementCounts[j]; k++) {
        arr[index] = buckets[j][k]
        index++
      }
      bucketElementCounts[j] = 0
    }
  }
  return arr
}

const arr = [53,4,542,758,14,214,391,189]

console.log(radixSort(arr))
```
