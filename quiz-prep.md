q & a

	flash card

		front:
			write the SQL to create a users table in MySQL
		back:
			DROP DATABASE IF EXISTS hats_db;
			CREATE DATABASE hats_db;
			USE hats_db;
			CREATE TABLE hats(
				id int NOT NULL AUTO_INCREMENT,
				type varchar (255) NULL,
				PRIMARY KEY (id) );


	flash card

		front:
			what's the difference between a left join and a right join

		back:
			joins the table to the left and not the right of the word LEFT JOIN

	flash card

		front:
			how do you select everything from a table named items

		back:
			SELECT * 
			FROM hats_db;

	flash card

		front:
			how do you select only the row with an id of 5 from a table named cars

		back:
			SELECT * FROM cars WHERE ID = 5;

	flash card

		front:
			select all the users and each user's pet(s) in one query 

			users
				id name

			pets
				id name type user_id

		back:	
			SELECT users.name, pets.type
			FROM users
			LEFT JOIN pets
			ON user.id = pets.user.id;


	flash card

		front:
			app.get('/users/:id', function(req, res){
				//how do I get access to :id here?
			});

		back:
				res.sendFile(path.join(_dirname, "public/id.html"));

				localhost:3000/:id

	flash card

		front:
			what are examples of requests that would hit this route

			app.get('/users/:id', function(req, res){
				//...
			});
		back:
				localhost:3000/:id

	flash card

		front:
			//I want the response below to look like this:

			// {q: 'frontal lobe', limit: 100}

			//what does the url look like for that?

			app.get('/search', function(req, res){
				res.json(req.query);
			});
		back:

	flash card

		front:

			initialize an array and use a for loop to add odd numbers into it

		back:
			var array = []
			for (var i = 1; i < array.length; i+2) {
				array = [i];
			}
	flash card

		front:

			write a function that takes a number and returns that number doubled with 1 added to it

		back:
			function(x) {
				var y;
				y = x * 2 + 1;
				return y;
			}
			function(2);