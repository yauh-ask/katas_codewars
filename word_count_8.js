function countWords(str) {
 return str.split(/\s/).filter(el => {
    return el;
  }).length; 
}


//  Function have to count words, but not spaces, so be sure that it does right.
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
// Be sure that words with chars like -, ', ` are counted right.
