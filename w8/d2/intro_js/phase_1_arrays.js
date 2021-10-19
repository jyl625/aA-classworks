Array.prototype.uniq = function() {
  let result = [];
  this.forEach(function(el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

// [1,2,2,3,3,3].uniq() //=> [1,2,3])


Array.prototype.twoSum = function() {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

// console.log([1, -2, 2, 3, -1, 3].twoSum());


Array.prototype.transpose = function() {
  let transposed = [];
  for(let c = 0; c < this[0].length; c++) {
    let subArr = [];
    for(let r = 0; r < this.length; r++) {
      subArr.push(this[r][c]);
    }
    transposed.push(subArr);
  }
  return transposed;
};

// console.log([[1,2,3],[4,5,6]].transpose());