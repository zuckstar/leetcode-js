/*
75. 颜色分类
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
*/


// 颜色分类，或者也可称为新西兰国旗问题，可以用双指针来解决
// 条件，1. 不使用排序算法 2. 你能想出一个仅使用常数空间的一趟扫描算法吗

var sortColors = function(nums) {
  let start = 0
  let end = nums.length - 1

  let cursor = 0

  while(cursor <= end && start <= end) {
      if(nums[cursor] === 0) {
          // 当前颜色是红色
          let tmp = nums[start]
          nums[start++] = nums[cursor]
          nums[cursor++] = tmp
      } else if(nums[cursor] === 2) {
          // 当前是蓝色
          let tmp = nums[end]
          nums[end--] = nums[cursor]
          nums[cursor] = tmp
      } else {
          cursor++
      }
  }
  return nums
};

