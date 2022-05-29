let num = 266219;
let array = num.toString().split('');
let result = array.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(result);
console.log((result ** 3).toString().slice(0, 2));
