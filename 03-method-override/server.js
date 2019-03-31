var mysql = require("mysql");
var express = require('express');
var app = express();
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

//you need this to be able to process information sent to a POST route
	var bodyParser = require('body-parser');

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// parse application/json
	app.use(bodyParser.json());

var path = require("path");

// Serve static content for the app from the "public" directory in the application directory.
// you need this line here so you don't have to create a route for every single file in the public folder (css, js, image, etc)
//index.html in the public folder will over ride the root route
app.use(express.static("public"));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "q_db"
});

app.get('/questions', function(req, res){

  connection.query('SELECT * FROM questions', function (error, results, fields) {
    if (error) throw error;
    
    res.json(results);
  });

});

app.get('/questions/:id', function(req, res){
	connection.query('SELECT * FROM questions WHERE id = ?', [req.params.id],function (error, results, fields) {
	  if (error) throw error;
	  
	  res.json(results[0]);
	});
});

app.get('/new', function(req, res){
	res.sendFile(path.join(__dirname, "public/new.html"));
});

app.get('/edit/:id', function(req, res){
	res.sendFile(path.join(__dirname, "public/edit.html"));
});

app.put('/update/:id', function(req, res){
	var query = connection.query(
	  "UPDATE questions SET ? WHERE id = ?",
	  [req.body, req.params.id],
	  function(err, response) {
	    res.redirect('/');
	  }
	);
});

//Cannot GET /delete/2
app.delete('/delete/:id', function(req, res){
	// var id = req.params.id;

	// res.send(id + "");

	var query = connection.query(
	  "DELETE FROM questions WHERE id = ?",
	  [req.params.id],
	  function(err, response) {
	    res.redirect('/');
	  }
	);

})

app.post('/create', function(req, res){
	console.log(req.body);

	var query = connection.query(
	  "INSERT INTO questions SET ?",
	  req.body,
	  function(err, response) {
	    res.redirect('/');
	  }
	);
})


//this will be over ridden by index.html in the public folder because of this line above
	
	//app.use(express.static("public"));

// app.get('/', function(req, res){
// 	res.send('hi');
// });


app.listen(3000, function(){
	console.log('listening on 3000');
});









