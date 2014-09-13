// server.js

var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get("/", function(req,res){
	res.sendfile('app/base.html');
});


app.configure(function(){
	// look up the static command, pay attention to the effect it has on routing!
	app.use(express.static(__dirname + '/app/static'));  // set static files location /public/img for users
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.bodyParser()); //pull information from html in POST
	app.use(express.methodOverride()); // simulate DELETE and PUT
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});

var dash = express();
dash.use(express.static(__dirname + '/dashboard/static'));
dash.get('/',function(req,res){
  res.sendfile('dashboard/base.html');
});
var dashport = 5555;
dash.listen(dashport, function(){
  console.log("listening on " + dashport);
});

