const jwt = require('jsonwebtoken');
const User = require('../models/userAppraisal.model');
const ErrorHandler = require('../utils/errorHandler');

//Checks if user is authenticated or not
exports.isAuthenticatedUser = async (req, res, next) => {
  const { ShadowJesus } = req.cookies;

  // console.log(token);
  if (!ShadowJesus) {
    return next(new ErrorHandler('Loign first to access this resource', 401));
  }
  try {
    const decoded = jwt.verify(ShadowJesus, process.env.JWT_SECRET);
    req.user = {
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
    next();
  } catch (error) {
    return next(new ErrorHandler('Error invalid token' + error, 401));
  }
};

//Handling users roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403));
    }
    next();
  };
};
