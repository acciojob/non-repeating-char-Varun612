function firstNonRepeatedChar(str) {
 const charCount = {};

  // Loop through the string to populate the charCount object
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop through the string again and return the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return an empty string
  return '';// Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
