//1. spinal case - all-lowercase-words-joined-by-dashes
//2. spinalCase("This Is Spinal Tap") -->"this-is-spinal-tap"
//3. spinalCase("thisIsSpinalTap") --> "this-is-spinal-tap"
//4. spinalCase("The_Andy_Griffith_Show") --> "the-andy-griffith-show"
//5. spinalCase("Teletubbies say Eh-oh") --> "teletubbies-say-eh-oh"
//6. spinalCase("AllThe-small Things") --> "all-the-small-things"
//Cr. 1).split(). regex:/[-_[A-Z]\s]+/g
//Cr. 2)join by dashes
//Cr. 3) toLowerCase() 


//function toSpineCase(str) {
//	var regex = /(?=[A-Z])|\W|_/g;
//	return str.split(regex).join('-').toLowerCase();
//}
let str = "canberries";
let regex = /(?!cr)/;
let regexCons = /^[^aeiouy]/;
let firstCons = str.match(/^[^aeiouy]+/).splice(0, 1).join();
let consLen = firstCons.length;

//let firstMatched = firstCons.splice(0, 1).join();
console.log(consLen)
/*firstMatched.join('');
console.log(firstMatched.join(''))
else if (regexCons.test(str)) {
	let  firstCons = str.match(/^[^aeiouy]+/);
}*/