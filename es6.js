//ES6 new features

//Array
//Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）
//和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。

let arrayLike1 = {0:1, 1:2, 2:3, length: 3};
let arrayLike2 = {0:7, 1:5, 2:9, length: 2};

let array1 = Array.from(arrayLike1);
let array2 = Array.from(arrayLike2);
console.log('new array 1' + array1);
console.log('new array 2' + array2);

//合并数组
let longArray1 = array1.concat(array2);

//扩展运算符（spread）合并数组
let longArray2 = [...array1,...array2];

//includes
console.log('include  ' + [2, 7, 21, 9].includes(9));
console.log('include  ' + [2, 7, 21, 9].includes(-3));


//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log('first ' + first); // 1
console.log('rest ' + rest); // [2, 3, 4, 5]

// 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
console.log(Math.max(...[14, 3, 77]));
console.log(Math.max(14, 3, 77));

// 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
let strArray = console.log([...'abcdefg']);

// find, findIndex
let findELement = [1,2,4,9,17,8,-5,97].find((val, index, arr)=> val>10);
console.log('find Element ' + findELement);

let findIndex = [1,2,4,9,17,8,-5,97].findIndex((val, index, arr)=> val<0);
console.log('find Index ' + findIndex);

//object

console.log('longArray 1' + longArray1);
console.log('longArray 2' + longArray2);

let obj1 = {k1:71 ,k2:95, k3:11};
let obj2 = {name:'James', age:35, k2:'Steve'};

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
// Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。

let ob1, ob2;
ob1 = Object.assign({}, obj1, obj2);
ob2 = Object.assign({}, obj2, obj1);

console.log(ob1);
console.log(ob2);
console.log(obj1);
console.log(obj2);

// Object.is
// S5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，
// 后者的NaN不等于自身，以及+0等于-0。JavaScript缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

console.log(Object.is({},{}) + ' ' + Object.is(+0, -0) + ' '
 + Object.is(NaN,NaN) + ' ' + Object.is(7, 7))

 // Set
//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
//Set 本身是一个构造函数，用来生成 Set 数据结构。

 const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log('element of set  ' + i);
}

let s1 = new Set([1,2,3,4,7]);
let s2 = new Set();
[3,5,61,23,3,61].forEach((e)=>{s2.add(e)});
s2.add({});
s2.add({});
s2.add(false);
for (let i of s2) {
  console.log(i);
}

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue
for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue
for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
set.forEach(function(e){
  console.log('Element in set ' + e);
})

//

//arrow function
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]

// Javascript 对象（object）合并, 遍历赋值法 代码逻辑：
//循环对象n中的每一个对应属性。
//确认对象n中存在该属性
//确认对象o中不存在该属性

let obhead = {a:1, b:3}; let obtail = { a:7, c:3, d:4}

var extend=function(o,n){
   for (let p in n){
        if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) ))
            o[p]=n[p];
    }
};
extend(obhead,obtail);
console.log(obhead);
