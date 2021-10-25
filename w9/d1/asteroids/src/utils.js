Function.prototype.inherits = function (ParentClass) {
  var Surrogate = function () {};

  Surrogate.prototype = ParentClass.prototype;

  this.prototype = new Surrogate();

  this.prototype.constructor = this;
};

class Parent {
  contructor(val) {
    this.parentValue = val;
  }
}

class Child {
  contructor(val) {
    Parent.call(this, 10);
    this.childValue = val;
  }
}

Child.inherits(Parent);


module.export = Child;