var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

var sqlUpdate = `UPDATE customers SET name = 'Van Dinh123', address = "Hue" WHERE id = 1`;
con.query(sqlUpdate, function (err, result) {
    if (err) console.log("Lỗi: " + err);
    else console.log("Table updated");
});

var sqlSelect = "SELECT * FROM customers";
con.query(sqlSelect, function (err, result) {
    if (err) console.log("Lỗi: " + err);
    else console.log(result);
    con.end();
});