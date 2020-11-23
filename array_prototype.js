Array.prototype.square  = Square;
Array.prototype.cube    = Cube;
Array.prototype.average = Average;
Array.prototype.sum     = Sum;
Array.prototype.even    = Even;
Array.prototype.odd     = Odd;

function Square()  { return this.map(function(e){return e*e;});                         }
function Cube()    { return this.map(function(e){return e*e*e;});                       }
function Average() { return this.sum() / this.length;                                   }
function Sum()     { return (this == '') ? 0 : this.reduce(function(a,b){return a+b;}); }
function Even()    { return this.filter(function(e){return e%2==0;});                   }
function Odd()     { return this.filter(function(e){return e%2!=0;});                   }
