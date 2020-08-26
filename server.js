// <!-- "make reservation" button will be the POST request  -->

// dependancies

var express = require("express");
var path = require("path");


// set up the express app
var app = express();
var PORT = process.env.PORT || 3000;




// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("js"));

// array variables




app.get("*", function (req, res) {
  // res.send("reservation form")
  res.sendFile(path.join(__dirname, "./index.html"));
});



// port listener
app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});