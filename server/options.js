const mysql = require('mysql');
//Primera busqueda sin especificaciones
function read(pool,callback){
    pool.getConnection(function(err, connection){
        if(err) throw err;
        connection.query("SELECT * FROM articulos", function(err, result){
            if(err) throw err;
            callback(result);
            connection.release();
        })
    })
}
//Busqueda especifica
function readEspesifica (pool, data, callback){
    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query(`select * from articulos where`, function(){
            if(err) throw err;
            callback(result);
            connection.release();
        })
    })
}


//Exportamos las funciones que utilizaremos para la comunicacion con el front 
module.exports = { read, readEspesifica }