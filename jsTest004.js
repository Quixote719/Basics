function Person(fullName, age){
	this.fullName=fullName;
	this.age=age;
}

function Teacher(fullName, age, ID){
	Person.call(this, fullName, age);
	this.ID=ID;
}
Teacher.prototype=Object.create(Person);
Teacher.prototype.constructor=Teacher;

var t1 = new Teacher('James',32,2312);
console.log(t1);

//classes in javascript, Defining classes
//Classes are in fact "special functions", and just as you can define function expressions and function declarations, 
//the class syntax has two components: class expressions and class declarations.
//class declaration
class cat{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

//class expression

var polygon = class Polygon{
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}

var square = class{
	constructor(length){
		this.length = length;
	}
}

//
class Animal { 
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

class Cat extends Animal {
	speak() {
		console.log(this.name + ' mew.')
	}
}

var d1 = new Dog('Mitzie');
var c1 = new Cat('Chocalate')
c1.speak();
d1.speak();

//
class Ball{
	constructor(radius){
		this.radius = radius;
	}
}

class Football extends Ball{
	// constructor(radius, color){
	// 	this.radius = radius;
	// 	this.color = color;
	// }
	info(){
		console.log('color: '+this.color+'radius: '+ this.radius);
	}
}

var f1 = new Football('orange',33);
f1.info();
