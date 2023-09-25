/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = 'AEIOUaeiou'
    let chars = s.split('')
    let left = 0
    let right = s.length - 1

    while (left < right) {
        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }
        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }

        [chars[left], chars[right]] = [chars[right],chars[left]]
        left++
        right--
    }
    return chars.join('')
};