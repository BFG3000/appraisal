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
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new ErrorHandler('Please enter username and password', 401));
  }
  try {
    const config = { url: 'ldap://pbdac.local', baseDN: 'dc=pbdac,dc=local', username: process.env.SERVICE_ACCOUNT_MAIL, password: process.env.SERVICE_ACCOUNT_PASSWORD };
    const ad = new ActiveDirectory(config);
    await ad.authenticate(username, password, function (err, auth) {
      if (err) {
        return next(new ErrorHandler(err, 400));
      }
      if (auth) {
        console.log('Authenticated!');
        const response = {
          id: 22,
          name: 'ahmed magdy',
          email: 'ggeznoobs@gg.com',
          userType: 'branchManager',
          myEmployees: [
            {
              id: 64,
              name: 'ali ahmed',
              email: 'ggeznoobs22@gg.com',
              userType: 'lowTierTrash',
            },
          ],
        };
        sendToken(response, 200, res);
      } else {
        return next(new ErrorHandler('Invalid Username or Password', 401));
      }
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//Get currently logged in user /api/me-------------------------------------------
exports.getLoggedUser = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
};

//logout user => api/logout-------------------------------------------
exports.logOut = async (req, res, next) => {
  res.cookie('ShadowJesus', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: 'Logged out',
  });
};
