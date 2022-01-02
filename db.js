const mysql = require('mysql')

var db_config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'konkurs'
  };
  
let connection = null;

function kek() {
  connection = null
  connection = mysql.createConnection(db_config); 
  console.log('Подключено');
}

kek()

connection.on('error', function(err) {
  console.log('Перезапуск...');
  kek();                          
});

                                 
                                            

module.exports = connection