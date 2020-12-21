//c a k e  p o u n d  s t e a l 
//e k a c  d n u o p  l a e t s
//s t e a l  p o u n d  c a k e

function reverseWords(message) {
    let j = 0;
    for (let i = 0; i <= message.length; i++) {
        if ( i === message.length || message[i] === ' ') {
            _reverse(message, j, i - 1);
            j = i+1;
        }
    }
    _reverse(message, 0, message.length-1);
}
function _reverse(message, start, end) {
    while (start < end) {
        [message[start], message[end]] = [message[end], message[start]];
        start++;
        end--;
    }
}


// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
















