// const _ = require('lodash');
// const cache = func => _.memoize(func, JSON.stringify);

function cache(func) {
  var result = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (!result.hasOwnProperty(args)) result[args] = func.apply(null, arguments);
    return result[args];
  };
}
