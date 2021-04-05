/*
面试题30. 包含min函数的栈
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

 

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
 

提示：

各函数的调用总次数不超过 20000 次

https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
*/ 

// 思路：利用一个辅助栈来解决


/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.stack = []
  this.helperStack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if(this.helperStack.length == 0 || x <= this.helperStack.slice(-1)) { // 注意这里的条件，当辅助栈为空的时候，也允许添加元素
      this.helperStack.push(x)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if(this.stack.pop() == this.helperStack.slice(-1) ) {
      this.helperStack.pop()
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack.slice(-1)
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
  return this.helperStack.slice(-1)
};
