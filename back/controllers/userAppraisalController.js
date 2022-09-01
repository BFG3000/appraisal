const UserAppraisal = require('../models/userAppraisal.model');
const ErrorHandler = require('../utils/errorHandler');
const mongoose = require('mongoose');

//Create new Appraisal => api/appraisals -----------------------------------------------------------------------------
exports.createAppraisal = async (req, res, next) => {
  const { goals, competencies, year, category, form_id, employee_id, descrption } = req.body;
  try {
    //TODO
    //ADD CHECK SO WE DONT CREATE 2 Appraisal WITH THE SAME CATEGORY IN THE SAME YEAR
    const newUserAppraisal = await UserAppraisal.create({
      goals,
      competencies,
      year,
      category,
      employee_id,
      form_id,
      descrption,
    });
    res.status(201).json({
      succes: true,
      newUserAppraisal,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//get appraisal Info => api/appraisals/:appraisalId -----------------------------------------------------------------------------
exports.getAppraisal = async (req, res, next) => {
  const { appraisalId } = req.params;
  if (!appraisalId) {
    return next(new ErrorHandler('Invalid id', 400));
  }
  try {
    const userAppraisal = await UserAppraisal.findById(appraisalId);

    if (!userAppraisal) return next(new ErrorHandler('Invalid userAppraisal', 400));
    res.status(200).json({
      userAppraisal,
      status: 'success',
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//get all Appraisals => api/appraisals -----------------------------------------------------------------------------
exports.getAllAppraisals = async (req, res, next) => {
  try {
    const Appraisals = await UserAppraisal.find();
    res.status(200).json({
      Appraisals,
      status: 'success',
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//Delete an Appraisal => api/appraisals -----------------------------------------------------------------------------
exports.deleteAppraisal = async (req, res, next) => {
  const { appraisalId } = req.params;

  try {
    await UserAppraisal.findByIdAndDelete(appraisalId);

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
