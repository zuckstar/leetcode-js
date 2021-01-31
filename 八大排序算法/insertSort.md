### 算法名称

插入排序

### 实现思路

1. 从第一个元素开始，该元素可以认为已经被排序
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
5. 将新元素插入到该位置后
重复步骤2~5

### 算法分析

插入排序在实现上，通常采用数组内部交换排序，空间复杂度为 O(1),在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间, 最差的情况下每个元素都要移动 i 个位置（i 为元素的下标), 共 n 个元素，时间复杂度为 O(n^2)

### 算法实现

```javascript
function insertSort (arr) {
  let length = arr.length

  let currentIndex, current
  for(let i = 1; i < length; i++) {
    // 记录当前位置
    currentIndex = i
    current = arr[i]

    // 逐步向后挪动该元素前已经排序好的元素，找到适合插入的位置
    while(currentIndex > 0 && current < arr[currentIndex - 1]) {
      arr[currentIndex] = arr[currentIndex - 1]
      currentIndex--
    }
    // 插入当前元素
    arr[currentIndex] = current
  }

  return arr
}
```
