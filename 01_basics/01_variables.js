const accountId = 11223344;//const cannot be changed
let accountEmail = "ayush8725434@gmail.com";
var accountPassword = "12345";//old way for assigning variables
accountCity = "Delhi";
let accountState;//undefined

/*
Prefer not to use var due to scoping reasons.
*/

/*
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
(to the top of the current script or the current function).
*/

/*
KEYWORD	                   SCOPE	             REDECLARATION & REASSIGNMENT	                HOISTING
var                 	Global, Local	                yes & yes	                    yes, with default value
let	                Global, Local, Block	            no & yes	                    yes, without default value
const	            Global, Local, Block	            no & no	                        yes, without default value
*/


//problemState is not defined and accountState is undefined

// accountId = 2; this is not valid
accountEmail = "etsy@etsy.com"
accountPassword = "122211"
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);