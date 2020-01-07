require('dotenv').config();

const {
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;

const mysql = require("mysql2");

const connection = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD
});

// connection.query(`USE ${DB_NAME}`);

const CREATE_TABLE = `CREATE TABLE test (
  id INT PRIMARY KEY,
  name VARCHAR(10),
  surname VARCHAR(10)
);`;

const SHOW_TABLES = 'SHOW TABLES;';
const CHECK_TABLE = 'DESCRIBE test;';
const ADD_TABLE_COLUMN = 'ALTER TABLE test ADD points DECIMAL(6, 3);';
const DROP_TABLE_COLUMN = 'ALTER TABLE test DROP COLUMN points;';
const DELETE_TABLE = 'DROP TABLE users;';

const INSERT_INTO_TABLE = 'INSERT INTO test VALUES(1, "Василий", "Петров");';
const DELETE_FROM_TABLE = 'DELETE FROM test WHERE id < 2;';
const GET_ALL_FIELDS_FROM_TABLE = 'SELECT * FROM users;'; 
const GET_CHOSEN_FIELDS_FROM_TABLE = 'SELECT * FROM test WHERE id > 2;';

const dbPool = connection.promise();
(async () => {
  await dbPool.execute('DROP TABLE users;');
  // await dbPool.execute('INSERT INTO test VALUES(3, "Василий2", "Петров2");');
  // const [result, meta] = await dbPool.execute(GET_ALL_FIELDS_FROM_TABLE);
  // console.log("TCL: result", result)

  dbPool.end();
})();

// connection.query(GET_ALL_FIELDS_FROM_TABLE,
//   function(err, results, fields) {
//     // console.log(err);
//     // console.log(results); // собственно данные
//     // console.log(fields); // мета-данные полей 
// });
// connection.end();