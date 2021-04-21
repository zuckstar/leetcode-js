/*
剑指 Offer 40. 最小的k个数
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 

限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000

https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
*/ 

// 解法一：排序后取前 k 个数
// 时间复杂度：O(n\log n)O(nlogn)，其中 nn 是数组 arr 的长度。算法的时间复杂度即排序的时间复杂度。
 var getLeastNumbers = function(arr, k) {
  arr.sort((a,b)=>{
      return a-b
  })
  return arr.slice(0,k)
};

// 解法二：基于快排的 partition
var getLeastNumbers = function(arr, k) {
  const quickSort = (arr, k, l, r) => {
      let i = l, j = r
      // 默认基准值为 arr[l]
      while(i < j) {
          while(i < j && arr[j] >= arr[l]) j--
          while(i < j && arr[i] <= arr[l]) i++

          [arr[i] ,arr[j]] = [arr[j], arr[i]] // 左右交换位置
      }
      [arr[l], arr[i]] = [arr[i], arr[l]] 

      if(i > k) return quickSort(arr, k, l, i - 1) // 继续递归，直到位置为 k 的数归位为止
      if(i < k) return quickSort(arr, k, i + 1, r)
      return arr.slice(0,k)
  }
  if(k >= arr.length) return arr // k 若超出数组的长度则直接返回数组
  return quickSort(arr, k, 0, arr.length - 1)
};
