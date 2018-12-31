//Intermediate Algorithm Scripting: Smallest Common Multiple
//1)
[2,3,4,5,6,7,8,9,10]
[2,3] - 2,3
[3,4] - 3, 2-2
[4,5] - 2-2, 5
[5,6] - 5, 2-3
[6,7] - 2-3, 7
[7,8] - 7, 2-2-2
[8,9] - 2-2-2, 3-3
[9,10] - 3-3, 2-5

//6.12.60.
//push all primes into an array
//before pushing a certain type of prime make sure if it isn't there already
[2,3,2,5,7,2,3]
let r = 2*3*2*5*7*2*3;
//console.log(r)
function lc(num) {
	let min = Math.min(...num);
	let max = Math.max(...num);
	let array = [];
	for (let i = min; i <= max; i++) {
		array.push(i);
	}
	let primes = [];
	array.forEach(function(x) {
    for (let i = 2; i <= x; i++) {
        if(x % i === 0) {
            let count = [];
            while(x % i === 0) {
                x = x / i;
                count.push(i);
            }
            primes.push(count)
        }
    }
})
	return primes;
}
console.log(lc([2,10]))

/*array.forEach(function(x) {
	for (let i = 2; i < Math.sqrt(x); i++) {
		if(x % i === 0) {
			let count = 0;
			while(x % i === 0) {
				x = x / i;
				count++;
			}

		}
	}
})
*/

//new approach - lcm(a,b,c) = lcm(a,lcm(b,c))



//let dividend = Math.max()

//console.log(wow)
function euclidianR(a,b){
	while(b !== 0) {
		let remainder = a % b;
		a = b;
		b = remainder;
	}
	return a;
	}
	console.log(euclidianR(1701,3768))
function lcm(a,b) {
	
	return a * b / euclidianR(a,b);
}
console.log(lcm(10,9))
let recur = [5,6,7,8,9,10].sort((a,b)=>(a<b));
let wow = recur.reduce((a,b)=>(a*b/euclidianR(a,b)));
console.log(wow)
//final variant

function euclidianR(a,b){
	while(b !== 0) {
		let remainder = a % b;
		a = b;
		b = remainder;
	}
	return a;
}
function finalVariant(arr){
	let newArr = [];
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	for (let i = min; i <= max; i++){
		newArr.push(i);
	}
	let fin = newArr
	 .sort((a,b)=>(a<b))//I used .sort() in order to decrease the number of computations (you'll get the lcm faster when 
	 //dealing with larger numbers), though I still can't come up with an idea how to quit the function when the lcm is found.
	 .reduce((a,b)=>(a*b/euclidianR(a,b)));
	 return fin;

	function euclidianR(a,b){
	while(b !== 0) {
		let remainder = a % b;
		a = b;
		b = remainder;
	}
	return a;
}
}
console.log(finalVariant([1,13]))