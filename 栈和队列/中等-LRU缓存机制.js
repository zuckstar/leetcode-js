/*
146. LRU 缓存机制
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
你是否可以在 O(1) 时间复杂度内完成这两种操作？

https://leetcode-cn.com/problems/lru-cache/
*/

/*
LRU解析：

假设当前有一个执行栈，栈点保存之前执行的数据缓存

例如分别保存调用，1,2,3,2,6

栈的情况如下：
[1]
[2,1]
[3,2,1]
[2,3,1]
[6,2,3,1]

如果一个数据被反复调用，它就会被优先提前到栈顶，栈的空间是有限的，如果栈的空间不够用了，栈底部的数据就会被移除。
例如当前栈空间为4，如果再存储一个数据，7，则

[7,6,2,3]

key 为 1 的数据就会被移除，再次访问该数据的时候，就只能返回 -1

*/
// 思路：双向链表+hashMap
// hashMap 方便对节点快速定位，双向链表方便对数据进行快速删除

class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.hashMap = new Map()
    this.count = 0

    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()

    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key) {
    let node = this.hashMap.get(key)

    if (!node) return -1

    this.moveToHead(node)

    return node.value
  }

  put(key, value) {
    let node = this.hashMap.get(key)

    if (!node) {
      if (this.count === this.capacity) {
        this.removeTailNode()
      }

      let node = new ListNode(key, value)
      this.hashMap.set(key, node)
      this.addToHead(node)
      this.count++
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeTailNode() {
    let tail = this.dummyTail.prev
    this.hashMap.delete(tail.key)
    this.removeFromList(tail)
    this.count--
  }

  removeFromList(node) {
    let prev = node.prev
    let next = node.next

    prev.next = next
    next.prev = prev
  }

  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next

    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }
}
