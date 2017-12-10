//linked to index.html
var score;
var crystal = ["green", "blue", "diamond", "red"];
var match;
var crystalValue = [];
var wins=0;
var losses=0;

function reset() {
	match = Math.floor(Math.random() * 90 + 36);
	$("#match").text(match);
	score = 0;
	for (i = 0; i < crystal.length; i++) {
		crystalValue[i] = Math.ceil(Math.random() * 12);
	}
	console.log(crystalValue);
};

$(document).ready(function () {
	if (score < match) {
	$("#green").on("click", function () {
		score += crystalValue[0];
		$("#score").text(score);

	});

	$("#blue").on("click", function () {
		score += crystalValue[1];
		$("#score").text(score);
	});

	$("#diamond").on("click", function () {
		score += crystalValue[2];
		$("#score").text(score);
	});

	$("#red").on("click", function () {
		score += crystalValue[3];
		$("#score").text(score);
	});

	} else if (score === match) {

		console.log(score);
		wins = wins + 1;
		$("#win").text(wins);
		reset();

	} else {
		console.log(match);
		losses = losses + 1 ;
		$("#loss").text(losses);
		reset();

	};
});

reset();