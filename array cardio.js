//Array Cardio

const inventors = [
          { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
          { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
          { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
          { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
          { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
          { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
          { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
          { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
          { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
          { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
          { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
          { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
        ];
//let filtered = inventors.filter(x=>x["year"] >= 1500 && x["year"] < 1600);
//console.log(filtered);

//let mapped = inventors.map(x=>x["first"] + ' ' + x["last"]);
//console.log(mapped);

//let sorted = inventors.sort((a,b)=>a.year - b.year);
//console.log(sorted);


//let reduced = inventors.reduce((total,inventor)=>total + (inventor.passed-inventor.year),0);
//console.log(reduced);

//let mapped1 = inventors.map(x=>x["lived"]=(x.passed-x.year));
//let sorted1 = inventors.sort((a,b)=>a.lived - b.lived);
//console.log(sorted1);

//inventors.map(x=>x["lived"]=(x.passed-x.year));
//inventors.sort((a,b)=>a.lived - b.lived);
//console.log(inventors);

//let category = document.querySelector('.mw-category');
//const links = Array.from(category.querySelectorAll('a'));
//const de = links.map(link => link.textContent);
    
//let filteredDe = de.filter(x => regex.test(x)); //either use .includes();

//let wow = links
//           .map(link => link.textContent)
//          .filter(x => regex.test(x));
//The tricky part is that the links is a nodearray, not an normal array. That is why .map()
//cannot be applied to it.
//Hence, we have to convert this var into an array. Two ways of doing that: 
//Array.from() or just (...)-spread operator coupled with the brackets [];


 const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
                 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven,Ludwig', 
                 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
                 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
                 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
                 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',
                 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
                 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
                 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
                 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
                 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
                 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
                 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
                 'Blair, Tony', 'Blake, William'];
const alpha = people.sort((lastOne,nextOne) => {
    const [aLast, aFirst]  = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1: -1;
})

// Super Important
const data = ['car', 'car', 'truck', 'truck', 'bike', 
             'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
 const transportation = data.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++; 
    return obj;
 },{});
 console.log(transportation)

 