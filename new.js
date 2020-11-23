function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function(){
  return 'My name is ' + this.name + ' and I am ' + this.age;
};
var john = new Person('John', 30);
var jack = new Person('Jack', 40);
console.log( john.introduce() ); // My name is John and I am 30
console.log( jack.introduce() ); // My name is Jack and I am 40

function ReturnsArray (name) {
  this.name = name;
  return [1, 2, 3];
}
var arr = new ReturnsArray('arr?');
console.log( arr.name ); // undefined
console.log( arr ); // [1, 2, 3]


// ON EXTEND

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// ANOTHER EXAMPLE

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get volume() {
    return this.length * this.width * this.height;
  }
  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length)
    );
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
