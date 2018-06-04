const db = require( "../database" );
const table = db( "for-later" );

function configure( app ) {

    app.get( "/for-later/:id?", ( req, res ) => {

        const { id } = req.params;
        if ( id ) {

            const found = table.get( id );
            if ( typeof found === "undefined" ) {

                res.status( 404 ).send( "Not found" );

            } else {

                res.send( found );

            }

        } else {

            const stored = table.list();
            res.send( stored );

        }

    } );

    app.post( "/for-later", ( req, res ) => {

        const href = ( req.body || {} ).href;
        if( typeof href !== "string" ) {

            res.status( 400 ).send( "Expected an object containing an 'href' property with a string value" );

        } else {

            const newId = table.add( { href } );
            const newLocation = `/for-later/${newId}`;
            res.location( newLocation ).status( 204 ).send( "ok" );

        }

    } );

    app.delete( "/for-later/:id", ( req, res ) => {

        const { id } = req.params;
        table.remove( id );
        res.status( 200 ).send( "Ok" );

    } );

}

module.exports = { configure };