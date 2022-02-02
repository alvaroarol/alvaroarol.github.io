/**
 * Generate a random selection of letters of a specified length and within a set of defined letters.
 * @param {String[]} lettersArray Available letters.
 * @param {Number} length Lenght of word.
 * @return {String[]} The returned word as an array of its letters.
 */
function randomWord(lettersArray, length) {
	
	var wordArray = [];
	
	for(i = 1; i <= length; i++) {
		var randomLetter = lettersArray[Math.floor(Math.random()*lettersArray.length)];
		wordArray.push(randomLetter);
	}
	
	return wordArray;
	
}


/**
 * Check if a word is composed of (and only of) the letters provided.
 * @param {String[]} lettersArray Array of letters that can be in the word to check.
 * @param {String} word Word to check.
 * @return {boolean} Whether the word is accepted or not.
 */
function checkWordWithLetters(lettersArray, word) {
	
	for(i = 0; i < word.length; i++) {
		var indexOfLetter = lettersArray.indexOf(word[i]);
		if(indexOfLetter === -1) {
			return false;
		} else {
			lettersArray.splice(indexOfLetter, 1);
		}
	}
	
	return true;
	
}


/**
 * Find longest words in a collection of words, and made of specific letters.
 * @param {String[]} lettersArray Specific letters making up the word.
 * @param {String[]} wordsArray List of valid words ("dictionary").
 * @return {String[]} Found words.
 */
function findWords(lettersArray, wordsArray) {
	
	var foundWords = [];
	
	wordsArray.forEach(word => {
		var isWordValid = true;
		if(word.length > lettersArray.length) {
			isWordValid = false;
		} else {
			var lettersTemp = [...lettersArray];
			isWordValid = checkWordWithLetters(lettersTemp, word);
		}
		if(isWordValid && foundWords.length === 0) {
			foundWords.push(word);
		} else if(isWordValid && word.length === foundWords[0].length) {
			foundWords.push(word);
		} else if(isWordValid && word.length > foundWords[0].length) {
			foundWords = [];
			foundWords.push(word);
		}
	});
	
	return foundWords;
}