// DEKLARASI PACKAGE
var express = require('express');
const path = require('path');
var app = express();

// SET VIEW ENGINE
app.set('views', path.join(__dirname, '/view'));
app.set('view engine','ejs');

// SET ROUTING
let web = require('./routes/web');
app.use('/', web);

app.use(express.static(__dirname + '/public'));

// JALANIN SERVER
app.listen(3000, function(){
	console.log('Hello World :)');
});