const fs = require( "fs" );
const path = require( "path" );

const BUCKET = Symbol();

function load( name ) {

    try {

        const filename = path.resolve( __dirname, `${name}.json` );
        const content = fs.readFileSync( filename ).toString();
        const records = JSON.parse( content || "{}" ) || {};
        records[ BUCKET ] = name;
        return records;

    } catch( ex ) {

        if ( ex.code === "ENOENT" ) {

            const records = {};
            records[ BUCKET ] = name;
            return records;

        }
        throw ex;

    }

}
function save( records ) {

    const name = records[ BUCKET ];
    if ( !name ) { throw new Error( "No name found on this record set" ); }
    const filename = path.resolve( __dirname, `${name}.json` );
    fs.writeFileSync( filename, JSON.stringify( records, null, 1 ), { flag: "w" } );

}

module.exports = { load, save };