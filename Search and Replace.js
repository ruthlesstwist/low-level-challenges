//Intermediate Algorithm Scripting: Search and Replace
//myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
//myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
//myReplace("His name is Tom", "Tom", "john") should return "His name is John".
//myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
//Cr. 1) check the str for a match using .match() or rather using .test()
//Cr. 2) .split("") your string to convert it to an array of word-elements
//Cr. 3) Find out the element's (the before) index using .indexOf()
//Cr. 4) .splice() to replace that element with "the after argument"
//Cr. 5) Make sure the case of your substituted element is consistent. if (character === character
//.toUpperCase())
//Cr. 6) Turn it back to a string

function myReplace(str, before, after) {
	let newArr = str.split(" ");
	let num = newArr.indexOf(before);
	let char = before.charAt(0);
	if (char == char.toUpperCase()) {
		let afterUp = after.charAt(0).toUpperCase() + after.slice(1);
		newArr.splice(num, 1, afterUp);
		let final = newArr.join(' ')
		return final;
	}
	newArr.splice(num, 1, after);
	let final = newArr.join(' ');
  return final;
}
console.log(myReplace("Let us go to the store", "store", "mall"))