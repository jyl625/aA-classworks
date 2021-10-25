const Util = require("./utils.js");

function Parent(value){
    this.value = value;
}

Parent.prototype.say = function(){
    console.log("this is the parent");
};


function Child(value){
    Parent.call(this, value);
}

Child.prototype.yell = function(){
    console.log("this is the child");
};

Util.inherits(Child, Parent);

let child = new Child(2);
console.log(child);
child.say();


console.log(child);

console.log("Webpack is working!");

console.log('hello');
