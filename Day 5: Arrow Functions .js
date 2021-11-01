/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(number => 
        isOdd(number) ? number*2:number*3
    ) 
}

function isOdd(num) {
    return !(num%2 === 0)
}