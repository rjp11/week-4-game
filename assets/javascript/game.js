//linked to index.html
var match = Math.floor(Math.random() * 90 + 36);
console.log(match);
var score = 0;


if (score < match) {
	var oneC = Math.floor(Math.random() * 11 + 1);
	var twoC = Math.floor(Math.random() * 11 + 1);
	var threeC = Math.floor(Math.random() * 11 + 1);
	var fourC = Math.floor(Math.random() * 11 + 1);
	
	$("#one").on("click", function(){
		score = score + oneC;
		alert(`You scored ${oneC} points`);
	}
	);

	$("#two").on("click", function(){
		score = score + twoC;
		alert(`You scored ${twoC} points`);
	}
	);

	$("#three").on("click", function(){
		score = score + threeC;
		alert(`You scored ${threeC} points`);
	}
	);

	$("#four").on("click", function(){
		score = score + fourC;
		alert(`You scored ${fourC} points`);
	}
	);

	$("#body").on("click",console.log(score));

} else if (score === match) {

	console.log(score);

} else {
	console.log(match);

};