function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  convert the string to an array
  reverse the array and join in it back to a string to obtain the word in reverse
  check if the word is the same as the word in reverse
  return the output of the above condition
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
