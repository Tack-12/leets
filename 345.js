var checkVowels = function (s) {
  newStr = s.toLowerCase();
  if (
    newStr == "a" ||
    newStr == "e" ||
    newStr == "i" ||
    newStr == "o" ||
    newStr == "u"
  ) {
    return true;
  }
  return false;
};

var reverseVowels = function (s) {
  var newList = [];
  newString = s.split("");
  for (i = 0; i < newString.length; i++) {
    if (checkVowels(newString[i])) {
      newList.push(newString[i]);
    }
  }
  len = newList.length - 1;
  for (j = 0; j < newString.length; j++) {
    if (checkVowels(newString[j])) {
      newString[j] = newList[len];
      len--;
    }
  }
  console.log(newList);
  return newString;
};

console.log(reverseVowels("leetcode"));
