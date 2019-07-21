// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // console.log(wordArr);
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // console.log(sorted);
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  let i = 0,
    chunkedArr = [],
    arrLen = arr.length;
  while (i < arrLen) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return [].concat.apply([], arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return removeSpecialChars(str1) === removeSpecialChars(str2);
}
// Remove special characters from string
function removeSpecialChars(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newStr;
}

// Call Function
// const output = longestWord("Hello, my name is Brad");
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
// const output = isAnagram("Dormitory", "dirty room##");
// const output = letterChanges("Dormitory");
const output = letterChanges("hello there");

console.log(output);
