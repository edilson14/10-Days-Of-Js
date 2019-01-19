/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function (x, y) { return x > y })
    nums = [...new Set(nums)]
    
    return nums[nums.length-2]   
}