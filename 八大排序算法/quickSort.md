### 算法名称

快速排序

### 实现思路

将数组的第一个数字作为基准，最后使得基准数字位于数组中间某个位置，它的左边的数字都比它小，它的右边的数字都比它大。

1、选择数组中间数作为基数，并从数组中取出此基数

2、准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器

3、递归处理两个容器的元素，并将处理后的数据与基数按大小合并成一个数组，返回

### 算法分析

最坏时间复杂度：O(n^2)
平均时间复杂度：O(nlogn)

### 算法实现

阮一峰，快排，2011

```javascript

function quickSort(array) {
  
  if(array.length <= 1) return array

  let pivotIndex = Math.floor(array.length / 2)
  
  let pivot = array.splice(pivotIndex, 1)[0]

  let left = []
  let right = []

  for(let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}
```
阮大师的快排算法，简单易懂，思路清晰，但是调用 splice 函数取基准值会导致额外的耗时，而定义 left 和 right 两个数组来存储，也增加了空间复杂度


### 算法优化

利用下标来记录当前遍历的位置，以此来减少对数组的操作及空间复杂度

```javascript
function quickSort(arr, left, right) {
  if(left >= right) {
    return arr
  }

  let i = left, 
      j = right,
      pivot = arr[left]

   while(i < j) {
    //  从右向左找到比基准值小的数
     while(i < j && arr[j] >= pivot) {
       j--
     }

    // 从左向右找到比基准值大的数
     while(i < j && arr[i] <= pivot) {
       i++
     }

     // 交换 i，j 位置的值
     if(i < j) {
       let temp = arr[j]
       arr[j] = arr[i]
       arr[i] = temp
     }
   }

   // 基准值归位，和当前比基准值小的数 arr[i] 交换
   arr[left] = arr[i]
   arr[i] = pivot

   // 继续递归基准值的左边和右边，直至所有元素顺序归位
   quickSort(arr, left, i - 1)
   quickSort(arr, i + 1, right)

   return arr
}
```

