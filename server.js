var express = require('express');
var fs = require('fs');
var path = require('path');
var compression = require('compression');

var app = express();

app.use(compression());
app.use(express.static('public'));


app.get('/home', function(req, res) {
	res.end(fs.readFileSync('index.html', { encoding: 'utf8' }));
});

app.get('/', function(req, res) {
	setTimeout(function(){
		res.redirect('/home');
	}, 5000);
});

var server = app.listen(process.env.PORT || 8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening on port %s', port);
});
