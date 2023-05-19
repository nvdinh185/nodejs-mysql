var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "tintuc"
});

var sqlTintuc = `CREATE TABLE danhmuctin(
                id_danhmuctin int,
                tendanhmuctin varchar(255),
                PRIMARY KEY (id_danhmuctin)
            )`;

var sqlShophoa = `CREATE TABLE loai_hoa(
                id_cat INT NOT NULL AUTO_INCREMENT, 
                ten_cat VARCHAR(50) NOT NULL,
                PRIMARY KEY (id_cat))`;

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlTintuc, function (err, result) {
        if (err) throw err;
        console.log("Tạo bảng thành công!");
        con.end();
    });
});
