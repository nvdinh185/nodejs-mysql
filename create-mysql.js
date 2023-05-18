var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tintuc"
});

// conn.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!!!");
// });

var sqlCreate = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
conn.query(sqlCreate, function (err, result) {
    if (err) console.log("Lỗi: " + err);
    else console.log("Table created");
});

var sqlInsert = "INSERT INTO customers (id, name, address) VALUES (4, 'Company Inc', 'Highway 37')";
conn.query(sqlInsert, function (err, result) {
    if (err) console.log("Lỗi: " + err);
    else console.log("1 record inserted - insertId: " + result.insertId);
});

var sql = "INSERT INTO customers (name, address) VALUES ?";
var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
];
conn.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});

var sqlSelect = "SELECT * FROM customers";
conn.query(sqlSelect, function (err, results) {
    if (err) throw err;
    console.log(results);
});

conn.end();