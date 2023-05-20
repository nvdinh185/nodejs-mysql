var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "news"
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!!!");
// });

var sqlCreate = "CREATE TABLE news (id INTEGER AUTO_INCREMENT PRIMARY KEY, img VARCHAR(255), title VARCHAR(255), content VARCHAR(255))";
// con.query(sqlCreate, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// });

var sql = "INSERT INTO news (id, img, title, content) VALUES ?";
var values = [
    [1, 'images/h1.jpg', 'Cách phối đồ đi hẹn hò 8/3 đẹp như Quỳnh Anh', '8/3 sắp đến rồi, những gợi ý mặc đẹp dưới đây sẽ giúp bạn chọn được bộ đồ ưng ý. Cùng học Quỳnh Anh Shyn một vài cách phối đồ cực hay ho để bạn đi hẹn hò 8/3 nhé!'],
    [2, 'images/h2.jpg', 'Diện đồ đôi cho teen đi hẹn hò ngày 8/3', 'Những cặp đôi yêu nhau đã có ý tưởng nên mặc gì trong ngày 8/3 chưa? Những bộ đồ đôi vừa đẹp vừa thoải mái chắc chắn sẽ là gợi ý ăn mặc cho các bạn trẻ. Dưới đây là những bộ đồ đôi đẹp để teen tham'],
    [3, 'images/h3.jpg', 'Hướng dẫn chọn trang phục cho teengirl ngày 8/3', 'Các teen girl nhà mình hẳn đang rất hào hứng chọn những bộ đồ thật đẹp để đi chơi 8/3. Những gợi ý ăn mặc dưới đây sẽ giúp các nàng có những set đồ thật đẹp để diện trong ngày 8.3 nhé!'],
];
con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});

con.end();