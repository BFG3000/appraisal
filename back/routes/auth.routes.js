const express = require('express');
const router = express.Router();
const {
  registerUser,
  registerPublicUser,
  getLoggedUser,
  logOut,
  loginUser,
  test,
  getUser,
  createPrivateUser,
  updatePrivateUser,
  deletePrivateUser,
  getExamUsers,
} = require('../controllers/authController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//testing api
router.get('/test', test);

//login user
router.post('/login', loginUser);

//get logged in user user details
router.get('/me', isAuthenticatedUser, getLoggedUser);

//logout user
router.get('/logout', logOut);

module.exports = router;
