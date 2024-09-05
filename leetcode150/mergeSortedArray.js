/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // // first loop to vacate space at the beggining of the array where values are to be merged
    let topple = 0;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if ((i - n >= 0) || (i==n)) {
            nums1[i] = nums1[i - n];
        } else {
            nums1[i] = 0;
        }
    }
    console.log(nums1);

    let firstptr = n;
    let secondptr = 0;
    let insertptr = 0;
    while ((insertptr < (m + n)) && (secondptr < n)) {
        if (nums1[firstptr] <= nums2[secondptr]) {
            nums1[insertptr] = nums1[firstptr];
            firstptr++;
            insertptr++;
        } else {
            nums1[insertptr] = nums2[secondptr];
            secondptr++
            insertptr++;
        }
    }
    console.log(nums1);
};  
