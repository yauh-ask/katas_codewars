function array(arr){
var data = arr.split(',');
data.pop()
data.shift();
return data.length ? data.join(' ') : null;
}
