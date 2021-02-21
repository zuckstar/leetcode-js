/*
剑指 Offer 11. 旋转数组的最小数字
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0

https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
*/ 

/*

分析：

旋转数组：把一个有重复数字的有序数组，末尾的一部分整体移动到头部

根据旋转数组的性质，旋转数组是由两个有序数组组合在一起的

得出两个顺序数组的分界点，就是该数组的最小数字

该题要考虑一种特殊的情况，就是数组的元素是有可能重复的

*/ 
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {

  let left = 0
  let right = numbers.length - 1

  while(left < right) {
      let mid = left + ((right - left) >> 1)

      if(numbers[mid] > numbers[right]) {
          // mid 此时不可能是最小值，所以 left 指针跳过 mid
          left = mid + 1
      } else if(numbers[mid] < numbers[right]) {
          // mid 此时有可能是最小值，所以 right 指针不能跳过 mid
          right = mid
      } else {
          // mid == right, 存在元素相等的情况，使右边界指针左移，重新做二分查找，最差的情况下就是从右向左遍历整个数组
          right--
      }
  }

  return numbers[left]
};
