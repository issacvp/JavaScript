//-----------------------------
// Gotch 7 null vs undefined
//-----------------------------

let val;
console.log(val);

var myVar = 5;
if(myVar == '5'){ // returns true since Javascript is loosely typed
  console.log("hi");  
  //this alert will show since JS doesn't usually care about data type.
}

if(myVar === '5'){ // returns true since Javascript is loosely typed
    console.log("hi");  
    //this alert will show since JS doesn't usually care about data type.
  }
switch(myVar){
  case '5':
  console.log("hi"); 
  // this alert will not show since the data types don't match

  case 5:
  console.log("hi"); 
}

//-----------------------------
// Gotch 1 Arrow functions and object literals
//-----------------------------

// Right
var numbers = [1, 2, 3, 4];
var doubling;
doubling = numbers.map(function (n) {
  return n * n;
});

console.log(doubling);
// Can be written as
doublling = numbers.map((n) => n * n * n);
console.log(doublling);

//Gotcha trying to use lambda to create object from array

var obj = numbers.map((n) => {
  value: n;
}); //Return same array, not object
//Why because interpreter understands the code as below

obj = numbers.map(function (n) {
  value: n;
  return;
});

//Can be fixed as
obj = numbers.map((n) => ({ value: n })); // Wrap in brackets
console.log(obj);

//-----------------------------
// Gotch 2 Arrow functions and bindings
//-----------------------------
let calculator = {
  value: 0,
  add: (values) => {
    this.value = values.reduce((a, v) => a + v, this.value);
  },
};
calculator.add([1, 2, 3]);
console.log(calculator.value); //Thats sad value is ==>
// Its because the 'this' keyword scope in lambda is undefined
// Also, since an arrow function has no this binding Function.prototype.call, Function.prototype.bind and Function.prototype.apply won’t work with them either. The this binding is set in stone when the arrow function was declared and can’t change.

// Fix
calculator = {
  value: 0,
  add(values) {
    this.value = values.reduce((a, v) => a + v, this.value);
  },
};
calculator.add([10, 10, 10]);
console.log(calculator.value);

//-----------------------------
// Gotch 3 Shallow sets
//-----------------------------
let set = new Set();
set.add([1, 2, 3]);
set.add([1, 2, 3]);

console.log(set, set.size);
// Set treats the arrays as two different objects even though their contents are same

set.add([1, 2, 3].join(""));
set.add([1, 2, 3].join(""));

console.log(set, set.size);
// We need to convert array to Strings , Set will treat string obj as unique values
// Because Strings are immutable
// Always serialize and de-serialize

//-----------------------------
// Gotch 4 Finally
//-----------------------------

function finally_Check() {
  try {
    return true;
  } finally {
    return false;
  }
}
console.log(finally_Check());
// Why becuase finally is the block always execute even there is a return before it

//-----------------------------
// Gotch 5 Equality
//-----------------------------

var x = 6 == 6;
x;
x = 6 === "6";
x;
x = 6 == "6";
x;

// It is generally better to use === and !=== to check for both type and value.

x = null == undefined;
x;
x = null === undefined;
x;

//-----------------------------
// Gotch 6 Variable types var vs let vs const
//-----------------------------

function begin() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  // i is accessible outside the for loop
  console.log(i);
}
begin();
//What is strange here is that, although the variable i is declared inside the for-loop, it is still accessible outside the scope of the for-loop. This is because the var variables are accessible within the scope of the function that they are declared.
//var variables have a function-scope, if they are not declared within a function, they have a global-scope.

function begin2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // i is not defined and will return an error
  console.log(i);
}

//begin2(); 

console.log(Math.max());
console.log(Math.min());
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);





