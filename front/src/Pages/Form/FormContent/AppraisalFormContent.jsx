import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import CompetenciesForm from './CompetenciesForm';
import GoalsForm from './GoalsForm';

const AppraisalFormContent = () => {
    const { goals, competencies, selectedForm } = useSelector((state) => state.form);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const entry = {
            goals: goals,
            competencies: competencies,
            //TODO
            employee_id: '112',
            form_id: selectedForm._id,
            status: 'submitted',
        };
        try {
            console.log('entry: ', entry);
            await axios.post('/api/appraisals', entry, config);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
            <form onSubmit={handleSubmit} autoComplete="off">
                <GoalsForm />
                <CompetenciesForm />
                <Button variant="contained" color="primary" type="submit">
                    تسجيل التقييم
                </Button>
                <Button className="mx-2" variant="contained" color="secondary">
                    رجوع
                </Button>
            </form>
        </Grid>
    );
};

export default AppraisalFormContent;
