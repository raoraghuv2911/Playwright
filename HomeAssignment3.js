function compareStrings(str1, str2) {
  // Step 1: Remove spaces and convert all letters to the same case (lowercase)
  const cleanedStr1 = str1.trim().toLowerCase();
  const cleanedStr2 = str2.trim().toLowerCase();
  console.log(cleanedStr1, cleanedStr2);

  // Step 2: Sort the characters of the strings
  const sortedStr1 = cleanedStr1.split('').sort().join('');
  const sortedStr2 = cleanedStr2.split('').sort().join('');
  console.log(sortedStr1, sortedStr2);

  // Step 3: Compare the sorted strings
  const areEqual = sortedStr1 === sortedStr2;

  // Step 4: Return the result
  return areEqual;
}

const string1 = "Listen ";
const string2 = " Silent";
console.log(compareStrings(string1, string2)); 

const string3 = "hello ";
const string4 = " world";
console.log(compareStrings(string3, string4)); 