//Intermediate Algorithm Scripting: Binary Agents
//.split("") if there is space inbetween;
//convert to the plain english
function binaryAgent(str) {
  return str.split(' ').map(x=>parseInt(x, 2)).map(x=>String.fromCharCode(x)).join('');
}



console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))
let binary = "01000001";
let digit = parseInt(binary, 2);
console.log(digit)
let a = "Abc";
console.log(String.fromCharCode(65))