const mysql = require('mysql');

var dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'student'
})

dbConn.connect((error) =>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Database Connected");
    }
})

module.exports = dbConn;