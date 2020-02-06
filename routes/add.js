var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
  var nameToAdd = request.query.name;
	var descToAdd = request.query.description;
	var friendToAdd = {
	 'name': nameToAdd,
	 'description': descToAdd,
	 'imageURL': 'http://lorempixel.com/400/400/people/',
	};
  console.log(friendToAdd);
	data.friends.push(friendToAdd);

	response.render('index', data);
 }
