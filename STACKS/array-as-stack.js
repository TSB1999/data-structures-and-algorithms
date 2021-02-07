var INPUT_WORD = "racecar";

var stack = [];
var reverse_word = "";

for (var i = 0; i < INPUT_WORD.length; i++) {
  stack.push(INPUT_WORD[i]);
}

// console.log(stack.toString());

for (var i = 0; i < INPUT_WORD.length; i++) {
  reverse_word += stack.pop();
}

if (reverse_word === INPUT_WORD) console.log(`${INPUT_WORD} is a palindrome`);
else console.log(`${INPUT_WORD} is not a palindrome`);
