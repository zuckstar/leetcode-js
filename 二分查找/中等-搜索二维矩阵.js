/*

74. 搜索二维矩阵
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-a-2d-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 


// 思路，尽管该题是二维数组，但是从题意可知，元素值从左至右，从上至下递增，完全可以把该二维数组当成一维数组的二分法来求解
// 关键点就在于求 mid 的横纵坐标   x = mid // col , y = mid % col

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let n  = matrix.length 
    if(n === 0) return false

    let m = matrix[0].length

    let left = 0
    let right = n * m - 1

    while(left <= right) {
        let mid = left + ((right - left) >> 1)
        let value = matrix[Math.floor(mid / m)][mid % m]
        if(value  === target) {
            return true
        } else if (target < value){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
};
