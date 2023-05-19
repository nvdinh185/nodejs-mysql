var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

async function getData() {
    var data;

    var sqlSelect = "SELECT * FROM customers";
    data = await new Promise(function (resolve, reject) {
        conn.query(sqlSelect, function (err, results) {
            if (err) reject(err);
            resolve(results);
        });
    });

    console.log(data);

    conn.end();
}

getData();