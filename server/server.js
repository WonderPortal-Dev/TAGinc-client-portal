const path = require('path');
const express = require('express');
const app = express();
// const apiRouter = require('./routes/api.js')
const cors = require('cors');

// clientRouter is for generic client functionalities 
const clientRouter = require('./routes/genericClient');
// userRouter is for signUp and signIn
const userRouter = require('./routes/userAuth');
// serviceAdmin is for serviceProviderAdmin functionalities
const serviceAdmin = require('./routes/almightyAdmin');
// ccompanyAdmin is for companyAdmin functionalities
const companyAdmin = require('./routes/companyAdmin');

const PORT = 3000;

//app.use(express.static(path.resolve(__dirname, '../index.html')));

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../build/')));

//define route handlers
app.use('/client', clientRouter);
app.use('/user', userRouter);
app.use('/admin', serviceAdmin);
app.use('/companyadmin',companyAdmin);


app.get('/*', (req, res) => {
	return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'));
});

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
