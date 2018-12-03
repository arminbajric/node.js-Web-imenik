const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
var url = require('url');
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
 var cookie = require('cookie');
	app.use(express.static('pages'));
  app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'pages')));
app.get('/', (req, res) => {

  res.sendFile(`${__dirname}/index.html`);

});
var mysql = require('mysql');

app.post('/userForm', (req, res) => {

	const email=req.body.email;
	const password=req.body.password;

console.log(email);
	console.log(password);
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "webimenik"
  });
	var post  = {email: email, password :password};
var fields;
	 con.connect(function(err) {
  if (err) {throw err;}
  con.query("SELECT * FROM  korisnik WHERE email='"+email+"' AND password='"+password+"'", function (err, result, fields) {
    if (err)
		{throw err;}
	  else
		  {
			  if(result.length>0)
				 {

      cookie.serialize('Email', String(req.body.email), {
             httpOnly: true,
             maxAge: 60 * 60 * 24 * 7 // 1 week
            });


            res.redirect('/userForm');



		  }
}

  });
});





});






app.get('/userForm', function (req, res, next) {


res.end(res.render('userForm'));

  }
);
app.get('/signUp', function (req, res, next) {


res.end(res.render('signUp'));

  }
);
app.post('/newUser',function (req,res)
{
  const email=req.body.email;
	const password=req.body.password;
  const ime=req.body.ime;
	const prezime=req.body.prezime;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "webimenik"
  });
	var post  = {email: email, password :password};
var fields;
	 con.connect(function(err) {
  if (err) {throw err;}
  con.query("INSERT INTO  korisnik SET email='"+email+"' , password='"+password+"' , ime='"+ime+"' , prezime='"+prezime+"'", function (err, result, fields) {
    if (err)
		{throw err;}
	  else
		  {

            res.redirect('/login');
		  
}

  });

});
});
app.get('/login', function (req, res, next) {


res.end(res.render('index'));

  }
);
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});
app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});
