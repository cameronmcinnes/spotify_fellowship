// Question 2 -- decodeString(s): Given an encoded string, return
//its corresponding decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string
// inside the square brackets is repeated exactly k times. Note: k is
// guaranteed to be a positive integer.
//
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

// Time complexity: O(n) where n is the length of input string
// Space complexity: O(n)

//TODO handle error of too many brackets?

function decodeString(s) {
  let stack = [];

  for (let i of s) {
    if (i !== ']') {
        stack.push(i);
    } else {
      let temp = "";
      while (stack[stack.length - 1] !== '[') {
        temp = stack.pop() + temp;
      }

      // pop off opening bracket '['
      stack.pop();

      // handles case of repeat greater than 9
      let count = "";
      while (stack.length > 0 && stack[stack.length - 1].match(/[0-9]+/)) {
        count = stack.pop() + count;
      }
      count = parseInt(count);

      let subStr = "";
      while (count > 0) {
        subStr += temp ;
        count--;
      }

      // push subStr back onto the stack to be added to result
      // this allows inputs like '2[a]2[b]'
      stack.push(subStr);
    }
  }

  let result = "";
  while (stack.length > 0) {
      result = stack.pop() + result;
  }
  return result;
};

// TODO recursive approach?
