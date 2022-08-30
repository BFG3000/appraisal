import { FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForms, setActiveForm } from '../../../store/actions/formActions';

const AppraisalFormType = () => {
    const { forms } = useSelector((state) => state.form);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getForms());
    }, [dispatch]);
    const handleChange = (id) => {
        const selectedForm = forms.filter((form) => form._id === id);
        dispatch(setActiveForm(selectedForm[0]));
        console.log('selected: ', selectedForm);
    };
    console.log(forms);
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5} style={{marginTop:'1.5rem',marginBottom:'3.5rem'}}>
            <div>
                <label htmlFor="form-type" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    نــوع النمــوذج
                </label>
                <select
                    id="form-type"
                    className="form-control mt-2"
                    style={{ minWidth: '300px' }}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    <option disabled selected>
                        ---اختر---
                    </option>
                    {forms.map((form) => (
                        <option key={form._id} value={form._id}>
                            {form.name}
                        </option>
                    ))}
                </select>
            </div>
        </Grid>
    );
};

export default AppraisalFormType;
