var reverseWords = function (s) {
  arr = s.split(" ");
  var newSentence = "";

  console.log(arr);

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == "") {
      newSentence += arr[i];
    } else {
      newSentence += arr[i] + " ";
    }
  }

  return newSentence.trim();
};

newWord = reverseWords("the sky is blue");
nextWord = reverseWords(" hello world ");

if (nextWord == "world hello") {
  console.log(true);
} else {
  console.log(false);
}
console.log(nextWord);
