// Query Params for API
var page = 1, // random page selection
	type = "people"; // need to verify props if changed


var playerName = "";







// listen for #playerName edit
$('#inputName').on('keyup', function(){
	// set playerName 
	playerName = $(this).val()

	console.log(playerName.substr(0, 3))

	// check if it is more than 10
	if (playerName.length > 10) {
		playerName = playerName.substr(0, 10)
		$(this).val(playerName);
	}
		// trim white space
		playerName = playerName.trim();


})



// gets elemtn




// -----------------------------------
// listener for play button click
$('#play button').on('click', function(event){
	// prevent default
	event.preventDefault();

	console.log(playerName)
	console.log(playerName.length)

	if (playerName.length > 2) {
		// switch to game scene
		$('#menu').hide();
		$('#game').show();

		// start game
		getData(page, type);
	
	} else {
		// enter name
		console.log("enter name, field is blank")
	}

})
























// -----------------------------------
// create high scores
// hold temp highscores
var highscores = [
	// 1st score
	{
		name: "Mike",
		score: "1000"
	},
	{
		name: "Tim",
		score: "900"

	},
	{
		name: "Danny",
		score: "600"
	},
	{
		name: "Derick",
		score: "300"

	},
	{
		name: "Bob",
		score: "50"
	},

]


// --------------------------------------------
// Create html for highscores
var $leaderboardObj = '';

// loop through scores and create html for each score
for (var i = 0; i < highscores.length; i++) {
	$leaderboardObj += '<div class="row">';
	$leaderboardObj += '<div class="col-sm-6">';
	$leaderboardObj += '<h4>'+highscores[i].name+'</h4></div>';
	$leaderboardObj += '<div class="col-sm-6">';
	$leaderboardObj += '<h5>'+highscores[i].score+'</h5></div>';
	$leaderboardObj += '</div>' // close row
}


// add html obj to #leaderboard
$('#leaderboard').append($leaderboardObj)









