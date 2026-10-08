var validAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  if (s == t) {
    return true;
  }
  return false;
};

console.log(validAnagram("anagram", "nagaram"));
