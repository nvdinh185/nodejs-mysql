const mysql = require('mysql');
const util = require('util');

function generateUuid() {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "students"
}

// get list students
async function getListStudents() {
    try {
        var conn = mysql.createConnection(configDB);
        const query = util.promisify(conn.query).bind(conn);
        const listStudents = await query(`SELECT * FROM students`);
        console.log(listStudents);
    } catch (err) {
        console.log(err);
    } finally {
        conn.end();
    }
}

// get student by id
async function getStudentById(id) {
    try {
        var conn = mysql.createConnection(configDB);
        const query = util.promisify(conn.query).bind(conn);
        const studentById = await query(`SELECT * FROM students WHERE id = '${id}'`);
        console.log(studentById[0]);
    } catch (err) {
        console.log(err);
    } finally {
        conn.end();
    }
}

// create student
async function createStudent(inputData) {
    const { id, name, address } = inputData;
    try {
        var conn = mysql.createConnection(configDB);
        const query = util.promisify(conn.query).bind(conn);
        const newStudent = await query(`INSERT INTO students VALUES (?, ?, ?)`, [id, name, address]);
        console.log(newStudent);
    } catch (error) {
        console.log(error);
    } finally {
        conn.end();
    }
}

const newStudent = {
    id: generateUuid(),
    name: 'Nguyen Van Dinh',
    address: 'Thua Thien Hue'
}

const createAndGet = async () => {
    await createStudent(newStudent);
    await getListStudents();
    await getStudentById('0806-3cb7-b6e-2bcd');
}

createAndGet();