const bodyParser = require( "body-parser" );

function configure( app ) {

    app.use( bodyParser.json() );

}

module.exports = { configure };