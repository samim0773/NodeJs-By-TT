const EventEmitter = require('events');
const event = new EventEmitter();

// single events
event.on('sayMyNameOnly', () => {
    console.log("Your name is samim");
})

event.emit("sayMyNameOnly")

// multiple events call 
event.on('sayMyName', () => {
    console.log("Your name is HI");
})
event.on('sayMyName', () => {
    console.log("Your name is Hello");
})
event.on('sayMyName', () => {
    console.log("Your name is welcome");
})

event.emit("sayMyName")


// with parameter 
event.on('checkPage', (se, msg) => {
    console.log(`status code is ${se} and the page is ${msg}`)
})


event.emit("checkPage", 200, "ok")