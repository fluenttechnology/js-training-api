const cors = require( "cors" );

function configure( app ) {

    // N.B. Probably don't do this in production!!! Enables anyone to call from anywhere to do anything!
    app.use( cors() );

}

module.exports = { configure };
