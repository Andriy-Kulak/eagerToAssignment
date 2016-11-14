const http = require('http');
const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// Server express Setup
const app = express();
app.use(morgan('combined')); // morgan is for logging
app.use(cors());
app.use(bodyParser.json({type: '*/*'})); // used to parse incoming requests into json //

const connection = mysql.createPool({
  connectionLimit: 50,
  host: 'us-cdbr-azure-east-a.cloudapp.net',
  database: 'eagertobp',
  user: 'b068a96499d036',
  password: '2c4041cb',
  port: '3306'
});

// api gets first 100 records
app.get('/api', (req, resp) => {
  connection.query('SELECT * FROM eagertobp.submissionanalytics LIMIT 0, 100', (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successful query');
      resp.send(rows);
    }
  });
});

// gets record specific to id
app.get('/api/:id', (req, resp) => {
  connection.query(`SELECT * FROM eagertobp.submissionanalytics WHERE ID=${req.params.id}`, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successful query');
      resp.send(rows);
    }
  });
});

const port = process.env.PORT || 3059; // port setup
const server = http.createServer(app);
server.listen(port);
console.log('listenning on port: ', port);
