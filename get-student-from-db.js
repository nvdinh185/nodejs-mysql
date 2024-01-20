const mysql = require('mysql');


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
        const newStudent = await new Promise((resolve, reject) => {
            conn.query(`INSERT INTO students VALUES (?, ?, ?)`,
                [id, name, address], function (err, result) {
                    if (err) {
                        reject(new Error(err.message));
                    }
                    resolve(result);
                });
        });
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
    await getStudentById('a632-c261-a62-cdkp');
}

createAndGet();