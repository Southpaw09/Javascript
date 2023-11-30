// How data is stored in memory and how it is accessed gives 2 data categories 


// a. Primitive(7)
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const a = 2;
const c = a;
const b = 2;
console.log(a===b);//true
console.log(c===a);//true



// b. Non-Primitive or Reference Type
// 1. Arrays
// 2. Objects
// 3. Functions


const obj1 = {
    a: 'abc',
    b: 'pqr'
}

const obj2 = {
    a: 'abc',
    b: 'pqr'
}

const obj3 = obj1;


console.log(obj1 === obj2);
console.log(obj1 === obj3);

console.log(typeof(null));//object
console.log(typeof(obj1));//object
console.log(typeof(function(){
    return 1;
}));//function or function objbect
console.log(typeof([1,2,3]));//object



//Javascript is dynamically typed language i.e. we do not define
// the type of the variable




//*******Memories********/
// 1. Stack(Primitive)
let name = "Ayush";
let secondName = name;
console.log(name, secondName);
secondName = "Piyush";
console.log(name, secondName);
//only copy is given from stack

// 2.Heap(Non-Primitive)
//same reference is given to same object and changes
// made to new object is changes into original value
