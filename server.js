var express = require('express');
var bodyParser = require('body-parser');
var getRandomWord = require('./lib/getRandomWord');
var Adjective = require('./lib/adjectives');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
})

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var adjective = new Adjective();

var Noun = function() {
this.cats = true;
this.frogs = true;
this.dogs = true;
this.beaches = true;
this.windstorms = true;
this.birds = true;
this.guitars = true;
this.androids = true;
this.cylons = true;
};

var noun = new Noun();

var Verb = function() {
this.walking = true;
this.talking = true;
this.eating = true;
this.crying = true;
this.moving = true;
this.running = true;
this.winning = true;
this.waking = true;
this.sleeping = true;
};

var verb = new Verb();


function postWord(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: "We already have your awesome word, " + word + " in our list"};
  }

   wordObject[word] = true;
   console.dir(wordObject);
    return {msg: "We saved your word " + word};
  };




app.post('/adjectives', function(req, res) {
  res.json(postWord(req.body.word, adjective));
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








