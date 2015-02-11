// Ajax request for swapi.co api
var getData = function (page, type) {
	page = Math.floor((Math.random() * page) + 1)

	// ajax request
	var req = new XMLHttpRequest();
	req.onload = function(){
			// parse data
			var data = JSON.parse(this.responseText);
			var results = [];

			// create array to hold data
			for (var i = 0; i < data.results.length; i++){
				results[i] = [];
				results[i].name = data.results[i].name;
				results[i].birthYear = data.results[i].birth_year;
				results[i].gender = data.results[i].gender;
				// get google image for obj name?
			}

			gameInit(results);
		}

	req.open("GET", "http://swapi.co/api/"+type+"/?page="+page, true);
	req.send();
}