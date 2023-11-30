const accountId = 11223344;//const cannot be changed
let accountEmail = "ayush8725434@gmail.com";
var accountPassword = "12345";//old way for assigning variables
accountCity = "Delhi";
let accountState;//undefined

/*
Prefer not to use var due to scoping reasons.
*/

//problemState is not defined and accountState is undefined

// accountId = 2; this is not valid
accountEmail = "etsy@etsy.com"
accountPassword = "122211"
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);