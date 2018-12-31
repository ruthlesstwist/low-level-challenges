
function Object(status, money) {
    this.status = status;
    this.change = money;
}
let obj = new Object('open', [[0.2],[12],[40]]);


let whatEver = 0;
let munny = [["PENNY", 1.01],
 ["NICKEL", 2.05] ];//,
/*
 ["DIME", 3.1],
 ["QUARTER", 4.25],
 ["ONE", 90],
 ["FIVE", 55],
 ["TEN", 20],
 ["TWENTY", 60],
 ["ONE HUNDRED", 100]];
*/


 /*
 munny.forEach(x=> whatEver += x[1]);
 let rounded = Math.round(whatEver*100)/100;
 let bills = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100,10000000];
 let splittedSUm = [];
 while (rounded > 0) {
    let greater = bills.find(x=>x>rounded);
    let toBeFound = bills[bills.indexOf(greater)-1];
    splittedSUm.push(toBeFound);
    rounded = Math.round((rounded - toBeFound)*100)/100
 }
 console.log(splittedSUm);
*/
 //[ 20, 20, 20, 20, 10, 5, 1, 0.25, 0.25, 0.25, 0.01, 0.01 ]

//create two for loop. one for the cid and one for the bills and coins.


/*
let bills = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100,10000000];
let numero = 0;
let myNewArr = [];
for (let i = 0; i < munny.length: i++) {
    switch(i[0]){
     case "PENNY":
     numero = i[1]/0.01;
     while(numero > 0) {
        myNewArr.push(0.01);
        numero -= 1;
     } 
     break;
     case "NICKEL":
     numero = i[1]/0.05;
     while(numero > 0) {
        myNewArr.push(0.05);
        numero -= 1;
     }
    }
}

*/
