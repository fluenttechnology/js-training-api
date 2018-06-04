const express = require("express");
const requestLogging = require( "./middleware/request-logging" );
const helloWorld = require( "./routes/hello-world" );
const forLater = require( "./routes/for-later" );

const app = express();

// middleware
requestLogging.configure( app );

// routes
helloWorld.configure( app );
forLater.configure( app );

const PORT = process.env.PORT || 3000;
app.listen( PORT, function() {

	console.log( "Listening on port " + PORT );

} );