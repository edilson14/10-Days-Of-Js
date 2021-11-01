/*
 * Create the function factorial here
 */


/**
 * 
 */
function factorial(number) {
    return number > 1 ? number * factorial(number-1) : 1
}