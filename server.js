var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.get('*', function(req, res){
	res.render('index.ejs');
});
app.listen(4000, '127.0.0.1');
console.log('Work!');