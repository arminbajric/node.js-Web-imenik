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

app.post('/userForm', (req, res) => {
 // const email = {email:JSON.stringify(req.body.email)};
//	const password= {password:JSON.stringify(req.body.password)};
	const email=req.body.email;
	const password=req.body.password;
 var mysql = require('mysql');
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


					console.log("radiiiiiiiii");
          //Configure your whitelist
    //   cookie.serialize('Email', String(req.body.email), {
      //        httpOnly: true,
      //        maxAge: 60 * 60 * 24 * 7 // 1 week
      //      });


            res.redirect('/userForm');



		  }
}
    console.log(result);
  });
});


// <- true


});
var baseHostname = "http://localhost:3000";
var redirectMapping = {
    'userPage': '/userForm.html',

}

//Create a function to validate whitelist
function validateRedirect(key) {
    if(key in redirectMapping) {

        return redirectMapping[key];
    }else{

        return false;
    }
}

app.get('/userForm', function (req, res, next) {


res.end(res.render('userForm'));

  }
);
app.get('/signUp', function (req, res, next) {


res.end(res.render('signUp'));

  }
);
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});
app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});
