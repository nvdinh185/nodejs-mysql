const mysql = require('mysql');
const util = require('util');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "students"
};
// get list students
async function getListStudents() {
    try {
        var conn = mysql.createConnection(configDB);
        const query = util.promisify(conn.query).bind(conn);
        const listStudents = await query(`SELECT * FROM students`)
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
        const studentById = await query(`SELECT * FROM students WHERE id = '${id}'`)
        console.log(studentById);
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


// getListStudents();
// getStudentById('a632-c261-a62-cdde');

const newStudent = {
    id: 'a632-c261-a62-cdkk',
    name: 'Nguyen Van Dinh',
    address: 'Thua Thien Hue'
}

createStudent(newStudent);