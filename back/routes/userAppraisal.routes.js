const express = require('express');
const router = express.Router();
const { createAppraisal, getAppraisal, getAllAppraisals, deleteAppraisal } = require('../controllers/userAppraisalController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//admin routes---------------------------

//create new Exam
// router.post("/admin/exams", isAuthenticatedUser, authorizeRoles("issuer"), createExam);
router.post('/appraisals', createAppraisal);

//get appraisal by id
router.get('/appraisals/:appraisalId', getAppraisal);

//get all appraisalss
router.get('/appraisals', getAllAppraisals);

//delete an appraisals
router.delete('/appraisals/:appraisalId', deleteAppraisal);

module.exports = router;
