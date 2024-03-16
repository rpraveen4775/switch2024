/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let k = 0 ; k< nums.length; k++){
        for ( let i = 0, j = 1; j< (nums.length - k); j++, i++){
            if(nums[i]> nums[j]){
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i]=temp;
            }
        }
    }
};
