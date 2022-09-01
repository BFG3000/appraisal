import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Form1 from './FormContent/GoalsForm';
import FormSelector from './FormContent/FormSelector';
import Form2 from './FormContent/CompetenciesForm';
import './Form.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getForms, submitNewAppraisal } from '../../store/actions/formActions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginLeft: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    stepper: {
        '& .MuiStepConnector-root ': {
            left: ' calc(50% + 20px)',
            right: 'calc(-50% + 20px)',
        },
    },
}));

function getSteps() {
    return ['النمــوذج', 'المستهدفـات', 'الكفــاءات'];
}

const Form = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const { goalsForm, competenciesForm, selectedForm } = useSelector((state) => state.form);

    const steps = getSteps();

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <FormSelector />;
            case 1:
                return <Form1 />;
            case 2:
                return <Form2 />;
            default:
                return 'Unknown stepIndex';
        }
    };
    const submitNewAppraisal = async (goalsForm, competenciesForm, FormId) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const entry = {
            goals: goalsForm,
            competencies: competenciesForm,
            //TODO
            employee_id: '112',
            form_id: FormId,
            status: 'submitted',
        };
        try {
            await axios.post('/api/appraisals', entry, config);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNext = () => {
        if (activeStep === 1) {
            //validate first form then go next
            // return;
        }
        if (activeStep === 2) {
            //submit both forms
            submitNewAppraisal(goalsForm, competenciesForm, selectedForm._id);
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        if (activeStep === 0) {
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Container>
            <div className={classes.root} dir={'rtl'}>
                <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    <div>
                        {getStepContent(activeStep)}
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Form;
