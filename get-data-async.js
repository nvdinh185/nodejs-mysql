var mysql = require('mysql');

var sqlListHoa = `SELECT * FROM list_hoa`;

var sqlLoaiHoa = `SELECT * FROM loai_hoa`;

async function getData() {
    try {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123456",
            database: "shophoa"
        });
        const dataList = await new Promise((resolve, reject) => {
            conn.query(sqlListHoa, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
        // console.log(dataList);

        const dataLoai = await new Promise((resolve, reject) => {
            conn.query(sqlLoaiHoa, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
        console.log(dataLoai.concat(dataList));

    } catch (err) {
        console.log('Lỗi: ' + err);
    } finally {
        conn.end();
    }
}
getData();