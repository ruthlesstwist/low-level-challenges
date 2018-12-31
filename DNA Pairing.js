//Intermediate Algorithm Scripting: DNA Pairing
// Base pairs are a pair of AT and CG.
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
//split("") the str to turn into an array
//create a for loop for the newly created array
//create the switch() statement for each iterated element. case "A" : ["A", "T"]; break; 
//case "C" : newArr.push(["C", "G"]); break; 
//return newArr;
function pairElement(str) {
  let arr = str.split("");
  let newArr = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
  	switch(arr[i]) {
  		case 'A':
  		 newArr.push(['A', 'T']);
  		 break;
  		case 'T': 
  		 newArr.push(['T', 'A']);
  		 break;
  		case 'C':
  		 newArr.push(['C', 'G']);
  		 break;
  		case 'G': 
  		 newArr.push(['G','C']);
  		 break;
  	}
  }
  return newArr;
}

console.log(pairElement("ATCGA"));
