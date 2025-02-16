const os = require('os')

//info about current user
const user = os.userInfo()

console.log(user);

//method returns the system uptime in seconds
console.log(`system uptime is ${os.uptime()}`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    total_memory : os.totalmem(),
    free_memory : os.freemem(),
}

console.log(currentOS);