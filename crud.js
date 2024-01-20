var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
});

var sqlCreate = `CREATE TABLE danhmuctin(
                    id_danhmuctin int NOT NULL AUTO_INCREMENT,
                    tendanhmuctin varchar(255),
                    PRIMARY KEY (id_danhmuctin)
                )`;

var sqlInsert = `INSERT INTO danhmuctin(id_danhmuctin, tendanhmuctin) VALUES
                (1, "Toàn cảnh nhật Bản"), (2, "Tin tức Việt Nhật"), 
                (3, "Tin tức giải trí"), (4, "Du học Nhật Bản"), 
                (5, "Tin thể thao"), (6, "Tin xã hội")`;

var sqlSelect = `SELECT * FROM danhmuctin`;

con.query(sqlCreate, function (err, result) {
    if (err) throw err;
    console.log("Tạo bảng thành công!", result);
    // con.end();
});

con.query(sqlInsert, function (err, result) {
    if (err) throw err;
    console.log("Thêm thành công!", result);
    // con.end();
});

con.query(sqlSelect, function (err, result) {
    if (err) throw err;
    console.log(result);
    // con.end();
});

con.end();