function getLastWordLength(str) {
    // Step 1: Split the string into an array of words
    const wordsArray = str.split(' ');
    console.log(wordsArray);
  
    // Step 2: Find the last word in the array
    const lastWord = wordsArray[wordsArray.length - 1];
    console.log(lastWord);
  
    // Step 3: Calculate the length of the last word
    const lengthOfLastWord = lastWord.length;
  
    return lengthOfLastWord;
  }
  
 
  const sentence = "Bangalore is HotCity";
  console.log(getLastWordLength(sentence)); 
  