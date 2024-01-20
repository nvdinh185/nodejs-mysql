const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
};

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
        var conn = mysql.createConnection(configDB);
        const dataCr = await new Promise((resolve, reject) => {
            conn.query(sqlCreate, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
        console.log(dataCr);
        console.log('Thêm');
        const dataIs = await new Promise((resolve, reject) => {
            conn.query(sqlInsert, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
        console.log(dataIs);
    } catch (err) {
        console.log('Lỗi: ' + err);
    } finally {
        conn.end();
    }
}
createAndInsertData();