//JavaScript Algorithms and Data Structures Projects: Cash Register
//try splitting the change into separate bills the same way I tackled the ROman Numerals' Chal
//iterate through the finalChange var to subtract 


//[["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  /*function Object(status, money) {
  	this.status = status;
  	this.change = money;
  }*/
  let finalChange = [];
  let toReturn = [];
  let bills = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100,10000000];
  // Here is your change, ma'am.
  while (change > 0.01) {
  		let greater = bills.find(x=>x>change);
  		let toBeFound = bills[bills.indexOf(greater)-1];
  		finalChange.push(toBeFound);
  		//this line is crucial bevause of the tricks with floating numbers.
  		change = Math.round((change - toBeFound)*100)/100;
  }
  if (change === 0.01) {
  	finalChange.push(change)
  }
  
  return finalChange;
}
console.log(checkCashRegister(3.23, 100))
let bills = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
let h = 0.35-0.25;
console.log(Math.round(h*100)/100)
let p = 4.25/0.25;
console.log(p)
let divided = [];
switch(x[0]) {
	case "PENNY":
	let numero = x[1]/0.01;
	while(numero > 0) {
		divided.push(0.01);
		numero -= 1;
	}

}

