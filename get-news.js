var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tintuc"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
});

var sqlSelect = "SELECT * FROM news";
con.query(sqlSelect, function (err, results) {
    if (err) throw err;
    for (const el of results) {
        console.log(el.img);

    }
});

con.end();