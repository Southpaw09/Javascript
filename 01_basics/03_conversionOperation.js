let score = '33';
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);

console.log(typeof NaN)

/* 
Converting into numbers

"33" => 33
"33abc" => NaN
"Piyush" => NaN
true => 1
false => 0
null => 0
undefined => NaN



typeof NaN => number
*/

/*
All the falsy values

Value	            Type	                                            Description
null	            Null	                            The keyword null — the absence of any value.
undefined	       Undefined	                            undefined — the primitive value.
false	            Boolean	                                           The keyword false.
NaN	                Number	                                            NaN — not a number.
0	                Number	                              The Number zero, also including 0.0, 0x0, etc.
-0	                Number	                           The Number negative zero, also including -0.0, -0x0, etc.
0n	                BigInt	                        The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	                String	                                    Empty string value, also including '' and ``.
document.all	    Object	                            The only falsy object in JavaScript is the built-in document.all.

*/

/** OPERATIONS */

//+-*%**
let value = 3;
let negValue = -value;

console.log(negValue);

console.log("1" + 2);//12
console.log(1+ + 2);//3
console.log("1"+ + 2);//12
console.table(["1"+2+2, typeof("1"+2+2)]);//122 - string
console.table([1+2+"2", typeof(1+2+"2")]);//32 - string

/*Prefix Vs Postfix */

//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// let x = 3;
// const y = x++;
// x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// x2 is 4n; y2 is 3n

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
// let x = 3;
// const y = ++x;
// x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// x2 is 4n; y2 is 4n


//Comparison

console.log(null>0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
