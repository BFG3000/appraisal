//send token to cookie
const jwt = require('jsonwebtoken');

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ userId: user.id, userType: user.userType }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
  //options for cookie
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie('ShadowJesus', token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
