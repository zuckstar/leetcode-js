/*

337. 打家劫舍 III

在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*
分析：每个节点都有选和不选两种状态

当选中当前节点的时候，当前的最大值就能够获取当前节点的值和其孙子节点最大值的总和

当不选中当前节点的时候，当前的最大值就能够获取其左右孩子节点的最大值的总和
*/


var rob = function (root) {
  const dfs = (r) => {
    if (!r) return [0, 0]

    let left = dfs(r.left)
    let right = dfs(r.right)

    let selected = r.val + left[1] + right[1]
    let notSelected = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

    return [selected, notSelected]
  }

  let rootStatus = dfs(root)

  // 选或者不选当前根节点
  return Math.max(rootStatus[0], rootStatus[1])

};