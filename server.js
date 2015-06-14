var express = require('express');
var bodyParser = require('body-parser');
var getRandomWord = require('./lib/getRandomWord');
var Adjective = require('./lib/adjectives');
var Verb = require('./lib/verbs.js');
var Noun = require('./lib/nouns.js');
var postWord = require('./lib/postWord.js');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
})

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var adjective = new Adjective();

var noun = new Noun();

var verb = new Verb();



app.post('/adjectives', function(req, res) {
  res.json(postWord(req.body.word, adjective));
});

app.post('/verbs', function(req, res) {
  res.json(postWord(req.body.word, verb));
});

app.post('/nouns', function(req, res) {
  res.json(postWord(req.body.word, noun));
});


app.get("/adjectives", function(req,res) {
  res.json(getRandomWord(adjective));
});

app.get("/nouns", function(req,res) {
  res.json(getRandomWord(noun));
});

app.get("/verbs", function(req,res) {
  res.json(getRandomWord(verb));
});

app.get("/", function(req,res) {
  //res.sendFile(__dirname + '/app/index.html');
  res.sendFile('index.html')
});








