var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

var sqlCreat = `CREATE TABLE customers
(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))`;
con.query(sqlCreat, function (err, result) {
    if (err) console.log("Lỗi: " + err);
    else console.log("Table created");
});

var sqlInsert = "INSERT INTO customers (id, name, address) VALUES (1, 'Company Inc', 'Highway 37')";
con.query(sqlInsert, function (err, result) {
    if (err) console.log("Lỗi: " + err);
    else console.log("1 record inserted - insertId: " + result.insertId);
    con.end();
});