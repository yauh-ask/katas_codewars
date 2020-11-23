// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

function prefill(n, v) {
  if( isValidInt(n) ) throw new PrefillException(n);
  
  var a = [];
  
  for( var i = 0; i < n; i++ ) {
    a.push(v);
  }
  
  return a;
}

function PrefillException(n) {
   this.message = (n + " is invalid");
   this.name = "TypeError";
}

function isValidInt( n ) {
  return isNaN(n) || !isFinite(n) || (n % 1 !== 0) || n < 0 || ("boolean" == typeof n);
}
