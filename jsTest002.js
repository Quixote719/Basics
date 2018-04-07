//inheritance
function Person(){}
Person.prototype={
	init:function(name){
		this.name=name;
	},
	getname:function(){
		return this.name;
	}
}

function Employee(){}
Employee.prototype=new Person();
Employee.prototype.constructor=Employee;

Employee.prototype={
	init:function(name, ID){
		this.name=name;
		this.ID=ID;
	}
}
var emp1= new Employee;
emp1.init('Sven',28);
console.log(emp1);

//inheritance by class

class Polygon{
	constructor(height, width){
		this.height=height;
		this.width=width;
	}
}

class Square extends Polygon{
	constructor(sideLength){
		super(sideLength, sideLength);
	}
	get area(){
		return this.height*this.width;
	}
	get diagonal(){
		return this.height*Math.sqrt(2);
	}
	set sideLength(newLength){
		this.height=newLength;
		this.width=newLength;
	}
}

var square = new Square(2)
console.log(square.area);
console.log(square.diagonal);
// == and ===
console.log(999=='999');
console.log(999==='999');

// arrow function
var multiply= (x,y)=>(x*y);
console.log(multiply(3,4));

var square = x => x*x;
console.log(square(14));

var showcon = ()=>(console.log('arrow function\n\n'));
showcon();

//closure
function fo1(){
	var a=719;
	return function(){
		console.log(a);
	}
}
var b=fo1();
b();


function fo2(){
	var b=511;
	return function(){
		return b;
	}
}
var c=fo2();
console.log(c());

//array build in method: splice slice push pop shift unshift
//index
var arr1=[7,5,4,1,5,3,8,2,6,9];
console.log(arr1.indexOf(3));
console.log(arr1.indexOf(12));

//splice 粘接，胶接
var myFish=["angel", "clown", "mandarin", "surgeon"];
myFish.splice(2,0,'salmon');
console.log(myFish);
myFish.splice(0,0,'basa');
console.log(myFish);
myFish.splice(1,3,'tuna');
console.log(myFish);

//slice 切下
var arrWhole = [1,2,3,4,5,6,7];
var arrSlice1 = arrWhole.slice(3);
var arrSlice2 = arrWhole.slice(5);
console.log('The orginal array is ' + arrWhole +'\n' + 'sliced array 1 ' + arrSlice1 + '\n' + 'sliced array 2' + arrSlice2);

//push and pop, shift and unshift
var arr2=['pa','mk','sk','sf','bh','ss'];
arr2.push('spe','am','vs');
console.log(arr2);
arr2.pop();arr2.pop();
console.log(arr2);
arr2.shift();
console.log(arr2);
arr2.unshift('Medusa');arr2.unshift('Sven','Sladar');
console.log(arr2);

//default parameter
function testd(x=3, y=4, z=5){
	return x+y+z;
}

console.log(testd(80,80));
console.log(testd(1));

//clone
var obc={name:'clone',ID:'719281200',clone:'true'}
var obc2=obc;
obc2.name='changed';
console.log(obc.name);//changed could not clone this way.

//deep clone in javascript
obc.name='clone';
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (obj == null || typeof obj != "object" ) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

var obc3=clone(obc);
console.log(obc);
console.log(Object.keys(obc));
console.log(Object.keys(obc).length);
//console.log(Object.values(obc));

//template literals     does not work in node
var first='James', last='Bond'
console.log(`My name is ${first} ${last}.`)
//multiline string
var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`

var fourAgreements = `You have the right to be you.
    You can only be you when you do your best.`
    console.log(roadPoem);
