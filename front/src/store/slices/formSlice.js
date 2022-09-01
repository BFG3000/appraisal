import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        forms: [],
        selectedForm: null,
        userSubmission: null,
        loading: false,
        goals: null,
        goalsForm: null,
        competencies: null,
        competenciesForm: null,
    },
    reducers: {
        getForms(state, action) {
            state.forms = action.payload.forms;
        },
        setLoading(state, action) {
            state.loading = action.payload.loading;
        },
        setActiveForm(state, action) {
            state.selectedForm = action.payload.selectedForm;
            state.goals = action.payload.goals;
            state.competencies = action.payload.competencies;
        },
        setUserSubmission(state, action) {
            state.userSubmission = action.payload.userSubmission;
        },
        handleGlobalGoalForm(state, action) {
            state.goals = action.payload.goals;
        },
        handleGlobalCompetenciesForm(state, action) {
            state.competencies = action.payload.competencies;
        },
        clear(state, action) {
            state.forms = [];
            state.selectedForm = null;
            state.userSubmission = null;
        },
    },
});

export const formActions = formSlice.actions;

export default formSlice;
