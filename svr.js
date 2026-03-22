import express from 'express';
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// Initialize database
const db = new Database('pixelary.db');
const migration = fs.readFileSync(
  path.join('migrations-sqlite', '001-initial.sql'),
  'utf-8'
);
db.exec(migration);

const app = express();
app.use(express.static('client'));

// API for client
app.get('/api/prompts', (req, res) => {
  const prompts = db.prepare('SELECT * FROM prompts').all();
  res.json(prompts);
});

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});