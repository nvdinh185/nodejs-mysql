var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
});

con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created", result);
    con.end();
});