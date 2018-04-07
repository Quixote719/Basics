var hero=['Thor','Stark','Steve'];
var arr=[1,2,3,4,5];

//arguments

function showArguments(){
	return Array.from(arguments)
}

console.log('show arguments ' + showArguments(3,2,7,9,1))

//array build in method: forEach map filter reduce
//for each

hero.forEach(function(element){console.log(element);});

countries=[
	{name: 'USA'},
	{name: 'China'},
	{name:'China'},
	{name: 'China'},
	{name: 'France'},
	{name: 'France'},
	{name: 'Germany'}
];

var counter={}
countries.forEach(function(e){
	if(e.name in counter){
		counter[e.name]++;
	}
	else
		counter[e.name]=1;
})


//map
function sq(num){
	return num*num;
}
var arr2 = arr.map(sq);
var arr3 = arr2.map(Math.sqrt);
console.log(arr2);
console.log(arr3);
function bigEnough(element){
	return element>3;
}
var arrf001=arr.filter(bigEnough);
var arrf002=arr.filter(function(num){return num%2==0;});
console.log(arrf001);
console.log(arrf002);

//filter
function bigEnough(element){
	return element>3;
}
var arrf001=arr.filter(bigEnough);
var arrf002=arr.filter(function(num){return num%2==0;});
console.log(arrf001);
console.log(arrf002);

//reduce

var arrReduce = arr.reduce((prev, cur, index, array)=>{return prev + cur})
console.log('result of reduce ' + arrReduce);

//reverse a string
var st = 'Dalaran'
revarr = st.split('').reverse().join('');
console.log(revarr);


//object inheritance
var ob1={name:'Sven', age:28}
var ob2=Object.create(ob1);
console.log(ob2);

//kid
function kid(name, age){
	this.name =name || 'Daniel'
	this.age = age || 5;
}
kid.prototype.info=function(){
	console.log(this.name+' is '+this.age+' years old');
}
var p1 = new kid('James',7);
p1.info();
console.log(p1);

//inheritance the parent class does not need to set values
function animal(){
	this.name = 'bacon';
	this.age = 2;
}
function dog(breed){
	this.breed = breed;
}
dog.prototype = new animal();
dog.prototype.constructor=dog;
var dog1=new dog('Samoyed');
console.log(dog1);
console.log(dog1.name);

//inheritance 4


function Person(first, last, age, gender, interests){
	this.name = {first, last};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
}

function Teacher(first, last, age, gender, interests, subject){
	Person.call(this, first, last, age, gender, interests);
	this.subject = subject;
}
Teacher.prototype=new Person();
//Teacher.prototype=Object.create(Person);
Teacher.prototype.constructor=Teacher;//change the constructor point to Teacher
var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'swimming'], 'mathematics');
console.log(teacher1);

//object property
var objp={a:1, b:2};
console.log((objp.a==objp['a'])&&(objp.b==objp['b']));


console.log(objp.hasOwnProperty('a'));
console.log(objp.hasOwnProperty('a23'));

//call, bind, apply
var person = {
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello.call(person, 'world'); // output: "James Smith says hello world"

var p001=person.hello.bind(person);//bind attaches this into function and it needs to be invoked separately like this:
p001('Mars');
var p002=person.hello.bind(person,'Saturn')
p002();

function personContainer() {
  var person = {
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "Jupiter"); //apply is similar to call except that
//it takes an array-like object instead of listing the arguments out one at a time:
