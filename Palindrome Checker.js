//JavaScript Algorithms and Data Structures Projects: Palindrome Checker

function palindrome(str) {
	//remove all unneccesary chars from your string;
	let rgx = /[^A-Za-z0-9]/g;
	let string = str.replace(rgx,'').toLowerCase();
	//create a new reversed string;
	let myArrStr = string.split('').reverse().join('');
	//check whether true or false;
	if(string===myArrStr) {
		return true;
	}
	return false;
}
console.log(palindrome('RACE car'))