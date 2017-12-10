//linked to index.html
var match = Math.floor(Math.random() * 90 + 36);
console.log(match);
var score = 0;


if (score < match) {
	var greenC = Math.ceil(Math.random() * 12);
	var blueC = Math.ceil(Math.random() * 12);
	var diaC = Math.ceil(Math.random() * 12);
	var redC = Math.ceil(Math.random() * 12);
	
	$("#green").on("click", function(){
		score = score + greenC;
		alert(`You scored ${greenC} points`);
	}
	);

	$("#blue").on("click", function(){
		score = score + blueC;
		alert(`You scored ${blueC} points`);
	}
	);

	$("#diamond").on("click", function(){
		score = score + diaC;
		alert(`You scored ${diaC} points`);
	}
	);

	$("#red").on("click", function(){
		score = score + redC;
		alert(`You scored ${redC} points`);
	}
	);

	$("#body").on("click",console.log(score));

} else if (score === match) {

	console.log(score);

} else {
	console.log(match);

};