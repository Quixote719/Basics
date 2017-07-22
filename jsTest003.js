function Person(name, gender, age){
	this.name=name;
	this.gender=gender;
	this.age=age;
}
function Student(name, gender, age, ID){
	Person.call(this, name, gender, age);
	this.ID=ID;
}

Student.prototype=Object.create(new Person);
Student.prototype.constructor=Student;

var s1= new Student('Nevermore', 'male', 21, 71290);
console.log(s1);


// toString
// The toString() method returns a string representing the object.

// Syntax
// obj.toString()
// Return value

// A string representing the object.
//Every object has a toString() method that is automatically called when the object is to be represented as a text value 
//or when an object is referred to in a manner in which a string is expected. 
var o = new Object();
console.log(o.toString()); // returns [object Object]

var num1=33
console.log(num1.toString());

//JSON.stringify
// The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, 
// or optionally including only the specified properties if a replacer array is specified.

console.log(JSON.stringify({}));                  // '{}'
console.log(JSON.stringify(true));                // 'true'
console.log(JSON.stringify('foo'));               // '"foo"'
console.log(JSON.stringify([1, 'false', false])); // '[1,"false",false]'
console.log(JSON.stringify({ x: 5 }));            // '{"x":5}'


//
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);