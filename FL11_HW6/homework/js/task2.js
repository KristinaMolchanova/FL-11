'use strict';

let a = +prompt('Input A side length:', '0');
let b = +prompt('Input B side length:', '0');
let c = +prompt('Input C side length:', '0');

if (a + b > c && a + c > b && c + b > a) {
    if (a === b && a === c) {
        console.log('Equivalent triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}