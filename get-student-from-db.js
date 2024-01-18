const mysql = require('mysql');

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
        const listStudents = await new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM students`, (err, row) => {
                if (err) reject(err);
                resolve(row);
            })
        })
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
        const studentById = await new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM students WHERE id = '${id}'`, (err, row) => {
                if (err) reject(err);
                resolve(row);
            })
        })
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
        const newStudent = await new Promise((resolve, reject) => {
            conn.query(`INSERT INTO students VALUES (?, ?, ?)`,
                [id, name, address], function (err) {
                    if (err) {
                        reject(new Error(err.message));
                    }
                    resolve(this.changes);
                });
        });
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
    id: 'a632-c261-a62-cdkf',
    name: 'Nguyen Van Dinh',
    address: 'Thua Thien Hue'
}

createStudent(newStudent);