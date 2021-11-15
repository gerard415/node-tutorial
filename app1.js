 const os = require('os')

const user = os.userInfo()
console.log(user)                    //1st way to invoke a function 


console.log(`the uptime of the system is ${os.uptime()}` )  //2nd way to invoke a function