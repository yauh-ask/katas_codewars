function countWords(str) {
 return str.split(/\s/).filter(el => {
    return el;
  }).length; 
}
