function add(n){
  var a = function(x){ return add(x + n) }
  a.valueOf = function(){ return n }
  return a
}
