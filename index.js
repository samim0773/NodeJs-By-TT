// 1 - conver obj to json
// 2 - save into another file
// 3 - read json data
// 4 - again conver ojb
// 5 - read
const fs = require('fs')

const product = {
    name: 'mobile',
    price: 2000,
    brand: 'mi'
}

const jsonData = JSON.stringify(product); // convert json

fs.writeFile('json1.json', jsonData, (err) => {
    console.log(err)
})
fs.readFile('json1.json', 'utf-8', (err, data) => {
    console.log(data) // --- read json
    const oriData = JSON.parse(data) // convert obj
    console.log(oriData) // read obj
})





// how to convert object to JSOn
// const jsonData = JSON.stringify(product);
// console.log(jsonData);

// how to convert json to object
// const objData = JSON.parse(jsonData);
// console.log(objData);