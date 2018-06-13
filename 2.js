// Time complexity: O(n) where n is the length of input string
// Space complexity: O(n)

function decodeString(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== ']') {
        stack.push(char);
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
