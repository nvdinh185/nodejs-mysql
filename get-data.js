var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "tintuc"
});

var sqlTintuc = `SELECT tendanhmuctin FROM danhmuctin`

var sqlShophoa = `INSERT INTO loai_hoa (ten_cat) VALUES ("Khai trương"), ("Sin nhật"), ("Ngày cưới"),
                ("Kỹ niệm"), ("Tình yêu"), ("Hoa bán"),
                ("Hoa chia buồn"), ("Hoa hạnh phốc"),("Hoa bí"), ("Hoa bầu")`

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlTintuc, function (err, result) {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});
