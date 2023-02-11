//way - 1

const oper = require('./oper')


console.log("sum:", oper.add(5, 5));
console.log("sub:", oper.sub(10, 5));
console.log("Multi:", oper.multi(20, 5));
console.log('name:', oper.name)

console.log('-------------------')

//way - 2

const { add, sub, multi, name } = require('./oper')



console.log("sum:", add(5, 5));
console.log("sub:", sub(10, 5));
console.log("Multi:", multi(20, 5));
console.log('name:', name)