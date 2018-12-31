//Intermediate Algorithm Scripting: Arguments Optional
//chech if both of the arguments are numbers = return undefined if the condition is not met;
//recursive function . until the sum is not returend go on checking if your argument is a number
//check the args: is the first argument a number? 
//first - yes: add; no: check the next; the second - yes: add; no: return the function;
function addTogether() {
  let args = [...arguments];
  let len = args.length;
  if (len == 2) {
  	if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
  		return undefined
  	}
  	return args[0] + args[1];
  }
  else if (len == 1) {
  	let a = args[0]
  	if (typeof a !== 'number') {
  		return undefined;
  	}
  	return function(b) {
  		if (typeof b !== 'number') {
  			return undefined;
  		}
  		return a + b;
  	}
  }
}
let wow = addTogether(3)
console.log(wow(40));
//console.log(addTogether(2,3))
//Recursion - Factorial.


/*
let countDownFrom = (num) => {
	if (num === 1) {return 1;}
	else {
		return num - countDownFrom(num-1);

	}	
}
console.log(countDownFrom(10))

*/

//add the first two elements. Make sure they're of type number; 
//If both of them are numbers = add them together; The first one is number - keep it and check the second. Is it?
//If true, add them tog
function testing() {
	let args = [...arguments];
	let len = args.length;
	if (typeof args[0] !== 'number'|| typeof args[1] !== 'number') {
		return undefined;
	}
	else if (len > 1) {
		return args.reduce((acc,b) => acc += b,0)
	}
	return let a = args[0]; function(n) {
		if (typeof n !== 'number') {
			return undefined;
		}
		return n + args[0];
	}	
}
let tes = testing(2)
console.log(tes(3))