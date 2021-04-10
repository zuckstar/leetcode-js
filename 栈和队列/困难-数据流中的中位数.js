/*
剑指 Offer 41. 数据流中的中位数
如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例 1：

输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
示例 2：

输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
 

限制：

最多会对 addNum、findMedian 进行 50000 次调用。
https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/
*/ 


// 思路一：二分查找并插入指定的位置
// 注意二分法的细节
 var MedianFinder = function() {
  this.data = []
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  let length = this.data.length
  // 如果数据流为空，则直接推入数字
  if(!length) {
      this.data.push(num)
      return
  }

  // 开始二分查找
  let left = 0
  let right = length - 1
  // 二分法一般情况下需要 left <= right 否则会漏判掉左右边界的情况
  while(left <= right) {
      let mid = (left+right) >> 1
      if(this.data[mid] == num) {
          this.data.splice(mid, 0, num)
          return
      } else if(this.data[mid] < num) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }

  this.data.splice(left, 0, num)
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  let length = this.data.length
  if(!length) return null
  let mid = (length-1) >> 1
  if(length % 2) {
      // 奇数
      return this.data[mid]    
  } 
  // 偶数
  return (this.data[mid] + this.data[mid+1]) / 2
};

// 思路二：利用大顶堆和小顶堆的数据结构来解决，把数据流分成两个部分，前一半放在大顶堆，可以以 O(1)的时间取出最大值，后一半放在小顶堆，可以以 O(1)的时间取出最小值
// 根据数据流数量的奇数偶数情况，分别求中间数，或者求两个顶堆的平均数
// 但是由于 js 没有堆结构，需要手动实现一个堆，这里不再赘述
