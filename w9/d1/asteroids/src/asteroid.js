const MovingObject = require("./moving_object");
const Util = require('./utils.js');

Util.inherits(Asteroid, MovingObject);

function Asteroid(data) {
  this.COLOR = 'black';
  this.RADIUS = 10;
  MovingObject.call(this, { pos: data.pos, vel: Util.randomVec(), radius: this.RADIUS, color: this.COLOR});
}

module.exports = Asteroid;