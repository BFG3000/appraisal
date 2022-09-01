import { formActions } from '../slices/formSlice';
import axios from 'axios';

export const getForms = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/forms/');
        dispatch(
            formActions.getForms({
                forms: data.forms,
            })
        );
    } catch (error) {
        console.log(error);
    }
};

export const handleGlobalGoalForm = (form) => async (dispatch) => {
    try {
        dispatch(
            formActions.handleGlobalGoalForm({
                goals: form,
            })
        );
    } catch (error) {
        console.log(error);
    }
};
export const handleGlobalCompetenciesForm = (form) => async (dispatch) => {
    try {
        dispatch(
            formActions.handleGlobalCompetenciesForm({
                competencies: form,
            })
        );
    } catch (error) {
        console.log(error);
    }
};

export const setActiveForm = (form) => async (dispatch) => {
    try {
        dispatch(
            formActions.setActiveForm({
                selectedForm: form,
                goals: {
                    financialGoals: form.goals.financialGoals.map((arr) => {
                        return {
                            requiredTargetValue: 0,
                            requiredTargetAchieved: 0,
                            proofDescription: '',
                            isTargetRequired: arr.hasInput ? true : false,
                            sort: arr.sort,
                        };
                    }),
                    customerServiceGoals: form.goals.customerServiceGoals.map((arr) => {
                        return {
                            requiredTargetValue: 0,
                            requiredTargetAchieved: 0,
                            proofDescription: '',
                            isTargetRequired: arr.hasInput ? true : false,
                            sort: arr.sort,
                        };
                    }),
                    operationalPoliciesGoals: form.goals.operationalPoliciesGoals.map((arr) => {
                        return {
                            requiredTargetValue: 0,
                            requiredTargetAchieved: 0,
                            proofDescription: '',
                            isTargetRequired: arr.hasInput ? true : false,
                            sort: arr.sort,
                        };
                    }),
                    employeeTotal: 0,
                },
                competencies: {
                    mainCompetencies: form.competencies.mainCompetencies.map((arr) => {
                        return {
                            requiredTargetValue: 0,
                            requiredTargetAchieved: 0,
                            proofDescription: '',
                            isTargetRequired: arr.hasInput ? true : false,
                            sort: arr.sort,
                        };
                    }),
                    specialCompetencies: form.competencies.specialCompetencies.map((arr) => {
                        return {
                            requiredTargetValue: 0,
                            requiredTargetAchieved: 0,
                            proofDescription: '',
                            isTargetRequired: arr.hasInput ? true : false,
                            sort: arr.sort,
                        };
                    }),
                    employeeTotal: 0,
                },
            })
        );
    } catch (error) {
        console.log(error);
    }
};
