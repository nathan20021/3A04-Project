const sqlite3 = require('sqlite3').verbose();
const DB = "db.sqlite";

const db = new sqlite3.Database(DB, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        db.get("PRAGMA foreign_keys = ON")
        db.run(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password TEXT
        )`,)
        db.run(`CREATE TABLE IF NOT EXISTS Carpools (
            id INTEGER PRIMARY KEY,
            taxiID INTEGER, 
            destination TEXT,
            currRiders INTEGER,
            maxRiders INTEGER,
            status TEXT,
            fare DECIMAL,
            CONSTRAINT valid_status CHECK (status IN ('open', 'completed', 'full'))
        )`)
        db.run(`CREATE TABLE IF NOT EXISTS Offers(
            id INTEGER PRIMARY KEY,
            carpoolID INTEGER, 
            status TEXT,
            CONSTRAINT valid_status CHECK (status IN ('requested', 'accepted', 'rejected')),
            FOREIGN KEY (carpoolID) REFERENCES Carpools(id)
        )`)
    }
})

module.exports = db;