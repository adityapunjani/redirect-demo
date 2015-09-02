var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('public'));


app.get('/sw.js', function(req, res){
	res.set('Content-Type', 'application/javascript');
	res.end(fs.readFileSync('sw.js'));
});

app.get('/home', function(req, res) {
	res.end(fs.readFileSync('index.html', { encoding: 'utf8' }));
});

app.get('/', function(req, res) {
	res.redirect('/home');
});

var server = app.listen(process.env.PORT || 8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening on port %s', port);
});
