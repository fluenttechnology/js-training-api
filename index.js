const express = require("express");
const requestLogging = require( "./middleware/request-logging" );
const bodyParser = require( "./middleware/body-parser" );
const cors = require( "./middleware/cors" );
const helloWorld = require( "./routes/hello-world" );
const forLater = require( "./routes/for-later" );

const app = express();

// middleware
requestLogging.configure( app );
bodyParser.configure( app );
cors.configure( app );

// routes
helloWorld.configure( app );
forLater.configure( app );

const PORT = process.env.PORT || 3001;
app.listen( PORT, function() {

	console.log( "Listening on port " + PORT );

} );