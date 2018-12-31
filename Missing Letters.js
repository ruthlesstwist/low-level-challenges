//Intermediate Algorithm Scripting: Missing letters
//Create if statement that would return indefined when true and when false
// get the last character and return 
function fearNotLetter(str) {
  if (str === "abcdefghijklmnopqrstuvwxyz") {
  	return undefined;
  } 
  let last = str.slice(-1);
  let n = str.charCodeAt(last) + 1;
  let fin = String.fromCharCode(n);
  return fin;
}

console.log(fearNotLetter("bcdf"))