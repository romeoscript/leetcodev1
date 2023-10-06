/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!chars.length) return 0;

  let index = 0; // Pointer to insert characters in the chars array
  let count = 1;

  for (let i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      count++;
    } else {
      chars[index++] = chars[i - 1]; // Insert the character into chars array

      if (count > 1) {
        // Insert each digit of the count into chars array
        for (let digit of count.toString()) {
          chars[index++] = digit;
        }
      }
      count = 1;
    }
  }

  // Update the length of chars to match the length of the compressed string
  chars.length = index;

  return index; // Return the length of the compressed string
};
