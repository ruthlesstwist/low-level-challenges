//Intermediate Algorithm Scripting: Steamroller
//to be noted: Array.isArray() - checks if its argument is an array or not;
//findIndex() - tells you an index of the first element that passed a certain test
//e.i.: let sliced = arr.slice(arr.findIndex(func) >=0 ? arr.findIndex(func) : arr.length));
let r = [1];
let checked = Array.isArray(r);
let conc = r.concat(2);
console.log(conc);

function flattenDis(arr) {
	return arr.reduce((a,b) => Array.isArray(b) ? a.concat(flattenDis(b)) : a.concat(b), []);
}
console.log(flattenDis([1, {}, [3, [[4]]]]))
//This is a recursive function that iterates through an input array. It checks if the 
//b element of .reduce() is an array or not. if not, it just .concat() that, otherwise that is
//recursed 
let newArr = [1,2];
let old = [7,9];
let wow = newArr.concat(old);
console.log(wow)