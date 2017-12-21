var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*var blogger = function(req, res, next){
	console.log("Blogging.....");
	next();
}
app.use(blogger);*/
//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var users = [
	{	id : 1,
		first_name : 'Ayushi',
		last_name : 'Awasthi',
		email : 'ayushiawasthi1015@gmail.com'
	},
	{	id : 2,
		first_name : 'Kamya',
		last_name : 'Sharma',
		email : 'kamayani@gmail.com'
	},
	{	id : 3,
		first_name : 'Nirmiti',
		last_name : 'jain',
		email : 'Nirmiti@gmail.com'
	}
]

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));

//set static path
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	//var title = 'Customers';
	res.render('index' , {
		title : 'Customers',
		users : users,
	});
});

app.listen(3000,function(){
	console.log("The Express is working");
})