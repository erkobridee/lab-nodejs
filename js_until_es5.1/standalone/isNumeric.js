function isNumeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//---------------------------------------------------------------------------//

console.log(isNumeric(1));                // true
console.log(isNumeric('1'));              // true

console.log(isNumeric(-1));               // true
console.log(isNumeric('-1'));             // true

console.log(isNumeric(1.1));              // true
console.log(isNumeric('1.1'));            // true

console.log(isNumeric(-1.1));             // true
console.log(isNumeric('-1.1'));           // true

console.log(isNumeric('string value'));   // false
console.log(isNumeric({attr: 'value'}));  // false
console.log(isNumeric([1,2,3]));          // false
console.log(isNumeric(true));             // false
