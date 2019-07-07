'use strict'

let a1 = +prompt('Input A point coordinate:', 'x');
let a2 = +prompt('Input A point coordinate:', 'y');
let b1 = +prompt('Input B point coordinate:', 'x');
let b2 = +prompt('Input B point coordinate:', 'y');
let c1 = +prompt('Input C point coordinate:', 'x');
let c2 = +prompt('Input C point coordinate:', 'y');
const halfDiv = 2;

if (c1 === (a1 + b1) / halfDiv && c2 === (a2 + b2) / halfDiv) {
  console.log(true);
} else {
  console.log(false);
}