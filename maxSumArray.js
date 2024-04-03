/*
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/
'use strict'
let nums = [1]

var maxSubArray = function(nums) {
    let maxSum=nums[0];
    let streakSum=nums[0];
    for(let i =1;i<nums.length;i++){

        streakSum = Math.max(nums[i],streakSum+nums[i]);
        console.log("Streak Sum ",streakSum);
        maxSum = Math.max(maxSum, streakSum)
        console.log("Max Sum ",maxSum)
        console.log(maxSum)


    }
    console.log(maxSum)
};

maxSubArray(nums)
