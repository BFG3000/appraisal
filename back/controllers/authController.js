const User = require('../models/form.model');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const ActiveDirectory = require('activedirectory');

exports.test = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'yay! this thing is working',
  });
};

//login a user => api/login----------------------------------------------
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Please enter email and password', 401));
  }
  try {
    //const user = await User.findOne({ email }).select("+password");
    const config = { url: 'ldap://dc.domain.com', baseDN: 'dc=domain,dc=com', username: 'username@domain.com', password: 'password' };
    var ad = new ActiveDirectory(config);
    ad.authenticate(email, password, function (err, auth) {
      if (err) {
        return next(new ErrorHandler(err, 400));
      }
      if (auth) {
        console.log('Authenticated!');
      } else {
        return next(new ErrorHandler('Invalid Username or Password', 401));
      }
    });
    //user exists?
    if (!user) {
      return next(new ErrorHandler('Invalid Email or Password', 401));
    }
    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//Get currently logged in user /api/me-------------------------------------------
exports.getLoggedUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
};

//logout user => api/logout-------------------------------------------
exports.logOut = async (req, res, next) => {
  res.cookie('ShadowJesus1998', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: 'Logged out',
  });
};
