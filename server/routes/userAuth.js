const express = require('express');
const { signIn, signUp } = require('../controllers/userAuthController');
const router = express.Router();

// sign in a user
// link will be: http://localhost:3000/user/signin
router.post('/signin', signIn);

// sign up a user
// link will be: http://localhost:3000/user/signup
router.post('/signup', signUp);

module.exports = router;
