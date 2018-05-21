var express = require("express");
var requestLogging = require( "./middleware/request-logging" );
var helloWorld = require( "./routes/hello-world" );
var forLater = require( "./routes/for-later" );

var app = express();

// middleware
requestLogging.configure( app );

// routes
helloWorld.configure( app );
forLater.configure( app );

var PORT = process.env.PORT || 3000;
app.listen( PORT, function() {

	console.log( "Listening on port " + PORT );

} );