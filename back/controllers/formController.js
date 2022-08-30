const Form = require('../models/form.model');
const ErrorHandler = require('../utils/errorHandler');
const mongoose = require('mongoose');

//Create new Form => api/forms -----------------------------------------------------------------------------
exports.createForm = async (req, res, next) => {
  const { goals, competencies, year,category,name} = req.body;
  try {
    //TODO
    //ADD CHECK SO WE DONT CREATE 2 FORMS WITH THE SAME CATEGORY IN THE SAME YEAR
    const newForm = await Form.create({
      goals,
      competencies,
      year,
      name,
      category,
    });
    res.status(201).json({
      succes: true,
      newForm,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//get form Info => api/forms/:formId -----------------------------------------------------------------------------
exports.getForm = async (req, res, next) => {
  const { formId } = req.params;
  if (!formId) {
    return next(new ErrorHandler('Invalid id', 400));
  }
  try {
    const form = await Form.findById(formId);

    if (!form) return next(new ErrorHandler('Invalid form', 400));
    res.status(200).json({
      form,
      status: 'success',
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//get all Forms => api/forms -----------------------------------------------------------------------------
exports.getAllForms = async (req, res, next) => {
  try {
    const forms = await Form.find();
    res.status(200).json({
      forms,
      status: 'success',
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//Delete a Form => api/admin/forms -----------------------------------------------------------------------------
exports.deleteForm = async (req, res, next) => {
  const { formId } = req.params;

  try {
    await Form.findByIdAndDelete(formId);

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
