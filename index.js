var a = 5;
var b = 10;
var n = 10.75;

function add(a, b) {
  return a += b;
}

function subtract() {
  a -= b;
}

function multiply() {
  a *= b;
}

function divide() {
  a /= b;
}

function inc() {
  n ++;
}

function dec() {
  n --;
}

function makeInt(n) {
  return parseInt(n, 10);
}


function preserveDecimal() {
  parseInt('abc', n);
}

function preserveDecimal() {
  parseFloat(n);
}