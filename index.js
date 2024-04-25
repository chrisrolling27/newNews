const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const app = express();
const db = new sqlite3.Database('./news.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Initialize database table
db.run('CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, url TEXT, publishedAt TEXT)');


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
