/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=0
    let len = nums.length;
    for(let p=0;p<len;p++){
        if(nums[p]==val) {
            k++;
        }
    }
    for(let i = 0; i<len; i++){
        for(let j=0 ; j < len -i;j++){
            if(nums[j]==val){
                nums[j]=nums[j+1];
                nums[j+1]=val;
            }
        }
    }
    console.log(nums);
    return len-k;
};
