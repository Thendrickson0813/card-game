//--------------------------------------------------------
// Foward declared variables
var cardFlipped = false,
	cardDeck = []; // change to obj?


// -----------------------------------------------------
// Update Score
var gameUpdateScore = function (){
	console.log("score updated");
}


// -----------------------------------------------------
// End of Game Loop
var gameEnd = function(){
	console.log("end of game");
}


// --------------------------------------------------------
// Reorder array objects
var shuffleDeck = function(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;	
}



// -----------------------------------------------------
// Set Up Game Cards
var gameInit = function(results) {

	// Loop through each result and create a matching pair of cards
	for (var i = 0; i < results.length; i++) {
		// create original card
		cardDeck[i] = {name : results[i].name, 
					   id : (i+1),
					   gender : results[i].gender,
					   birthYear : results[i].birthYear }

		// create matching card
		cardDeck[i+10] = {name : results[i].name, 
					   id : (i+1),
					   gender : results[i].gender,
					   birthYear : results[i].birthYear}

	}
	// Shuffle Deck
	shuffleDeck(cardDeck);

	// // for testing card deck
	for (var i = 0; i < cardDeck.length; i++) {
		console.log(cardDeck[i]);
	}

	// Start game loop
	gameMain();
}



// -----------------------------------------------------
// Main Game Loop
var gameMain = function(card) {
	// if player selected card
	if (card) {
		// check if card already flipped
		if (cardFlipped) {
			// check for match
			if (card.id === cardFlipped.id) {
				// cards match, update score
				gameUpdateScore();
				// remove cards from deck
				for(var i = cardDeck.length; i--;){
					if (cardDeck[i].id === card.id) cardDeck.splice(i, 1);
				}
				// reset card flipped
				cardFlipped = false;
				// check if cards remain
				if (cardDeck.length > 0) {
					// cards remain, continue game
					gameMain(false);
				} else {
					gameEnd();
				}

			} else {
				// card doesn't match, reset cards
				cardFlipped = false;
				// turn over cards
				// ---------------
				gameMain(false);
			}
		} else {
			// set first card user flips
			cardFlipped = card;
			gameMain(false);
		}

	} else {
		// get card id by jquery click listener
		// ---------------
	}
}