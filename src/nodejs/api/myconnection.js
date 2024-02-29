var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'connectify'
});
con.connect(function(error){
    if(error){
        console.log(error.code,error.errno,error.message)
    }else{
        console.log("Connection established...")
    }
});
module.exports.con = con;