//linked to index.html
var score;
var match;
var allValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var shuffleValue = [];
var crystalValue = [];
var wins = 0;
var losses = 0;

//created a function so that each crystal has a unique value
function shuffle(array) {
	var i = array.length,
		j = 0,
		temp;
	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

//this function takes the first four values of the shuffled values array
function setCrystalValues(array) {
	for (l = 0; l < 4; l++) {
		array[l] = shuffleValue[l];
	};
	return array;
};

//function to reset the game
function reset() {
	match = Math.floor(Math.random() * 101 + 19);
	$("#match").text(match);
	score = 0;
	$("#score").text(score);
	//Reset the crystal values
	shuffleValue = shuffle(allValue);
	setCrystalValues(crystalValue);
	console.log(crystalValue);
};

//function to increase wins, print wins to screen, and reset the game
function win() {
	wins++;
	$("#wins").text(wins);
	reset();
};

//function to increase losses, print losses to screen, and reset the game
function lose() {
	losses++;
	$("#losses").text(losses);
	reset();
};

//click events for each image to increase the score by the value of that crystal
$(document).ready(function () {
	$("#green").on("click", function () {
		score += crystalValue[0];
		$("#score").text(score);
		if (score === match) {
			win();
		} else if (score > match) {
			lose();
		}
	});

	$("#blue").on("click", function () {
		score += crystalValue[1];
		$("#score").text(score);
		if (score === match) {
			win();
		} else if (score > match) {
			lose();
		}
	});

	$("#diamond").on("click", function () {
		score += crystalValue[2];
		$("#score").text(score);
		if (score === match) {
			win();
		} else if (score > match) {
			lose();
		}
	});

	$("#red").on("click", function () {
		score += crystalValue[3];
		$("#score").text(score);
		if (score === match) {
			win();
		} else if (score > match) {
			lose();
		}
	});
});

reset();