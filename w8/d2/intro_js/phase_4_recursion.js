function range(start, end) {
  if (start === end) { return [end]; }
  return [start].concat(range(start+1, end));
}

// console.log(range(0,5));

function sumRec(arr) {
  if (arr.length === 1) { return arr[0]; }
  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1,2,3,4,5]));

//version 1
// function exponent(base, exp) {
//   if (exp === 0) {return 1;}
//   return base * exponent(base, exp - 1);
// }

//version 2
function exponent(base, exp) {
  if (exp === 0) { return 1; }
  if (exp % 2 === 0) {
    return exponent(base, exp / 2) * exponent(base, exp / 2);
  } else {
    return base * (exponent(base, (exp - 1) / 2) * exponent(base, (exp - 1) / 2));
  }
}

// console.log(exponent(2, 4));




// function fibonacci(n) {
//   if (n === 2) {return [0,1];}
//   if (n === 1) {return [0];}
//   if (n === 0) {return []; }

//   prev_fib = fibonacci(n - 1);
//   next_num = prev_fib[prev_fib.length - 1] + prev_fib[prev_fib.length - 2];

//   prev_fib.push(next_num);

//   return prev_fib;
// }

function fibonacci(n) {
  if (n <= 2) { return [0, 1].slice(0,n); }

  prev_fib = fibonacci(n - 1);
  next_num = prev_fib[prev_fib.length - 1] + prev_fib[prev_fib.length - 2];

  prev_fib.push(next_num);

  return prev_fib;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));