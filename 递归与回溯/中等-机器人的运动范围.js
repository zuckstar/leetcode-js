/*
剑指 Offer 13. 机器人的运动范围
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20
https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
*/ 

// 一定要注意！js 中二维数组的初始化方式，不能采用 new Array(m).fill([]) 的方式，因为这样会导致新的二维数组中的子数组引用一样！导致修改任意数组，其它数组也发生变化！

var movingCount = function(m, n, k) {
    
  let visited = new Array(m)

  for(let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false)
  }

  // 位数求和
  const getSumOfDigits = (num) => {
      let sum = 0
      while(num) {
          sum += num % 10
          num = Math.floor(num/10)
      }
      return sum
  }

  let dfs = (i, j, visited) => {
      if(i >= m || j >= n || (getSumOfDigits(i) + getSumOfDigits(j) > k) || visited[i][j] === true) {
          return 0
      }
      
      visited[i][j] = true

      return 1 + dfs(i+1, j, visited) + dfs(i, j+1, visited)

  }

  return dfs(0,0,visited)
};


// 易于理解的 DFS 解法， 作者：malin-code

var movingCount2 = function(m, n, k) {
    let step = {}

    let num = 0
    function dfs(i,j){
        if(i<0 || j<0 || i>=m || j>=n) return

        if(!step[`${i}|${j}`] && canMove(i,j,k)){
            step[`${i}|${j}`] = true
            num++

            dfs(i-1,j)
            dfs(i+1,j)
            dfs(i,j-1)
            dfs(i,j+1)
        }
    }
    dfs(0,0)
    return num
};
function canMove(i,j,k){
    let vali = i.toString().split('').reduce((a,b)=>{return Number(a) + Number(b)})
    let valj = j.toString().split('').reduce((a,b)=>{return Number(a) + Number(b)})
    if((Number(vali) + Number(valj)) <= k) return true
    return false
}



