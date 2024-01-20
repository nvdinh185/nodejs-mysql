var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
});

var sqlListHoa = `SELECT * FROM list_hoa`;

var sqlLoaiHoa = `SELECT * FROM loai_hoa`;

con.query(sqlListHoa, function (err, result) {
    if (err) throw err;
    console.log(result);
});

con.query(sqlLoaiHoa, function (err, result) {
    if (err) throw err;
    console.log(result);
});

con.end();