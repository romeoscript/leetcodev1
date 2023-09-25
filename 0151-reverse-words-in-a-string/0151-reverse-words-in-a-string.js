/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ')
    let reversed = arr.reverse().join(' ')
    return reversed.trim().replace(/\s+/g, ' ')
};