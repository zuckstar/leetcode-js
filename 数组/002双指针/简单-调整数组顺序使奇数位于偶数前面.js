/*
剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 

提示：

0 <= nums.length <= 50000
1 <= nums[i] <= 10000

https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
*/ 

// 解法一：利用sort函数 > 0 则 [b,a] 小于 0 则 [a,b] 等于 0 则相对位置不变
var exchange = function(nums) {
  nums.sort((a,b)=>{
     return b % 2 - a % 2
  })
  return nums
};

// 解法二：头尾指针法

var exchange2 = function(nums) {
  let left = 0
  let right = nums.length - 1

  const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]

  while(left < right) {

      if((nums[left] & 1)) {
          left++
          continue
      }

      if(!(nums[right] & 1)) {
          right--
          continue
      }

      swap(nums, left++, right--)
  }

  return nums
};

// 解法三；快慢指针法
var exchange3 = function(nums) {

  const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]

  let fast = 0, slow = 0

  while(fast < nums.length) {
      if(nums[fast] & 1) {
          swap(nums, fast, slow)
          slow++
      }
      fast++
  }

  return nums
};


// 解法四：分治法
var exchange4 = function(nums) {

  let odd = [], even = []

  nums.forEach(num => {
      if(num % 2) {
          odd.push(num)
      } else {
          even.push(num)
      }
  }) 


  return odd.concat(even)
};
