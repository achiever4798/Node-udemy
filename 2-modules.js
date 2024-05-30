const names = require('./names')
const sayHi = require('./utils')
const data = require('./3-alternative.syntax')

console.log(data)
console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

require('./4-mind.grenade') //calls function
