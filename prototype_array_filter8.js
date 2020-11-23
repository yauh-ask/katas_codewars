// This filter function return an array with values that meet 
// the conditions set in the ruleCondition callback function.

Array.prototype.filter = function( ruleCondition ) {
// Create an empty array to store the values that satisfy the ruleCondition
  var arr = [];
  
  this.forEach( function( currentValue ) {
  // Evaluate each element and push the value when content in array meet condition
    if( ruleCondition( currentValue ) ) arr.push( currentValue );
  });
  return arr;
}
