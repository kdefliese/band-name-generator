var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
})

var myArray = ["cats", "dogs", "birds"];

var adjectives = [
"delicious",
"beautiful",
"literary",
"funerary",
"decent",
"hilarious",
"tonal"
];

app.get("/", function(req,res) {
  res.send(myArray[Math.floor(Math.random() * myArray.length)]);
});


app.get("/adjectives", function(req,res) {
  res.json({ "word": myArray[Math.floor(Math.random() * myArray.length)] } );
});




