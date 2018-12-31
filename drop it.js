//Intermediate Algorithm Scripting: Drop It
//new arr; iterate through the input array & check the true-false statement;
//The first way
function dropElements(arr, func) {
  // Drop them elements.
  let array;
  arr.forEach((x)=>{
  	if(func(x)) {
  		let id = arr.indexOf(x);
  		array = arr.splice(id);
  	}
  	return undefined;  
  })
  return array;
}

//console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))
//The second way
function testing(arr, func) {
	let array = arr.filter(x=>func(x));
	return array;
}
console.log(testing([1, 2, 3, 9, 2], function(n) {return n > 2;}))
//console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))

function lol(arr, func) {
	let sliced = arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
	return sliced;
}
console.log(lol([0, 1, 0, 1], function(n) {return n === 1;}))

let arr1 = [1,2,3,4,5];
let arrr = arr1.slice(2);
console.log(arrr)

