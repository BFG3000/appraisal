import React from 'react';
import EmployeeInfo from './FormContent/EmployeeInfo';
import AppraisalFormType from './FormContent/AppraisalFormType';
import AppraisalFormContent from './FormContent/AppraisalFormContent';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

const AppraisalForm = () => {
    const { selectedForm, goals, competencies } = useSelector((state) => state.form);
    console.log('goals! :', goals);
    console.log('competencies! :', competencies);
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            <EmployeeInfo />
            <AppraisalFormType />
            {selectedForm && <AppraisalFormContent />}
        </Container>
    );
};

export default AppraisalForm;
