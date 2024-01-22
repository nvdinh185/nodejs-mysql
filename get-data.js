var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
});

var sqlShophoa = `SELECT * FROM loai_hoa`;

con.query(sqlShophoa, function (err, result) {
    if (err) throw err;
    console.log(result);
});

con.end();
