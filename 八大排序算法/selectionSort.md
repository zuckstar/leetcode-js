### 算法名称

选择排序

### 实现思路

+ 从头遍历到尾部，找出所有项中最小的一个元素
+ 将这个元素和第一个元素交换
+ 对剩下的元素重复进行上面的操作，每次找出剩余中最小的
+ 最后的数组是升序排列的

### 算法分析

总共需要进行length * (length - 1) / 2 次比较，所以时间复杂度为O(n^2)，因为只需要有两个存放常量的空间，元素本身在原数组上进行交换，所以空间复杂度为O(1)

### 算法实现

```javascript
function selectionSort (arr) {
  let length = arr.length
  for(let i = 0; i < length; i++) {
    let min = arr[i]
    let num = i
    for(let j = i + 1; j < length; j++) {
      if(arr[j] < min){
         min = arr[j]
         num = j
      }
    }
    arr[num] = arr[i]
    arr[i] = min
  }

  return arr
}
```
