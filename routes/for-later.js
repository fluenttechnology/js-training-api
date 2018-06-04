function configure( app ) {

    app.get( "/for-later", ( req, res ) => {

        res.send( [] );

    } );

    app.post( "/for-later", ( req, res ) => {

        throw new Error( "Not implemented yet" );

    } );

}

module.exports = { configure };