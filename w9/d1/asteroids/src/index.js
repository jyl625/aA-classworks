const MovingObject = require('./moving_object.js');

window.MovingObject = MovingObject;

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

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('game-canvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');

  // let obj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 10, color: 'red' })
  // obj.draw(ctx);
});