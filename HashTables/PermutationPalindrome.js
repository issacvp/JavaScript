// Map implementation 

// function hasPalindromePermutation(theString) {
//     const charMap = {};
//     for (let char of theString.split('')) {
//         if (char in charMap) {
//             charMap[char] += 1
//         } else {
//             charMap[char] = 1;
//         }
//     }
//     let length = 0;
//     let oddCount = 0;
//     for (let char in charMap) {
//         if (charMap[char] % 2 > 0) {
//             oddCount++;
//         }
//         length++;
//     }
//     console.log(charMap);
//     if (oddCount === 0 && length % 2 === 0) {
//         return true;
//     } else if (oddCount === 1 && length % 2 >= 0) {
//         return true;
//     }
//     return false;
// }

// Set implementataion
function hasPalindromePermutation(theString) {

    // Track characters we've seen an odd number of times
    const unpairedCharacters = new Set();
  
    for (let char of theString) {
      if (unpairedCharacters.has(char)) {
        unpairedCharacters.delete(char);
      } else {
        unpairedCharacters.add(char);
      }
    }
  
    // The string has a palindrome permutation if it
    // has one or zero characters without a pair
    return unpairedCharacters.size <= 1;
  }

















// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}