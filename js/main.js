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


