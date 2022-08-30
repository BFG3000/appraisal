const express = require('express');
const router = express.Router();
const { createForm, getAllForms, deleteForm, getForm } = require('../controllers/formController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//admin routes---------------------------

//create new form
// router.post("/admin/forms", isAuthenticatedUser, authorizeRoles("issuer"), createForm);
router.post('/forms', createForm);

//get form by id
router.get('/forms/:formId', getForm);

//get all forms
router.get('/forms', getAllForms);

//delete a form
router.delete('/forms/:formId', deleteForm);

module.exports = router;
