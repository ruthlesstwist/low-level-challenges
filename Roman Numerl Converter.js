//JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
//use switch
//split into thousands, hundreds, tens, and ones.
//convert with switch according to certain conditions.
//OR. [1,4,5,9,10,40,50,90,100,400,500,900,1000]. 1)Find the greatest number that is less than or equal to your picked
//number. 37 - [10,10,10,5,1,1] - convert them to roman numerals with a for loop and some switch statements; remember to 
//subtract the greatest number from your number each time that you find one;
//convert each number of your new array to the Roman Numerals consequently;
let num = 123;
let arr = [];
let i = 1;

/*
while (num > 0) {
	let digit  = num%10;
	num /= 10;
	arr.push(digit*i);
	i *=10;

}
*/
function convertToRoman(num){
	let number = num;
	let pickedNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000,1000000];
	let len = pickedNum.length;
	let arr2 = [];
	let romans = '';
	while (number > 0) {
		let found1 = pickedNum.find(x=>x>number);
		let found2 = pickedNum[pickedNum.indexOf(found1)-1];
		number -=found2;
		arr2.push(found2);
	}

    arr2.forEach(x=>{
    switch(x){
        case 1:
        romans += 'I';
        break;
        case 4:
        romans += 'IV';
        break;
        case 5:
        romans += 'V';
        break;
        case 9: 
        romans += 'IX';
        break;
        case 10:
        romans += 'X';
        break;
        case 40:
        romans += 'XL';
        break;
        case 50:
        romans += 'L';
        break;
        case 90:
        romans += 'XC';
        break;
        case 100:
        romans += 'C';
        break;
        case 400:
        romans += 'CD';
        break;
        case 500:
        romans += 'D';
        break;
        case 900:
        romans += 'CM';
        break;
        case 1000:
        romans += 'M';
        break;

    }
});
	return romans;
}
console.log(convertToRoman(3999))