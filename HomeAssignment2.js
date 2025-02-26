function getLastWordLength(str) {
  // Step 1: Trim the string to remove any leading or trailing spaces
  const trimmedStr = str.trim();
  console.log(trimmedStr);

  // Step 2: Split the string into an array of words
  const wordsArray = trimmedStr.split(' ');
  console.log(wordsArray);

  // Step 3: Identify the last word in the array
  const lastWord = wordsArray[wordsArray.length - 1];
  console.log(lastWord);

  // Step 4: Calculate the length of the last word
  const lengthOfLastWord = lastWord.length;
 
  return lengthOfLastWord;
}

const sentence = "   Playwright course needs javascript   ";
console.log(getLastWordLength(sentence)); 
