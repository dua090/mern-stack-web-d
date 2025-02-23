// const Emitter =require("./emitter");   // this one is customised 
const Emitter = require("events"); // this one is from the events module node.js

const Events = require("./config").events;

const emitr =new Emitter();

emitr.on(Events.GREET,function(){
    console.log("Hello");
})
emitr.on(Events.GREET,function(){
    console.log("greet beta idr h");
})
emitr.on(Events.FILEOPEN,function(){
    console.log("File opened");
})
emitr.emit(Events.FILEOPEN);