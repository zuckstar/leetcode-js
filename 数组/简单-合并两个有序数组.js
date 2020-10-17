/*
  88. 合并两个有序数组
  https://leetcode-cn.com/problems/merge-sorted-array/
  
  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

  你可以假设除了整数 0 之外，这个整数不会以零开头。


  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。


  说明:

  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
  你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
  

  示例:

  输入:
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  输出: [1,2,2,3,5,6]
  
*/


const nums1 = [1, 2, 3, 0, 0, 0]
const nums2 = [2, 5, 6]
const log = console.log

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/* 优化前：双指针从后往前覆盖法 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  for (let k = m + n - 1; k >= 0; k--) {
    if (i < 0 && j >= 0) {
      nums1[k] = nums2[j--]
    } else if (i >= 0 && j < 0) {
      nums1[k] = nums1[i--]
    } else if (nums2[j] > nums1[i]) {
      nums1[k] = nums2[j--]
    } else {
      nums1[k] = nums1[i--]
    }
  }
  return nums1
};

/* 优化后：语法简化 */
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1
  m--
  n--

  while (m >= 0 && n >= 0) {
    nums1[i--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
  }

  if (n >= 0) {
    nums1.splice(0, i + 1)
    nums1.unshift(...nums2.splice(0, i + 1))
  }
  return nums1
};


log(merge(nums1, 3, nums2, 3))
