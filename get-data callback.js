var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
});

var sqlListHoa = `SELECT * FROM list_hoa`;

var sqlLoaiHoa = `SELECT * FROM loai_hoa`;

con.query(sqlListHoa, function (err, dataList) {
    if (err) throw err;
    con.query(sqlLoaiHoa, function (err, dataLoai) {
        if (err) throw err;
        console.log(dataLoai.concat(dataList));
        con.end();
    });
});