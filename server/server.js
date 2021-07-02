const path = require('path');
const express = require('express');
const app = express();
// const apiRouter = require('./routes/api.js')
const cors = require('cors');
//import routes api
const ticketsRouter = require('./routes/tickets');
const userRouter = require('./routes/user');

const PORT = 3000;

//app.use(express.static(path.resolve(__dirname, '../index.html')));

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../build/')));

//define route handlers
app.use('/tickets', ticketsRouter);
app.use('/user', userRouter);

app.get('/*', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../build/index.html'));
});

// To add Handle- Path to 404
app.use('*', (req, res) => {
  return res.status(404).send("This is not the page you're looking for..");
});

// To add Global error handler- Catch all errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
