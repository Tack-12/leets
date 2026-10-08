var LongestSubstringWithougRepeatingChars = function (s) {
  let left;
  let maxval = 0;
  let charset = new Set();

  for (let right = 0; right < s.length; right++) {
    console.log(charset);
    while (charset.has(s[right])) {
      charset.delete(s[right]);
      left += 1;
    }
    charset.add(s[right]);
    maxval = Math.max(maxval, right - left + 1);
  }
  return maxval;
};

console.log(LongestSubstringWithougRepeatingChars("abcabcbb"));
