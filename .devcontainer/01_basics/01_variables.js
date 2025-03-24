const accountId = 144553
let accountEmail = "yahya@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;
// accountId = 2 // not allowed



accountEmail = "hc@hc.com"
accountPssword = "212121"
accountCity = "Bhopal"


/* 
Prefer not to use var
beacause of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])