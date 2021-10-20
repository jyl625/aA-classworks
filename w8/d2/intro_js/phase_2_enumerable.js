Array.prototype.myEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

function logIfEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  }
}

// [1, 2, 3].forEach(logIfEven);
// [1, 2, 3].myEach(logIfEven);


Array.prototype.myMap = function(cb) {
  let result = [];

  this.myEach(el => result.push(cb(el)));

  return result;
};

function doubler(num) {
  return num * 2;
}

// console.log([1,2,3].myMap(doubler));

Array.prototype.myReduce = function(cb, result) {
  
  let arr = this;
  if (result === undefined) {
    result = this[0];
    arr = this.slice(1);
  }
  
  arr.myEach(el => result = cb(result, el));
  return result;
};

// let answer = [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6

// console.log(answer);

let answer = [1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25); // => 31

console.log(answer);