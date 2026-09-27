const accountId = 18082003
let accountEmail = "rishi@gmail.com"
var accountPassword = "1234"
acoountCity = "Siwan"
let accountState;
//accountId = 2
accountEmail = "rs@gmail.com"
accountPassword = "2345"
acoountCity = "solan"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,acoountCity,accountState]);