const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
});

// node native promisify
const query = util.promisify(conn.query).bind(conn);

const sqlCreate = `CREATE TABLE danhmuctin(
                    id_danhmuctin int NOT NULL AUTO_INCREMENT,
                    tendanhmuctin varchar(255),
                    PRIMARY KEY (id_danhmuctin)
                )`;

const sqlInsert = `INSERT INTO danhmuctin(id_danhmuctin, tendanhmuctin) VALUES
                (1, "Toàn cảnh nhật Bản"), (2, "Tin tức Việt Nhật"), 
                (3, "Tin tức giải trí"), (4, "Du học Nhật Bản"), 
                (5, "Tin thể thao"), (6, "Tin xã hội")`;

async function createAndInsertData() {
    try {
        console.log('Tạo');
        const dataCr = await query(sqlCreate);
        console.log(dataCr);
        console.log('Thêm');
        const dataIs = await query(sqlInsert);
        console.log(dataIs);
    } catch (err) {
        console.log('Lỗi: ' + err);
    } finally {
        conn.end();
    }
}
createAndInsertData();
