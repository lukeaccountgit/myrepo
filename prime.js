#!/usr/bin/env node

// Test if a number is prime
var isprime = function(n) {

  if( n % 2 == 0 || n % 3 == 0 ){
    return false;
  }

  var sqroot = Math.sqrt(n);
  for ( var i = 3; i <= sqroot; i += 2) {
    if( n % i == 0 ) {
      return false;
    }
  }
  return true;
};

// Find first K prime numbers
var firstkprime = function(k) {

    var arr = [];

    if ( k < 1 ) {
      return arr;
    }

    if ( k == 1 ) {
      arr.push(2);
      return arr;
    }

    if ( k == 2 ) {
      arr.push(3);
      return arr;
    }

    arr.push(2);
    arr.push(3);

    var i = 5;
    while ( arr.length < k ) {
      if( isprime(i) ) {
        arr.push(i);
      }
      i += 2;
    }

    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

var k = 100;
var fs = require('fs');
var outfile = "prime_numbers.txt";

console.log("firstkprime(" + k + ")");
var out = fmt(firstkprime(k));
fs.writeFileSync(outfile, out);
console.log(out);
