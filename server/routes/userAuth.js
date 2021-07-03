const express = require('express');
const {
  signIn,
  signUp,
  signIn2,
} = require('../controllers/userAuthController');
const router = express.Router();

// sign in a user
// link will be: http://localhost:3000/user/signin
router.post('/signin', signIn);
router.post('/signin2', signIn2);

// sign up a user
// link will be: http://localhost:3000/user/signup
router.post('/signup', signUp);

module.exports = router;
