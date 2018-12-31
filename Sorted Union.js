//Intermediate Algorithm Scripting: Sorted Union
//Multi-arguments : use ...arguments
// concat all arrays 
//remove the duplicates
//done
//Tricky part: how would you access the second level array and evaluate it in regard to other concatenated elements
//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
//uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
function uniteUnique(...args) {
	 let arr = args.sort(function (a, b) { return a - b; });
	 let newArr =  arr.reduce((a, b) => {return a.concat(b);}, []);
	let checkArr = [];
	 for (let i =0; i < newArr.length; i++) {
	 	if (checkArr.indexOf(newArr[i]) === -1) 
	 		checkArr.push(newArr[i]);
	 }
	 return checkArr;
	 //let mapped = newArr.filter((x,i)=>{if(newArr.indexOf(x) === i) return x;});

}



console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
//let arr = [[1, 3, 2], [1, [5]], [2, [4]]];
//let concatenated = arr.reduce((a, b) => {return a.concat(b);}, []);
//console.log(concatenated)
