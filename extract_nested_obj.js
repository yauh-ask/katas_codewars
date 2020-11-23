// return the nested property value if it exists,
// otherwise return undefined

Object.prototype.hash = function(string) {
  return string.split('.').reduce((result = this, item) => result = result[item], this);
}
