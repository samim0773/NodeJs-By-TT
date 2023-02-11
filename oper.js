const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const multi = (a, b) => {
    return a * b;
}

const name = 'samim'

// way 1
module.exports.add = add;
module.exports.sub = sub;
module.exports.multi = multi;
module.exports.name = name;

// way - 2
module.exports = {
    add,
    sub,
    multi,
    name
}