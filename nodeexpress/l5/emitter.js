//events -> response from ui


//response from ui -> events
 function Emitter(){
    this.events = {
        greet:[]
        
    };
 }
//  [cb1,cb2,cb3]
 Emitter.prototype.on = function(type, eventlistener){
    if(!this.events[type]) this.events[type] = [];
    this.events[type].push(eventlistener);
 }
Emitter.prototype.emit =function(type){
    if(this.events[type]) {
        this.events[type].forEach(listener=>{
            listener();
        });
    }
}
module.exports =Emitter;