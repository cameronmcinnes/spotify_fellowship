// Version using hash
// Time complexity O(n + m) where n is length of s and m is legnth of t
// Space complexity O(n) where n is the length of s.

// Space contstraint could be further optimized in another language to
// O(1) space by sorting s in place but JavaScript strings are immutable
// so need to create a new result string

function sortByString(s, t) {
  const indexHash = {};
  let resultStr = '';

  for (let i = 0; i < s.length; i++) {
    indexHash[s[i]] ? indexHash[s[i]]++ : indexHash[s[i]] = 1;
  }

  // helper to keep code DRY, closes over indexHash and resultStr
  const addCharsToResult = (char) => {
    if (indexHash[char]) {
      while (indexHash[char] > 0) {
        resultStr += char;
        indexHash[char]--;
      }
    }
  }

  for (let i = 0; i < t.length; i++) {
    addCharsToResult(t[i]);
  }

  // edge case: add any letters in s but not in t to the end of result
  Object.keys(indexHash).forEach((char) => {
    addCharsToResult(char);
  });

  return resultStr;
}






// Version using character Array (currently only works for lowercase
// letters but could be configured for more characters)
// Time complexity O(n + m) where n is length of s and m is legnth of t
// Space complexity O(n) where n is the length of s

function sortByStringCharArray(s, t) {
  const charArr = new Array(26).fill(0);
  let resultStr = '';


  for (let i = 0; i < s.length; i++) {
    charArr[s[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    const charIdx = t[i].charCodeAt(0) - 97;

    if (charArr[charIdx]) {
      while (charArr[charIdx] > 0) {
        resultStr += t[i];
        charArr[charIdx]--;
      }
    }
  }

  // Edge case: add any letters in s but not in t to the end of result
  charArr.forEach((count, idx) => {
    if (count) {
      while (count > 0) {
        resultStr += String.fromCharCode(97 + idx)
        count--;
      }
    }
  });

  return resultStr;
}
