const { Pool } = require('pg');

const connString =
  "postgres://rztdehpz:JuUX33jwm1n3upeHODhhnpVjfm7wxagD@kashin.db.elephantsql.com/rztdehpz";

const pool = new Pool({
    connectionString: connString
})

// pool.query("SELECT NOW()", (err, res) => {
//   console.log('CONNECTED TO DATABASE!!!', err, res);
//   pool.end();
// });

module.exports = {
    query: (text, params, callback) => {
        console.log('Executed query: ', text);
        return pool.query(text, params, callback);
    }
};