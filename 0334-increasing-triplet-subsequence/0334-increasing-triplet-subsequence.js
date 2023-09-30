/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Number.POSITIVE_INFINITY;
  let second = Number.POSITIVE_INFINITY;

  for (let n of nums) {
    if (n <= first) {
      first = n;
    
    } else if (n <= second) {
      second = n;
    } else {
      return true;
    }
  
  }
    return false
};