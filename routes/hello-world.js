function configure( app ) {

    app.get( "/", function( req, res ) {

        res.send( { "message": "hello " + req.query.name } );

    } );

}

module.exports = { configure };