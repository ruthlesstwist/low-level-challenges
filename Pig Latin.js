// translatePigLatin("california") should return "aliforniacay".
//translatePigLatin("paragraphs") should return "aragraphspay".
//translatePigLatin("glove") should return "oveglay".
//translatePigLatin("algorithm") should return "algorithmway".
//translatePigLatin("eight") should return "eightway".
//if (consonant) place it to the end with 'ay'
// if (vowel ) just add way to the end of your word

	function translatePigLatin(str) {
	let last = str.length - 1; //an index of the word's last character.
	let regexVowel = /^[aeiouy]/; // the regex for all the vowels.
	let regexCons = /^[^aeiouy]/; // the regex for all the consonants. (everything but vowels)
	 if (regexVowel.test(str)) {return  str + "way"}
		 else if(regexCons.test(str)) {
		 	let firstCons = str.match(/^[^aeiouy]+/).splice(0, 1).join();
		 	//Since .match() returns a multiple elements array with the first element being 
		 	//the matched expression, I extracted & convert that into a string  using .join().
		 	let consLen = firstCons.length; //the length of the converted string.
		 	let arr = str.split("");
		 	arr.splice(0, consLen); 
		 	arr.splice(last, 0, firstCons, "ay")
		 	return arr.join('')
		 }	
	}
console.log(translatePigLatin("glove"));