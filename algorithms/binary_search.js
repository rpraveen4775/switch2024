// Binary Search Submitted on Leet Code. 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binary_search(nums, target, low, high) {
    let mid = Math.floor((low + high)/2); 

    if (nums[mid] == target){
        return mid
    }

    if (low > high){
        return -1;
    }

    if(nums[mid]> target) {
        high = mid -1 ;
        return binary_search(nums, target, low, high);
    } else if (nums[mid] < target) {
        low = mid + 1;
        return binary_search(nums, target,low, high)
    }
}
var search = function(nums, target) {
  return binary_search(nums,target,0, nums.length-1);
};
