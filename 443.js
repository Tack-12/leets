var copmress = function (chars) {
  let i = 0;
  let j = 0;

  while (i < chars.length) { // While  i is still in arr
    let count = 1; // Create a temp Count for the digit.
    let curr = chars[j]; // Current element of the group

    while (j < chars.length && chars[j] === curr) { // If J is still in arr & the val of J is same as the current grp.
      j++;
      count++;
    }
    chars[i++] = curr; //Add the Char to the current I (index of the arr and increment the I )

    if (count > 1) {
      for (let digit of count.toString()) {
        chars[i++] = digit;
      }
    }
  }
  return i;
};
