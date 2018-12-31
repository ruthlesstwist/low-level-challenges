//Intermediate Algorithm Scripting: Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//create a regex for all the symbols
// create a switch statement
//convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
//convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
//convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
//convertHTML("Schindler's List") should return Schindler&​apos;s List.
//convertHTML("<>") should return &​lt;&​gt;.
//convertHTML("abc") should return abc.

function convertHTML(str) {
	let regex = /[&<>"']+/;
	let matched = str.match(regex);
	return matched;
}

console.log(convertHTML("Dolce & Gabbana"));