//Intermediate Algorithm Scripting: Sum All Primes
//Sum all Primes inferior to the num.
//inferior to 10 : 2 + 3 +5 + 7 = 17
//Input: an integer n > 1.
 
function perc(num) {
	let array = [];
	for (let i = 2; i <= num; i++) {
		for (let j = 2; j <= i; j++) {
			if (i === j) {
				array.push(i);
			}
			if (i % j === 0) {
				break;
			}
		}
	}
	return array.reduce((a,b)=>a+b);
}
console.log(perc(977))