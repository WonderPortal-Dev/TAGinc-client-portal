const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('../model/sessionModel');

const userController = {};

userController.signIn2 = async (req, res, next) => {
  //getting userInfo from req.body
  const { email, password } = req.body;

  try {
    // ! find user by email in db, double check sql syntax
    const result = await db.query('SELECT * FROM Users WHERE email=$1', [
      email,
    ]);
    const existingUser = result?.rows[0];
    //console.log('existingUser in signIn is: ', existingUser);
    //console.log('result is: ', result);
    // if existingUser is undefine, return user not found
    if (!existingUser)
      return res.status(404).json({ message: 'User not found' });

    //after retrieving userInfo, compare bcrypt password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //if password is not correct, return incorrect password
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Incorrect Password' });

    //JWT token, user session will expire in 1 hour
    const token = jwt.sign(
      {
        email: existingUser.email,
        userID: existingUser.id,
        companyID: existingUser.companyID,
        type: existingUser.type,
      },
      'process.env.ACCESS_TOKEN_SECRET',
      { expiresIn: '1h' }
    );

    return res.status(200).json({ accessToken: token });

    //return next();
  } catch (error) {
    res.status(500).json({ message: 'something went wrong at signIn' });
    console.log('err in signIn controller: ', error);
  }
};

userController.signIn = async (req, res, next) => {
  //getting userInfo from req.body
  const { email, password } = req.body;

  try {
    // ! find user by email in db, double check sql syntax
    const result = await db.query('SELECT * FROM Users WHERE email=$1', [
      email,
    ]);
    const existingUser = result?.rows[0];
    //console.log('existingUser in signIn is: ', existingUser);
    //console.log('result is: ', result);
    // if existingUser is undefine, return user not found
    if (!existingUser)
      return res.status(404).json({ message: 'User not found' });

    //after retrieving userInfo, compare bcrypt password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //if password is not correct, return incorrect password
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Incorrect Password' });

    if (existingUser.type === 'client') {
      const company = await db.query(
        `SELECT * FROM Companies where id=${existingUser.companyID}`
      );
      const companyUsers = await db.query(
        `SELECT * FROM users where companyID=${existingUser.companyID}`
      );
      const companyDevices = await db.query(
        `SELECT * FROM devices where company_id=${existingUser.companyID}`
      );

      //JWT token, user session will expire in 1 hour
      const token = jwt.sign(
        {
          name: `${existingUser.first} ${existingUser.last}`,
          userID: existingUser.id,
          company: company.rows,
          companyUsers: companyUsers.rows,
          companyDevices: companyDevices.rows,
          type: existingUser.type,
        },
        'process.env.ACCESS_TOKEN_SECRET',
        { expiresIn: '1h' }
      );

      return res.status(200).json({ accessToken: token });
    }
    if (existingUser.type === 'admin') {
      const companies = await db.query('SELECT * FROM Companies');
      const users = await db.query('SELECT * FROM users');
      const tickets = await db.query('SELECT * FROM tickets');
      // const devices = await db.query('SELECT * FROM devices');
      const deviceServices = await db.query('SELECT * FROM deviceServices');
      const baseServices = await db.query('SELECT * FROM baseServices');
      //JWT token, user session will expire in 1 hour
      const token = jwt.sign(
        {
          companies: companies.rows,
          tickets: tickets.rows,
          users: users.rows,
          // devices: devices.rows,
          type: existingUser.type,
          deviceServices: deviceServices.rows,
          baseServices: baseServices.rows,
        },
        'process.env.ACCESS_TOKEN_SECRET',
        { expiresIn: '1h' }
      );

      return res.status(200).json({ accessToken: token });
    }
    if (existingUser.type === 'user') {
      //JWT token, user session will expire in 1 hour
      const token = jwt.sign(
        {
          email: existingUser.email,
          userID: existingUser.id,
          companyID: existingUser.companyID,
          type: existingUser.type,
        },
        'process.env.ACCESS_TOKEN_SECRET',
        { expiresIn: '1h' }
      );

      return res.status(200).json({ accessToken: token });
    }

    //return next();
  } catch (error) {
    res.status(500).json({ message: 'something went wrong at signIn' });
    console.log('err in signIn controller: ', error);
  }
};

/*  
isCompanyAdmin BOOLEAN DEFAULT FALSE,
companyID INT,
admin BOOLEAN DEFAULT FALSE,
 */

userController.signUp = async (req, res, next) => {
  //getting userInfo from req.body
  const {
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
    companyID,
    type,
  } = req.body;

  try {
    // ! find user by email in db, double check
    const result = await db.query('SELECT * FROM Users WHERE email=$1', [
      email,
    ]);
    //console.log('existingUser is: ', existingUser);
    const existingUser = result?.rows[0];
    //if user already existed, return email in use
    if (existingUser)
      return res.status(400).json({ message: 'email already used' });

    //make sure user input password and confirm password are the same
    // if (password !== confirmPassword)
    // 	return res.status(400).json({ message: "Passwords don't match" });

    // * hashed user's password, with 12 rounds
    const hashedPassword = await bcrypt.hash(password, 12);

    // ! create user into DB, double check sql syntax
    const newUser = await db.query(
      'INSERT INTO Users (first, last, email, password, companyID, type) VALUES ($1,$2,$3,$4,$5,$6)',
      [firstName, lastName, email, hashedPassword, companyID, type]
    );
    return res.status(200).json({ message: 'inserted newUser' });

    //return next();
  } catch (error) {
    res.status(500).json({ message: 'something went wrong at signUp' });
    console.log('err in signUp controller: ', error);
  }
};

module.exports = userController;
