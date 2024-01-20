var mysql = require('mysql');
const util = require('util');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
});

// node native promisify
const query = util.promisify(conn.query).bind(conn);

var sqlListHoa = `SELECT * FROM list_hoa`;

var sqlLoaiHoa = `SELECT * FROM loai_hoa`;

async function getData() {
    try {

        const dataList = await query(sqlListHoa);

        const dataLoai = await query(sqlLoaiHoa);

        console.log(dataLoai.concat(dataList));

    } catch (err) {
        console.log('Lỗi: ' + err);
    } finally {
        conn.end();
    }
}
getData();