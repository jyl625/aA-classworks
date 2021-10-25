// const obj = new MovingObject({pos: [30,30], vel: [10,10], radius: []})
function MovingObject(data) {
  this.pos = data.pos;
  this.vel = data.vel;
  this.radius = data.radius;
  this.color = data.color;
}



// console.log(new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// }));

module.exports = MovingObject;