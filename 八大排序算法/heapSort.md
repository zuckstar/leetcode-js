### 算法名称

堆排序

### 实现思路

+ 堆是一个完全二叉树
+ 大顶堆：根结点为最大值，每个结点的值大于或等于其孩子结点的值。
+ 小顶堆：根结点为最小值，每个结点的值小于或等于其孩子结点的值。

过程：
1. 建堆
2. 从最后一个非叶子节点开始，从右到左，从下到上对节点进行堆化
3. 每次可以得到堆顶的最大值，并提取出来（让堆顶和堆末尾的节点交换）
4. 排除掉堆末尾的节点，继续 2- 3 步
5. 最终可以得到从小到大的数据结果

### 算法分析

时间复杂度 O(nlogn)

### 算法实现

```javascript


// 交换函数
const swap = (tree, x, y) => {
  let temp = tree[x]
  tree[x] = tree[y]
  tree[y] = temp
}


// 堆化（某个节点堆化）,tree 是储存树（完全二叉树）节点的数组， n 是树的节点个数，i 是当前节点
const heapify = (tree, n, i) => {
  // 左孩子
  let c1 = 2 * i + 1
  // 右孩子
  let c2 = 2 * i + 2

  let max = i

  // c1 < n 保证孩子节点在数组范围内
  if(c1 < n && tree[c1] > tree[max]) {
    max = c1
  }

  if(c2 < n && tree[c2] > tree[max]) {
    max = c2
  }

  // 交换节点，使得最大值节点位于堆顶
  if(max != i) {
    swap(tree, max, i)
    // 若发生交换，则交换的节点需要继续递归
    heapify(tree, n, max) 
  }
}

// 无序堆建堆
const build_heap = (tree, n) => {
  let last_node = n - 1
  let parent = Math.floor((last_node - 1)/2)

  // 从最后一个非叶子节点开始从右往左，从下往上按序对节点堆化
  for(let i = parent; i >= 0; i--) {
    heapify(tree, n, i)
  }
}

const heap_sort = (tree, n) => {
  // 首先建堆
  build_heap(tree, n)

  // 1 建堆成功后取第一个节点的值和最后一个节点交换（获取最大值）
  // 2 然后对第一个节点重新堆化（此时不用考虑最后一个节点，即总长度 - 1）
  // 重复 1 - 2 步，即可依次拿到堆中的最大值，并得到从小到大排序的结果
  for(let i = n - 1; i > 0; i--) {
    swap(tree, i, 0)
    heapify(tree, i, 0)
  }
}

let tree = [2, 5, 3, 1, 10, 4, 0]
heap_sort(tree, tree.length)
console.log(tree)
```
