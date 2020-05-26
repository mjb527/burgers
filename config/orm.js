const connection = require('../config/connection');


const orm = {

  selectAll: () => {
    return new Promise( async (resolve, reject) => {
      try {
        await connection.query('SELECT * FROM burgers;', (err, data) => {
          resolve(data);
        });
      }
      catch(err) {
        reject('Something went wrong during the query:\n   ' + err);
      }

    });
  },

  updateOne: id => {
    return new Promise( (resolve, reject) => {
      try {
        connection.query('UPDATE burgers SET devoured = true WHERE id = ?;', [id], (err, data) => {
          resolve(data);
        });
      }
      catch(err) {
        reject('Something went wrong during the query:\n  ' + err )
      }
    });
  },

  insertOne: name => {
    return new Promise( (resolve, reject) => {
      try {
        connection.query(`INSERT INTO burgers (burger_name) VALUES (?)`, [name], data => resolve(data) );
      }
      catch(err) {
        reject('Something went wrong during the query:\n  ' + err );
      }
    });
  }

}

module.exports = orm;
