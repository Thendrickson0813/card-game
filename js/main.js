// Query Params for API
var page = 1, // random page selection
	type = "people"; // need to verify props if changed

// -----------------------------------
// listener for play button click
$('#play button').on('click', function(event){
	// prevent default
	event.preventDefault();

	// switch to game scene
	$('#menu').hide();
	$('#game').show();

	// start game
	getData(page, type);
})



// -----------------------------------
// create high scores
var highscores = {
	{
		name: "Obi Wan",
	 	time: 50 
	},
	{
		name: "Master Yoda",
		time: 62
	},
	{	name: "Chewbacca",
		time: 49
	},
	{
		name: "Han Solo",
		time: 121
	},
	{
		name: "R2 D2",
		time: 108
	}
}
