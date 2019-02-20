const express = require("express");
const port = process.env.PORT || 3000;

var app = express();



app.use(express.static("public"));


app.get("/", function(req, res){

  res.sendFile(__dirname + '/generic.html');
});

// app.get('/about', function(req, res){
//
//   res.render('about.hbs');
// });




app.listen(port, function(){
  console.log(`server is up on port ${port}`);
});
