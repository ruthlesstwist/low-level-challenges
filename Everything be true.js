//Intermediate Algorithm Scripting: Everything Be True
/*let space = [
{"user": "Tinky-Winky", "sex": "male"}, 
{"user": "Dipsy", "sex": "male"},
{"user": "Gipsy"},
{"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"},
{"user": "Pork" }
], //"sex") should return true.

let filtered = space.filter(x=>!x["sex"]);
let mapped = space.map(x=>!x["sex"]?false:true);
let check;
for (let i = 0; i < mapped.length; i++) {
	if (!mapped[i]) {
		check = false;
	}
}
console.log(check)
console.log(mapped)
*/
function truthCheck(collection, pre) {
  // Is everyone being true?
  let check;
  let mapped = collection.map(x=>!x[pre]?check=false:check = true);
  return check;

}
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"))

//things to be corrected : need to return false when "" or 0 or undefined(done) or null;
