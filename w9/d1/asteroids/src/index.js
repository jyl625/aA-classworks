const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
window.MovingObject = MovingObject;



document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('game-canvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');

  // to test constructing MovingObject, draw, and move methods
  
  let obj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 10, color: 'red' });
  obj.draw(ctx);
  obj.move();
  obj.draw(ctx);

  let ast = new Asteroid({ pos: [50, 50] });
  ast.draw(ctx);
  
});