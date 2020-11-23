function convert(input, source, target) {
  /* both bases the same, no converting needed */
  if (source === target) {
    return input;  // exit 1/3
  }
  
  var srcLen = source.length;
  var tgtLen = target.length;
  
  /* bases of the same length, only simple substitution needed */
  if (srcLen === tgtLen) {
    var output = [];
    for (var i in input) {
      var char = input.charAt(i);
      var srcIndex = source.indexOf(char);
      output.push(target.charAt(srcIndex));
    }
    return output.join("");  // exit 2/3
  }
  
  /* else convert to base of different length */
  var value = 0;
  for (var i = 0, len = input.length; i < len; i++) {
    var char = input.charAt(len - i - 1);
    var srcIndex = source.indexOf(char);
    value += Math.pow(srcLen, i) * srcIndex;
  }
  
  var tgtValues = [];
  do {
    var tgtIndex = value % tgtLen;
    value = Math.floor(value / tgtLen);
    tgtValues.push(target.charAt(tgtIndex));
  } while (value > 0);
  
  return tgtValues.reverse().join("");  // exit 3/3
  
}
