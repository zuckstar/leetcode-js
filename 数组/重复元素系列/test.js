var findDuplicates = function(nums) {
  let n = nums.length
  let res = []


  for (let i = 0; i < n; i++) {
    nums[(nums[i]-1) % n]  += n
  }

  for (let i = 0; i < n; i++) {
      if(nums[i] > 2 * n) {
          res.push(i+1)
      }
  }
  return res
};

let res = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
console.log(res)