//Intermediate Algorithm Scripting: Make a Person
//getFirstName() getLastName() getFullName() 
//setFirstName(first) setLastName(last) setFullName(firstAndLast)

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let names = firstAndLast.split(" ");
  this.getFullName = function() {
    return this.setFullName;
  };
  this.setFullName = firstAndLast;
  this.setLastName = names[1];
  this.setFirstName = names[0];
  this.getFirstName = function() {
  	return names[0];
  }
  this.getLastName = function() {
  	return names[1];
  }
  this.getFullName = function() {
  	names[0] + " " + names[1];
  }
  this.setFirstName = function(first) {
  	names[0] = first;
  }
  this.setLastName = function(last) {
  	names[1] = last;
  }
  this.setFullName = function(firstAndLast) {
  	let splittedArr = names.split(" ");
  	this.setFirstName(splittedArr[0]);
  	this.setLastName(splittedArr[1]);
  }
};

var bob = new Person('Bob Roth');
bob.getFullName();
console.log(bob.getFullName())
let  splitted = "Bob Roth".split(" ");
console.log(splitted)