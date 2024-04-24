const accountId = 1444553
let accountEmail = "sandeep@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;


// accountId = 2  // not allowed 

accountEmail = "sandy.com"
accountPassword = "1214125"
accountCity= "bangeuluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState,])

/*
prefer not to use var
beacuse of issue in block scope and function scope
*/