### 算法名称

冒泡排序

### 实现思路

+ 比较相邻两个元素的大小，如果第一个比第二个大，就交换它们
+ 从头遍历到尾部，当一轮遍历完后，数组最后一个元素是最大的
+ 除去最后一个元素，对剩下的元素重复执行上面的流程，每次找出剩余元素中最大的
+ 遍历完后，数组是升序的

### 算法分析

总共需要进行length * (length - 1) / 2 次比较，所以时间复杂度为O(n^2)，因为只需要有一个存放常量的空间，元素本身在原数组上进行交换，所以空间复杂度为O(1)

### 算法实现

外层循环是控制了循环周期数，内层循环则是项与项之间的排序比较

```javascript
// 待排序数组
let arr = [7,0,6,3,5,9,2,8,1]


function bubbleSort(array) {
  if(!array instanceof Array) {
    throw new Error('参数必须为数组')
  }
  
  const length = array.length

  for(let i = 0; i < length - 1; i++) {
    for(let j = 0; j < length - i; j++ ) {
      if(array[j] > array[j+1]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }

  return array
}

console.log(bubbleSort(arr)) // [0, 1, 2, 3, 5, 6, 7, 8, 9]
```

### 算法优化

冒泡排序的外层只是用来控制循环的次数，所以正序和逆序都没有影响，但是逆序语义化更好，外层变量等于当前排序好的结尾元素的序号，可以依此来进行优化

我们在每一轮循环中，可以记住最后一次交换的元素，这之后的元素就肯定是已经排完序的，这样可以减少总的循环次数

```javascript
function bubbleSort(array) {
  if(!array instanceof Array) {
    throw new Error('参数必须为数组')
  }
  
  const length = array.length

  for(let i = length - 1; i > 0;) {
    let cursor = 0
    for(let j = 0; j < i; j++ ) {
      if(array[j] > array[j+1]) {
        cursor = j
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
    i = cursor
  }

  return array
}
```
