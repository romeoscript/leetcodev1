/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    reduced = init 
    
    for(const n of nums){
       reduced = fn(reduced, n)
    }
    
    return reduced
    
}; 