//sum all odd fibonacci numbers that are less than num
//sumFibs(4) - 1, 1, 2, 3. 3 + 1 = 4;
function sumFibs(num) {
 let a = [1, 1];
for (let i = 1; i < num; i++) {
	a[i+1] = a[i] + a[i-1];
}
//let mapped = a.map((x)=>{if(x % 2 !== 0 && x <= num) })

let ar = a.filter((x)=>{if(x % 2 !== 0 && x < num) return x }).reduce((a,b)=>a+b,0);
return a

}

console.log(sumFibs(10946));

/*let a = [1, 1];
for (let i = 1; i < 8; i++) {
	a[i+1] = a[i] + a[i-1];
}
//console.log(a)
*/