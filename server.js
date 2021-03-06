import express from 'express';
let app = express();
const http = require('http');
const sqrt = require('math-sqrt');

require('./views/math.js');

app.engine('html', require('ejs').renderFile);
app.set('/views', express.static(__dirname + '/views'))
app.set('view engine', 'html');

app.get('/', function (req, res){
	res.render('index.html');
})

app.get('/math-sqrt', function (req, res) {
	res.render('math.html');
})

const server = app.listen(process.env.PORT || 5000, function () {
	console.log('Server running at http://0.0.0.0:' + server.address().port)
})
