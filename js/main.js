// Initialise
var gameLetters = randomWord(letters, wordLength);
document.getElementById("long-word-random-letters").innerHTML = gameLetters.join(" ").toUpperCase();
var solutions = findWords(gameLetters, allWords);

// Listeners
document.getElementById("long-word-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var wordGuess = document.getElementById("long-word-input").value;
	if(checkWordWithLetters(gameLetters, wordGuess) && allWords.includes(wordGuess)) {
		document.getElementById("long-word-result").innerHTML = "Congrats, your word is valid! :)";
	} else {
		document.getElementById("long-word-result").innerHTML = "YOU SUCK BRO";
	}
	document.getElementById("long-word-best-words").innerHTML = "Best possible word(s) were(was): " + solutions.join(", ");
});

document.getElementById("long-word-again").addEventListener("click", function() {
	gameLetters = randomWord(letters, wordLength);
	solutions = findWords(gameLetters, allWords);
	document.getElementById("long-word-random-letters").innerHTML = gameLetters.join(" ").toUpperCase();
	document.getElementById("long-word-best-words").innerHTML = "";
	document.getElementById("long-word-result").innerHTML = "";
	document.getElementById("long-word-input").value = "";
});