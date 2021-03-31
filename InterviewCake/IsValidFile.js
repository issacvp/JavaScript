function isValid(code) {

    // Determine if the input code is valid
    const codeArr = code.split('');
    const stack = [];
    for(let char of codeArr) {
      if(char === '(' || char === '[' || char === '{') {
        stack.push(char);
      }
      if(char === ')' || char === ']' || char === '}') {
        if(stack.length > 0) {
          var lastChar = stack.pop();
          if(char === ')' && lastChar !== '(') {
            return false;
          } else if (char === ']' && lastChar !== '[') {
            return false;
          } else if (char === '}' && lastChar !== '{') {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  
    return stack.length === 0 ? true : false;
  }
  
  
  // Tests
  
  let desc = 'valid short code';
  assertEqual(isValid('()'), true, desc);
  
  desc = 'valid longer code';
  assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);
  
  desc = 'mismatched opener and closer';
  assertEqual(isValid('([][]}'), false, desc);
  
  desc = 'missing closer';
  assertEqual(isValid('[[]()'), false, desc);
  
  desc = 'extra closer';
  assertEqual(isValid('[[]]())'), false, desc);
  
  desc = 'empty string';
  assertEqual(isValid(''), true, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }