/*
面试题 17.09. 第 k 个数

有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

示例 1:

输入: k = 5

输出: 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/get-kth-magic-number-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

var getKthMagicNumber = function(k) {
    
    let dp = new Array(k).fill(1)

    // 这里记录的是位置！
    let a3 = 0
    let a5 = 0
    let a7 = 0  

    for(let i = 1; i < k; i++) {

        dp[i] = Math.min(dp[a3]*3, dp[a5]*5, dp[a7]*7)

        // 这其中包含了 3*7 和 7*3 、3*5 和 5*3 的情况，都会被一起跳过
        if(dp[i] === dp[a3]*3) a3++
        if(dp[i] === dp[a5]*5) a5++
        if(dp[i] === dp[a7]*7) a7++

    }

    return dp[k-1]

};