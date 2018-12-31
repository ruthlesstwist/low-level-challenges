//Caesar Cipher
//String.charCodeAt() to get ASCII. String.fromCharCode();
//How to start with the 65'th element once you passed through the Z elemen
//console.log(caesar("index mom"));
function rot13(str) { 
// LBH QVQ VG!
  let lastChar;
  let arrNew;
  
  if (str.match(/[?!.]/)) {
  	
  	let midAr = str.split('');
  	midAr.splice(-1);
  	arrNew = midAr.join('').split(' ');
  	lastChar = str.slice(-1);
  } else {
  	arrNew = str.split(' '); lastChar = '';
  } 
  let len1 = arrNew.length;
  let myArr = [];
  let final = [];
  for (let i = 0; i < len1; i++) {
  	for (let j = 0; j < arrNew[i].length; j++) {
  		if (arrNew[i].charCodeAt(j)-13 < 65) {
			let n;
			n = 65 - (arrNew[i].charCodeAt(j)-13);
			myArr.push(String.fromCharCode(91-n));
		}
		else myArr.push(String.fromCharCode(arrNew[i].charCodeAt(j)-13));
  	}
  }
  for (let i = 0; i < len1; i++) {
  	let num;
  	num = arrNew[i].length;
  	final.push(myArr.splice(0,num).join(''));
  }
  return final.join(' ') + lastChar;
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"))


let mynewArr = ['peach', 'pear', 'apple', 'plum'];
let whoo = mynewArr.filter(x=>x==='apple');
console.log(whoo)