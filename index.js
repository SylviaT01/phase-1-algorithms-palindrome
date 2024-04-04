function isPalindrome(string) {
  // Write your algorithm here
  return string === string.split('').reverse().join('')
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("robot"));


/* 
  Add your pseudocode here
*/

/*
  str.split(''): This part of the code splits the input string str into an array of characters.
  reverse(): This method reverses the order of the elements in the array obtained from splitting the string
  .join(''): This method joins all the elements of the reversed array back into a single string. 
  
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
