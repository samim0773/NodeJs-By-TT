const fs = require('fs');

// -- create file

// fs.writeFile("read.txt", "this is asynchronously way to create file", (err) => {
//     console.log('files is created');
//     console.log(err)
// })

// we pass them a function as an argument - a callback - 
// that gets called when that task completes.
// the callback has an argument that tells you whether
// the operation complete successfully
// Now we need to say what to do when fs.writeFile
// has completed (even if its nothing), as start 
// checking for errors

// --- update file
fs.appendFile('read.txt', 'update file', (err) => {
    console.log('file is update')
    console.log(err)
})

// --- read file
fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);

})