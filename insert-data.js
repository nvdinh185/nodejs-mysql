var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa1"
});

var sqlTintuc = `INSERT INTO danhmuctin (id_danhmuctin, tendanhmuctin) VALUES 
            (1, "Toàn cảnh Nhật Bản"), (2, "Tin tức Việt Nhật"), 
            (3, "Tin tức giải trí"), (4, "Du học Nhật Bản"), 
            (5, "Tin thể thao"), (6, "Tin xã hội")`

var sqlShophoa = `INSERT INTO loai_hoa (ten_cat) VALUES ("Khai trương"), ("Sin nhật"), ("Ngày cưới"),
                ("Kỹ niệm"), ("Tình yêu"), ("Hoa bán"),
                ("Hoa chia buồn"), ("Hoa hạnh phốc"),("Hoa bí"), ("Hoa bầu")`

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlShophoa, function (err, result) {
        if (err) throw err;
        console.log("Đã insert thành công!");
        con.end();
    });
});
