// const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require("sqlite3").verbose();
const DB = "db.sqlite";

const db = new sqlite3.Database(DB, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    db.get("PRAGMA foreign_keys = ON");
    db.run(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password TEXT
        )`);
    db.run(`CREATE TABLE IF NOT EXISTS Carpools (
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            taxi_id INTEGER, 
            destinationLatitude DECIMAL,
            destinationLongitude DECIMAL,
            currRiders INTEGER,
            maxRiders INTEGER,
            status TEXT,
            fare DECIMAL,
            CONSTRAINT valid_status CHECK (status IN ('open', 'completed', 'full'))
            FOREIGN KEY(user_id) REFERENCES Users(id)
        )`);
    db.run(`CREATE TABLE IF NOT EXISTS Offers(
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            carpool_id INTEGER, 
            status TEXT,
            CONSTRAINT valid_status CHECK (status IN ('requested', 'accepted', 'rejected')),
            FOREIGN KEY (carpool_id) REFERENCES Carpools(id)
            FOREIGN KEY (user_id) REFERENCES Users(id)
        )`);
    db.run(`CREATE TABLE IF NOT EXISTS CarpoolRiders(
            carpool_id INTEGER,
            user_id INTEGER,
            rating INTEGER,
            PRIMARY KEY(carpool_id, user_id)
            FOREIGN KEY(carpool_id) REFERENCES Carpools(id)
            FOREIGN KEY(user_id) REFERENCES Users(id)
        )`);

    db.run(`CREATE TABLE IF NOT EXISTS Ratings (
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            rater_user_id INTEGER,
            rating INTEGER,
            FOREIGN KEY(user_id) REFERENCES Users(id)
            FOREIGN KEY(rater_user_id) REFERENCES Users(id)
        )`);
  }
});

module.exports = db;
