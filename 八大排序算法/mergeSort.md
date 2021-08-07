### 算法名称

归并排序

### 算法介绍

归并排序（MERGE-SORT）是利用归并的思想实现的排序方法，该算法采用经典的分治（divide-and-conquer）策略（分治法将问题分(divide)成一些小的问题然后递归求解，而治(conquer)的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。

### 算法分析

时间复杂度：O(N*logN)

1. 分治法，分而治之，先分再合

2. 按中值把数组分为两个部分，分到左右两个数组的元素只有一个为止

3. 对比左右两个数组元素值的大小，从左至右按序遍历数组，把它们合并到一个大的数组

4. 最终合并的结果就是排序后的结果

### 算法实现

```javascript
function merger(left, right) {

  let res = []
  
  let n = left && left.length
  let m = right && right.length
  let i = 0
  let j = 0

  while(i < n && j < m) {
    if(left[i] <= right[j]) {
      res.push(left[i++])
    } else {
      res.push(right[j++])
    }
  }

  while(i < n) {
    res.push(left[i++])
  }

  while(j < m) {
    res.push(right[j++])
  }

  return res

}

function mergeSort(arr) {
  if(arr.length === 1) 
    return arr

  let mid = Math.floor(arr.length / 2) 
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merger(mergeSort(left), mergeSort(right))
}
```
