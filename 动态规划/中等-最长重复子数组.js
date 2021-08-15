/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let n1 = nums1.length
  let n2 = nums2.length

  let dp = new Array(n1 + 1)

  let max = 0

  for (let i = 0; i <= n1; i++) {
    // 初始化整个dp矩阵，每个值为0
    dp[i] = new Array(n2 + 1).fill(0)
  }

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      dp[i][j] = nums1[i - 1] === nums2[j - 1] ? dp[i - 1][j - 1] + 1 : 0
      max = Math.max(dp[i][j], max)
    }
  }

  return max
}
