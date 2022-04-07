var mysql = require('mysql');
const secret = require ('./config/secret.json')

//buat koneksi database
const conn = mysql.createPool({
  host: secret.HOST,
  user: secret.USER,
  password: secret.PASSWORD,
  database: secret.DB,  
});

module.exports = conn;
