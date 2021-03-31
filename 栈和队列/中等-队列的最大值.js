/*
剑指 Offer 59 - II. 队列的最大值
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：

输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
示例 2：

输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
 

https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
*/ 

// 双队列：维护一个单调的双端队列

var MaxQueue = function() {
  this.queue = []
  this.dequeue = []
};

/**
* @return {number}
*/
MaxQueue.prototype.max_value = function() {
  return this.dequeue[0] ? this.dequeue[0] : -1
};

/** 
* @param {number} value
* @return {void}
*/
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value)

  // 关键一步：始终保证加入 dequeue 的数值比队列前部的小，如果加入的新值比原来队尾的值要大，要把队尾的值弹出
  while(this.dequeue.length && value >= this.dequeue[this.dequeue.length - 1]) {
      this.dequeue.pop()
  }
  this.dequeue.push(value)
};

/**
* @return {number}
*/
MaxQueue.prototype.pop_front = function() {
  let v = this.queue.shift()
  if(this.dequeue[0] === v) this.dequeue.shift()
  return v ? v : -1

};
