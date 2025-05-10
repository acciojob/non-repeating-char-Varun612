function firstNonRepeatedChar(str) {
  // Create an object to count occurrences of each character
  const charCount = {};

  // Loop through the string and count occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop through the string again and return the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;  // Return the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
