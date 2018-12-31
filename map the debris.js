//Intermediate Algorithm Scripting: Map the Debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
    arr.map(x=>x["orbitalPeriod"] = Math.round(Math.sqrt(4*Math.pow(Math.PI,2)*Math.pow(earthRadius+x.avgAlt, 3)/GM)));
  return arr;

}
//[{name : "sputnik", avgAlt : 35873.5553}]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
//let counted = Math.round(Math.sqrt(4*Math.pow(Math.PI,2)*Math.pow(earthRadius+413.6, 3)/GM));
let array = [{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}];
