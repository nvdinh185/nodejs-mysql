var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!!!");
// });

var sqlTintuc = 'CREATE DATABASE tintuc COLLATE utf8_unicode_ci';
var sqlShophoa = 'CREATE DATABASE shophoa COLLATE utf8_unicode_ci';

con.query(sqlShophoa, function (err, result) {
    if (err) throw err;
    console.log("Tạo DB thành công!");
    con.end();
});
