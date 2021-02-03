### 算法名称

希尔排序

### 算法介绍

希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序，同时该算法是冲破O(n2）的第一批算法之一，希尔排序是不稳定的

### 实现思路

　希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。

+ 选择增量 gap, 一般增量设置为 gap = length/2
+ 根据增量给数组分成 gap 个组
+ 对每个分组进行直接插入排序
+ 每轮排序后缩小增量 gap=gap/2, 直至 gap = 1 排序后停止

### 算法分析

时间复杂度O(n2)

### 算法实现

```javascript
function shellSort(arr) {
  
  let length = arr.length

  for(let gap = Math.floor(length/2); gap > 0; gap = Math.floor(gap/2)) {
    for(let i = gap; i < length; i++) {
      let j = i
      let current = arr[i]
      while(j - gap >= 0 && current < arr[j-gap]) {
        arr[j] = arr[j-gap]
        j = j - gap
      }
      arr[j] = current
    }
  }

  return arr
}
```
