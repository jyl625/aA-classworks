Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted){
    sorted = true;

    for(let i = 0; i <this.length - 1; i++){
      if (this[i] > this[i+1]){
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return this;
}

// let arr = [5,2,-4,2,8,1];
// console.log(arr.bubbleSort());

// String.prototype.substrings = function() {
//   let result = [];
//   for(let i = 0; i < this.length; i++) {
//     for(let j = 1; j <= this.length; j++) {
//       if (j>i){
//         result.push(this.slice(i,j));
//       }
//     }
//   }
//   return result;
// }

String.prototype.substrings = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j <= this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
}

// String.prototype.substrings = function () {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     for (let j = i; j < this.length; j++) {
//       result.push(this.slice(i, j+1));
//     }
//   }
//   return result;
// }

let str = "cat";
console.log(str.substrings());