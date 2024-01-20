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

const sqlListHoa = `SELECT * FROM list_hoa`;

(async () => {
    try {
        const rows = await query(sqlListHoa);
        console.log(rows);
    } catch (err) {
        console.log('Lỗi: ' + err);
    } finally {
        conn.end();
    }
})()