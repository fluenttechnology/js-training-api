const shortid = require( "shortid" );
const { load, save } = require( "./buckets" );

function list( bucket ) {

    const records = load( bucket );
    return Object.keys( records ).map( key => [ key, records[ key ] ] )

}
function get( bucket, id ) {

    return load( bucket )[ id ];

}
function set( bucket, id, record ) {

    const records = load( bucket );
    records[ id ] = record;
    save( records );

}
function add( bucket, record ) {

    const newid = shortid();
    set( bucket, newid, record );
    return newid;

}
function remove( bucket, id ) {

    const records = load( bucket );
    records[ id ] = undefined;
    save( records );

}
module.exports = function( bucket ) {

    return {
        list: list.bind( this, bucket ),
        get: get.bind( this, bucket ),
        set: set.bind( this, bucket ),
        add: add.bind( this.bucket ),
        remove: remove.bind( this.bucket )
    };

};
