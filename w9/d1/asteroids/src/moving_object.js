// const obj = new MovingObject({pos: [30,30], vel: [10,10], radius: []})
function MovingObject(data) {
  this.pos = data.pos;
  this.vel = data.vel;
  this.radius = data.radius;
  this.color = data.color;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
};

// console.log(new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// }));

module.exports = MovingObject;