var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;


app.get( "/", function( req, res ) {

	console.log( req.method, req.url );
	res.send( { "message": "hello " + req.query.name } );

} );


app.listen( PORT, function() {

	console.log( "Listening on port " + PORT );

} );