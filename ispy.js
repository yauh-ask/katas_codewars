function spyOn (func) {
  var callVals  = [],
      returnVals = [],
      callCount = 0;
  function spy () {
    ++callCount;
    callVals = [].concat.apply(callVals, arguments);
    var val = func.apply(this, arguments);
    returnVals.push(val);
    return val;
  };
  spy.callCount = function () { return callCount; };
  spy.wasCalledWith = function (val) { return callVals.indexOf(val) > -1; };
  spy.returned = function (val) { return returnVals.indexOf(val) > -1; };
  return spy;
};

// OR

function spyOn(func) {
  let calls = 0
  let all = []
  let val
  
  const spy = function(...args) {
    calls++
    all.push(...args)
    val = func.apply(this, args)
    return val
  }
  
  spy.callCount = () => calls
  spy.wasCalledWith = (x) => all.some((a) => x === a)
  spy.returned = (x) => x === val
  
  return spy
}
