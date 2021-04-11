/*
剑指 Offer 51. 数组中的逆序对
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:

输入: [7,5,6,4]
输出: 5
 

限制：

0 <= 数组长度 <= 50000


https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
*/ 

// 思路：利用归并排序分治思想，在回收治理的过程中计算逆序对个数，减少时间复杂度，最终的时间复杂度为 O(nlogn)

/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function(nums) {
    if(nums.length < 2) return 0
    let count = 0
    const merger = (left, right) => {
        let res = []

        let n = left && left.length
        let m = right && right.length
        let i = 0
        let j = 0

        while(i < n && j < m) {
            if(left[i] <= right[j]) {
                res.push(left[i++])
            }else {
                res.push(right[j++])
                count += n - i
            }
        }

        while(i < n) {
            res.push(left[i++])
        }
        while(j < m) {
            res.push(right[j++])
        }

        return res
    }
    const mergeSort = (arr) => {
        if(arr.length === 1) 
            return arr

        let mid = arr.length >> 1
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)

        return merger(mergeSort(left), mergeSort(right))
    }

    mergeSort(nums)
    return count
};