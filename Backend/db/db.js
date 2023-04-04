const sqlite3 = require('sqlite3').verbose();
const DB = "db.sqlite";
const bcrypt = require('bcrypt');

const db = new sqlite3.Database(DB, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        db.run(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password text
        )`,)
    }
})

module.exports = db;