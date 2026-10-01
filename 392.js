var isSubsequence = function (s, t) {
  ptr1 = 0;
  for (i = 0; i < t.length; i++) {
    if (t[i] == s[ptr1]) {
      ptr1++;
    }
  }

  return ptr1 == s.length;
};

s = "aec";
t = "abcde";

console.log(isSubsequence(s, t));
