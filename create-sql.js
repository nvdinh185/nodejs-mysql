var express = require('express');
var app = express();
var mysql = require('mysql');

app.listen(3000, function () {
    console.log('Node server running on http://localhost:3000');
});

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

// var sqlCreate = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
// con.query(sqlCreate, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// });

// var sqlInsert = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
// con.query(sqlInsert, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
// });

var sql = "INSERT INTO customers (name, address) VALUES ?";
var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
];
con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});

var sqlSelect = "SELECT * FROM customers";
con.query(sqlSelect, function (err, results) {
    if (err) throw err;
    console.log(results);
});

con.end();